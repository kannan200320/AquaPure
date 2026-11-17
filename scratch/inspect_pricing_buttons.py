import re

with open('pricing.html', 'r', encoding='utf-8') as f:
    c = f.read()

matches = re.findall(r'<a[^>]+href=["\'][^"\']*book-service[^"\']*["\'][^>]*>(?:(?!</a>).)*?</a>', c, re.DOTALL)
for m in matches:
    cls = re.search(r'class=["\']([^"\']+)["\']', m)
    txt = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', m)).strip()
    print(f"[{txt}]: {cls.group(1) if cls else ''}")
