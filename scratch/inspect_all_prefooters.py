import glob
import re

files = sorted(glob.glob('*.html'))
for f in files:
    if f in ['404.html', 'coming-soon.html', 'dashboard.html', 'login-register.html']:
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    footer_idx = c.find('<footer')
    if footer_idx != -1:
        sec_idx = c.rfind('<section', 0, footer_idx)
        if sec_idx != -1:
            sec_code = c[sec_idx:footer_idx].strip()
            print(f"=== {f} ===")
            lines = [l.strip() for l in sec_code.splitlines() if l.strip()]
            for l in lines[:10]:
                print(f"  {l[:100]}")
            for l in lines[-6:]:
                print(f"  ... {l[:100]}")
