import re

with open('home-family.html', 'r', encoding='utf-8') as f:
    c = f.read()

matches = re.findall(r'<a[^>]+class=["\']([^"\']+)["\'][^>]*>(?:(?!</a>).)*?</a>', c, re.DOTALL)
for m in matches:
    if 'rounded' in m:
        print(m[:100])
