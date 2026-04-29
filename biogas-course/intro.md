# Biogas Training Course

**Welcome to the CREATIVenergie Biogas Training Course.**

This course covers everything you need to design, build, and safely operate a biogas system. There are **8 sessions**, each ending with a 6-question quiz. Score **80% or above** across all sessions to earn your certificate.

---

```{raw} html
<!--
  Registration Gate
  ─────────────────
  If the learner has not yet registered (no name in localStorage), they see the
  registration panel and the session links are hidden. Once they register, the
  session table is revealed and their course code is shown.
-->

<!-- ── REGISTRATION PANEL (shown until registered) ─────────────────────── -->
<div id="reg-panel" style="max-width:520px;">

  <!-- Step 1: Registration form -->
  <div id="reg-form">
    <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:1.2rem 1.4rem;border-radius:6px;margin-bottom:1.2rem;">
      <p style="margin:0 0 0.6rem 0;font-size:1.05rem;font-weight:bold;">📋 Register to begin</p>
      <p style="margin:0;font-size:0.95rem;color:#444;">
        Enter your details below. We'll email you a unique <strong>BG-XXXX course code</strong> —
        use it to access all eight sessions and track your progress.
      </p>
    </div>

    <label for="reg-name" style="display:block;margin-bottom:0.25rem;font-weight:bold;">Full name *</label>
    <input type="text" id="reg-name" placeholder="e.g. Grace Nakato"
      style="width:100%;padding:0.45rem 0.6rem;border:1px solid #bbb;border-radius:4px;font-size:1rem;box-sizing:border-box;margin-bottom:0.8rem;" />

    <label for="reg-email" style="display:block;margin-bottom:0.25rem;font-weight:bold;">Email address *</label>
    <input type="email" id="reg-email" placeholder="e.g. grace@example.com"
      style="width:100%;padding:0.45rem 0.6rem;border:1px solid #bbb;border-radius:4px;font-size:1rem;box-sizing:border-box;margin-bottom:0.8rem;" />

    <label for="reg-country" style="display:block;margin-bottom:0.25rem;font-weight:bold;">Country</label>
    <input type="text" id="reg-country" placeholder="e.g. Uganda"
      style="width:100%;padding:0.45rem 0.6rem;border:1px solid #bbb;border-radius:4px;font-size:1rem;box-sizing:border-box;margin-bottom:1rem;" />

    <p id="reg-error" style="color:#c62828;font-size:0.9rem;margin:0 0 0.6rem 0;display:none;"></p>

    <button onclick="handleRegister()"
      style="padding:0.5rem 1.8rem;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:bold;">
      Send My Code →
    </button>
  </div>

  <!-- Step 2: After registration success -->
  <div id="reg-sent" style="display:none;background:#e8f5e9;border-left:4px solid #2e7d32;padding:1.2rem 1.4rem;border-radius:6px;">
    <p style="margin:0 0 0.5rem 0;font-weight:bold;">✅ Code sent!</p>
    <p style="margin:0;font-size:0.95rem;color:#444;">
      Check your inbox at <strong id="reg-sent-email"></strong> for your <strong>BG-XXXX</strong> code,
      then enter it below.
    </p>
  </div>

  <hr style="margin:1.5rem 0;border:none;border-top:1px solid #ddd;">

  <!-- Code entry (always visible — new registrants use code from email; returning learners use existing code) -->
  <p style="font-weight:bold;margin:0 0 0.4rem 0;">Enter your course code</p>
  <p style="font-size:0.9rem;color:#555;margin:0 0 0.8rem 0;">
    Enter the <code>BG-XXXX</code> code from your email to access the course.
  </p>
  <div style="display:flex;gap:0.5rem;align-items:flex-start;flex-wrap:wrap;">
    <input type="text" id="resume-code" placeholder="BG-XXXX" maxlength="7"
      autocomplete="off" autocapitalize="characters" spellcheck="false"
      style="width:140px;padding:0.45rem 0.6rem;border:1px solid #bbb;border-radius:4px;font-size:1rem;text-transform:uppercase;letter-spacing:0.08em;" />
    <button onclick="handleResume()"
      style="padding:0.45rem 1.2rem;background:#1565c0;color:white;border:none;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:bold;">
      Access Course →
    </button>
  </div>
  <p id="resume-error" style="color:#c62828;font-size:0.85rem;margin:0.5rem 0 0 0;display:none;"></p>

</div>

<!-- ── REGISTERED VIEW (hidden until registered) ───────────────────────── -->
<div id="registered-panel" style="display:none;max-width:560px;">

  <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:1rem 1.2rem;border-radius:6px;margin-bottom:1.2rem;">
    <p style="margin:0 0 0.4rem 0;">
      Welcome, <strong id="display-name"></strong>!
    </p>
    <p style="margin:0;font-size:0.9rem;color:#444;">
      Your course code is:
      <strong id="display-code"
        style="font-size:1.1rem;letter-spacing:0.08em;color:#1a237e;background:#e3f2fd;padding:2px 8px;border-radius:4px;">
      </strong>
      — write this down to resume from another device.
    </p>
  </div>

  <!-- Google Form registration record (auto-submits in background) -->
  <p style="font-size:0.88rem;color:#777;margin:0 0 1rem 0;">
    ✅ Registered. Your details have been recorded. You can now begin the course.
  </p>

  <!-- Progress detail table (populated by JS) -->
  <div id="intro-progress-detail"
    style="padding:1rem;background:#f5f5f5;border-radius:6px;margin-bottom:1rem;">
    <p style="margin:0;color:#888;font-size:0.9rem;">Complete sessions to see your progress here.</p>
  </div>

  <!-- Certificate section (appears when eligible) -->
  <div id="certificate-section"
    style="display:none;padding:1.2rem;background:#fff8e1;border:2px solid #f9a825;border-radius:8px;margin-bottom:1rem;">
    <h3 style="margin:0 0 0.5rem 0;">🎓 You've qualified for a certificate!</h3>
    <p style="margin:0 0 0.8rem 0;">You scored 80% or above across all sessions. Generate your certificate below.</p>
    <button onclick="generateCertificate()"
      style="padding:0.5rem 1.5rem;background:#f9a825;color:#333;border:none;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:bold;">
      Generate My Certificate
    </button>
  </div>

</div>

<script>
// ─── Registration ──────────────────────────────────────────────────────────

async function handleRegister() {
  const name    = document.getElementById('reg-name').value.trim();
  const email   = document.getElementById('reg-email').value.trim();
  const country = document.getElementById('reg-country').value.trim();
  const errEl   = document.getElementById('reg-error');
  const btn     = document.querySelector('#reg-form button');

  if (!name || !email.includes('@')) {
    errEl.textContent = 'Please enter your name and a valid email address.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

  // Save name & email locally so they're available after code entry
  localStorage.setItem('biogas_learner_name', name);
  localStorage.setItem('biogas_learner_email', email);

  // Call Apps Script — generates code server-side and emails it
  let result = { success: true };
  if (window.biogasProgress?.registerCode) {
    try {
      result = await window.biogasProgress.registerCode(name, email, country);
    } catch {
      result = { success: false, error: 'network' };
    }
  }

  if (btn) { btn.textContent = 'Send My Code →'; btn.disabled = false; }

  if (result.error === 'network') {
    errEl.textContent = 'Connection error — please check your internet and try again.';
    errEl.style.display = 'block';
    return;
  }

  // Show confirmation; keep code entry visible for user to enter their emailed code
  document.getElementById('reg-form').style.display = 'none';
  document.getElementById('reg-sent-email').textContent = email;
  document.getElementById('reg-sent').style.display = 'block';
  document.getElementById('resume-code').focus();
}

async function handleResume() {
  const input = document.getElementById('resume-code').value.trim().toUpperCase();
  const errEl = document.getElementById('resume-error');
  const btn   = document.querySelector('#reg-panel div[style*="display:flex"] button');

  if (!/^BG-[A-Z2-9]{4}$/.test(input)) {
    errEl.textContent = 'Invalid code format — codes look like BG-7X4K.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  if (btn) { btn.textContent = 'Checking…'; btn.disabled = true; }

  // Validate against Apps Script
  let valid = true;
  if (window.biogasProgress?.validateCode) {
    const result = await window.biogasProgress.validateCode(input);
    valid = result.valid;
    if (result.error === 'network') {
      errEl.textContent = 'Could not connect to verify your code. Check your connection and try again.';
      errEl.style.display = 'block';
      if (btn) { btn.textContent = 'Access Course →'; btn.disabled = false; }
      return;
    }
  }

  if (!valid) {
    errEl.textContent = 'Code not found — check your email for your registration code, or register above.';
    errEl.style.display = 'block';
    if (btn) { btn.textContent = 'Access Course →'; btn.disabled = false; }
    return;
  }

  // Code is valid — store it and grant access
  localStorage.setItem('biogas_course_code', input);
  localStorage.setItem('biogas_access_granted', 'true');

  const name = document.getElementById('reg-name')?.value.trim()
    || localStorage.getItem('biogas_learner_name')
    || 'Learner';
  localStorage.setItem('biogas_learner_name', name);

  if (btn) { btn.textContent = 'Access Course →'; btn.disabled = false; }
  showRegisteredView(name, input);
}

function showRegisteredView(name, code) {
  document.getElementById('reg-panel').style.display = 'none';
  const rp = document.getElementById('registered-panel');
  rp.style.display = 'block';
  document.getElementById('display-name').textContent = name;
  document.getElementById('display-code').textContent = code;
  updateProgressDetail();
  // Reveal the session table (it starts hidden)
  const st = document.getElementById('session-table');
  if (st) st.style.display = 'table';
}

// ─── Progress Detail ───────────────────────────────────────────────────────

function updateProgressDetail() {
  if (!window.biogasProgress) return;
  const progress = window.biogasProgress.getProgress();
  const sessions = window.biogasProgress.SESSIONS;
  const detail = document.getElementById('intro-progress-detail');
  if (!detail) return;

  const rows = sessions.map(s => {
    const data = progress[s.key];
    const status = data?.completed
      ? `<span style="color:#2e7d32;">✅ ${data.score}</span>`
      : `<span style="color:#aaa;">Not yet completed</span>`;
    return `<tr>
      <td style="padding:0.25rem 1rem 0.25rem 0;font-size:0.9rem;">${s.label}</td>
      <td style="font-size:0.9rem;">${status}</td>
    </tr>`;
  }).join('');

  const completed = sessions.filter(s => progress[s.key]?.completed).length;
  detail.innerHTML = `
    <p style="margin:0 0 0.5rem 0;font-weight:bold;font-size:0.95rem;">
      Sessions completed: ${completed} / ${sessions.length}
    </p>
    <table style="border-collapse:collapse;">${rows}</table>
  `;

  // Certificate eligibility: all sessions done AND average >= 80%
  if (completed === sessions.length) {
    const avg = sessions.reduce((sum, s) => {
      const raw = progress[s.key]?.score || '0/6';
      const [got, tot] = raw.split('/').map(Number);
      return sum + (tot > 0 ? got / tot : 0);
    }, 0) / sessions.length;
    if (avg >= 0.8) {
      document.getElementById('certificate-section').style.display = 'block';
    }
  }
}

// ─── Certificate Generator ─────────────────────────────────────────────────

function generateCertificate() {
  const name = localStorage.getItem('biogas_learner_name') || 'Learner';
  const code = localStorage.getItem('biogas_course_code') || '';
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Certificate — ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f0ede6;
      display: flex; justify-content: center; align-items: center;
      min-height: 100vh; padding: 2rem;
      font-family: 'Open Sans', sans-serif;
    }
    .cert {
      background: white;
      width: 780px; padding: 56px 64px;
      border: 3px solid #2e7d32;
      outline: 8px solid transparent;
      box-shadow: inset 0 0 0 12px #f9f9f9, 0 8px 32px rgba(0,0,0,0.12);
      text-align: center;
      position: relative;
    }
    .cert::before {
      content: '';
      position: absolute; inset: 16px;
      border: 1px solid #c8e6c9;
      pointer-events: none;
    }
    .icon  { font-size: 3rem; margin-bottom: 0.5rem; }
    .org   { font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: #888; margin-bottom: 0.3rem; }
    .title { font-family: 'Playfair Display', serif; font-size: 2rem; color: #2e7d32; margin-bottom: 1.8rem; }
    .awarded { font-size: 0.95rem; color: #555; margin-bottom: 0.4rem; }
    .name  { font-family: 'Playfair Display', serif; font-size: 2.6rem; color: #1a237e; margin-bottom: 1.4rem; }
    .body  { font-size: 0.95rem; color: #444; line-height: 1.7; margin-bottom: 1.6rem; max-width: 560px; margin-left: auto; margin-right: auto; }
    .meta  { font-size: 0.8rem; color: #999; margin-top: 1.8rem; }
    .code  { font-size: 0.78rem; color: #bbb; margin-top: 0.3rem; }
    @media print {
      body { background: white; padding: 0; }
      .cert { box-shadow: none; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="cert">
    <div class="icon">🌱</div>
    <div class="org">CREATIVenergie</div>
    <div class="title">Certificate of Completion</div>
    <div class="awarded">This is to certify that</div>
    <div class="name">${name}</div>
    <div class="body">
      has successfully completed the
      <strong>CREATIVenergie Biogas Training Course</strong>,
      covering all eight sessions including the principles of biogas,
      digester sizing and siting, safety, digestate use, productive use,
      construction, and biogas as a business —
      achieving a score of <strong>80% or above</strong> across all assessments.
    </div>
    <div class="meta">Awarded on ${date}</div>
    <div class="code">Course code: ${code} &nbsp;·&nbsp; creativenergie.co.uk</div>
  </div>
  <script>setTimeout(() => window.print(), 400);<\/script>
</body>
</html>`);
  win.document.close();
}

