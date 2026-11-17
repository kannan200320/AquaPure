import glob
import re

for f in sorted(glob.glob('*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find pre-footer section (usually section before <footer>)
    footer_idx = c.find('<footer')
    if footer_idx != -1:
        before_footer = c[max(0, footer_idx - 3000):footer_idx]
        # find cta buttons in before_footer
        links = re.findall(r'<a[^>]+href=["\'](?:book-service\.html|pricing\.html|contact\.html)[^"\']*["\'][^>]*>(.*?)</a>', before_footer, re.DOTALL)
        clean_links = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', l)).strip() for l in links]
        # find button classes
        btn_tags = re.findall(r'(<a[^>]+href=["\'](?:book-service\.html|pricing\.html|contact\.html)[^"\']*["\'][^>]*>)', before_footer)
        print(f"=== {f} ===")
        for b in btn_tags[:3]:
            # extract class
            m = re.search(r'class=["\']([^"\']+)["\']', b)
            if m:
                print(f"  Pre-footer CTA class: {m.group(1)}")
