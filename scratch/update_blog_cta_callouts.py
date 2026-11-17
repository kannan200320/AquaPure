import glob
import re

files = sorted(glob.glob('blog-details*.html'))
updated = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    c_norm = c.replace('\r\n', '\n')

    pattern = r'<!-- Consultation CTA Callout -->\s*<div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">\s*<div class="space-y-2 text-center sm:text-left max-w-xl">\s*<span class="[^"]*">\s*Immediate Preventive Action\s*</span>\s*<h3 class="text-2xl sm:text-3xl font-black tracking-tight">(.*?)</h3>\s*<p class="[^"]*">(.*?)</p>\s*</div>\s*<div class="flex flex-col sm:flex-row gap-3 shrink-0">\s*<a href="book-service\.html" class="px-6 py-3\.5 rounded-xl bg-white text-\[#042f2e\] font-black text-xs sm:text-sm shadow-xl hover:bg-sky-50 transition-all text-center">\s*(.*?)\s*</a>\s*<a href="pricing\.html" class="px-5 py-3\.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs sm:text-sm transition-all text-center">\s*(.*?)\s*</a>\s*</div>\s*</div>'

    def repl(m):
        heading = m.group(1).strip()
        desc = m.group(2).strip()
        btn1 = m.group(3).strip()
        btn2 = m.group(4).strip()
        return f'''<!-- Consultation CTA Callout -->
        <div class="p-8 sm:p-10 rounded-3xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
          <div class="space-y-2 text-center sm:text-left max-w-xl">
            <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-black uppercase tracking-wider inline-block">
              Immediate Preventive Action
            </span>
            <h3 class="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight">{heading}</h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              {desc}
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all text-center">
              <i class="fas fa-calendar-check text-sm"></i>
              <span>{btn1}</span>
            </a>
            <a href="pricing.html" class="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all text-center">
              <span>{btn2}</span>
            </a>
          </div>
        </div>'''

    new_c, count = re.subn(pattern, repl, c_norm, flags=re.DOTALL)
    if count > 0:
        with open(f, 'w', encoding='utf-8', newline='\r\n') as fp:
            fp.write(new_c)
        updated += 1
        print(f"Updated consultation CTA in {f}")
    else:
        print(f"Pattern did not match in {f}")

print(f"Total updated: {updated} files")
