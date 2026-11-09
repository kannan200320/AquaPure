import re

# ==============================================================================
# Helper to replace a unique block in a file
# ==============================================================================
def replace_in_file(filepath, old_str, new_str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if old_str not in content:
        print(f"FAILED to find target in {filepath}")
        return False
    content = content.replace(old_str, new_str, 1)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated {filepath}")
    return True

# ------------------------------------------------------------------------------
# 1. index.html - Testimonials (Image 1) & FAQ 1st question hidden
# ------------------------------------------------------------------------------
def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Testimonials
    old_test = '''      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full">
          <div>
            <div class="flex text-amber-400 gap-1 text-sm mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[6.5rem]">
              "We were shocked when the AquaPure team showed us photos inside our rooftop tank. There was 4 inches of black silt at the bottom! Within an hour, they scoured it spotlessly clean and UV treated it. The tap water smells sweet and pure again."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-1.jpg" alt="Rajesh Khanna" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Rajesh Khanna</div>
              <div class="text-xs font-semibold text-black dark:text-white">Villa Owner, Sunnyvale, CA</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full">
          <div>
            <div class="flex text-amber-400 gap-1 text-sm mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[6.5rem]">
              "With two toddler twins at home, clean bathing water is non-negotiable. AquaPure’s AMC plan has been a blessing. They automatically send reminders every 4 months and their technicians are extremely courteous and punctual."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-3.jpg" alt="Pooja Menon" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Pooja Menon</div>
              <div class="text-xs font-semibold text-black dark:text-white">Homeowner & Mother, Bay Area</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full">
          <div>
            <div class="flex text-amber-400 gap-1 text-sm mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[6.5rem]">
              "Our 120-flat apartment society signed up for the AquaPure Commercial AMC. They completed our massive 50,000L underground sump and 8 rooftop tanks in 48 hours with minimal water disruption. Outstanding professional service."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-2.jpg" alt="Anil Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Anil Sharma</div>
              <div class="text-xs font-semibold text-black dark:text-white">Secretary, Silver Oaks RWA</div>
            </div>
          </div>
        </div>
      </div>'''

    new_test = '''      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 gap-1 text-sm mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[7rem] flex-1 flex items-start">
              "We were shocked when the AquaPure team showed us photos inside our rooftop tank. There was 4 inches of black silt at the bottom! Within an hour, they scoured it spotlessly clean and UV treated it. The tap water smells sweet and pure again."
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-1.jpg" alt="Rajesh Khanna" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Rajesh Khanna</div>
              <div class="text-xs font-semibold text-black dark:text-white">Villa Owner, Sunnyvale, CA</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 gap-1 text-sm mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[7rem] flex-1 flex items-start">
              "With two toddler twins at home, clean bathing water is non-negotiable. AquaPure’s AMC plan has been a blessing. They automatically send reminders every 4 months and their technicians are extremely courteous and punctual."
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-3.jpg" alt="Pooja Menon" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Pooja Menon</div>
              <div class="text-xs font-semibold text-black dark:text-white">Homeowner & Mother, Bay Area</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 gap-1 text-sm mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white italic leading-relaxed min-h-[7rem] flex-1 flex items-start">
              "Our 120-flat apartment society signed up for the AquaPure Commercial AMC. They completed our massive 50,000L underground sump and 8 rooftop tanks in 48 hours with minimal water disruption. Outstanding professional service."
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-2.jpg" alt="Anil Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-sm text-black dark:text-white">Anil Sharma</div>
              <div class="text-xs font-semibold text-black dark:text-white">Secretary, Silver Oaks RWA</div>
            </div>
          </div>
        </div>
      </div>'''

    if old_test in content:
        content = content.replace(old_test, new_test, 1)
        print("Updated index.html testimonials")
    else:
        print("Could not find index.html testimonials")

    # 2. FAQ 1st question hidden
    old_faq1 = '<div class="faq-accordion-content p-5 pt-0'
    new_faq1 = '<div class="faq-accordion-content hidden p-5 pt-0'
    if old_faq1 in content:
        content = content.replace(old_faq1, new_faq1, 1)
        print("Updated index.html faq hidden")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_index()
