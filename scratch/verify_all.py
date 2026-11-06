import glob
import html.parser
import os
import re

class Validator(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
        self.errors = []
    def handle_starttag(self, tag, attrs):
        if tag not in self.void_tags:
            self.stack.append((tag, self.getpos()))
    def handle_endtag(self, tag):
        if tag in self.void_tags:
            return
        if not self.stack:
            self.errors.append(f'Unexpected closing tag </{tag}> at line {self.getpos()[0]}')
            return
        last, pos = self.stack.pop()
        if last != tag:
            self.errors.append(f'Mismatched tag: expected </{last}> from line {pos[0]}, got </{tag}> at line {self.getpos()[0]}')

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))
total_syntax_errors = 0
missing_favicons = []
missing_img_refs = []

print("=== 1. HTML SYNTAX VALIDATION ===")
for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    v = Validator()
    v.feed(content)
    if v.errors or v.stack:
        total_syntax_errors += len(v.errors) + len(v.stack)
        print(f"FAILED {fname}: {v.errors[:3]}, unclosed: {len(v.stack)}")
    
    # Check favicon
    if 'assets/images/favicon.svg' not in content:
        missing_favicons.append(fname)
        
    # Check all img src paths
    srcs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    for src in srcs:
        if src.startswith('http') or src.startswith('data:'):
            continue
        full_path = os.path.normpath(os.path.join(r'c:\Users\KANNAN\Desktop\AquaPure', src))
        if not os.path.exists(full_path):
            missing_img_refs.append((fname, src))

print(f"Total HTML syntax errors: {total_syntax_errors}")
print(f"Files missing favicon: {len(missing_favicons)} {missing_favicons}")
print(f"Broken local image references: {len(missing_img_refs)} {missing_img_refs[:5]}")

print("\n=== 2. AVATAR USAGE AUDIT ===")
avatar_files = ['avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg', 'avatar-4.jpg', 'avatar-5.jpg']
for av in avatar_files:
    count = 0
    pages = []
    for f in html_files:
        c = open(f, encoding='utf-8').read()
        if av in c:
            count += c.count(av)
            pages.append(os.path.basename(f))
    print(f"{av}: used {count} times across {len(pages)} pages ({', '.join(pages[:5])}{'...' if len(pages)>5 else ''})")
