def update_book_service():
    with open('book-service.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update 4 feature cards (Image 3)
    old_features = '''      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[3.25rem] flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg shrink-0">
              <i class="fas fa-water"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-tight">150-Bar Rotary Hydro-Jetting</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-3 flex items-start">
            Our rotary high-pressure jets blast micro-droplets at 150 times atmospheric pressure to strip stubborn calcinated lime scale, green algae roots, and biological slime from internal corners without scratching polymer walls.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[3.25rem] flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg shrink-0">
              <i class="fas fa-wind"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-tight">Industrial Sludge Vacuum Slurry Extraction</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-3 flex items-start">
            Heavy-duty rotary sludge extractors pump out dense bottom municipal mud, fine construction sand, and dead biological matter directly into sealed disposal drums, leaving the floor bone-dry and spotless.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[3.25rem] flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg shrink-0">
              <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-tight">Food-Grade Bio-Organic Anti-Bacterial Fogging</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-3 flex items-start">
            We spray an FDA-approved, non-toxic bio-organic sanitizing mist across all internal surfaces. It completely eliminates bacteria, viruses, and amoebic cysts with zero chemical odor, zero harsh chlorine residue, and zero bleaching taste.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[3.25rem] flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-tight">254nm Germicidal UV-C Photonic Sterilization</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-3 flex items-start">
            A high-intensity germicidal UV-C radiator is suspended inside the sealed reservoir for 15 minutes to irradiate airborne bacterial spores, fungal micro-particles, and viral pathogens that escape conventional physical wiping.
          </p>
        </div>

      </div>'''

    new_features = '''      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[4.25rem] sm:min-h-[4.5rem] flex items-start gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
              <i class="fas fa-water"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">150-Bar Rotary Hydro-Jetting</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed flex-1 mt-3 flex items-start">
            Our rotary high-pressure jets blast micro-droplets at 150 times atmospheric pressure to strip stubborn calcinated lime scale, green algae roots, and biological slime from internal corners without scratching polymer walls.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[4.25rem] sm:min-h-[4.5rem] flex items-start gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
              <i class="fas fa-wind"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Industrial Sludge Vacuum Slurry Extraction</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed flex-1 mt-3 flex items-start">
            Heavy-duty rotary sludge extractors pump out dense bottom municipal mud, fine construction sand, and dead biological matter directly into sealed disposal drums, leaving the floor bone-dry and spotless.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[4.25rem] sm:min-h-[4.5rem] flex items-start gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
              <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Food-Grade Bio-Organic Anti-Bacterial Fogging</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed flex-1 mt-3 flex items-start">
            We spray an FDA-approved, non-toxic bio-organic sanitizing mist across all internal surfaces. It completely eliminates bacteria, viruses, and amoebic cysts with zero chemical odor, zero harsh chlorine residue, and zero bleaching taste.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md flex flex-col justify-start h-full">
          <div class="min-h-[4.25rem] sm:min-h-[4.5rem] flex items-start gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">254nm Germicidal UV-C Photonic Sterilization</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed flex-1 mt-3 flex items-start">
            A high-intensity germicidal UV-C radiator is suspended inside the sealed reservoir for 15 minutes to irradiate airborne bacterial spores, fungal micro-particles, and viral pathogens that escape conventional physical wiping.
          </p>
        </div>

      </div>'''

    if old_features in content:
        content = content.replace(old_features, new_features, 1)
        print("Updated book-service.html features (Image 3)")
    else:
        print("Could not find book-service.html features")

    # 2. Update FAQs to interactive accordions
    old_faqs = '''      <div class="space-y-3">
        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Can we use the water immediately after your crew finishes?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Yes, absolutely. Because AquaPure strictly avoids hazardous chlorine bleaching powders and toxic detergents, there is zero toxic chemical residue. Once our crew completes the UV-C sterilization and wipes the interior dry, you can turn on your main supply inlet and start using pure, safe water immediately with zero bad odor or chemical taste.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>How long does a complete overhead tank and sump cleaning take?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            A single overhead rooftop tank (1,000L - 1,500L) takes approximately 60 to 75 minutes. A dual reservoir Combo package (1 overhead tank + 1 underground sump) takes roughly 90 to 120 minutes. Our high-efficiency submersible pumps and 150-bar rotary pressure equipment ensure thorough, rapid execution without disrupting your daily routine.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Do you require an upfront payment or deposit when reserving online?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            No upfront payment is ever required. You only pay after our supervisor conducts the 12-point physical inspection, tests the water purity on digital meters, and displays the photographic before-and-after proof. You can pay via credit card, Apple Pay, Google Pay, or bank transfer directly from your Customer Portal.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What happens if it rains heavily during our scheduled rooftop slot?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Technician safety on wet rooftops with high-voltage equipment is vital. If severe rainfall or lightning occurs during your slot, our dispatch supervisor will immediately notify you and reschedule your visit to the next dry morning window of your choice with zero penalty or price change.
          </div>
        </div>
      </div>'''

    new_faqs = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Can we use the water immediately after your crew finishes?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-200 dark:border-sky-800/60">
            Yes, absolutely. Because AquaPure strictly avoids hazardous chlorine bleaching powders and toxic detergents, there is zero toxic chemical residue. Once our crew completes the UV-C sterilization and wipes the interior dry, you can turn on your main supply inlet and start using pure, safe water immediately with zero bad odor or chemical taste.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>How long does a complete overhead tank and sump cleaning take?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-200 dark:border-sky-800/60">
            A single overhead rooftop tank (1,000L - 1,500L) takes approximately 60 to 75 minutes. A dual reservoir Combo package (1 overhead tank + 1 underground sump) takes roughly 90 to 120 minutes. Our high-efficiency submersible pumps and 150-bar rotary pressure equipment ensure thorough, rapid execution without disrupting your daily routine.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Do you require an upfront payment or deposit when reserving online?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-200 dark:border-sky-800/60">
            No upfront payment is ever required. You only pay after our supervisor conducts the 12-point physical inspection, tests the water purity on digital meters, and displays the photographic before-and-after proof. You can pay via credit card, Apple Pay, Google Pay, or bank transfer directly from your Customer Portal.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>What happens if it rains heavily during our scheduled rooftop slot?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-200 dark:border-sky-800/60">
            Technician safety on wet rooftops with high-voltage equipment is vital. If severe rainfall or lightning occurs during your slot, our dispatch supervisor will immediately notify you and reschedule your visit to the next dry morning window of your choice with zero penalty or price change.
          </div>
        </div>
      </div>'''

    if old_faqs in content:
        content = content.replace(old_faqs, new_faqs, 1)
        print("Updated book-service.html FAQs")
    else:
        print("Could not find book-service.html FAQs")

    with open('book-service.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_book_service()
