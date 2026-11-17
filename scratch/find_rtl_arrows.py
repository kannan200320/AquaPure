import glob
import re

files = glob.glob('*.html') + glob.glob('assets/js/*.js') + glob.glob('assets/css/*.css')

for f in sorted(files):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # search for rtl-toggle or RTL with arrow
    matches = re.findall(r'.{0,30}RTL.{0,30}', c)
    for m in matches:
        if any(arrow in m for arrow in ['←', '&larr;', '&#8592;', '\\u2190', 'arrow', 'fa-']):
            print(f"{f}: {m.strip()}")
