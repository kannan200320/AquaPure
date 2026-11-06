import os

filepath = r"c:\Users\KANNAN\Desktop\AquaPure\amc-membership.html"
with open(filepath, 'r', encoding='utf-8') as f:
    c = f.read()

target1 = '''          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white mt-4">
            <div>Col. R. K. Nambiar (Retd.)</div>
            <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">RWA President, Palm Grove</div>
          </div>'''
repl1 = '''          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-2.jpg" alt="Col. R. K. Nambiar (Retd.)" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Col. R. K. Nambiar (Retd.)</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">RWA President, Palm Grove</div>
            </div>
          </div>'''

target2 = '''          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white mt-4">
            <div>Meenakshi Sundaram</div>
            <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Cupertino Homeowner</div>
          </div>'''
repl2 = '''          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-5.jpg" alt="Meenakshi Sundaram" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-purple-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Meenakshi Sundaram</div>
              <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Cupertino Homeowner</div>
            </div>
          </div>'''

assert target1 in c, "target1 not found in amc-membership.html"
c = c.replace(target1, repl1, 1)

assert target2 in c, "target2 not found in amc-membership.html"
c = c.replace(target2, repl2, 1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated amc-membership.html successfully")

# book-service.html
filepath2 = r"c:\Users\KANNAN\Desktop\AquaPure\book-service.html"
with open(filepath2, 'r', encoding='utf-8') as f:
    c2 = f.read()

target3 = '''          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>David Reynolds</div>
            <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Santa Clara Homeowner</div>
          </div>'''
repl3 = '''          <div class="flex items-center gap-3 pt-2 border-t border-sky-100 dark:border-sky-800">
            <img src="assets/images/avatar-1.jpg" alt="David Reynolds" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-purple-500/50 shadow-sm">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">David Reynolds</div>
              <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Santa Clara Homeowner</div>
            </div>
          </div>'''

assert target3 in c2, "target3 not found in book-service.html"
c2 = c2.replace(target3, repl3, 1)

with open(filepath2, 'w', encoding='utf-8') as f:
    f.write(c2)
print("Updated book-service.html successfully")
