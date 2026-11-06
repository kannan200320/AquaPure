import glob
import os
import re

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

favicon_tags = '''  <!-- Favicon (AquaPure Water Droplet Brand Logo) -->
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="alternate icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" href="assets/images/favicon.png">
'''

modified_count = 0
for f in html_files:
    content = open(f, encoding='utf-8').read()
    
    # Check if favicon already present
    if 'assets/images/favicon.svg' in content:
        print(f"Skipping {os.path.basename(f)}: already has favicon")
        continue
        
    # Remove any existing favicon tags if any
    content = re.sub(r'\s*<link[^>]*rel=["\'](?:shortcut )?icon["\'][^>]*>', '', content, flags=re.I)
    
    # Insert right after <meta charset="UTF-8">
    if '<meta charset="UTF-8">' in content:
        new_content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + favicon_tags, 1)
    elif '<meta charset="utf-8">' in content:
        new_content = content.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n' + favicon_tags, 1)
    elif '<head>' in content:
        new_content = content.replace('<head>', '<head>\n' + favicon_tags, 1)
    else:
        print(f"WARNING: Cannot find insertion point in {os.path.basename(f)}")
        continue
        
    with open(f, 'w', encoding='utf-8') as out:
        out.write(new_content)
    modified_count += 1
    print(f"Added favicon to {os.path.basename(f)}")

print(f"\nTotal files updated with favicon: {modified_count}/{len(html_files)}")
