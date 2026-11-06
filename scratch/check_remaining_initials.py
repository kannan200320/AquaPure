import glob
import re

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))
found_any = False
for f in html_files:
    fname = f.split('\\')[-1]
    c = open(f, encoding='utf-8').read()
    matches = re.findall(r'<div[^>]*rounded-full[^>]*>\s*([A-Z]{2})\s*</div>', c)
    if matches:
        found_any = True
        print(f"{fname}: remaining initial badges {matches}")

if not found_any:
    print("NO REMAINING INITIAL BADGES IN ANY HTML FILE!")
