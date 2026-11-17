import glob
import re

for f in sorted(glob.glob('blog-details*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find section with Field Investigation Photo or images with text overlay
    matches = re.findall(r'<div class="relative[^"]*overflow-hidden">(.*?)</div>\s*</div>\s*</div>\s*</section>', c, re.DOTALL)
    print(f"=== {f} ===")
    # find all captions / overlay texts
    paras = re.findall(r'<p class="([^"]*)"[^>]*>(.*?)</p>', c, re.DOTALL)
    for cls, text in paras:
        if 'Shortwave' in text or 'AquaPure' in text or 'Sintex' in text or 'bacterial' in text or 'Four' in text or 'field' in text.lower():
            clean = re.sub(r'\s+', ' ', text).strip()
            print(f"  [{cls}] -> {clean[:100]}")
