# CREATIVenergie Biogas Course — Deployment Notes

Live URL: https://keepexploring.github.io/surplus-biogas/

---

## Deploying to GitHub Pages

The site deploys automatically on every `git push` via GitHub Actions.

### First-time GitHub setup (one-time only)

1. **Create the GitHub repo** at github.com → New repository → name: `surplus-biogas` (under `keepexploring` account)

2. **Add the remote and push:**
   ```bash
   git remote add origin https://github.com/keepexploring/surplus-biogas.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:** Repo → Settings → Pages → Source: **GitHub Actions** → Save

4. **Add GitHub Secrets** (Repo → Settings → Secrets → Actions → New repository secret):

   | Secret name | Value |
   |---|---|
   | `APPS_SCRIPT_URL` | from `_config.env` |
   | `QUIZ_FORM_ID` | from `_config.env` |
   | `ENTRY_NAME` | from `_config.env` |
   | `ENTRY_CODE` | from `_config.env` |
   | `ENTRY_SESSION` | from `_config.env` |
   | `ENTRY_SCORE` | from `_config.env` |
   | `REG_FORM_ID` | from `_config.env` |
   | `REG_ENTRY_NAME` | from `_config.env` |
   | `REG_ENTRY_EMAIL` | from `_config.env` |
   | `REG_ENTRY_CTRY` | from `_config.env` |
   | `REG_ENTRY_CODE` | from `_config.env` |

5. **Trigger a deploy** by pushing any change, or go to Actions → Run workflow manually.

The site goes live at: **https://keepexploring.github.io/surplus-biogas/**
Build takes ~2 minutes.

### Subsequent updates (day-to-day)

```bash
# Edit .md files, then:
git add -p          # stage selectively, or:
git add .           # stage everything
git commit -m "describe what changed"
git push            # triggers automatic build + deploy (~2 min)
```

You do NOT need to build locally to deploy — GitHub Actions does the build. Local builds are only for previewing before pushing.

---

## How Config Works

All sensitive values (Apps Script URL, Google Form IDs) live in one file:

```
biogas-course/_config.env   ← gitignored, never committed
```

The source JS files use `%%PLACEHOLDER%%` tokens. Before building, a script
substitutes the real values in. After building, restore the placeholders so
the real values never land in git.

---

## Local Build (with config injection)

```bash
cd biogas-course
source .venv/bin/activate

# 1. Inject real values
source _config.env
python scripts/inject_config.py

# 2. Build
jupyter-book build .

# 3. Restore placeholders (once files are committed to git)
git checkout -- _static/progress.js _static/quiz.js intro.md

# 4. Preview
python3 -m http.server 8765 --directory _build/html
# Open http://localhost:8765
```

> Until the files are tracked by git, restore manually by re-running
> `inject_config.py` won't help — just don't commit after injecting.
> Once you've done the initial `git push`, step 3 works automatically.

---

## GitHub Pages Deploy (automatic on push)

The workflow at `.github/workflows/deploy.yml` injects secrets before building.

### One-time GitHub Secrets setup

Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**

Add each of these (values are in `_config.env`):

| Secret name | Where used |
|---|---|
| `APPS_SCRIPT_URL` | `_static/progress.js` |
| `QUIZ_FORM_ID` | `_static/quiz.js` |
| `ENTRY_NAME` | `_static/quiz.js` |
| `ENTRY_CODE` | `_static/quiz.js` |
| `ENTRY_SESSION` | `_static/quiz.js` |
| `ENTRY_SCORE` | `_static/quiz.js` |
| `REG_FORM_ID` | `intro.md` |
| `REG_ENTRY_NAME` | `intro.md` |
| `REG_ENTRY_EMAIL` | `intro.md` |
| `REG_ENTRY_CTRY` | `intro.md` |
| `REG_ENTRY_CODE` | `intro.md` |

After that, every `git push` to `main` builds and deploys automatically (~2 min).

### Subsequent updates

```bash
# Edit .md files, then:
git add .
git commit -m "describe what changed"
git push
```

---

## Full First-Time Setup (start from scratch)

### Step 1 — Google Sheet

1. Go to sheets.google.com → create a blank spreadsheet
2. Name it **Biogas Course Registrations**
3. Copy the Spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/`**THIS_PART**`/edit`

