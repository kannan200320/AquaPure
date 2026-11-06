const fs = require('fs');

// =========================================================================
// 1. services.html
// =========================================================================
let servicesHtml = fs.readFileSync('services.html', 'utf8');

const oldHeroServices = `<section class="py-16 lg:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-bold">
        <i class="fas fa-spray-can-sparkles text-cyan-600 dark:text-cyan-400"></i> Comprehensive Water Infrastructure Care
      </span>
      <h1 class="text-4xl sm:text-5xl font-black text-black dark:text-white max-w-4xl mx-auto leading-tight">
        High-Precision Mechanized Services By Category
      </h1>
      <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
        From residential rooftop PVC tanks to massive 500,000-liter municipal concrete reservoirs, our specialized machinery and certified technicians eliminate sludge, biofilm, and toxic pathogens with 0% surface damage.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <a href="book-service.html" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-lg hover:from-cyan-700 hover:to-teal-700 transition-all flex items-center gap-2">
          <i class="fas fa-calendar-check"></i>
          <span>Book A Service Slot</span>
        </a>
        <a href="service-details.html" class="px-7 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold hover:bg-sky-50 dark:hover:bg-sky-900 transition-all flex items-center gap-2">
          <i class="fas fa-list-check text-cyan-600 dark:text-cyan-400"></i>
          <span>View 7-Stage Process Specs</span>
        </a>
      </div>
    </div>
  </section>`;

const newHeroServices = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (150-Bar Rotary Jet & UV-C Disinfection in Tank) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-services-bg.png" alt="Mechanized Tank Cleaning and UV Sterilization Technology" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-6">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-black">
          <i class="fas fa-spray-can-sparkles text-cyan-600 dark:text-cyan-400"></i> Comprehensive Water Infrastructure Care
        </span>
        <h1 class="text-4xl sm:text-5xl font-black text-black dark:text-white leading-tight">
          High-Precision Mechanized Services By Category
        </h1>
        <p class="text-base sm:text-lg font-bold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
          From residential rooftop PVC tanks to massive 500,000-liter municipal concrete reservoirs, our specialized machinery and certified technicians eliminate sludge, biofilm, and toxic pathogens with 0% surface damage.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <a href="book-service.html" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-lg hover:from-cyan-700 hover:to-teal-700 transition-all flex items-center gap-2">
            <i class="fas fa-calendar-check"></i>
            <span>Book A Service Slot</span>
          </a>
          <a href="service-details.html" class="px-7 py-3.5 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold hover:bg-sky-50 dark:hover:bg-sky-900 transition-all flex items-center gap-2">
            <i class="fas fa-list-check text-cyan-600 dark:text-cyan-400"></i>
            <span>View 7-Stage Process Specs</span>
          </a>
        </div>
      </div>
    </div>
  </section>`;

console.log('services.html contains oldHeroServices:', servicesHtml.includes(oldHeroServices));
servicesHtml = servicesHtml.replace(oldHeroServices, newHeroServices);
fs.writeFileSync('services.html', servicesHtml, 'utf8');
console.log('Updated services.html hero section successfully!');

// =========================================================================
// 2. pricing.html
// =========================================================================
let pricingHtml = fs.readFileSync('pricing.html', 'utf8');

const oldHeroPricing = `<section class="py-16 lg:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-bold">
          <i class="fas fa-tag text-cyan-600 dark:text-cyan-400"></i> Fixed Rates • Zero Hidden Surcharges
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white max-w-4xl mx-auto leading-tight">
          Transparent Pricing For Certified Pure Water
        </h1>
        <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
          Choose from single rooftop tank cleanings, high-capacity sump packages, or complete annual membership protection. Pay only after our supervisor shares digital before/after proof.
        </p>
      </div>
    </section>`;

const newHeroPricing = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
      <!-- Hero Background Image (Pristine Sparkling Glass of Pure Water) -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img src="assets/images/hero-pricing-bg.png" alt="Crystal Clear Pure Drinking Water" class="w-full h-full object-cover object-center filter saturate-110">
        <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
        <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
        <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-6">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-black">
            <i class="fas fa-tag text-cyan-600 dark:text-cyan-400"></i> Fixed Rates • Zero Hidden Surcharges
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white leading-tight">
            Transparent Pricing For Certified Pure Water
          </h1>
          <p class="text-base sm:text-lg font-bold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
            Choose from single rooftop tank cleanings, high-capacity sump packages, or complete annual membership protection. Pay only after our supervisor shares digital before/after proof.
          </p>
        </div>
      </div>
    </section>`;

console.log('pricing.html contains oldHeroPricing:', pricingHtml.includes(oldHeroPricing));
pricingHtml = pricingHtml.replace(oldHeroPricing, newHeroPricing);
fs.writeFileSync('pricing.html', pricingHtml, 'utf8');
console.log('Updated pricing.html hero section successfully!');

// =========================================================================
// 3. book-service.html
// =========================================================================
let bookHtml = fs.readFileSync('book-service.html', 'utf8');

