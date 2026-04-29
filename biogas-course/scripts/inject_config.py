"""
Substitute %%PLACEHOLDER%% tokens in source files with environment variable values.

Usage:
  source _config.env
  python scripts/inject_config.py

After building, restore originals:
  git checkout -- _static/progress.js _static/quiz.js intro.md
"""
import os, sys

PLACEHOLDERS = {
    'APPS_SCRIPT_URL': None,
    'QUIZ_FORM_ID':    None,
    'ENTRY_NAME':      None,
    'ENTRY_CODE':      None,
    'ENTRY_SESSION':   None,
    'ENTRY_SCORE':     None,
    'REG_FORM_ID':     None,
    'REG_ENTRY_NAME':  None,
    'REG_ENTRY_EMAIL': None,
    'REG_ENTRY_CTRY':  None,
    'REG_ENTRY_CODE':  None,
}

TARGET_FILES = [
    '_static/progress.js',
    '_static/quiz.js',
    'intro.md',
]

missing = [k for k in PLACEHOLDERS if not os.environ.get(k)]
if missing:
    print(f"ERROR: missing environment variables: {', '.join(missing)}")
    print("Run:  source _config.env  before calling this script.")
    sys.exit(1)

for path in TARGET_FILES:
    with open(path, 'r') as f:
        content = f.read()
    for key in PLACEHOLDERS:
        content = content.replace(f'%%{key}%%', os.environ[key])
    with open(path, 'w') as f:
        f.write(content)
    print(f"  injected → {path}")

print("Done. Build with:  jupyter-book build .")
print("Restore with:      git checkout -- _static/progress.js _static/quiz.js intro.md")