// ─── On page load: check if already registered ────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  const savedName = localStorage.getItem('biogas_learner_name');
  const savedCode = localStorage.getItem('biogas_course_code');
  if (savedName && savedCode) {
    showRegisteredView(savedName, savedCode);
  } else {
    // Hide the session table until registered
    const st = document.getElementById('session-table');
    if (st) st.style.display = 'none';
  }
  // Sync progress detail if progress.js has already loaded
  setTimeout(updateProgressDetail, 300);
});
</script>
```

---

## Course Sessions

```{raw} html
<table id="session-table" style="width:100%;border-collapse:collapse;">
  <thead>
    <tr style="background:#f5f5f5;">
      <th style="padding:0.5rem 1rem;text-align:left;border-bottom:2px solid #ddd;">#</th>
      <th style="padding:0.5rem 1rem;text-align:left;border-bottom:2px solid #ddd;">Session</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:0.5rem 1rem;">1</td><td style="padding:0.5rem 1rem;"><a href="sessions/session1-principles">Principles of Biogas</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">2</td><td style="padding:0.5rem 1rem;"><a href="sessions/session2-sizing">Sizing Your Digester</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">3</td><td style="padding:0.5rem 1rem;"><a href="sessions/session3-siting">Siting Your Digester</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">4</td><td style="padding:0.5rem 1rem;"><a href="sessions/session4-safety">Safety</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">5</td><td style="padding:0.5rem 1rem;"><a href="sessions/session5-digestate">Digestate &amp; Fertiliser</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">6</td><td style="padding:0.5rem 1rem;"><a href="sessions/session6-productive-use">Productive Use of Biogas</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">7</td><td style="padding:0.5rem 1rem;"><a href="sessions/session7-building">Building the CE Digester</a></td></tr>
    <tr><td style="padding:0.5rem 1rem;">8</td><td style="padding:0.5rem 1rem;"><a href="sessions/session8-business">Biogas as a Business</a></td></tr>
  </tbody>
</table>
```

---

## ⚠️ Safety and Liability Disclaimer

This training course provides guidance on the design, construction, and operation of biogas systems based on CREATIVenergie's open-source biodigester design. While every effort has been made to ensure the accuracy and usefulness of this information, **CREATIVenergie accepts no responsibility or liability** for any injury, loss, or damage resulting from the use or misuse of this material or the construction and operation of any biogas system.

Biogas systems are **not risk-free**. They involve potential hazards including fire, explosion, toxic gases, asphyxiation, and disease. Please refer carefully to the **[Safety Session](sessions/session4-safety)** for full guidance.

---

*Built with [Jupyter Book](https://jupyterbook.org) · Hosted on GitHub Pages · Content by [CREATIVenergie](https://creativenergie.co.uk)*
