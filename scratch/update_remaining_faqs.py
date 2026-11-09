# Update FAQs in home-family.html, service-details.html, pricing.html, contact.html, and amc-membership.html

def update_home_family():
    with open('home-family.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_faq = '''      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-teal-600 dark:text-teal-400"></i>
            Is it safe to wash newborn baby bottles right after the cleaning?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            Yes, 100%. Because we do not use toxic chemicals or chlorine bleaches, there are no residues to rinse out. As soon as fresh water fills the tank, it is safe for baby bottle sterilizing, cooking, and consumption.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-teal-600 dark:text-teal-400"></i>
            How does UV-C light work inside a water tank?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            Our crews lower specialized germicidal quartz UV-C immersion lamps (254nm wavelength) across all inner tank walls. The ultraviolet rays destroy the DNA bonds of bacteria and viruses in seconds, rendering them incapable of reproduction.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-teal-600 dark:text-teal-400"></i>
            Will the high-pressure water jet damage our plastic Sintex tank?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            No. Our German rotary nozzles are calibrated between 120 and 150 bar pressure with wide fan angles. This removes clinging biofilm and stubborn algae without scratching, cracking, or degrading the food-grade plastic polymers.
          </p>
        </div>
      </div>'''

    new_faq = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-teal-600 dark:text-teal-400 text-lg shrink-0"></i>
              <span>Is it safe to wash newborn baby bottles right after the cleaning?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-teal-600 dark:text-teal-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Yes, 100%. Because we do not use toxic chemicals or chlorine bleaches, there are no residues to rinse out. As soon as fresh water fills the tank, it is safe for baby bottle sterilizing, cooking, and consumption.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-teal-600 dark:text-teal-400 text-lg shrink-0"></i>
              <span>How does UV-C light work inside a water tank?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-teal-600 dark:text-teal-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Our crews lower specialized germicidal quartz UV-C immersion lamps (254nm wavelength) across all inner tank walls. The ultraviolet rays destroy the DNA bonds of bacteria and viruses in seconds, rendering them incapable of reproduction.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-teal-600 dark:text-teal-400 text-lg shrink-0"></i>
              <span>Will the high-pressure water jet damage our plastic Sintex tank?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-teal-600 dark:text-teal-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            No. Our German rotary nozzles are calibrated between 120 and 150 bar pressure with wide fan angles. This removes clinging biofilm and stubborn algae without scratching, cracking, or degrading the food-grade plastic polymers.
          </div>
        </div>
      </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        with open('home-family.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated home-family.html FAQs")
    else:
        print("Could not find home-family.html FAQs")

def update_service_details():
    with open('service-details.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_faq = '''      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            How does UV radiation kill bacteria inside a dry tank?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            After wet vacuuming, when tank walls are clean and dry, ultraviolet photons penetrate cellular membranes directly without water interference. The 253.7nm wavelength breaks thymine dimers in bacterial DNA, making reproduction impossible.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-sky-50 dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            Does your team need electricity and water from our home?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            Our response vans carry 50-meter heavy-gauge industrial power extension cables. We plug into a standard 15A wall socket, or deploy our quiet onboard inverter generator if power is unavailable at your property.
          </p>
        </div>
      </div>'''

    new_faq = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>How does UV radiation kill bacteria inside a dry tank?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            After wet vacuuming, when tank walls are clean and dry, ultraviolet photons penetrate cellular membranes directly without water interference. The 253.7nm wavelength breaks thymine dimers in bacterial DNA, making reproduction impossible.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Does your team need electricity and water from our home?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Our response vans carry 50-meter heavy-gauge industrial power extension cables. We plug into a standard 15A wall socket, or deploy our quiet onboard inverter generator if power is unavailable at your property.
          </div>
        </div>
      </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        with open('service-details.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated service-details.html FAQs")
    else:
        print("Could not find service-details.html FAQs")

def update_pricing():
    with open('pricing.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_faq = '''        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> Are there any unexpected travel or sludge disposal charges?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              Never. The quote you receive online is 100% final. Travel, fuel, specialized pumping machinery, and environmentally responsible sludge evacuation are fully inclusive.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> What happens if my tank has more sludge than expected?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              Our price is based strictly on tank volume (liters), not sludge thickness. Even if your tank has 6 inches of mud at the bottom, our fixed price stands unchanged.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> Can I reschedule or cancel my booking without penalty?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              Yes! You can reschedule or cancel anytime up to 2 hours before your service window directly through your Customer Dashboard at zero fee.
            </p>
          </div>
        </div>'''

    new_faq = '''        <div class="faq-group space-y-4">
          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>Are there any unexpected travel or sludge disposal charges?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              Never. The quote you receive online is 100% final. Travel, fuel, specialized pumping machinery, and environmentally responsible sludge evacuation are fully inclusive.
            </div>
          </div>

          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>What happens if my tank has more sludge than expected?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              Our price is based strictly on tank volume (liters), not sludge thickness. Even if your tank has 6 inches of mud at the bottom, our fixed price stands unchanged.
            </div>
          </div>

          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>Can I reschedule or cancel my booking without penalty?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              Yes! You can reschedule or cancel anytime up to 2 hours before your service window directly through your Customer Dashboard at zero fee.
            </div>
          </div>
        </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        with open('pricing.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated pricing.html FAQs")
    else:
        print("Could not find pricing.html FAQs")

def update_contact():
    with open('contact.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_faq = '''      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            How much advance notice is required to book a cleaning slot?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            For regular scheduled maintenance, 24 to 48 hours notice is ideal to reserve your preferred morning or afternoon window. For urgent contamination emergencies, our standby vans can typically deploy within 2 hours.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            Do I need to be physically present at home during the cleaning process?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            An adult representative should be available at arrival to grant rooftop or basement access and verify the technician's identity. Our team sends before-and-after photos directly to your phone, so you do not need to stay on the roof.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            What payment options do you support?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            We accept all major credit/debit cards, Apple Pay, Google Pay, direct bank ACH transfers, and online payments through your customer dashboard. Invoices are generated digitally immediately upon completion.
          </p>
        </div>
      </div>'''

    new_faq = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>How much advance notice is required to book a cleaning slot?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            For regular scheduled maintenance, 24 to 48 hours notice is ideal to reserve your preferred morning or afternoon window. For urgent contamination emergencies, our standby vans can typically deploy within 2 hours.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Do I need to be physically present at home during the cleaning process?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            An adult representative should be available at arrival to grant rooftop or basement access and verify the technician's identity. Our team sends before-and-after photos directly to your phone, so you do not need to stay on the roof.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>What payment options do you support?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            We accept all major credit/debit cards, Apple Pay, Google Pay, direct bank ACH transfers, and online payments through your customer dashboard. Invoices are generated digitally immediately upon completion.
          </div>
        </div>
      </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        with open('contact.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated contact.html FAQs")
    else:
        print("Could not find contact.html FAQs")

def update_amc():
    with open('amc-membership.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Quarter cards alignment
    old_quarters = '''      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        <!-- Spring -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-start h-full">
          <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
            <i class="fas fa-seedling"></i>
          </div>
          <div class="min-h-[3.75rem] flex flex-col justify-start">
            <div class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Quarter 1 (March)</div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Spring Pre-Heat Flush</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
            Eliminates early bacterial biofilms and calcinated sediment that form during mild spring weather before temperatures climb, preventing foul odors.
          </p>
        </div>

        <!-- Summer -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-start h-full">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
            <i class="fas fa-sun"></i>
          </div>
          <div class="min-h-[3.75rem] flex flex-col justify-start">
            <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Quarter 2 (June)</div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Summer Algae Defense</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
            Intense rooftop sunlight causes exponential blue-green algae blooms. High-intensity 254nm UV-C radiation kills vegetative microorganisms instantly.
          </p>
        </div>

        <!-- Monsoon -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-start h-full">
          <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
            <i class="fas fa-cloud-showers-heavy"></i>
          </div>
          <div class="min-h-[3.75rem] flex flex-col justify-start">
            <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Quarter 3 (September)</div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Monsoon Silt Extraction</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
            Heavy rainfall brings municipal pipeline mud and ground silt into sumps. High-flow vacuum slurry pumps remove fine sand to protect bathroom taps.
          </p>
        </div>

        <!-- Winter -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-start h-full">
          <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
            <i class="fas fa-snowflake"></i>
          </div>
          <div class="min-h-[3.75rem] flex flex-col justify-start">
            <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Quarter 4 (December)</div>
            <h3 class="text-base font-black text-black dark:text-white leading-snug">Winter Bio-Sterilization</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
            Cold weather traps stagnant water in domestic pipelines. Food-grade anti-bacterial fogging ensures whole-home plumbing remains sterile for hot water baths.
          </p>
        </div>

      </div>'''

    new_quarters = '''      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        <!-- Spring -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
          <div class="flex-1 flex flex-col">
            <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
              <i class="fas fa-seedling"></i>
            </div>
            <div class="min-h-[3.75rem] flex flex-col justify-start">
              <div class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Quarter 1 (March)</div>
              <h3 class="text-base font-black text-black dark:text-white leading-snug">Spring Pre-Heat Flush</h3>
            </div>
            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start flex-1">
              Eliminates early bacterial biofilms and calcinated sediment that form during mild spring weather before temperatures climb, preventing foul odors.
            </p>
          </div>
          <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
            <i class="fas fa-check text-cyan-600"></i> Recommended: Pipeline De-scale
          </div>
        </div>

        <!-- Summer -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
          <div class="flex-1 flex flex-col">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
              <i class="fas fa-sun"></i>
            </div>
            <div class="min-h-[3.75rem] flex flex-col justify-start">
              <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Quarter 2 (June)</div>
              <h3 class="text-base font-black text-black dark:text-white leading-snug">Summer Algae Defense</h3>
            </div>
            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start flex-1">
              Intense rooftop sunlight causes exponential blue-green algae blooms. High-intensity 254nm UV-C radiation kills vegetative microorganisms instantly.
            </p>
          </div>
          <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
            <i class="fas fa-check text-amber-500"></i> Recommended: UV Deep Sanitization
          </div>
        </div>

        <!-- Monsoon -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
          <div class="flex-1 flex flex-col">
            <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
              <i class="fas fa-cloud-showers-heavy"></i>
            </div>
            <div class="min-h-[3.75rem] flex flex-col justify-start">
              <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Quarter 3 (September)</div>
              <h3 class="text-base font-black text-black dark:text-white leading-snug">Monsoon Silt Extraction</h3>
            </div>
            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start flex-1">
              Heavy rainfall brings municipal pipeline mud and ground silt into sumps. High-flow vacuum slurry pumps remove fine sand to protect bathroom taps.
            </p>
          </div>
          <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
            <i class="fas fa-check text-teal-600"></i> Recommended: Sump Sludge Extraction
          </div>
        </div>

        <!-- Winter -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
          <div class="flex-1 flex flex-col">
            <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl mb-3 shrink-0">
              <i class="fas fa-snowflake"></i>
            </div>
            <div class="min-h-[3.75rem] flex flex-col justify-start">
              <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Quarter 4 (December)</div>
              <h3 class="text-base font-black text-black dark:text-white leading-snug">Winter Bio-Sterilization</h3>
            </div>
            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start flex-1">
              Cold weather traps stagnant water in domestic pipelines. Food-grade anti-bacterial fogging ensures whole-home plumbing remains sterile for hot water baths.
            </p>
          </div>
          <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
            <i class="fas fa-check text-purple-600"></i> Recommended: Combo Tank + Sump Package
          </div>
        </div>

      </div>'''

    if old_quarters in content:
        content = content.replace(old_quarters, new_quarters, 1)
        print("Updated amc-membership.html Quarters")
    else:
        print("Could not find amc-membership.html Quarters")

    # 2. Update FAQs
    old_faq = '''      <div class="space-y-3">
        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What happens to unused cleaning visits if I travel frequently?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Unused cleaning visits under active AMC memberships never expire. If you are away on business or vacation during a scheduled quarterly slot, your visit automatically rolls over into the subsequent quarter or can be scheduled upon your return with zero penalty.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Can I upgrade from Silver to Gold or Platinum mid-year?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Yes, you can upgrade your plan at any point during your subscription year. The prorated remaining balance from your existing membership is credited toward your higher tier, and your new deliverables (such as sump coverage or pipeline descaling) activate immediately.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Are there any hidden costs for disposal, chemicals, or machine usage?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Absolutely zero. The annual AMC price is 100% comprehensive and all-inclusive. It covers mobile van travel, technicians, high-pressure rotary machinery, sludge vacuum pumps, food-grade bio-organic fogging mist, UV-C germicidal radiation, digital photometer testing, and eco-certified sludge disposal.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What payment methods are supported for AMC memberships?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            We support all major credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, ACH bank transfers, and automated recurring corporate invoice billing for RWAs and commercial facilities.
          </div>
        </div>
      </div>'''

    new_faq = '''      <div class="faq-group space-y-4">
        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>What happens to unused cleaning visits if I travel frequently?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Unused cleaning visits under active AMC memberships never expire. If you are away on business or vacation during a scheduled quarterly slot, your visit automatically rolls over into the subsequent quarter or can be scheduled upon your return with zero penalty.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Can I upgrade from Silver to Gold or Platinum mid-year?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Yes, you can upgrade your plan at any point during your subscription year. The prorated remaining balance from your existing membership is credited toward your higher tier, and your new deliverables (such as sump coverage or pipeline descaling) activate immediately.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Are there any hidden costs for disposal, chemicals, or machine usage?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Absolutely zero. The annual AMC price is 100% comprehensive and all-inclusive. It covers mobile van travel, technicians, high-pressure rotary machinery, sludge vacuum pumps, food-grade bio-organic fogging mist, UV-C germicidal radiation, digital photometer testing, and eco-certified sludge disposal.
          </div>
        </div>

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>What payment methods are supported for AMC memberships?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            We support all major credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, ACH bank transfers, and automated recurring corporate invoice billing for RWAs and commercial facilities.
          </div>
        </div>
      </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        print("Updated amc-membership.html FAQs")
    else:
        print("Could not find amc-membership.html FAQs")

    with open('amc-membership.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_home_family()
update_service_details()
update_pricing()
update_contact()
update_amc()
