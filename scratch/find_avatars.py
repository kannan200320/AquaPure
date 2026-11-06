import glob
import re
import os

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

print("=== SEARCHING FOR INITIALS AND AVATARS ===")
for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    
    # Check for initial badges like RK, PM, AS, DR, etc.
    # Pattern: circular container with 2 letters inside
    matches = re.findall(r'(<(?:div|span)[^>]*rounded-full[^>]*>\s*([A-Z]{2})\s*</(?:div|span)>)', content)
    if matches:
        print(f"\n--- {fname} has {len(matches)} initial badges ---")
        for full_tag, letters in matches:
            # print surrounding context
            idx = content.find(full_tag)
            surrounding = content[max(0, idx-100):min(len(content), idx+200)]
            print(f"  Badge [{letters}]: {surrounding.strip()[:150]}...")
            
    # Also check for 'avatar' or 'profile' or 'testimonial'
    avatar_imgs = re.findall(r'<img[^>]*avatar[^>]*>', content, re.I)
    if avatar_imgs:
        print(f"  {fname} has avatar img: {avatar_imgs}")
