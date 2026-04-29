/**
 * CREATIVenergie Biogas Course — Registration Validator
 *
 * HOW TO DEPLOY
 * ─────────────
 * 1. Open Google Sheets → create a new blank spreadsheet.
 *    Name it "Biogas Course Registrations" (or whatever you like).
 *    Copy the Spreadsheet ID from the URL:
 *      https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_IS_HERE/edit
 *    Paste it into SPREADSHEET_ID below.
 *
 * 2. In that spreadsheet: Extensions → Apps Script.
 *    Delete any existing code and paste this entire file.
 *
 * 3. Save (Ctrl+S), then click Deploy → New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click Deploy, authorise when prompted.
 *
 * 4. Copy the "Web app URL" shown after deployment.
 *    Paste it into progress.js as APPS_SCRIPT_URL.
 *
 * ACTIONS
 * ───────
 *   GET ?action=register&code=BG-XXXX&name=...&email=...&country=...
 *     → {"success": true}
 *
 *   GET ?action=validate&code=BG-XXXX
 *     → {"valid": true} or {"valid": false}
 *
 * ADDING CODES MANUALLY (for admin-issued cohort codes)
 * ──────────────────────────────────────────────────────
 * You can also just type codes directly into column A of the sheet
 * (after the header row). They will be validated the same way.
 */

const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME     = 'Registrations';

// ── Entry point ────────────────────────────────────────────────────────────

function doGet(e) {
  const action  = (e.parameter.action  || 'validate').toLowerCase();
  const code    = (e.parameter.code    || '').trim().toUpperCase();
  const name    = e.parameter.name    || '';
  const email   = e.parameter.email   || '';
  const country = e.parameter.country || '';

  if (!code) {
    return respond({ valid: false, error: 'No code provided' });
  }

  try {
    const sheet = getOrCreateSheet();

    if (action === 'register') {
      return handleRegister(sheet, code, name, email, country);
    } else {
      return handleValidate(sheet, code);
    }

  } catch (err) {
    return respond({ success: false, valid: false, error: err.message });
  }
}

// ── Handlers ───────────────────────────────────────────────────────────────

function handleRegister(sheet, code, name, email, country) {
  const existing = getRegisteredCodes(sheet);

  if (existing.includes(code)) {
    // Already registered — idempotent
    return respond({ success: true, message: 'Already registered' });
  }

  sheet.appendRow([
    code,
    name,
    email,
    country,
    new Date().toISOString(),
  ]);

  return respond({ success: true });
}

function handleValidate(sheet, code) {
  const codes = getRegisteredCodes(sheet);
  return respond({ valid: codes.includes(code) });
}

// ── Helpers ────────────────────────────────────────────────────────────────

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  let   sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Code', 'Name', 'Email', 'Country', 'Registered At']);
    sheet.setFrozenRows(1);
    // Format the header row
    sheet.getRange(1, 1, 1, 5)
      .setFontWeight('bold')
      .setBackground('#e8f5e9');
  }

  return sheet;
}

function getRegisteredCodes(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  // Column A (index 0) holds the code; skip header row
  return data
    .slice(1)
    .map(row => String(row[0]).trim().toUpperCase())
    .filter(Boolean);
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
