import os

for root, dirs, files in os.walk(r'c:\Users\KANNAN\Desktop\AquaPure'):
    for f in files:
        if any(ext in f.lower() for ext in ['.svg', '.ico', '.png', '.jpg', '.webp']):
            print(os.path.join(root, f))
