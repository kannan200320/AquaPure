def update_services():
    with open('services.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update FAQs to interactive accordions
    old_faq = '''      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            How often should overhead water tanks and sumps be cleaned?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            The World Health Organization (WHO) and municipal water boards recommend professional cleaning at least once every 90 to 180 days (quarterly or semi-annually), especially if your water comes from groundwater or private tankers.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            Will our household experience water outages during the cleaning?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            The actual cleaning takes only 60 to 90 minutes. We instruct homeowners to let the tank water drop naturally before our arrival. As soon as we finish UV disinfection, your booster pump can refill fresh water immediately.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            Can you clean deep RCC sumps with small manhole openings?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            Yes. Our equipment includes modular 2-inch flexible extraction hoses and specialized slender UV radiators that pass through standard 18-inch and 24-inch domestic manhole covers with zero difficulty.
          </p>
        </div>
      </div>'''

    new_faq = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>How often should overhead water tanks and sumps be cleaned?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            The World Health Organization (WHO) and municipal water boards recommend professional cleaning at least once every 90 to 180 days (quarterly or semi-annually), especially if your water comes from groundwater or private tankers.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Will our household experience water outages during the cleaning?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            The actual cleaning takes only 60 to 90 minutes. We instruct homeowners to let the tank water drop naturally before our arrival. As soon as we finish UV disinfection, your booster pump can refill fresh water immediately.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Can you clean deep RCC sumps with small manhole openings?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Yes. Our equipment includes modular 2-inch flexible extraction hoses and specialized slender UV radiators that pass through standard 18-inch and 24-inch domestic manhole covers with zero difficulty.
          </div>
        </div>
      </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        print("Updated services.html FAQs")
    else:
        print("Could not find services.html FAQs")

    # 2. Update Reviews alignment (Image 2)
    old_reviews = '''      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem]">
              "Their overhead tank cleaning process is top notch. The rotary jet removed green algae that had plagued our rooftop for years. No bleaching smell at all!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-1.jpg" alt="Rajeev S." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Rajeev S.</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Villa Owner, Sunnyvale</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem]">
              "We paired our sump cleaning with the pipeline flush. The difference in shower pressure and crystal water clarity in our bathrooms was immediate."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-3.jpg" alt="Ananya M." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Ananya M.</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Duplex Resident, Blossom Valley</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem]">
              "Cleaned all 6 overhead tanks in our apartment building in a single afternoon. Excellent communication and transparent digital reports on the portal."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-4.jpg" alt="Col. Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Col. Sharma</div>
              <div class="text-[11px] font-semibold text-sky-600 dark:text-sky-400">RWA Secretary, Silver Oaks</div>
            </div>
          </div>
        </div>
      </div>'''

    new_reviews = '''      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 text-sm gap-1 mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] flex-1 flex items-start">
              "Their overhead tank cleaning process is top notch. The rotary jet removed green algae that had plagued our rooftop for years. No bleaching smell at all!"
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-1.jpg" alt="Rajeev S." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Rajeev S.</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Villa Owner, Sunnyvale</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 text-sm gap-1 mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] flex-1 flex items-start">
              "We paired our sump cleaning with the pipeline flush. The difference in shower pressure and crystal water clarity in our bathrooms was immediate."
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-3.jpg" alt="Ananya M." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Ananya M.</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Duplex Resident, Blossom Valley</div>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col">
            <div class="flex text-amber-400 text-sm gap-1 mb-3 shrink-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] flex-1 flex items-start">
              "Cleaned all 6 overhead tanks in our apartment building in a single afternoon. Excellent communication and transparent digital reports on the portal."
            </p>
          </div>
          <div class="mt-auto pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center gap-3 shrink-0">
            <img src="assets/images/avatar-4.jpg" alt="Col. Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Col. Sharma</div>
              <div class="text-[11px] font-semibold text-sky-600 dark:text-sky-400">RWA Secretary, Silver Oaks</div>
            </div>
          </div>
        </div>
      </div>'''

    if old_reviews in content:
        content = content.replace(old_reviews, new_reviews, 1)
        print("Updated services.html reviews")
    else:
        print("Could not find services.html reviews")

    with open('services.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_services()
