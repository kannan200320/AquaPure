import glob
import re

for f in sorted(glob.glob('*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # Find hero section (usually SECTION 2 or hero or between </header> and first 3000 chars)
    header_end = c.find('</header>')
    if header_end != -1:
        hero_chunk = c[header_end:header_end + 3500]
        # find primary button (usually links to book-service.html)
        btn_tags = re.findall(r'(<a[^>]+href=["\'](?:book-service\.html|pricing\.html|#)[^"\']*["\'][^>]*>(?:(?!</a>).)*?</a>)', hero_chunk, re.DOTALL)
        if btn_tags:
            print(f"=== {f} ===")
            for b in btn_tags[:2]:
                m_class = re.search(r'class=["\']([^"\']+)["\']', b)
                text = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', b)).strip()
                if m_class:
                    print(f"  Hero CTA [{text}]: {m_class.group(1)}")
