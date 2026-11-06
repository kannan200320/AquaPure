import glob
import re
import os

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

print("=== CHECKING FAVICONS ===")
for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    favicons = re.findall(r'<link[^>]*rel=["\'](?:shortcut )?icon["\'][^>]*>', content, re.IGNORECASE)
    print(f"{fname}: {favicons if favicons else 'NO FAVICON'}")

print("\n=== CHECKING LOGOS ===")
for f in html_files[:3]:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    logos = re.findall(r'<img[^>]*logo[^>]*>|<a[^>]*class="[^"]*logo[^"]*"[^>]*>.*?</a>', content, re.IGNORECASE | re.DOTALL)
    print(f"{fname} logos: {logos[:2]}")

print("\n=== CHECKING INITIAL BADGES / AVATARS ===")
# Search for RK, PM, AS, DR, SM, VK or initial badges or avatar classes
patterns = [r'w-1[012]\s+h-1[012]\s+rounded-full[^>]*>[A-Z]{2}<', r'avatar', r'testimonial', r'feedback']
for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    initial_matches = re.findall(r'rounded-full[^>]*>\s*([A-Z]{2})\s*<', content)
    if initial_matches:
        print(f"{fname} initial badges: {initial_matches}")
