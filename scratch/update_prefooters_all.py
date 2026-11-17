import glob
import re

# 1. Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_about_sec = re.search(r'<section class="py-16 bg-gradient-to-r from-cyan-600 to-teal-700.*?</section>', c, re.DOTALL)
if old_about_sec:
    new_about_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Experience The AquaPure Standard</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Join our growing family of satisfied homeowners who never compromise on the purity and safety of their water.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Book Your Visit Today</span>
        </a>
        <a href="contact.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-envelope text-cyan-600 dark:text-cyan-400"></i>
          <span>Contact Our Engineering Office</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_about_sec.group(0), new_about_sec)
    with open('about.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated about.html")

# 2. Update services.html
with open('services.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_services_sec = re.search(r'<section class="py-16 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600.*?</section>', c, re.DOTALL)
if old_services_sec:
    new_services_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Ready For Pure, Silt-Free Domestic Water?</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Book your mechanized 7-stage tank or sump cleaning today. Safe for children, gentle on plumbing, and 100% verified.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Schedule Visit Now</span>
        </a>
        <a href="pricing.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-tags text-cyan-600 dark:text-cyan-400"></i>
          <span>View Pricing Packages</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_services_sec.group(0), new_services_sec)
    with open('services.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated services.html")

# 3. Update pricing.html
with open('pricing.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_pricing_sec = re.search(r'<section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white">.*?</section>', c, re.DOTALL)
if old_pricing_sec:
    new_pricing_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-black uppercase tracking-wider">
          Certified Health Protection
        </span>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-black dark:text-white">
          Invest In Your Family's Daily Health
        </h2>
        <p class="text-sm sm:text-base font-semibold max-w-2xl mx-auto text-black dark:text-white leading-relaxed">
          Clean water in under 60 seconds. Select your package, pick your preferred date and time slot, and experience the AquaPure difference.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
            <i class="fas fa-calendar-check text-lg"></i>
            <span>Schedule Cleaning Visit Now</span>
          </a>
          <a href="tel:+18004389283" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
            <i class="fas fa-phone text-cyan-600 dark:text-cyan-400"></i>
            <span>Call: 1-800-AQUA-PURE</span>
          </a>
        </div>
      </div>
    </section>"""
    c = c.replace(old_pricing_sec.group(0), new_pricing_sec)
    with open('pricing.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated pricing.html")

# 4. Update home-family.html
with open('home-family.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_family_sec = re.search(r'<section class="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600.*?</section>', c, re.DOTALL)
if old_family_sec:
    new_family_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Give Your Family The Gift Of Pure Water</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Schedule your Family Safe 7-stage chemical-free tank and sump cleaning today. Safe for infants, gentle on skin, and 100% pure.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Schedule Family Safe Clean</span>
        </a>
        <a href="pricing.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-tags text-teal-600 dark:text-teal-400"></i>
          <span>Compare Family Packages</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_family_sec.group(0), new_family_sec)
    with open('home-family.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated home-family.html")

# 5. Update service-details.html
with open('service-details.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_sd_sec = re.search(r'<section class="py-16 bg-gradient-to-r from-cyan-600 to-teal-700.*?</section>', c, re.DOTALL)
if old_sd_sec:
    new_sd_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 space-y-6">
      <h2 class="text-3xl sm:text-5xl font-black text-black dark:text-white">Experience The Scientific Difference</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Book your 7-stage mechanized cleaning visit today. No bleaching smell, zero water wastage, and complete microbiological laboratory report included.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Book Service Now</span>
        </a>
        <a href="pricing.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calculator text-cyan-600 dark:text-cyan-400"></i>
          <span>View Pricing Packages</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_sd_sec.group(0), new_sd_sec)
    with open('service-details.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated service-details.html")

# 6. Update amc-membership.html
with open('amc-membership.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_amc_sec = re.search(r'<section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white transition-colors">.*?</section>', c, re.DOTALL)
if old_amc_sec:
    new_amc_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white">
        Ready For 365 Days of Guaranteed Pure Water?
      </h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Join over 24,000 households that enjoy proactive, chemical-free overhead tank and sump maintenance with automated scheduling and zero water wastage.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html?plan=gold" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-award text-lg"></i>
          <span>Enroll in Gold AMC Online</span>
        </a>
        <a href="contact.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-headset text-cyan-600 dark:text-cyan-400"></i>
          <span>Speak With An AMC Specialist</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_amc_sec.group(0), new_amc_sec)
    with open('amc-membership.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated amc-membership.html")

# 7. Update blog.html
with open('blog.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_blog_sec = re.search(r'<section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white">.*?</section>', c, re.DOTALL)
if old_blog_sec:
    new_blog_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-black uppercase tracking-wider">
          Certified Home Protection
        </span>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-black dark:text-white">
          Protect Your Family with Lab-Certified Pure Water Today
        </h2>
        <p class="text-sm sm:text-base font-semibold max-w-2xl mx-auto text-black dark:text-white leading-relaxed">
          Schedule your 7-stage mechanized tank and sump sanitization visit now. Certified technicians, transparent upfront pricing, and 100% germ-free water guaranteed.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
            <i class="fas fa-calendar-check text-lg"></i>
            <span>Schedule Cleaning Visit Now</span>
          </a>
          <a href="tel:+18004389283" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
            <i class="fas fa-phone text-cyan-600 dark:text-cyan-400"></i>
            <span>Call: 1-800-AQUA-PURE</span>
          </a>
        </div>
      </div>
    </section>"""
    c = c.replace(old_blog_sec.group(0), new_blog_sec)
    with open('blog.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated blog.html")

# 8. Update book-service.html
with open('book-service.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_bs_sec = re.search(r'<section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white transition-colors">.*?</section>', c, re.DOTALL)
if old_bs_sec:
    new_bs_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white">
        Protect Your Family's Water Supply Today
      </h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Join over 48,000 satisfied homeowners who enjoy sparkling clean, odorless, and bacterial-free tap water every single day.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="#booking-wizard-form" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Reserve Your Slot Online</span>
        </a>
        <a href="amc-membership.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-shield-halved text-cyan-600 dark:text-cyan-400"></i>
          <span>Explore AMC Membership Plans</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_bs_sec.group(0), new_bs_sec)
    with open('book-service.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated book-service.html")

# 9. Update contact.html
with open('contact.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_contact_sec = re.search(r'<section class="py-16 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white">.*?</section>', c, re.DOTALL)
if old_contact_sec:
    new_contact_sec = """<section class="py-16 sm:py-20 bg-sky-50 dark:bg-[#0c1e33] border-t border-sky-200 dark:border-sky-800 text-center transition-colors">
    <div class="max-w-5xl mx-auto px-4 text-center space-y-6">
      <span class="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-black uppercase tracking-wider">
        Your Family Deserves Pure, Safe Water
      </span>
      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">Ready For Completely Clean, Silt-Free Tanks?</h2>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Speak with a certified water hygiene engineer today or book your preferred appointment slot in under 60 seconds.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
          <i class="fas fa-calendar-check text-lg"></i>
          <span>Book Online Visit</span>
        </a>
        <a href="tel:+18004389283" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
          <i class="fas fa-phone-volume text-cyan-600 dark:text-cyan-400"></i>
          <span>Call 1-800-AQUA-PURE</span>
        </a>
      </div>
    </div>
  </section>"""
    c = c.replace(old_contact_sec.group(0), new_contact_sec)
    with open('contact.html', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c)
    print("Updated contact.html")

print("Finished updating main page pre-footers!")
