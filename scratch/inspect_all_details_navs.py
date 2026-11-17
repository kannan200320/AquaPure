import glob
import re

for fname in sorted(glob.glob('blog-details*.html')):
    txt = open(fname, 'r', encoding='utf-8').read()
    m = re.search(r'<nav class="hidden lg:flex.*?</nav>', txt, re.DOTALL)
    if m:
        print(f"=== {fname} ===")
        print(m.group(0))
