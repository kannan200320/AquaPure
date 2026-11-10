with open('home-family.html', 'r', encoding='utf-8') as f:
    content = f.read()

target1 = """          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base shadow-xl shadow-teal-600/25 transition-all">
              <i class="fas fa-baby"></i>
              <span>Schedule Family Safe Clean</span>
            </a>"""

replacement1 = """          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base shadow-xl shadow-teal-600/25 transition-all">
              <i class="fas fa-calendar-check"></i>
              <span>Schedule Family Safe Clean</span>
            </a>"""

target2 = """        <div class="text-center pt-2">
          <a href="book-service.html" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-sm shadow-md hover:from-teal-700 hover:to-cyan-700 transition-all inline-flex items-center gap-2">
            <i class="fas fa-shield-virus"></i>
            <span>Schedule Family Sanitization Now</span>
          </a>
        </div>"""

replacement2 = """        <div class="text-center pt-2">
          <a href="book-service.html" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-sm shadow-md hover:from-teal-700 hover:to-cyan-700 transition-all inline-flex items-center gap-2">
            <i class="fas fa-calendar-check"></i>
            <span>Schedule Family Safe Clean</span>
          </a>
        </div>"""

c_norm = content.replace('\r\n', '\n')
t1_norm = target1.replace('\r\n', '\n')
t2_norm = target2.replace('\r\n', '\n')
r1_norm = replacement1.replace('\r\n', '\n')
r2_norm = replacement2.replace('\r\n', '\n')

assert t1_norm in c_norm, 'Target 1 not found in home-family.html'
assert t2_norm in c_norm, 'Target 2 not found in home-family.html'

c_norm = c_norm.replace(t1_norm, r1_norm)
c_norm = c_norm.replace(t2_norm, r2_norm)

with open('home-family.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c_norm)

print('Successfully updated home-family.html primary CTAs!')
