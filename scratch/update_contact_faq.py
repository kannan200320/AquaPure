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

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-2">
          <h4 class="font-bold text-base text-black dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400"></i>
            Are chemical smells left behind in our household water?
          </h4>
          <p class="text-xs sm:text-sm font-medium text-black dark:text-white leading-relaxed pl-6">
            Never. AquaPure utilizes eco-friendly food-grade hydrogen peroxide solutions and physical UV-C sterilization. We never use caustic bleaches or harsh chlorinated compounds that taint drinking water.
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

        <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
          <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-50/50 dark:hover:bg-[#0f243c] transition-colors">
            <span class="flex items-center gap-3">
              <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
              <span>Are chemical smells left behind in our household water?</span>
            </span>
            <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
          </button>
          <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
            Never. AquaPure utilizes eco-friendly food-grade hydrogen peroxide solutions and physical UV-C sterilization. We never use caustic bleaches or harsh chlorinated compounds that taint drinking water.
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

update_contact()
