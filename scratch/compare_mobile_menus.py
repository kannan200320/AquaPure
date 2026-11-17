import re

for fname in ['blog.html', 'blog-details.html']:
    txt = open(fname, 'r', encoding='utf-8').read()
    m = re.search(r'<div id="mobile-menu".*?</div>\s*</div>\s*</div>', txt, re.DOTALL)
    if m:
        print(f"=== {fname} MOBILE MENU ===")
        print(m.group(0)[:400])
        print("...")
        print(m.group(0)[-400:])
