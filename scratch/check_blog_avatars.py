c = open(r'c:\Users\KANNAN\Desktop\AquaPure\blog.html', encoding='utf-8').read()
import re
for m in re.finditer(r'<div[^>]*rounded-full[^>]*>\s*([A-Z]{2})\s*</div>', c):
    print(f"[{m.group(1)}]:\n" + c[m.start()-100:m.end()+200])
    print('='*40)