Current sheet IDs (keep private):
- `1phaxmLTgFGGhI2A24Lzt5H9UmszFu0RHmp7hjZbEPeo`
- `1ocZWDVyQ39arZzlncEdsILlLyJGbmNulsCT-GPSn1ng`

### Step 2 — Apps Script

1. In the spreadsheet: **Extensions → Apps Script**
2. Delete all existing code, paste the entire contents of `apps-script/Code.gs`
3. On line 38, replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with your Sheet ID
4. Save (Cmd+S)

Current deployment:
- Deployment ID: `AKfycbwTIK1hPyRidJVTwSYycsweW-VJovB2jQQRWGb0wNy7SB2RUvV_ycCAC61afyvUipwaSw`
- URL: `https://script.google.com/macros/s/AKfycbwTIK1hPyRidJVTwSYycsweW-VJovB2jQQRWGb0wNy7SB2RUvV_ycCAC61afyvUipwaSw/exec`

### Step 3 — Deploy Apps Script as Web App

1. **Deploy → New deployment**
2. Gear icon → **Web app**
3. Execute as: **Me** / Who has access: **Anyone**
4. Click Deploy → Authorise → Allow
5. Copy the Web app URL → paste into `_config.env` as `APPS_SCRIPT_URL`

**If you get "Error code INTERNAL"** during authorisation:
- This is a transient Google error — just try again
- Or: gear icon ⚙️ (Project Settings) → Google Cloud Platform → Change project → link an existing GCP project
- Or: try in a personal Gmail account if your org blocks auto-project creation

### Step 4 — Pre-load Access Codes

In the Apps Script editor, paste and run this once:

```javascript
function addCodes() {
  const sheet = getOrCreateSheet();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let i = 0; i < 50; i++) {
    let code = 'BG-';
    for (let j = 0; j < 4; j++) code += chars[Math.floor(Math.random() * chars.length)];
    sheet.appendRow([code, '', '', '', '']);
  }
}
```

Function dropdown (top of editor) → select `addCodes` → ▶ Run.
This writes 50 unique `BG-XXXX` codes into column A — hand these to learners.

### Step 5 — Google Forms

**Form 1 — Registration** (forms.google.com → new form)

Fields (Short answer): Full name, Email address, Country, Course code

Get entry IDs: three-dot menu → **Get pre-filled link** → fill dummy values → Get link.
The URL contains `entry.XXXXXXXXXX=dummy` for each field.

Update `_config.env`:
```
REG_FORM_ID=<form ID from URL: forms.google.com/d/THIS_PART/edit>
REG_ENTRY_NAME=entry.XXXXXXXXXX
REG_ENTRY_EMAIL=entry.XXXXXXXXXX
REG_ENTRY_CTRY=entry.XXXXXXXXXX
REG_ENTRY_CODE=entry.XXXXXXXXXX
```

**Form 2 — Quiz Scores** (new form)

Fields (Short answer): Learner name, Course code, Session, Score

Update `_config.env`:
```
QUIZ_FORM_ID=<form ID>
ENTRY_NAME=entry.XXXXXXXXXX
ENTRY_CODE=entry.XXXXXXXXXX
ENTRY_SESSION=entry.XXXXXXXXXX
ENTRY_SCORE=entry.XXXXXXXXXX
```

### Step 6 — GitHub Pages

```bash
cd biogas-course

# Update _config.yml — replace YOUR_USERNAME with your GitHub username
# repository:
#   url: https://github.com/YOUR_USERNAME/biogas-course

git init
git add .
git commit -m "Initial course upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/biogas-course.git
git push -u origin main
```

On GitHub: repo → **Settings → Pages → Source: GitHub Actions → Save**

Add the 11 secrets (Step 2 of the GitHub Pages section above).

Course goes live at: `https://YOUR_USERNAME.github.io/biogas-course`

---

## Pre-Launch Checklist

- [ ] `_config.env` filled in with all 11 real values
- [ ] `SPREADSHEET_ID` set in `apps-script/Code.gs` and redeployed
- [ ] Apps Script deployed as Web App (Anyone can access)
- [ ] 50 codes loaded into sheet via `addCodes()`
- [ ] `YOUR_USERNAME` replaced in `_config.yml`
- [ ] Video IDs replaced in sessions 7 and 8
- [ ] All 11 GitHub Secrets added to the repo
- [ ] `git push` triggers successful Actions build
