import glob
import re

files = glob.glob('*.html') + glob.glob('assets/js/*.js') + glob.glob('assets/css/*.css')

for f in sorted(files):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find rtl-toggle
    matches = re.findall(r'<button[^>]*rtl-toggle[^>]*>.*?</button>', c, re.DOTALL)
    if matches:
        print(f"=== {f} ===")
        for m in matches:
            clean = re.sub(r'\s+', ' ', m)
            print(f"  {clean}")
