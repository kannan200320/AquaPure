import glob
import re

# 1. Update RTL toggle buttons
html_files = sorted(glob.glob('*.html'))
rtl_updated = []

for fname in html_files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalize CRLF
    normalized = content.replace('\r\n', '\n')
    
    # Pattern to match rtl-toggle buttons that contain the arrow icon
    pattern = r'(<button class="rtl-toggle[^"]*)[ ]*(items-center)[ ]*([^"]*"[^>]*>)\s*<i class="fas fa-arrow-left text-xs"></i>\s*(<span class="rtl-toggle-text">.*?</span>\s*</button>)'
    
    def repl(m):
        prefix = m.group(1)
        classes = m.group(3)
        span_and_end = m.group(4)
        if 'justify-center' not in classes:
            classes = ' justify-center ' + classes.lstrip()
        new_btn = f'{prefix} items-center{classes}\n            {span_and_end}'
        return new_btn

    new_content, count = re.subn(pattern, repl, normalized)
    
    # Also check if there's any remaining <i class="fas fa-arrow-left text-xs"></i> in any rtl-toggle
    if '<i class="fas fa-arrow-left text-xs"></i>' in new_content:
        pattern_fallback = r'(<button class="rtl-toggle[^>]*>)\s*<i class="fas fa-arrow-left text-xs"></i>\s*(<span class="rtl-toggle-text">.*?</span>\s*</button>)'
        def repl2(m):
            start = m.group(1)
            rest = m.group(2)
            if 'justify-center' not in start:
                start = start.replace('items-center', 'items-center justify-center')
            return f'{start}\n            {rest}'
        new_content, count2 = re.subn(pattern_fallback, repl2, new_content)
        count += count2

    if count > 0:
        with open(fname, 'w', encoding='utf-8', newline='\r\n') as f:
            f.write(new_content)
        rtl_updated.append((fname, count))

print(f"Updated RTL buttons in {len(rtl_updated)} files:")
for f, c in rtl_updated:
    print(f"  {f}: {c} button(s)")

# 2. Update Desktop nav in all 10 blog-details*.html files
with open('blog.html', 'r', encoding='utf-8') as f:
    blog_content = f.read().replace('\r\n', '\n')

nav_match = re.search(r'(<nav class="hidden lg:flex items-center gap-4 xl:gap-7.*?)(</nav>)', blog_content, re.DOTALL)
if not nav_match:
    raise ValueError("Could not find standard nav in blog.html")
standard_nav = nav_match.group(0)

blog_details_files = sorted(glob.glob('blog-details*.html'))
nav_updated = []

for fname in blog_details_files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read().replace('\r\n', '\n')
    
    old_nav_pattern = r'<nav class="hidden lg:flex items-center gap-3\.5 xl:gap-7.*?</nav>'
    if re.search(old_nav_pattern, content, re.DOTALL):
        new_content = re.sub(old_nav_pattern, standard_nav, content, flags=re.DOTALL)
        with open(fname, 'w', encoding='utf-8', newline='\r\n') as f:
            f.write(new_content)
        nav_updated.append(fname)
    else:
        print(f"WARNING: Old nav pattern not found in {fname}")

print(f"\nUpdated Desktop Navbar in {len(nav_updated)} files:")
for f in nav_updated:
    print(f"  {f}")
