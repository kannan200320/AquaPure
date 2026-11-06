import glob
import re

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

for f in html_files:
    fname = f.split('\\')[-1]
    content = open(f, encoding='utf-8').read()
    
    # Find all rounded-full containers with initials
    matches = list(re.finditer(r'<div[^>]*rounded-full[^>]*>\s*([A-Z]{2})\s*</div>', content))
    if matches:
        print(f"\n==================== {fname} ({len(matches)} initial avatars) ====================")
        for m in matches:
            start = max(0, m.start() - 150)
            end = min(len(content), m.end() + 250)
            print(f"[{m.group(1)}]:\n{content[start:end]}\n" + "-"*40)
