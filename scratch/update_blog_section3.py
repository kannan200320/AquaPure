import glob
import re

files = sorted(glob.glob('blog-details*.html'))
updated = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    orig = c
    c_norm = c.replace('\r\n', '\n')

    # Pattern matching the Section 3 image inner container
    pattern = r'(<div class="relative h-72 sm:h-96 lg:h-\[450px\] overflow-hidden">\s*<img[^>]+loading="eager">\s*)<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>\s*<div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">\s*<div class="space-y-1">\s*<span class="px-3 py-1 rounded-full bg-cyan-600 text-white text-xs font-bold uppercase tracking-wider inline-block">\s*Field Investigation Photo\s*</span>\s*<p class="[^"]*">(.*?)</p>\s*</div>\s*<span class="text-xs font-bold text-white/80 shrink-0">\s*<i class="fas fa-camera mr-1"></i>\s*Verified Field Audit\s*</span>\s*</div>'

    def repl(m):
        prefix = m.group(1)
        caption_text = m.group(2).strip()
        return f'''{prefix}<div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 article-image-caption-container flex flex-col sm:flex-row sm:items-end justify-between gap-3.5 z-10">
              <div class="space-y-2 p-3 sm:p-4 rounded-2xl bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl max-w-2xl">
                <div class="flex items-center gap-2">
                  <span class="px-3 py-1 rounded-full bg-cyan-600 text-white text-xs font-black uppercase tracking-wider inline-block shadow-sm">
                    Field Investigation Photo
                  </span>
                </div>
                <p class="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-relaxed m-0">
                  {caption_text}
                </p>
              </div>
              <span class="text-xs font-bold text-white px-3.5 py-2 rounded-xl bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 shrink-0 drop-shadow-sm flex items-center gap-1.5 shadow-xl">
                <i class="fas fa-camera text-cyan-400"></i>
                <span>Verified Field Audit</span>
              </span>
            </div>'''

    new_c, count = re.subn(pattern, repl, c_norm, flags=re.DOTALL)
    if count > 0:
        with open(f, 'w', encoding='utf-8', newline='\r\n') as fp:
            fp.write(new_c)
        updated += 1
        print(f"Updated Section 3 in {f}")
    else:
        print(f"Pattern did not match in {f}")

print(f"Total updated: {updated} files")
