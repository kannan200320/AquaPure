import glob
import re

for f in sorted(glob.glob('blog-details*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    imgs = re.findall(r'<img[^>]+>', c)
    print(f"{f}: {len(imgs)} images")
    for im in imgs:
        src = re.search(r'src=["\']([^"\']+)["\']', im)
        if src:
            print(f"  {src.group(1)}")
