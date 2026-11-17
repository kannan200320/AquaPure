import re

for fname in ['index.html', 'dashboard.html', 'blog-details.html']:
    txt = open(fname, 'r', encoding='utf-8').read()
    btns = re.findall(r'<button[^>]*rtl-toggle[^>]*>.*?</button>', txt, re.DOTALL)
    print(f"=== {fname} ===")
    for b in btns:
        print(" ", b.replace('\n', ' '))