const oldHeroBook = `<section class="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
        <i class="fas fa-calendar-check text-cyan-600 dark:text-cyan-400"></i> Seamless Online Service Reservation
      </span>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
        Schedule Your Mechanized Tank Cleaning Visit
      </h1>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Select your property configuration, choose your certified hygienic service package, pick your preferred 2-hour arrival window, and enjoy 100% bacterial-free drinking water with zero upfront payment.
      </p>
    </div>
  </section>`;

const newHeroBook = `<section class="relative overflow-hidden py-16 sm:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <!-- Hero Background Image (Mechanized Robotic Tank Cleaning & Digital Booking System) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-book-bg.png" alt="Seamless Online Booking for Mechanized Tank Sanitization" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-4">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-wider">
          <i class="fas fa-calendar-check text-cyan-600 dark:text-cyan-400"></i> Seamless Online Service Reservation
        </span>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
          Schedule Your Mechanized Tank Cleaning Visit
        </h1>
        <p class="text-sm sm:text-base font-bold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Select your property configuration, choose your certified hygienic service package, pick your preferred 2-hour arrival window, and enjoy 100% bacterial-free drinking water with zero upfront payment.
        </p>
      </div>
    </div>
  </section>`;

console.log('book-service.html contains oldHeroBook:', bookHtml.includes(oldHeroBook));
bookHtml = bookHtml.replace(oldHeroBook, newHeroBook);
fs.writeFileSync('book-service.html', bookHtml, 'utf8');
console.log('Updated book-service.html hero section successfully!');

// =========================================================================
// 4. amc-membership.html
// =========================================================================
let amcHtml = fs.readFileSync('amc-membership.html', 'utf8');

const oldHeroAmc = `<section class="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
        <i class="fas fa-award text-amber-500"></i> Annual Maintenance Contract (AMC)
      </span>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
        Year-Round 100% Pure Water Security For Your Family
      </h1>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Stop waiting for tap water to turn yellow or smelly before taking action. Lock in automated seasonal sanitizations, zero travel charges, priority 24-hour emergency response, and verified digital laboratory audits all year long.
      </p>
    </div>
  </section>`;

const newHeroAmc = `<section class="relative overflow-hidden py-16 sm:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <!-- Hero Background Image (Four Seasons Year-Round Water Protection System) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-amc-bg.png" alt="Annual Four-Season Water Purity Maintenance Protection" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-4">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-wider">
          <i class="fas fa-award text-amber-500"></i> Annual Maintenance Contract (AMC)
        </span>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
          Year-Round 100% Pure Water Security For Your Family
        </h1>
        <p class="text-sm sm:text-base font-bold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Stop waiting for tap water to turn yellow or smelly before taking action. Lock in automated seasonal sanitizations, zero travel charges, priority 24-hour emergency response, and verified digital laboratory audits all year long.
        </p>
      </div>
    </div>
  </section>`;

console.log('amc-membership.html contains oldHeroAmc:', amcHtml.includes(oldHeroAmc));
amcHtml = amcHtml.replace(oldHeroAmc, newHeroAmc);
fs.writeFileSync('amc-membership.html', amcHtml, 'utf8');
console.log('Updated amc-membership.html hero section successfully!');

// =========================================================================
// 5. service-details.html (7-Stage Deep Clean)
// =========================================================================
let detailsHtml = fs.readFileSync('service-details.html', 'utf8');

const oldHeroDetails = `<section class="py-16 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs font-bold uppercase tracking-wider">
        <i class="fas fa-microscope text-cyan-600 dark:text-cyan-400"></i> Standard Operating Procedure
      </div>
      <h1 class="text-3xl sm:text-5xl font-black text-black dark:text-white">The 7-Stage Scientific Sanitization Protocol</h1>
      <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Every step in our mechanized procedure is designed to protect your tank's physical structure while achieving 99.99% eradication of microscopic cysts, bacteria, and algae without toxic chemical odors.
      </p>
    </div>
  </section>`;

const newHeroDetails = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (Lineup of All 7-Stage Deep Clean Mechanized Equipment) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-7stage-bg.png" alt="Complete 7-Stage Mechanized Tank Sanitization Equipment Lineup" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
      <div class="p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs font-black uppercase tracking-wider">
          <i class="fas fa-microscope text-cyan-600 dark:text-cyan-400"></i> Standard Operating Procedure
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-black dark:text-white">The 7-Stage Scientific Sanitization Protocol</h1>
        <p class="text-base sm:text-lg font-bold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Every step in our mechanized procedure is designed to protect your tank's physical structure while achieving 99.99% eradication of microscopic cysts, bacteria, and algae without toxic chemical odors.
        </p>
      </div>
    </div>
  </section>`;

console.log('service-details.html contains oldHeroDetails:', detailsHtml.includes(oldHeroDetails));
detailsHtml = detailsHtml.replace(oldHeroDetails, newHeroDetails);
fs.writeFileSync('service-details.html', detailsHtml, 'utf8');
console.log('Updated service-details.html hero section successfully!');
