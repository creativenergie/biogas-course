# CREATIVenergie Biogas Training Course

An interactive 8-session online course covering the principles, design, safety, and productive use of biogas digesters. Built with [Jupyter Book](https://jupyterbook.org) and hosted free on GitHub Pages.

**Live course → [learn.creativenergie.co.uk](https://learn.creativenergie.co.uk)**

---

## What learners get

- 8 guided sessions with interactive infographics, sizing calculators, and safety simulations
- Multiple-choice, true/false, fill-in-the-blank, and drag-to-match quizzes with instant feedback
- Session badges and a downloadable certificate on completion (≥ 80% average score)
- Access-code gate backed by Google Sheets — no server costs

## Sessions

| # | Title |
|---|-------|
| 1 | Principles of Biogas |
| 2 | Sizing Your Digester |
| 3 | Siting & Planning |
| 4 | Safety |
| 5 | Digestate & Bio-Slurry |
| 6 | Productive Use of Biogas |
| 7 | Building a Bag Digester |
| 8 | Biogas as a Business |

---

## How deployment works

The site deploys **automatically** every time you push to `main` — no manual build needed.

1. You push a change (`git push`)
2. GitHub Actions runs `.github/workflows/deploy.yml` (~2 min):
   - installs dependencies
   - injects secrets (Apps Script URL, Form IDs) into the JS files
   - builds the Jupyter Book
   - publishes to GitHub Pages
3. The live site at [learn.creativenergie.co.uk](https://learn.creativenergie.co.uk) updates

### Day-to-day updates

```bash
# Edit any .md file in biogas-course/sessions/, then:
git add .
git commit -m "describe what changed"
git push          # triggers automatic build + deploy
```

### First-time setup (new fork / new deployment)

You will need to:

1. Create a Google Sheet and deploy the Apps Script web app (`apps-script/Code.gs`)
2. Create two Google Forms (registration backup + quiz scores)
3. Add 11 GitHub Secrets to your repo (Apps Script URL, Form IDs, entry IDs)
4. Enable GitHub Pages: **Repo → Settings → Pages → Source: GitHub Actions**
5. Push to `main` to trigger the first build

**Full instructions with all commands and screenshots → [`development_notes.md`](development_notes.md)**

**Detailed setup guide including Google Sheets, access codes, and troubleshooting → [`biogas-course/README.md`](biogas-course/README.md)**

---

## Repository layout

```
README.md                    ← this file
development_notes.md         ← deployment notes, secrets setup, pre-launch checklist
biogas-course/
  _config.yml                ← Jupyter Book configuration
  _toc.yml                   ← table of contents
  requirements.txt           ← Python dependencies
  intro.md                   ← home page / registration gate
  sessions/                  ← one .md file per session
  assets/                    ← images and downloadable resources
  _static/
    progress.js              ← progress tracking, badge system, Apps Script calls
    quiz.js                  ← quiz engine + Google Form submission
    quiz.css                 ← quiz styling
  apps-script/
    Code.gs                  ← paste into Google Apps Script editor
  .github/
    workflows/
      deploy.yml             ← auto-deploy on push to main
```

---

Built and maintained by [CREATIVenergie](https://creativenergie.co.uk).
