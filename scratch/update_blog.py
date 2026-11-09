def update_blog():
    with open('blog.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Articles 4, 5, 6 (Image 4)
    old_art456 = '''              <div class="min-h-[5.75rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-sump.html">How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[4.75rem] mt-2 flex items-start">
                A blueprint for high-rise residential committees to clean dual-compartment concrete sumps in rotating stages, keeping taps running 24/7.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto">
              <span class="text-xs font-black text-black dark:text-white">By Priya Narayanan</span>
              <a href="blog-details-sump.html" class="text-xs font-black text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">Read Article <i class="fas fa-arrow-right text-[10px]"></i></a>
            </div>
          </div>
        </article>

          <!-- Article 5 -->
          <article class="overflow-hidden group rounded-3xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] flex flex-col justify-between hover:shadow-xl transition-all h-full" data-category="technology">
          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950 shrink-0">
            <img src="assets/images/uv-c-radiator-sterilization.jpg" alt="Submersible UV Germicidal Sterilization" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              UV-C Tech
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              6 min read
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="min-h-[5.75rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-uv.html">The Physics of 254nm Submersible UV Germicidal Disinfection</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[4.75rem] mt-2 flex items-start">
                Why 254-nanometer ultraviolet light tears through bacterial cellular DNA without imparting toxic bleach tastes or chemical chloramine fumes.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto">
              <span class="text-xs font-black text-black dark:text-white">By David Cho, M.E.</span>
              <a href="blog-details-uv.html" class="text-xs font-black text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">Read Article <i class="fas fa-arrow-right text-[10px]"></i></a>
            </div>
          </div>
        </article>

          <!-- Article 6 -->
          <article class="overflow-hidden group rounded-3xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] flex flex-col justify-between hover:shadow-xl transition-all h-full" data-category="cleaning-guides">
          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950 shrink-0">
            <img src="assets/images/blog-pipeline-descaling.png" alt="Certified Plumbing Technician De-scaling Domestic Supply Pipelines" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              Pipeline Care
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              5 min read
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="min-h-[5.75rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-pipeline.html">Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[4.75rem] mt-2 flex items-start">
                Your tank might be spotless, but decades of calcium encrustation inside internal distribution pipes will keep discoloring bathroom water.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto">'''

    new_art456 = '''              <div class="min-h-[6.5rem] lg:min-h-[7rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-sump.html">How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5rem] mt-2 flex items-start flex-1">
                A blueprint for high-rise residential committees to clean dual-compartment concrete sumps in rotating stages, keeping taps running 24/7.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto shrink-0">
              <span class="text-xs font-black text-black dark:text-white">By Priya Narayanan</span>
              <a href="blog-details-sump.html" class="text-xs font-black text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">Read Article <i class="fas fa-arrow-right text-[10px]"></i></a>
            </div>
          </div>
        </article>

          <!-- Article 5 -->
          <article class="overflow-hidden group rounded-3xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] flex flex-col justify-between hover:shadow-xl transition-all h-full" data-category="technology">
          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950 shrink-0">
            <img src="assets/images/uv-c-radiator-sterilization.jpg" alt="Submersible UV Germicidal Sterilization" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              UV-C Tech
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              6 min read
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="min-h-[6.5rem] lg:min-h-[7rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-uv.html">The Physics of 254nm Submersible UV Germicidal Disinfection</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5rem] mt-2 flex items-start flex-1">
                Why 254-nanometer ultraviolet light tears through bacterial cellular DNA without imparting toxic bleach tastes or chemical chloramine fumes.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto shrink-0">
              <span class="text-xs font-black text-black dark:text-white">By David Cho, M.E.</span>
              <a href="blog-details-uv.html" class="text-xs font-black text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">Read Article <i class="fas fa-arrow-right text-[10px]"></i></a>
            </div>
          </div>
        </article>

          <!-- Article 6 -->
          <article class="overflow-hidden group rounded-3xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-[#0c1e33] flex flex-col justify-between hover:shadow-xl transition-all h-full" data-category="cleaning-guides">
          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950 shrink-0">
            <img src="assets/images/blog-pipeline-descaling.png" alt="Certified Plumbing Technician De-scaling Domestic Supply Pipelines" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              Pipeline Care
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              5 min read
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="min-h-[6.5rem] lg:min-h-[7rem] flex flex-col justify-start">
                <h3 class="text-xl font-black text-black dark:text-white hover:text-cyan-600 transition-colors leading-snug">
                  <a href="blog-details-pipeline.html">Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling</a>
                </h3>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed min-h-[5rem] mt-2 flex items-start flex-1">
                Your tank might be spotless, but decades of calcium encrustation inside internal distribution pipes will keep discoloring bathroom water.
              </p>
            </div>
            <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between mt-auto shrink-0">'''

    if old_art456 in content:
        content = content.replace(old_art456, new_art456, 1)
        print("Updated blog.html Articles 4, 5, 6 (Image 4)")
    else:
        print("Could not find blog.html Articles 4, 5, 6")

    # 2. Update Quarter 1 to 4 cards (Image 9)
    old_quarters = '''        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-cyan-600 dark:text-cyan-400">Quarter 1 • Jan - Mar</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Post-Winter Descaling</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
                Flush out mineral carbonates accumulated during dry cold months. Inspect float valves and pressure switches before summer peak demand.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2rem]">
              <i class="fas fa-check text-cyan-600"></i> Recommended: Pipeline De-scale
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-amber-500">Quarter 2 • Apr - Jun</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Peak Summer Algae Control</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
                High rooftop temperatures induce algal blooms. Perform 254nm UV-C bio-sterilization and ensure airtight cover seals against insect breeding.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2rem]">
              <i class="fas fa-check text-amber-500"></i> Recommended: UV Deep Sanitization
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-rose-500">Quarter 3 • Jul - Sep</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Monsoon Turbidity Defense</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
                Municipal supply muddies with high suspended solids (NTU > 15). Rapid sludge buildup in underground sumps requires sludge extraction pumps.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2rem]">
              <i class="fas fa-check text-rose-500"></i> Recommended: Sump Sludge Extraction
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-teal-600 dark:text-teal-400">Quarter 4 • Oct - Dec</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Pre-Festival Deep Sanitization</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[5.5rem] mt-2 flex items-start">
                Complete full-home dual tank deep clean before holiday guests arrive. Full lab water purity testing for TDS, pH, and coliform counts.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2rem]">
              <i class="fas fa-check text-teal-600"></i> Recommended: Combo Tank + Sump Package
            </div>
          </div>
        </div>'''

    new_quarters = '''        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div class="flex-1 flex flex-col">
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-cyan-600 dark:text-cyan-400">Quarter 1 • Jan - Mar</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Post-Winter Descaling</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[6.5rem] mt-2 flex items-start flex-1">
                Flush out mineral carbonates accumulated during dry cold months. Inspect float valves and pressure switches before summer peak demand.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
              <i class="fas fa-check text-cyan-600"></i> Recommended: Pipeline De-scale
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div class="flex-1 flex flex-col">
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-amber-500">Quarter 2 • Apr - Jun</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Peak Summer Algae Control</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[6.5rem] mt-2 flex items-start flex-1">
                High rooftop temperatures induce algal blooms. Perform 254nm UV-C bio-sterilization and ensure airtight cover seals against insect breeding.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
              <i class="fas fa-check text-amber-500"></i> Recommended: UV Deep Sanitization
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div class="flex-1 flex flex-col">
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-rose-500">Quarter 3 • Jul - Sep</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Monsoon Turbidity Defense</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[6.5rem] mt-2 flex items-start flex-1">
                Municipal supply muddies with high suspended solids (NTU > 15). Rapid sludge buildup in underground sumps requires sludge extraction pumps.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
              <i class="fas fa-check text-rose-500"></i> Recommended: Sump Sludge Extraction
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex flex-col justify-between h-full">
            <div class="flex-1 flex flex-col">
              <div class="min-h-[4rem] flex flex-col justify-start">
                <div class="text-xs font-black uppercase text-teal-600 dark:text-teal-400">Quarter 4 • Oct - Dec</div>
                <h3 class="text-lg font-black text-black dark:text-white mt-1">Pre-Festival Deep Sanitization</h3>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white leading-relaxed min-h-[6.5rem] mt-2 flex items-start flex-1">
                Complete full-home dual tank deep clean before holiday guests arrive. Full lab water purity testing for TDS, pH, and coliform counts.
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-sky-200 dark:border-sky-800/60 text-xs font-black text-black dark:text-white flex items-center gap-1.5 min-h-[2.25rem] shrink-0">
              <i class="fas fa-check text-teal-600"></i> Recommended: Combo Tank + Sump Package
            </div>
          </div>
        </div>'''

    if old_quarters in content:
        content = content.replace(old_quarters, new_quarters, 1)
        print("Updated blog.html Quarters (Image 9)")
    else:
        print("Could not find blog.html Quarters")

    # 3. Update FAQs to interactive accordions
    old_faq = '''        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> How often should a domestic overhead tank be cleaned?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              Municipal public health guidelines and WHO standards advise full mechanized sanitization every 90 days (quarterly) for municipal supplies, and every 60 to 90 days if using deep borewell water with high dissolved solids and iron content.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> Do I need to empty the entire tank before your team arrives?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              No. We encourage homeowners to consume normal water levels down to 20-25% before the service. Our specialized submersible high-capacity pumps transfer usable water or swiftly clear sludge without flooding your terrace.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
            <h3 class="text-base font-black text-black dark:text-white flex items-center gap-2">
              <i class="fas fa-circle-question text-cyan-600"></i> How soon after cleaning can we use the water for cooking and bathing?
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
              Immediately. Because our 7-Stage protocol uses mechanized rotary jetting, industrial sludge vacuuming, and 254nm ultraviolet germicidal irradiation (zero harsh chemicals), the water refilled into your tank is instantly ready for domestic use with no chlorine smell.
            </p>
          </div>
        </div>'''

    new_faq = '''        <div class="faq-group space-y-4">
          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>How often should a domestic overhead tank be cleaned?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              Municipal public health guidelines and WHO standards advise full mechanized sanitization every 90 days (quarterly) for municipal supplies, and every 60 to 90 days if using deep borewell water with high dissolved solids and iron content.
            </div>
          </div>

          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>Do I need to empty the entire tank before your team arrives?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              No. We encourage homeowners to consume normal water levels down to 20-25% before the service. Our specialized submersible high-capacity pumps transfer usable water or swiftly clear sludge without flooding your terrace.
            </div>
          </div>

          <div class="rounded-2xl border border-sky-200 dark:border-sky-800 bg-[#f0f9ff] dark:bg-[#0c1e33] overflow-hidden shadow-sm transition-colors">
            <button type="button" class="faq-accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-base text-black dark:text-white focus:outline-none hover:bg-sky-100/50 dark:hover:bg-[#0f243c] transition-colors">
              <span class="flex items-center gap-3">
                <i class="fas fa-circle-question text-cyan-600 dark:text-cyan-400 text-lg shrink-0"></i>
                <span>How soon after cleaning can we use the water for cooking and bathing?</span>
              </span>
              <i class="faq-icon fas fa-chevron-down text-cyan-600 dark:text-cyan-400 text-sm transition-transform duration-200 shrink-0 ml-3"></i>
            </button>
            <div class="faq-accordion-content hidden p-5 sm:p-6 pt-0 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed border-t border-sky-100 dark:border-sky-800/60">
              Immediately. Because our 7-Stage protocol uses mechanized rotary jetting, industrial sludge vacuuming, and 254nm ultraviolet germicidal irradiation (zero harsh chemicals), the water refilled into your tank is instantly ready for domestic use with no chlorine smell.
            </div>
          </div>
        </div>'''

    if old_faq in content:
        content = content.replace(old_faq, new_faq, 1)
        print("Updated blog.html FAQs")
    else:
        print("Could not find blog.html FAQs")

    with open('blog.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_blog()
