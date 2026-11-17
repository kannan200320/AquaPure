import re

with open('blog.html', 'r', encoding='utf-8') as f:
    blog_txt = f.read()

m = re.search(r'<nav class="hidden lg:flex.*?</nav>', blog_txt, re.DOTALL)
if m:
    print("=== BLOG.HTML NAV ===")
    print(m.group(0))

with open('blog-details.html', 'r', encoding='utf-8') as f:
    details_txt = f.read()

m2 = re.search(r'<nav class="hidden lg:flex.*?</nav>', details_txt, re.DOTALL)
if m2:
    print("=== BLOG-DETAILS.HTML NAV ===")
    print(m2.group(0))
