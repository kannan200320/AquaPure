import glob
import re

for f in ['index.html', 'about.html', 'services.html', 'pricing.html', 'home-family.html', 'blog.html', 'contact.html', 'amc-membership.html', 'service-details.html']:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find lines mentioning book-service.html
    lines = c.splitlines()
    print(f"=== {f} ===")
    found = 0
    for i, line in enumerate(lines):
        if 'book-service.html' in line and ('Hero' in c[max(0, c.rfind('<!--', 0, c.find(line))):c.find(line)] or i < 400):
            # check if inside nav
            if 'mobile-menu' in c[max(0, c.find(line)-500):c.find(line)]:
                continue
            if 'Desktop Navigation' in c[max(0, c.find(line)-500):c.find(line)]:
                continue
            print(f"  Line {i+1}: {line.strip()[:130]}")
            found += 1
            if found >= 2:
                break
