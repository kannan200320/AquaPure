import re

for fname in ['blog.html', 'blog-details.html']:
    txt = open(fname, 'r', encoding='utf-8').read()
    m = re.search(r'<header.*?</header>', txt, re.DOTALL)
    if m:
        print(f"=== {fname} HEADER ===")
        print(m.group(0)[:500])
        print("...")
        print(m.group(0)[-500:])
