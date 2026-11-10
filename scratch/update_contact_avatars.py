with open('contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

target1 = """          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <div class="font-bold text-sm text-black dark:text-white">David K.</div>
            <div class="text-xs text-black dark:text-white">Sunnyvale Homeowner</div>
          </div>"""

replacement1 = """          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-1.jpg" alt="David K." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">David K.</div>
              <div class="text-xs font-semibold text-black dark:text-white">Sunnyvale Homeowner</div>
            </div>
          </div>"""

target2 = """          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <div class="font-bold text-sm text-black dark:text-white">Priya N.</div>
            <div class="text-xs text-black dark:text-white">RWA Committee President</div>
          </div>"""

replacement2 = """          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-3.jpg" alt="Priya N." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Priya N.</div>
              <div class="text-xs font-semibold text-black dark:text-white">RWA Committee President</div>
            </div>
          </div>"""

target3 = """          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <div class="font-bold text-sm text-black dark:text-white">Marcus T.</div>
            <div class="text-xs text-black dark:text-white">Mountain View Villa Owner</div>
          </div>"""

replacement3 = """          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-2.jpg" alt="Marcus T." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Marcus T.</div>
              <div class="text-xs font-semibold text-black dark:text-white">Mountain View Villa Owner</div>
            </div>
          </div>"""

c_norm = content.replace('\r\n', '\n')
t1_norm = target1.replace('\r\n', '\n')
t2_norm = target2.replace('\r\n', '\n')
t3_norm = target3.replace('\r\n', '\n')
r1_norm = replacement1.replace('\r\n', '\n')
r2_norm = replacement2.replace('\r\n', '\n')
r3_norm = replacement3.replace('\r\n', '\n')

assert t1_norm in c_norm, 'Target 1 not found'
assert t2_norm in c_norm, 'Target 2 not found'
assert t3_norm in c_norm, 'Target 3 not found'

c_norm = c_norm.replace(t1_norm, r1_norm)
c_norm = c_norm.replace(t2_norm, r2_norm)
c_norm = c_norm.replace(t3_norm, r3_norm)

with open('contact.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c_norm)

print('Successfully updated contact.html with avatars!')
