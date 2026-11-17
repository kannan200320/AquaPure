import re

for fname in ['blog.html', 'blog-details.html']:
    txt = open(fname, 'r', encoding='utf-8').read()
    m = re.search(r'<div class="flex-1 overflow-y-auto.*?</nav>', txt, re.DOTALL)
    if m:
        print(f"=== {fname} MOBILE NAV LINKS ===")
        links = re.findall(r'<a [^>]*>(.*?)</a>|<button [^>]*>(.*?)</button>', m.group(0), re.DOTALL)
        for a, b in links:
            t = (a or b).strip()
            clean = re.sub(r'<[^>]+>', ' ', t).strip()
            clean = re.sub(r'\s+', ' ', clean)
            if clean:
                print("  -", clean)
