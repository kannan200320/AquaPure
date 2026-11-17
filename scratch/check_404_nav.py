import re

for f in ['404.html', 'coming-soon.html']:
    txt = open(f, 'r', encoding='utf-8').read()
    m = re.search(r'<nav class="hidden lg:flex.*?</nav>', txt, re.DOTALL)
    if m:
        print(f, "Nav:", m.group(0)[:60])
    else:
        print(f, "No desktop nav")
