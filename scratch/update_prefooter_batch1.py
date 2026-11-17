import glob
import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_index_prefooter = """  <section class="py-16 bg-gradient-to-r from-cyan-600 to-teal-700 text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black">Protect Your Family's Water Today</h2>
      <p class="text-xs sm:text-sm font-semibold text-sky-100 max-w-2xl mx-auto">
        Join over 48,000 households enjoying clean, crystal-clear, germ-free water. Book your mechanized tank and sump cleaning visit in under 60 seconds.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] font-black text-base shadow-xl hover:bg-sky-50 transition-all">
          Schedule Visit Now
        </a>
        <a href="tel:+18004389283" class="px-8 py-4 rounded-2xl bg-cyan-900/40 hover:bg-cyan-900/60 border border-white/30 text-white font-extrabold text-base transition-all">
          Call: 1-800-AQUA-PURE
        </a>
      </div>
    </div>
  </section>"""

new_index_prefooter = """  <section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Protect Your Family's Water Today</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Join over 48,000 households enjoying clean, crystal-clear, germ-free water. Book your mechanized tank and sump cleaning visit in under 60 seconds.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Schedule Visit Now</span>
        </a>
        <a href="tel:+18004389283" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-phone text-cyan-600 dark:text-cyan-400"></i>
          <span>Call: 1-800-AQUA-PURE</span>
        </a>
      </div>
    </div>
  </section>"""

assert old_index_prefooter in c, "old_index_prefooter not found"
c = c.replace(old_index_prefooter, new_index_prefooter)

# Also update AMC banner card in index.html (line 753)
old_amc_btn = '<a href="amc-membership.html" class="px-6 py-3 rounded-xl bg-white text-cyan-700 font-extrabold text-sm shadow-md hover:bg-sky-50 transition-all">Join AMC Plan From $89/yr</a>'
new_amc_btn = '<a href="amc-membership.html" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-sm shadow-md transition-all">Join AMC Plan From $89/yr</a>'
c = c.replace(old_amc_btn, new_amc_btn)

with open('index.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c)
print("Updated index.html")

# 2. Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_about_prefooter = """  <section class="py-16 bg-gradient-to-r from-cyan-600 to-teal-700 text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black">Experience The AquaPure Standard</h2>
      <p class="text-base sm:text-lg font-medium text-sky-100 max-w-2xl mx-auto">
        Join our growing family of satisfied homeowners who never compromise on the purity and safety of their household water.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] font-black text-base shadow-xl hover:bg-sky-50 transition-all flex items-center gap-2">
          <i class="fas fa-calendar-check"></i>
          <span>Book Your Visit Today</span>
        </a>
        <a href="services.html" class="px-8 py-4 rounded-2xl bg-cyan-900/40 hover:bg-cyan-900/60 border border-white/30 text-white font-extrabold text-base transition-all flex items-center gap-2">
          <i class="fas fa-microscope text-cyan-300"></i>
          <span>Explore Technology</span>
        </a>
      </div>
    </div>
  </section>"""

new_about_prefooter = """  <section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Experience The AquaPure Standard</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Join our growing family of satisfied homeowners who never compromise on the purity and safety of their household water.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Book Your Visit Today</span>
        </a>
        <a href="services.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-microscope text-cyan-600 dark:text-cyan-400"></i>
          <span>Explore Technology</span>
        </a>
      </div>
    </div>
  </section>"""

assert old_about_prefooter in c, "old_about_prefooter not found"
c = c.replace(old_about_prefooter, new_about_prefooter)
with open('about.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c)
print("Updated about.html")

# 3. Update services.html
with open('services.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_services_prefooter = """  <section class="py-16 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black">Ready For Pure, Silt-Free Domestic Water?</h2>
      <p class="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto">
        Book your mechanized 7-stage tank or sump cleaning today. Safe for children, gentle on plumbing, and certified germ-free.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] font-black text-base shadow-xl hover:bg-sky-50 transition-all flex items-center gap-2">
          <i class="fas fa-calendar-check"></i>
          <span>Schedule Visit Now</span>
        </a>
        <a href="pricing.html" class="px-8 py-4 rounded-2xl bg-cyan-900/50 hover:bg-cyan-900/80 border border-white/30 text-white font-extrabold text-base transition-all flex items-center gap-2">
          <i class="fas fa-calculator text-cyan-300"></i>
          <span>View Pricing Plans</span>
        </a>
      </div>
    </div>
  </section>"""

new_services_prefooter = """  <section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Ready For Pure, Silt-Free Domestic Water?</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Book your mechanized 7-stage tank or sump cleaning today. Safe for children, gentle on plumbing, and certified germ-free.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Schedule Visit Now</span>
        </a>
        <a href="pricing.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calculator text-cyan-600 dark:text-cyan-400"></i>
          <span>View Pricing Plans</span>
        </a>
      </div>
    </div>
  </section>"""

assert old_services_prefooter in c, "old_services_prefooter not found"
c = c.replace(old_services_prefooter, new_services_prefooter)
with open('services.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c)
print("Updated services.html")
