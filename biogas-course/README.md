# CREATIVenergie Biogas Training Course

An interactive 8-session biogas training course built with [Jupyter Book](https://jupyterbook.org), hosted for free on GitHub Pages.

Learners register with an access code, work through quizzes (multiple-choice, true/false, fill-in-the-blank, number, and drag-to-match), earn session badges, and receive a certificate on completion.

---

## Quick Start — Run Locally

```bash
# 1. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate          # macOS / Linux
# .venv\Scripts\activate           # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Inject config (fill _config.env with your real values first)
source _config.env
python scripts/inject_config.py

# 4. Build the book
jupyter-book build .

# 5. Restore placeholders so secrets don't get committed
git checkout -- _static/progress.js _static/quiz.js intro.md

# 6. Serve locally
python3 -m http.server 8765 --directory _build/html
# Then open http://localhost:8765 in your browser
```

> All sensitive config (Apps Script URL, Form IDs) lives in `_config.env` — this file is gitignored and never committed. See `development_notes.md` in the project root for the full setup guide and a pre-launch checklist.

---

## Backend Setup: Google Sheets + Apps Script

The access-code gate is backed by a private Google Sheet and a free Google Apps Script web app. No server costs, no API keys — just a Google account.

### Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it **Biogas Course Registrations** (or anything you like).
3. Copy the **Spreadsheet ID** from the URL — the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/THIS_PART/edit
   ```

### Step 2 — Deploy the Apps Script

1. In your spreadsheet: **Extensions → Apps Script**.
2. Delete all existing code and paste the entire contents of `apps-script/Code.gs`.
3. On line 38, replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with the ID from Step 1.
4. **Save** (Ctrl + S / Cmd + S).
5. Click **Deploy → New deployment**:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy** and authorise when prompted (Google will warn about unverified apps — click "Advanced → Go to … (unsafe)" for your own script).
7. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### Step 3 — Add the Web App URL to the Course

Open `_static/progress.js` and replace the placeholder:

```javascript
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL';
//                       ↑ paste your Web app URL here
```

Rebuild the book and redeploy. The access-code gate will now validate against your Google Sheet.

### Step 4 — Issue Access Codes

Codes must be in the format `BG-XXXX` (two letters then four alphanumeric characters, e.g. `BG-7X4K`).

**Option A — Generate codes in bulk (recommended):**

In the Apps Script editor, add a helper function and run it once to pre-fill the sheet:

```javascript
function addCodes() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
             || getOrCreateSheet();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I, O, 0, 1
  for (let i = 0; i < 50; i++) {
    let code = 'BG-';
    for (let j = 0; j < 4; j++) code += chars[Math.floor(Math.random() * chars.length)];
    sheet.appendRow([code, '', '', '', '']);
  }
}
```

Run `addCodes()` from the Apps Script editor (▶ Run). This writes 50 codes into column A, ready to be distributed to learners.

**Option B — Type codes manually:**  
Simply type codes directly into column A of the `Registrations` sheet (one per row, below the header). They are validated on entry immediately.

> **Dev mode:** While `APPS_SCRIPT_URL` is still set to `'YOUR_APPS_SCRIPT_URL'`, the gate accepts any valid `BG-XXXX` format locally — so you can test without a deployed script.

### How registration works

| Action | What happens |
|---|---|
| New learner enters a code + name | Code written to Sheet; access granted immediately |
| Returning learner on new device | Code validated against Sheet; access granted if found |
| Invalid code entered | Access denied — learner sees a "code not found" error |

---

## Set Up Google Forms (quiz score collection)

You need **two Google Forms** at [forms.google.com](https://forms.google.com).

### Form 1 — Registration backup

This is a fire-and-forget backup record. Fields:

| Field label | Question type |
|---|---|
| Full name | Short answer |
| Email address | Short answer |
| Country | Short answer |
| Course code | Short answer |

After creating the form, get the **pre-fill entry IDs**:
1. Open the form → three-dot menu → **Get pre-filled link**
2. Fill in dummy values in every field → **Get link**
3. The URL will contain `entry.XXXXXXXXXX=dummy` for each field — note each number

Open `intro.md` and replace:
```javascript
const REG_FORM_ID     = 'YOUR_REGISTRATION_FORM_ID';  // ← form ID from URL
const REG_ENTRY_NAME  = 'entry.1000000001';            // ← your actual IDs
const REG_ENTRY_EMAIL = 'entry.1000000002';
const REG_ENTRY_CTRY  = 'entry.1000000003';
const REG_ENTRY_CODE  = 'entry.1000000004';
```

### Form 2 — Quiz scores

Fields:

| Field label | Question type |
|---|---|
| Learner name | Short answer |
| Course code | Short answer |
| Session | Short answer |
| Score | Short answer |

Open `_static/quiz.js` and replace:
```javascript
const QUIZ_FORM_ID  = 'YOUR_FORM_ID';
const ENTRY_NAME    = 'entry.1111111111';   // ← your actual IDs
const ENTRY_CODE    = 'entry.2222222222';
const ENTRY_SESSION = 'entry.3333333333';
const ENTRY_SCORE   = 'entry.4444444444';
```

Form responses appear in the linked Google Sheet automatically.

---

## Deploy to GitHub Pages (free)

### One-time setup

1. **Create a GitHub repo** — e.g. `biogas-course` (must be **public** for free Pages).

2. **Update `_config.yml`** — replace `YOUR_USERNAME` in `repository.url`:
   ```yaml
   repository:
     url: https://github.com/YOUR_USERNAME/biogas-course
     branch: main
   ```

3. **Push to `main`:**
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/biogas-course.git
   git add .
   git commit -m "Initial course upload"
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Repo → **Settings → Pages**
   - Source: **GitHub Actions**
   - Save

5. On every push the workflow in `.github/workflows/deploy.yml` builds the book and publishes it. Your course is live at:
   ```
   https://YOUR_USERNAME.github.io/biogas-course
   ```

### Subsequent updates

Edit any `.md` file, commit, and push — the site rebuilds automatically in ~2 minutes.

---

## How the Access Code System Works

- Learners register on the intro page with a `BG-XXXX` code, their name, and email.
- Registration writes to your Google Sheet (via Apps Script) and stores `biogas_access_granted = true` in their browser.
- On every page load, `progress.js` checks localStorage; if access isn't granted it shows the code-entry overlay.
- Returning learners on a new device re-enter their code — Apps Script validates it against the Sheet.
- All quiz scores submitted via Google Forms include the learner's code, so every session is linked in your Sheet even across multiple devices.

---

## How Certificates Work

- A certificate is generated **entirely in the browser** (no server required).
- It appears when a learner completes all 8 sessions with an average score of **80% or above**.
- The certificate includes their name, date, and course code — verifiable against your Google Sheet.

---

## Updating Video Links

Sessions 7 and 8 contain placeholder YouTube video IDs (`YOUR_VIDEO_ID_HERE`). Replace each with the actual ID (the part after `?v=` in a YouTube URL):

```html
<!-- e.g. for https://www.youtube.com/watch?v=R4AdoGpX140 -->
<iframe src="https://www.youtube.com/embed/R4AdoGpX140" ...>
```

---

## File Structure

```
biogas-course/
├── _config.yml              ← Jupyter Book configuration
├── _toc.yml                 ← Table of contents
├── requirements.txt         ← Python dependencies (jupyter-book etc.)
├── intro.md                 ← Home page / registration gate
├── sessions/
│   ├── session1-principles.md
│   ├── session2-sizing.md
│   ├── session3-siting.md
│   ├── session4-safety.md
│   ├── session5-digestate.md
│   ├── session6-productive-use.md
│   ├── session7-building.md
│   └── session8-business.md
├── assets/                  ← All images (image1.jpg … image28.jpg)
├── _static/
│   ├── progress.js          ← Progress bar, badge system, Apps Script calls
│   ├── quiz.js              ← Quiz engine + Google Form submission
│   └── quiz.css             ← Quiz styling
├── apps-script/
│   └── Code.gs              ← Google Apps Script (paste into Apps Script editor)
└── .github/
    └── workflows/
        └── deploy.yml       ← Auto-deploy to GitHub Pages on push to main
```

---

## Adding or Editing Content

Each session is a standard Markdown file. Edit the `.md` files directly and rebuild.

To add a new session:
1. Create `sessions/sessionN-topic.md`
2. Add it to `_toc.yml`
3. Add a new entry to the `SESSIONS` array in `_static/progress.js`
4. Add a badge entry to the `BADGES` array in `_static/progress.js`
5. Rebuild

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails | Run `jupyter-book clean .` then `jupyter-book build .` |
| Access gate won't accept a valid code | Check `APPS_SCRIPT_URL` in `progress.js` is set; check the Apps Script is deployed as "Anyone" |
| Apps Script returns 403 | Re-deploy: Deploy → Manage deployments → Edit → new version |
| Google Form submissions not appearing | Confirm form ID and entry IDs are correct; form must not require Google login |
| Progress bar not showing | Open DevTools console — check for JS errors; confirm `progress.js` is in `_static/` |
| Certificate not appearing | Run `biogasProgress.getProgress()` in the console — all 8 sessions must be marked complete |
| Images not showing locally | Use `python3 -m http.server` (file:// URLs block relative paths on some browsers) |
