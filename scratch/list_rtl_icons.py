import glob
import re

for f in sorted(glob.glob('*.html')):
    txt = open(f, 'r', encoding='utf-8').read()
    buttons = re.findall(r'<button[^>]*rtl-toggle[^>]*>.*?</button>', txt, re.DOTALL)
    for b in buttons:
        has_i = '<i' in b
        text_only = 'rtl-toggle-text' in b
        if has_i:
            print(f, "HAS ICON:", b.replace('\n', ' '))
