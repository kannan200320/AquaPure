import glob
import re

content = open(r'c:\Users\KANNAN\Desktop\AquaPure\index.html', encoding='utf-8').read()
header_part = content[content.find('<header'):content.find('</header>')]
print("=== HEADER IN INDEX.HTML ===")
print(header_part[:1500])

print("\n=== IMAGES IN ASSETS ===")
import os
for img in sorted(os.listdir(r'c:\Users\KANNAN\Desktop\AquaPure\assets\images')):
    if any(k in img.lower() for k in ['logo', 'fav', 'icon', 'pure', 'brand', 'aqua']):
        print(img)
