/**
 * Biogas Course — Access Gate, Progress Tracker, Course Code & Badge Manager
 */

// ── Apps Script config ─────────────────────────────────────────────────────
// After deploying apps-script/Code.gs as a Web App, paste the URL here.
// Until then, dev mode accepts any BG-XXXX format code automatically.
const APPS_SCRIPT_URL = '%%APPS_SCRIPT_URL%%';
// ──────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'biogas_course_progress';
const CODE_KEY    = 'biogas_course_code';
const NAME_KEY    = 'biogas_learner_name';
const ACCESS_KEY  = 'biogas_access_granted';
const CODE_CHARS  = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const SESSIONS = [
  { key: 'session1', label: 'Session 1: Principles' },
  { key: 'session2', label: 'Session 2: Sizing' },
  { key: 'session3', label: 'Session 3: Siting' },
  { key: 'session4', label: 'Session 4: Safety' },
  { key: 'session5', label: 'Session 5: Digestate' },
  { key: 'session6', label: 'Session 6: Productive Use' },
  { key: 'session7', label: 'Session 7: Building' },
  { key: 'session8', label: 'Session 8: Business' },
];

const BADGES = [
  { key: 'session1', emoji: '🔬', name: 'Anaerobic Alchemist', color: '#1565c0', light: '#e3f2fd', border: '#90caf9' },
  { key: 'session2', emoji: '📐', name: 'Volume Virtuoso',     color: '#6a1b9a', light: '#f3e5f5', border: '#ce93d8' },
  { key: 'session3', emoji: '🧭', name: 'Site Whisperer',      color: '#bf360c', light: '#fbe9e7', border: '#ffab91' },
  { key: 'session4', emoji: '🛡️', name: 'Guardian of the Gas', color: '#b71c1c', light: '#ffebee', border: '#ef9a9a' },
  { key: 'session5', emoji: '🌿', name: 'Slurry Sage',         color: '#2e7d32', light: '#e8f5e9', border: '#a5d6a7' },
  { key: 'session6', emoji: '⚡', name: 'Surplus Slayer',      color: '#e65100', light: '#fff3e0', border: '#ffcc80' },
  { key: 'session7', emoji: '🏗️', name: 'Digester Architect',  color: '#4e342e', light: '#efebe9', border: '#bcaaa4' },
  { key: 'session8', emoji: '🏆', name: 'Biogas Baron',        color: '#827717', light: '#f9fbe7', border: '#dce775' },
];

// ── Apps Script calls ──────────────────────────────────────────────────────

const _devMode = !APPS_SCRIPT_URL.startsWith('https://');

async function registerCode(code, name, email, country) {
  if (_devMode) return { success: true };
  try {
    const url = `${APPS_SCRIPT_URL}?action=register`
      + `&code=${encodeURIComponent(code)}`
      + `&name=${encodeURIComponent(name)}`
      + `&email=${encodeURIComponent(email)}`
      + `&country=${encodeURIComponent(country)}`;
    const res = await fetch(url);
    return await res.json();
  } catch {
    return { success: false, error: 'network' };
  }
}

async function validateCode(code) {
  if (_devMode) {
    // Dev mode: any well-formed BG-XXXX passes
    return { valid: /^BG-[A-Z2-9]{4}$/.test(code) };
  }
  try {
    const url = `${APPS_SCRIPT_URL}?action=validate&code=${encodeURIComponent(code)}`;
    const res = await fetch(url);
    return await res.json();
  } catch {
    return { valid: false, error: 'network' };
  }
}

// ── Access gate ────────────────────────────────────────────────────────────

function isAccessGranted() {
  return localStorage.getItem(ACCESS_KEY) === 'true';
}

function grantAccess(code) {
  localStorage.setItem(ACCESS_KEY, 'true');
  if (code) localStorage.setItem(CODE_KEY, code);
  const overlay = document.getElementById('biogas-access-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s';
    setTimeout(() => overlay.remove(), 350);
  }
  renderProgressBar();
}

async function checkAndSubmitAccessCode() {
  const input = document.getElementById('access-code-input');
  const error = document.getElementById('access-code-error');
  const btn   = document.getElementById('access-code-btn');
  const entered = (input?.value || '').trim().toUpperCase();

  if (!entered) {
    if (error) { error.textContent = 'Please enter your code.'; error.style.display = 'block'; }
    return;
  }

  if (!/^BG-[A-Z2-9]{4}$/.test(entered)) {
    if (error) {
      error.textContent = 'Codes look like BG-7X4K — four letters/numbers after the dash.';
      error.style.display = 'block';
    }
    if (input) input.style.borderColor = '#c62828';
    return;
  }

  // Loading state
  if (btn)   { btn.textContent = 'Checking…'; btn.disabled = true; }
  if (error) { error.style.display = 'none'; }
  if (input) { input.style.borderColor = ''; }

  const result = await validateCode(entered);

  if (result.valid) {
    grantAccess(entered);
  } else if (result.error === 'network') {
    if (error) {
      error.textContent = 'Could not connect to verify your code — check your internet connection and try again.';
      error.style.display = 'block';
    }
    if (btn) { btn.textContent = 'Access Course →'; btn.disabled = false; }
  } else {
    if (error) {
      error.textContent = 'Code not recognised. Check you have registered, or contact your course provider.';
      error.style.display = 'block';
    }
    if (input) { input.style.borderColor = '#c62828'; input.select(); }
    if (btn)   { btn.textContent = 'Access Course →'; btn.disabled = false; }
  }
}

