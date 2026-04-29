/**
 * Biogas Course — Quiz Engine
 *
 * Supports five question types, all declared in plain HTML:
 *
 *  1. Multiple choice   — radio buttons                   (type="mc")
 *  2. True / False      — two radio buttons               (type="tf")
 *  3. Fill in the blank — text input, exact or fuzzy      (type="fill")
 *  4. Number input      — numeric answer with tolerance   (type="number")
 *  5. Drag-to-match     — drag right-hand items onto left (type="match")
 *
 * Each question needs:
 *   - a wrapper <div class="quiz-question" data-type="...">
 *   - a <p class="feedback" id="QNAME-feedback"></p> for result display
 *   - the correct answer encoded as data-answer="..." on the wrapper
 *
 * Call checkQuiz(sessionKey, questionNames) from the Check button.
 *
 * Google Form submission:
 *   Replace the four ENTRY_* constants with your actual form field IDs.
 */

// ── Google Form config ─────────────────────────────────────────────────────
const QUIZ_FORM_ID  = '%%QUIZ_FORM_ID%%';
const ENTRY_NAME    = '%%ENTRY_NAME%%';
const ENTRY_CODE    = '%%ENTRY_CODE%%';
const ENTRY_SESSION = '%%ENTRY_SESSION%%';
const ENTRY_SCORE   = '%%ENTRY_SCORE%%';
// ──────────────────────────────────────────────────────────────────────────

function buildFormUrl(sessionLabel, scoreLabel) {
  const name = (window.biogasProgress?.getLearnerName() || '').trim();
  const code = window.biogasProgress?.getCourseCode() || '';
  return [
    `https://docs.google.com/forms/d/e/${QUIZ_FORM_ID}/viewform?usp=pp_url`,
    `${ENTRY_NAME}=${encodeURIComponent(name)}`,
    `${ENTRY_CODE}=${encodeURIComponent(code)}`,
    `${ENTRY_SESSION}=${encodeURIComponent(sessionLabel)}`,
    `${ENTRY_SCORE}=${encodeURIComponent(scoreLabel)}`,
  ].join('&');
}

// ── Main check function ────────────────────────────────────────────────────

function checkQuiz(sessionKey, questionNames) {
  // Legacy 3-arg form: checkQuiz(key, {answers}, [names]) — ignore answers obj, use data-answer
  if (arguments.length === 3) questionNames = arguments[2];
  let score = 0;
  let allAnswered = true;

  questionNames.forEach(name => {
    const wrapper = document.querySelector(`[data-question="${name}"]`);
    const feedback = document.getElementById(`${name}-feedback`);
    if (!wrapper || !feedback) return;

    const type = wrapper.dataset.type || 'mc';
    const correct = wrapper.dataset.answer;
    let result = null; // 'correct' | 'wrong' | 'unanswered'

    if (type === 'mc' || type === 'tf') {
      const sel = wrapper.querySelector(`input[name="${name}"]:checked`);
      if (!sel) { result = 'unanswered'; }
      else { result = sel.value === correct ? 'correct' : 'wrong'; }

    } else if (type === 'fill') {
      const inp = wrapper.querySelector(`input[data-fill="${name}"]`);
      if (!inp || !inp.value.trim()) { result = 'unanswered'; }
      else {
        const entered = inp.value.trim().toLowerCase();
        const answers = correct.split('|').map(a => a.trim().toLowerCase());
        result = answers.includes(entered) ? 'correct' : 'wrong';
      }

    } else if (type === 'number') {
      const inp = wrapper.querySelector(`input[data-number="${name}"]`);
      if (!inp || !inp.value.trim()) { result = 'unanswered'; }
      else {
        const entered = parseFloat(inp.value);
        const expected = parseFloat(correct);
        const tolerance = parseFloat(wrapper.dataset.tolerance || '0');
        result = Math.abs(entered - expected) <= tolerance ? 'correct' : 'wrong';
      }

    } else if (type === 'match') {
      result = checkMatch(name, wrapper, correct);
    }

    feedback.style.cssText = '';
    if (result === 'unanswered') {
      feedback.textContent = '⚠️ Please answer this question.';
      feedback.style.cssText = 'background:#fff8e1;color:#e65100;border:1px solid #ffe082;';
      allAnswered = false;
    } else if (result === 'correct') {
      score++;
      feedback.textContent = '✅ Correct!';
      feedback.style.cssText = 'background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;';
    } else {
      const hint = wrapper.dataset.hint ? ` Hint: ${wrapper.dataset.hint}` : '';
      feedback.textContent = `❌ Not quite.${hint}`;
      feedback.style.cssText = 'background:#ffebee;color:#b71c1c;border:1px solid #ef9a9a;';
    }
  });

  if (!allAnswered) return;

  const total = questionNames.length;
  const pct = Math.round((score / total) * 100);

  const resultDiv = document.getElementById(`${sessionKey}-result`);
  if (resultDiv) {
    const emoji = pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📖';
    const msg   = pct < 60 ? ' — Review the session and try again!' : '';
    resultDiv.innerHTML = `
      ${emoji} Your score: <strong>${score} / ${total}</strong> (${pct}%)${msg}
    `;
    resultDiv.className = 'quiz-result-banner';
    resultDiv.style.cssText = pct >= 75
      ? 'background:#e8f5e9;border-color:#a5d6a7;color:#1b5e20;'
      : 'background:#fff3e0;border-color:#ffcc80;color:#e65100;';
  }

  const scoreLabel = `${score}/${total} (${pct}%)`;

  if (window.biogasProgress) {
    window.biogasProgress.markSessionComplete(sessionKey, `${score}/${total}`);
    // Show badge popup after a brief delay so result banner renders first
    setTimeout(() => {
      window.biogasProgress.showBadgePopup(sessionKey, scoreLabel);
    }, 600);
  }

  const submitSection = document.getElementById(`${sessionKey}-submit-section`);
  const formLink = document.getElementById(`${sessionKey}-form-link`);
  if (submitSection && formLink) {
    const sessionNum = sessionKey.replace('session', '');
    formLink.href = buildFormUrl(`Session ${sessionNum}`, scoreLabel);
    submitSection.style.display = 'block';
  }
}

