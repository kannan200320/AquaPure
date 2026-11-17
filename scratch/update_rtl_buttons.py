import glob
import re

files = sorted(glob.glob('*.html'))
updated_count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    orig = c
    c_norm = c.replace('\r\n', '\n')

    # 1. Desktop header RTL button with gap-1.5 and icon
    pattern1 = r'(<button class="rtl-toggle hidden lg:flex h-9 px-3 rounded-xl[^"]*)" title="Toggle RTL / LTR">\s*<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*<span class="rtl-toggle-text">RTL</span>\s*</button>'
    replacement1 = r'<button class="rtl-toggle hidden lg:flex h-9 px-3.5 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white font-bold text-xs items-center justify-center transition-colors" title="Toggle RTL / LTR">\n            <span class="rtl-toggle-text">RTL</span>\n          </button>'
    c_norm = re.sub(pattern1, replacement1, c_norm)

    # 2. Mobile drawer RTL button with gap-1.5 and icon
    pattern2 = r'(<button class="rtl-toggle px-3\.5 py-2 rounded-2xl[^"]*)" title="Toggle RTL / LTR">\s*<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*<span class="rtl-toggle-text">RTL</span>\s*</button>'
    replacement2 = r'<button class="rtl-toggle px-3.5 py-2 rounded-2xl bg-sky-100 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex items-center justify-center text-xs font-bold text-black dark:text-white hover:border-cyan-500 transition-all shadow-sm" title="Toggle RTL / LTR">\n            <span class="rtl-toggle-text">RTL</span>\n          </button>'
    c_norm = re.sub(pattern2, replacement2, c_norm)

    # 3. login-register icon only button
    pattern3 = r'<button class="rtl-toggle w-9 h-9 rounded-xl[^"]*" title="Toggle RTL / LTR">\s*<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*</button>'
    replacement3 = r'<button class="rtl-toggle h-9 px-3.5 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white font-bold text-xs flex items-center justify-center transition-colors" title="Toggle RTL / LTR">\n            <span class="rtl-toggle-text">RTL</span>\n          </button>'
    c_norm = re.sub(pattern3, replacement3, c_norm)

    # 4. dashboard icon button in header
    pattern4 = r'<button class="rtl-toggle w-9 h-9 rounded-xl[^"]*" title="Toggle RTL / LTR">\s*<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*</button>'
    c_norm = re.sub(pattern4, replacement3, c_norm)

    # 5. dashboard sidebar button
    pattern5 = r'<button class="rtl-toggle px-3 py-2 rounded-2xl[^"]*" title="Toggle RTL / LTR">\s*<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*<span class="rtl-toggle-text">RTL</span>\s*</button>'
    replacement5 = r'<button class="rtl-toggle px-3.5 py-2 rounded-2xl bg-sky-100 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex items-center justify-center text-xs font-bold text-black dark:text-white shadow-sm" title="Toggle RTL / LTR">\n              <span class="rtl-toggle-text">RTL</span>\n            </button>'
    c_norm = re.sub(pattern5, replacement5, c_norm)

    # Generic catch-all for any remaining <i class="fas fa-arrow-right-arrow-left inside rtl-toggle
    # e.g., if any attribute variation existed
    def remove_arrow_in_rtl(m):
        btn = m.group(0)
        btn = re.sub(r'<i class="fas fa-arrow-right-arrow-left[^"]*"></i>\s*', '', btn)
        btn = btn.replace('gap-1.5', '')
        return btn

    c_norm = re.sub(r'<button[^>]*class="[^"]*rtl-toggle[^"]*"[^>]*>.*?</button>', remove_arrow_in_rtl, c_norm, flags=re.DOTALL)

    if c_norm != orig.replace('\r\n', '\n'):
        with open(f, 'w', encoding='utf-8', newline='\r\n') as fp:
            fp.write(c_norm)
        updated_count += 1
        print(f"Updated {f}")

print(f"Total updated: {updated_count} files")