function showAccessOverlay() {
  if (document.getElementById('biogas-access-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'biogas-access-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(255,255,255,0.97);
    display: flex; align-items: center; justify-content: center;
    font-family: sans-serif;
  `;

  overlay.innerHTML = `
    <div style="max-width:420px;width:90%;padding:2.5rem 2rem;background:white;
                border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,0.15);text-align:center;">
      <div style="font-size:2.8rem;margin-bottom:0.5rem;">🌱</div>
      <h2 style="margin:0 0 0.3rem;color:#2e7d32;font-size:1.4rem;">CREATIVenergie</h2>
      <p style="margin:0 0 1.5rem;color:#555;font-size:0.95rem;">Biogas Training Course</p>
      <p style="margin:0 0 0.8rem;font-size:1rem;color:#333;">
        Enter your registration code to continue.
      </p>
      <p style="margin:0 0 1rem;font-size:0.88rem;color:#666;">
        Your code was shown when you registered on the <a href="../index.html" style="color:#2e7d32;">home page</a>.
        It looks like <strong>BG-7X4K</strong>.
      </p>
      <input id="access-code-input" type="text" placeholder="BG-XXXX"
        autocomplete="off" autocapitalize="characters" spellcheck="false"
        style="width:100%;padding:0.55rem 0.8rem;border:2px solid #bbb;border-radius:4px;
               font-size:1.2rem;text-align:center;text-transform:uppercase;
               letter-spacing:0.12em;box-sizing:border-box;margin-bottom:0.6rem;" />
      <p id="access-code-error"
        style="display:none;color:#c62828;font-size:0.88rem;margin:0 0 0.6rem;text-align:left;"></p>
      <button id="access-code-btn" onclick="checkAndSubmitAccessCode()"
        style="width:100%;padding:0.6rem;background:#2e7d32;color:white;border:none;
               border-radius:4px;cursor:pointer;font-size:1rem;font-weight:bold;">
        Access Course →
      </button>
      <p style="margin:1.2rem 0 0;font-size:0.82rem;color:#999;">
        Not registered yet? Visit the
        <a href="../index.html" style="color:#2e7d32;">course home page</a> to register.
      </p>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector('#access-code-input');
  input.addEventListener('keydown', e => { if (e.key === 'Enter') checkAndSubmitAccessCode(); });
  setTimeout(() => input.focus(), 50);
}

// ── Course code (BG-XXXX) ─────────────────────────────────────────────────

function generateCourseCode() {
  let code = 'BG-';
  for (let i = 0; i < 4; i++) {
    code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return code;
}

function getCourseCode() {
  let code = localStorage.getItem(CODE_KEY);
  if (!code) {
    code = generateCourseCode();
    localStorage.setItem(CODE_KEY, code);
  }
  return code;
}

function setCourseCode(code) {
  const clean = code.trim().toUpperCase();
  if (/^BG-[A-Z2-9]{4}$/.test(clean)) {
    localStorage.setItem(CODE_KEY, clean);
    return clean;
  }
  return null;
}

function getLearnerName() {
  return localStorage.getItem(NAME_KEY) || '';
}

// ── Progress ───────────────────────────────────────────────────────────────

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function markSessionComplete(sessionKey, score) {
  const progress = getProgress();
  progress[sessionKey] = { completed: true, score, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderProgressBar();
}

// ── Badge popup ────────────────────────────────────────────────────────────

function showBadgePopup(sessionKey, scoreLabel) {
  const badge   = BADGES.find(b => b.key === sessionKey);
  const session = SESSIONS.find(s => s.key === sessionKey);
  if (!badge || !session) return;

  const existing = document.getElementById('biogas-badge-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'biogas-badge-popup';

  const dismiss = () => {
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.3s';
    setTimeout(() => popup.remove(), 320);
  };

  popup.innerHTML = `
    <div class="badge-popup-card">
      <div class="badge-popup-earned">Session Complete!</div>
      <div class="badge-popup-icon"
        style="background:${badge.light};border:4px solid ${badge.border};color:${badge.color};">
        ${badge.emoji}
      </div>
      <div class="badge-popup-title" style="color:${badge.color};">${badge.name}</div>
      <div class="badge-popup-sub">${session.label}</div>
      ${scoreLabel ? `<div class="badge-popup-score" style="background:${badge.light};color:${badge.color};">Score: ${scoreLabel}</div>` : ''}
      <button class="badge-popup-close" style="background:${badge.color};">Continue →</button>
      <div class="badge-popup-timer">Auto-closing in <span id="badge-countdown">5</span>s</div>
    </div>
  `;

  document.body.appendChild(popup);
  popup.querySelector('.badge-popup-close').addEventListener('click', dismiss);
  popup.addEventListener('click', e => { if (e.target === popup) dismiss(); });

  let secs = 5;
  const interval = setInterval(() => {
    secs--;
    const el = document.getElementById('badge-countdown');
    if (el) el.textContent = secs;
    if (secs <= 0) { clearInterval(interval); dismiss(); }
  }, 1000);
}

// ── Progress bar (with badge row) ──────────────────────────────────────────

function renderProgressBar() {
  if (!isAccessGranted()) return;

  const existing = document.getElementById('biogas-progress-bar-container');
  if (existing) existing.remove();

  const progress  = getProgress();
  const completed = SESSIONS.filter(s => progress[s.key]?.completed).length;
  const total     = SESSIONS.length;
  const pct       = Math.round((completed / total) * 100);
  const code      = getCourseCode();

  const dots = SESSIONS.map(s => {
    const done      = progress[s.key]?.completed;
    const scoreHint = done ? ` (${progress[s.key].score})` : '';
    return `<span title="${s.label}${scoreHint}${done ? ' ✓' : ' — not yet completed'}"
      style="display:inline-block;width:14px;height:14px;border-radius:50%;
             background:${done ? '#2e7d32' : '#ddd'};border:2px solid ${done ? '#2e7d32' : '#bbb'};
             cursor:default;flex-shrink:0;"></span>`;
  }).join('');

  const badgePips = BADGES.map(b => {
    const done  = progress[b.key]?.completed;
    const score = done ? ` · ${progress[b.key].score}` : '';
    if (done) {
      return `<div class="badge-pip earned"
        style="background:${b.light};border-color:${b.border};"
        title="${b.name} — ${b.key.replace('session', 'Session ')}${score}">
        <span style="font-size:1.1rem;">${b.emoji}</span>
        <div class="badge-pip-tooltip">${b.name}</div>
      </div>`;
    }
    return `<div class="badge-pip locked"
      title="${b.key.replace('session', 'Session ')} — not yet earned">
      🔒<div class="badge-pip-tooltip">${b.key.replace('session', 'Session ')}</div>
    </div>`;
  }).join('');

  const container = document.createElement('div');
  container.id = 'biogas-progress-bar-container';
  container.style.cssText = `
    position: sticky; top: 0; z-index: 998;
    background: #fff; border-bottom: 2px solid #e0e0e0;
    font-family: sans-serif; font-size: 0.82rem;
  `;

  container.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:6px 16px;">
      <span style="white-space:nowrap;color:#555;font-weight:600;">Progress:</span>
      <div style="flex:1;background:#eee;border-radius:8px;height:10px;overflow:hidden;min-width:60px;">
        <div style="height:100%;background:#2e7d32;width:${pct}%;transition:width 0.4s;border-radius:8px;"></div>
      </div>
      <span style="white-space:nowrap;font-weight:bold;color:#2e7d32;">${completed}/${total}</span>
      <div style="display:flex;gap:3px;align-items:center;">${dots}</div>
      <span style="white-space:nowrap;color:#888;font-size:0.78rem;">Code: <strong style="color:#333;">${code}</strong></span>
      ${completed === total
        ? `<span style="color:#2e7d32;font-weight:bold;white-space:nowrap;">🎉 Complete!</span>`
        : ''}
    </div>
    <div class="biogas-badge-row">
      <span class="badge-row-label">Badges:</span>
      ${badgePips}
    </div>
  `;

  const navbar = document.querySelector('.navbar') || document.querySelector('header');
  if (navbar && navbar.nextSibling) {
    navbar.parentNode.insertBefore(container, navbar.nextSibling);
  } else {
    document.body.insertBefore(container, document.body.firstChild);
  }
}

// ── Expose globally ────────────────────────────────────────────────────────

window.biogasProgress = {
  markSessionComplete,
  showBadgePopup,
  getProgress,
  getCourseCode,
  setCourseCode,
  getLearnerName,
  grantAccess,
  registerCode,
  validateCode,
  SESSIONS,
  BADGES,
};

// ── Boot ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  // Skip the access overlay on the intro/home page — it shows the registration form
  const path = window.location.pathname;
  const onIntro = path.endsWith('/index.html')
    || path === '/'
    || path.endsWith('/intro.html')
    || path.endsWith('/biogas-course/')
    || /\/biogas-course\/?$/.test(path);

  if (!isAccessGranted() && !onIntro) {
    showAccessOverlay();
  } else {
    renderProgressBar();
  }
});
