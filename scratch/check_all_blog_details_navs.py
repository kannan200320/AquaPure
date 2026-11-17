import glob
import re

for f in sorted(glob.glob('blog-details*.html')):
    txt = open(f, 'r', encoding='utf-8').read()
    m = re.search(r'<nav class="hidden lg:flex.*?</nav>', txt, re.DOTALL)
    if m:
        is_dropdown = 'nav-dropdown' in m.group(0)
        print(f, "Dropdown nav:", is_dropdown)
    else:
        print(f, "No nav found!")
