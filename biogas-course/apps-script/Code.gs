/**
 * CREATIVenergie Biogas Course — Registration & Code Validator
 *
 * HOW TO DEPLOY
 * ─────────────
 * 1. Open Google Sheets → create/open "Biogas Course Registrations".
 *    Paste the Spreadsheet ID into SPREADSHEET_ID below.
 *
 * 2. Extensions → Apps Script → paste this file → Save.
 *
 * 3. Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Authorise and copy the Web app URL → paste into _config.env as APPS_SCRIPT_URL.
 *
 * ACTIONS
 * ───────
 *   GET ?action=register&name=...&email=...&country=...
 *     → generates a unique BG-XXXX code, emails it to the learner, stores in sheet
 *     → {"success": true, "message": "Code sent to email@example.com"}
 *
 *   GET ?action=validate&code=BG-XXXX
 *     → {"valid": true} or {"valid": false}
 *
 *   GET ?action=score&code=BG-XXXX&name=...&session=...&score=...
 *     → records a quiz score against the learner's row
 *     → {"success": true}
 */

const SPREADSHEET_ID = '1phaxmLTgFGGhI2A24Lzt5H9UmszFu0RHmp7hjZbEPeo';
const SHEET_NAME     = 'Registrations';

const EMAIL_SUBJECT  = 'Your CREATIVenergie Biogas Course Access Code';
const COURSE_URL     = 'https://learn.creativenergie.co.uk';
const FROM_NAME      = 'CREATIVenergie';

// ── Entry point ────────────────────────────────────────────────────────────

function doGet(e) {
  const action  = (e.parameter.action  || 'validate').toLowerCase();
  const code    = (e.parameter.code    || '').trim().toUpperCase();
  const name    = (e.parameter.name    || '').trim();
  const email   = (e.parameter.email   || '').trim().toLowerCase();
  const country = (e.parameter.country || '').trim();
  const session = (e.parameter.session || '').trim();
  const score   = (e.parameter.score   || '').trim();

  try {
    const sheet = getOrCreateSheet();

    if (action === 'register') {
      if (!name || !email) {
        return respond({ success: false, error: 'Name and email are required.' });
      }
      return handleRegister(sheet, name, email, country);

    } else if (action === 'score') {
      if (!code) return respond({ success: false, error: 'No code provided.' });
      return handleScore(sheet, code, session, score);

    } else {
      if (!code) return respond({ valid: false, error: 'No code provided.' });
      return handleValidate(sheet, code);
    }

  } catch (err) {
    return respond({ success: false, valid: false, error: err.message });
  }
}

// ── Handlers ───────────────────────────────────────────────────────────────

function handleRegister(sheet, name, email, country) {
  // Check if this email already has a code — resend if so
  const existing = getRowByEmail(sheet, email);
  if (existing) {
    const existingCode = existing[0];
    sendCodeEmail(email, name, existingCode);
    return respond({ success: true, message: 'Code resent to ' + email });
  }

  // Generate a unique code
  const code = generateUniqueCode(sheet);

  // Store in sheet
  sheet.appendRow([
    code,
    name,
    email,
    country,
    new Date().toISOString(),
    '', '', '', '', '', // score columns (sessions 1–8 + total)
    '', '', ''
  ]);

  // Email the code
  sendCodeEmail(email, name, code);

  return respond({ success: true, message: 'Code sent to ' + email });
}

function handleValidate(sheet, code) {
  const codes = getAllCodes(sheet);
  return respond({ valid: codes.includes(code) });
}

function handleScore(sheet, code, session, score) {
  const data   = sheet.getDataRange().getValues();
  const colMap = { '1':6,'2':7,'3':8,'4':9,'5':10,'6':11,'7':12,'8':13 };
  const col    = colMap[session];

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim().toUpperCase() === code) {
      if (col) sheet.getRange(i + 1, col).setValue(score);
      return respond({ success: true });
    }
  }
  return respond({ success: false, error: 'Code not found.' });
}

// ── Email ──────────────────────────────────────────────────────────────────

function sendCodeEmail(email, name, code) {
  const firstName = name.split(' ')[0];
  const body = `Hi ${firstName},

Welcome to the CREATIVenergie Biogas Training Course!

Your personal access code is:

    ${code}

To start the course, visit:
${COURSE_URL}

Enter your code on the home page to unlock all eight sessions.

Keep this code safe — you will need it each time you return to the course and to submit your quiz scores.

If you have any questions, reply to this email.

Good luck!

The CREATIVenergie Team
https://creativenergie.co.uk`;

  const htmlBody = `
<div style="font-family:sans-serif;max-width:540px;margin:0 auto;color:#333;">
  <div style="background:#1b5e20;padding:1.2rem 1.5rem;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:1.2rem;">🌿 CREATIVenergie Biogas Course</h2>
  </div>
  <div style="border:1px solid #c8e6c9;border-top:none;padding:1.5rem;border-radius:0 0 8px 8px;">
    <p>Hi <b>${firstName}</b>,</p>
    <p>Welcome to the CREATIVenergie Biogas Training Course!</p>
    <p>Your personal access code is:</p>
    <div style="background:#f1f8e9;border:2px solid #a5d6a7;border-radius:8px;padding:1rem;text-align:center;margin:1rem 0;">
      <span style="font-size:2rem;font-weight:900;letter-spacing:0.15em;color:#1b5e20;">${code}</span>
    </div>
    <p>To start the course, click the button below and enter your code on the home page:</p>
    <div style="text-align:center;margin:1.5rem 0;">
      <a href="${COURSE_URL}" style="background:#1b5e20;color:white;padding:0.75rem 2rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:1rem;">Start the Course →</a>
    </div>
    <p style="font-size:0.85rem;color:#777;">Keep this code safe — you will need it each time you return and to submit your quiz scores.</p>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:1.5rem 0;">
    <p style="font-size:0.85rem;color:#777;">The CREATIVenergie Team &mdash; <a href="https://creativenergie.co.uk">creativenergie.co.uk</a></p>
  </div>
</div>`;

  GmailApp.sendEmail(email, EMAIL_SUBJECT, body, {
    htmlBody: htmlBody,
    name: FROM_NAME,
  });
}

// ── Helpers ────────────────────────────────────────────────────────────────

function generateUniqueCode(sheet) {
  const chars    = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const existing = getAllCodes(sheet);
  let code;
  do {
    code = 'BG-';
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (existing.includes(code));
  return code;
}

function getAllCodes(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  return data.slice(1)
    .map(row => String(row[0]).trim().toUpperCase())
    .filter(Boolean);
}

function getRowByEmail(sheet, email) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][2]).trim().toLowerCase() === email) {
      return data[i];
    }
  }
  return null;
}

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  let   sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Code','Name','Email','Country','Registered At',
      'S1','S2','S3','S4','S5','S6','S7','S8'
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,1,13).setFontWeight('bold').setBackground('#e8f5e9');
  }
  return sheet;
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
