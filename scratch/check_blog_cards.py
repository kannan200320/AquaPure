import re

with open('blog.html', 'r', encoding='utf-8') as f:
    c = f.read()

# search for image containers or overlays in blog.html
imgs = re.findall(r'<div[^>]*class="[^"]*relative[^"]*"[^>]*>(?:(?!</div>).)*?<img[^>]*>.*?</div>', c, re.DOTALL)
print(f"blog.html relative img containers: {len(imgs)}")
for im in imgs[:5]:
    print(im[:200])
