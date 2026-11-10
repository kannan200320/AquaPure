import glob
import re

files = sorted(glob.glob('*.html'))
modified_files = []

for f in files:
    if f in ['dashboard.html', 'login-register.html']:
        continue
    
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    orig = content
    c_norm = content.replace('\r\n', '\n')
    
    # 1. Desktop nav
    c_norm = re.sub(
        r'<nav class="hidden xl:flex items-center gap-7 text-sm font-semibold whitespace-nowrap">',
        r'<nav class="hidden lg:flex items-center gap-4 xl:gap-7 text-xs lg:text-[13px] xl:text-sm font-semibold whitespace-nowrap">',
        c_norm
    )
    c_norm = re.sub(
        r'<nav class="hidden xl:flex items-center gap-7 text-sm font-bold">',
        r'<nav class="hidden lg:flex items-center gap-3.5 xl:gap-7 text-xs lg:text-[13px] xl:text-sm font-bold whitespace-nowrap">',
        c_norm
    )
    # Also handle if any had another variation
    c_norm = re.sub(
        r'<nav class="hidden xl:flex items-center gap-([0-9.]+) text-sm font-semibold',
        r'<nav class="hidden lg:flex items-center gap-4 xl:gap-7 text-xs lg:text-[13px] xl:text-sm font-semibold',
        c_norm
    )
    c_norm = re.sub(
        r'<nav class="hidden xl:flex',
        r'<nav class="hidden lg:flex',
        c_norm
    )
    
    # 2. Theme toggle
    c_norm = re.sub(
        r'theme-toggle hidden xl:flex',
        r'theme-toggle hidden lg:flex',
        c_norm
    )
    
    # 3. RTL toggle
    c_norm = re.sub(
        r'rtl-toggle hidden xl:flex',
        r'rtl-toggle hidden lg:flex',
        c_norm
    )
    
    # 4. Sign in button
    c_norm = re.sub(
        r'hidden xl:inline-flex items-center gap-2',
        r'hidden lg:inline-flex items-center gap-2',
        c_norm
    )
    
    # 5. Mobile menu button
    c_norm = re.sub(
        r'id="mobile-menu-btn" class="xl:hidden',
        r'id="mobile-menu-btn" class="lg:hidden',
        c_norm
    )
    
    # 6. Header container padding optimization for 1024px
    # Only replace within <header>
    def replace_header_container(match):
        header_block = match.group(0)
        header_block = header_block.replace(
            'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            'max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-8'
        )
        return header_block

    c_norm = re.sub(r'<header.*?</header>', replace_header_container, c_norm, flags=re.DOTALL)

    if c_norm != orig.replace('\r\n', '\n'):
        with open(f, 'w', encoding='utf-8', newline='\r\n') as fp:
            fp.write(c_norm)
        modified_files.append(f)

print(f'Modified {len(modified_files)} files: {modified_files}')
