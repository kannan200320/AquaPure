import glob
import re

for f in sorted(glob.glob('blog-details*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find all img tags
    imgs = re.findall(r'<img[^>]+>', c)
    if len(imgs) > 2:
        print(f"{f} has {len(imgs)} images!")
    # check if any other sections have image or background-image
    bg_imgs = re.findall(r'bg-\[[^\]]+\]', c)
    if bg_imgs:
        print(f"{f} bg images: {bg_imgs}")
