import math
from PIL import Image, ImageDraw

# Create SVG
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="aquaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#aquaGrad)" />
  <!-- FontAwesome droplet shape -->
  <path d="M32 12 C32 12 18 30 18 40 C18 47.732 24.268 54 32 54 C39.732 54 46 47.732 46 40 C46 30 32 12 32 12 Z" fill="#ffffff" filter="url(#shadow)" />
  <!-- Inner water reflection highlight -->
  <path d="M36 28 C36 28 41 35 41 40 C41 44 38.5 47 35 47 C37 45 38 42.5 38 40 C38 35.5 34.5 30.5 36 28 Z" fill="rgba(255,255,255,0.45)" />
</svg>
'''

with open(r'c:\Users\KANNAN\Desktop\AquaPure\assets\images\favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

# Render a high-res PNG for favicon
# 256x256 rendered and resized for smooth antialiasing
size = 256
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw rounded rectangle gradient
radius = 64
for y in range(size):
    for x in range(size):
        # check if inside rounded rect
        # corner centers: (radius, radius), (size-radius, radius), (radius, size-radius), (size-radius, size-radius)
        in_rect = False
        if radius <= x <= size - radius or radius <= y <= size - radius:
            in_rect = True
        else:
            cx = radius if x < radius else size - radius
            cy = radius if y < radius else size - radius
            if (x - cx)**2 + (y - cy)**2 <= radius**2:
                in_rect = True
                
        if in_rect:
            # gradient from bottom-left (cyan: 6, 182, 212) to top-right (teal: 20, 184, 166)
            t = (x + (size - y)) / (2 * size)
            r = int(6 + (20 - 6) * t)
            g = int(182 + (184 - 182) * t)
            b = int(212 + (166 - 212) * t)
            img.putpixel((x, y), (r, g, b, 255))

# Draw water droplet
# Droplet tip at (128, 48), bottom center at (128, 160), radius 50
# We can draw multiple filled circles and polygon
drop_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
drop_draw = ImageDraw.Draw(drop_img)

# Bottom circle center: (128, 158), radius 54
drop_draw.ellipse([128 - 54, 158 - 54, 128 + 54, 158 + 54], fill=(255, 255, 255, 255))
# Tangent lines to tip (128, 48)
drop_draw.polygon([(128, 48), (128 - 50, 140), (128 + 50, 140)], fill=(255, 255, 255, 255))

# Composite
img = Image.alpha_composite(img, drop_img)

# Save 64x64 and 32x32
fav64 = img.resize((64, 64), Image.LANCZOS)
fav64.save(r'c:\Users\KANNAN\Desktop\AquaPure\assets\images\favicon.png', 'PNG')
fav32 = img.resize((32, 32), Image.LANCZOS)
fav32.save(r'c:\Users\KANNAN\Desktop\AquaPure\assets\images\favicon-32x32.png', 'PNG')
fav16 = img.resize((16, 16), Image.LANCZOS)
fav16.save(r'c:\Users\KANNAN\Desktop\AquaPure\assets\images\favicon-16x16.png', 'PNG')

print("Favicon files generated successfully!")
