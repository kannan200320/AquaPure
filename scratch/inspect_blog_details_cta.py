import glob
import re

files = sorted(glob.glob('blog-details*.html'))
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find cta block
    m = re.search(r'(<div class="[^"]*rounded-3xl bg-sky-50 dark:bg-\[#0c1e33\].*?</div>\s*</div>)', c, re.DOTALL)
    if m:
        block = m.group(1)
        # extract links
        links = re.findall(r'<a[^>]+>(.*?)</a>', block, re.DOTALL)
        clean = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', l)).strip() for l in links]
        print(f"{f}: {clean}")
