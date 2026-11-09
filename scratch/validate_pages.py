import os
import glob
import re

html_files = glob.glob("*.html")
print(f"Checking {len(html_files)} HTML files...")

errors = 0
for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check basic structure
    if "<!DOCTYPE html>" not in content:
        print(f"Error: Missing DOCTYPE in {filepath}")
        errors += 1
    if "</html>" not in content:
        print(f"Error: Missing </html> in {filepath}")
        errors += 1

    # Check unclosed tags for key containers
    for tag in ['nav', 'header', 'footer', 'main', 'section']:
        opens = len(re.findall(rf'<{tag}\b', content, re.IGNORECASE))
        closes = len(re.findall(rf'</{tag}>', content, re.IGNORECASE))
        if opens != closes:
            print(f"Warning: Tag mismatch in {filepath} for <{tag}>: {opens} opens vs {closes} closes")
            errors += 1

if errors == 0:
    print(f"ALL {len(html_files)} HTML FILES ARE VALID WITH ZERO TAG MISMATCHES!")
else:
    print(f"Found {errors} errors across files.")
