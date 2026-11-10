import glob
import re

for f in sorted(glob.glob('*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    ctas = re.findall(r'<a[^>]+href=["\']book-service\.html["\'][^>]*>(.*?)</a>', c, re.DOTALL)
    if ctas:
        clean_ctas = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', x)).strip() for x in ctas]
        page_ctas = [x for x in clean_ctas if 'Book Service' not in x]
        if page_ctas:
            print(f'{f:25} -> {page_ctas}')