// ── Drag-to-match ──────────────────────────────────────────────────────────
// Markup: two columns of <li> elements.
// Left column: .match-left li[data-id="A"], right column: .match-right li (draggable)
// Correct answer encoded as "A:1,B:2,C:3" in data-answer

function initMatchQuestion(name) {
  const wrapper = document.querySelector(`[data-question="${name}"]`);
  if (!wrapper) return;

  const rightItems = wrapper.querySelectorAll('.match-right li');
  const leftSlots  = wrapper.querySelectorAll('.match-left li');

  rightItems.forEach(item => {
    item.setAttribute('draggable', 'true');
    item.style.cursor = 'grab';
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.style.opacity = '0.5';
    });
    item.addEventListener('dragend', () => { item.style.opacity = '1'; });
  });

  leftSlots.forEach(slot => {
    slot.style.minHeight = '2.2rem';
    slot.style.transition = 'background 0.2s';

    slot.addEventListener('dragover', e => {
      e.preventDefault();
      slot.style.background = '#c8e6c9';
    });
    slot.addEventListener('dragleave', () => {
      slot.style.background = '';
    });
    slot.addEventListener('drop', e => {
      e.preventDefault();
      slot.style.background = '';
      const draggedId = e.dataTransfer.getData('text/plain');
      const dragged = wrapper.querySelector(`.match-right li[data-id="${draggedId}"]`);
      if (!dragged) return;

      // Remove any existing match badge on this slot
      const existing = slot.querySelector('.match-badge');
      if (existing) {
        // Return it to the right column
        const returnId = existing.dataset.returnId;
        const returnEl = wrapper.querySelector(`.match-right li[data-id="${returnId}"]`);
        if (returnEl) returnEl.style.display = '';
        existing.remove();
      }

      // If the dragged item was matched elsewhere, clear that slot
      wrapper.querySelectorAll('.match-left li .match-badge').forEach(badge => {
        if (badge.dataset.returnId === draggedId) {
          badge.remove();
        }
      });

      // Create badge and attach to slot
      const badge = document.createElement('span');
      badge.className = 'match-badge';
      badge.dataset.returnId = draggedId;
      badge.textContent = dragged.textContent;
      badge.style.cssText = `
        display:inline-block;margin-left:0.5rem;padding:2px 8px;
        background:#e3f2fd;border:1px solid #90caf9;border-radius:12px;
        font-size:0.85rem;cursor:pointer;
      `;
      badge.title = 'Click to remove';
      badge.addEventListener('click', () => {
        const returnEl = wrapper.querySelector(`.match-right li[data-id="${badge.dataset.returnId}"]`);
        if (returnEl) returnEl.style.display = '';
        badge.remove();
      });
      slot.appendChild(badge);
      dragged.style.display = 'none';
    });
  });
}

function checkMatch(name, wrapper, correctStr) {
  // correctStr: "termA:defn1,termB:defn2" — left slot data-id : right item data-id
  const correct = Object.fromEntries(
    correctStr.split(',').map(pair => pair.split(':').map(s => s.trim()))
  );

  let allMatched = true;
  let allCorrect = true;

  Object.entries(correct).forEach(([leftId, rightId]) => {
    const slot = wrapper.querySelector(`.match-left li[data-id="${leftId}"]`);
    if (!slot) return;
    const badge = slot.querySelector('.match-badge');
    if (!badge) { allMatched = false; return; }
    if (badge.dataset.returnId !== rightId) allCorrect = false;
  });

  if (!allMatched) return 'unanswered';
  return allCorrect ? 'correct' : 'wrong';
}

// Initialise all match questions on page load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-type="match"]').forEach(wrapper => {
    const name = wrapper.dataset.question;
    if (name) initMatchQuestion(name);
  });
});
