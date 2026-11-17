import glob
import re

files = sorted(glob.glob('blog-details*.html'))
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    m = re.search(r'(<!-- =+\s*SECTION 3:.*?-->\s*<section.*?</section>)', c, re.DOTALL)
    if m:
        sec = m.group(1)
        # find img src and caption text
        img = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', sec)
        caption = re.search(r'<p[^>]*>(.*?)</p>', sec, re.DOTALL)
        c_text = re.sub(r'\s+', ' ', caption.group(1)).strip() if caption else 'None'
        print(f"=== {f} ===")
        print(f"  Img: {img.group(1) if img else 'None'}")
        print(f"  Caption: {c_text}")
