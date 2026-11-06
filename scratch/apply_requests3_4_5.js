const fs = require('fs');

// =========================================================================
// REQUEST 3: index.html (Home Page 1 Hero Section Background Image)
// =========================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldHero1 = `<section class="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold tracking-wide">
            <i class="fas fa-shield-virus text-cyan-600 dark:text-cyan-400"></i>
            <span>Certified 7-Stage Mechanized Tank Sanitization</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black dark:text-white">
            Clean Tank. <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Safe Water.</span> Healthy Home.
          </h1>

          <p class="text-lg sm:text-xl font-medium leading-relaxed text-black dark:text-white max-w-2xl">
            Say goodbye to slimy sludge, black mould, and waterborne bacteria. Our certified engineers utilize industrial rotary high-pressure jets, vacuum de-sludging, and hospital-grade UV radiation to render your water supply 100% pure and potable.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
              <i class="fas fa-calendar-check text-lg"></i>
              <span>Book Instant Cleaning Visit</span>
            </a>
            <a href="pricing.html" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
              <i class="fas fa-calculator text-cyan-600 dark:text-cyan-400"></i>
              <span>View Pricing Plans</span>
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-sky-200 dark:border-sky-800">
            <div>
              <div class="text-2xl sm:text-3xl font-black text-black dark:text-white counter-value" data-target="48500" data-suffix="+">0</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Tanks Sanitized</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 counter-value" data-target="99" data-suffix=".9%">0</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Germ Eradication</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400 counter-value" data-target="60" data-suffix=" Mins">0</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Average Service Time</div>
            </div>
          </div>
        </div>`;

const newHero1 = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f]">
    <!-- Hero Background Image (Pristine Clean Water Tank) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home1-bg.jpg" alt="Pristine Water Tank Cleaned by AquaPure" class="w-full h-full object-cover object-center filter saturate-125">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md border border-cyan-400 dark:border-cyan-600 text-black dark:text-white text-xs sm:text-sm font-black tracking-wide shadow-md">
            <i class="fas fa-shield-virus text-cyan-600 dark:text-cyan-400"></i>
            <span>Certified 7-Stage Mechanized Tank Sanitization</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black dark:text-white">
            Clean Tank. <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Safe Water.</span> Healthy Home.
          </h1>

          <p class="text-lg sm:text-xl font-bold leading-relaxed text-black dark:text-white max-w-2xl">
            Say goodbye to slimy sludge, black mould, and waterborne bacteria. Our certified engineers utilize industrial rotary high-pressure jets, vacuum de-sludging, and hospital-grade UV radiation to render your water supply 100% pure and potable.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all">
              <i class="fas fa-calendar-check text-lg"></i>
              <span>Book Instant Cleaning Visit</span>
            </a>
            <a href="pricing.html" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-base shadow-sm hover:-translate-y-0.5 transition-all">
              <i class="fas fa-calculator text-cyan-600 dark:text-cyan-400"></i>
              <span>View Pricing Plans</span>
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-sky-300 dark:border-sky-800">
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-black dark:text-white counter-value" data-target="48500" data-suffix="+">0</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Tanks Sanitized</div>
            </div>
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 counter-value" data-target="99" data-suffix=".9%">0</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Germ Eradication</div>
            </div>
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400 counter-value" data-target="60" data-suffix=" Mins">0</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Service Time</div>
            </div>
          </div>
        </div>`;

console.log('index.html contains oldHero1:', indexHtml.includes(oldHero1));
indexHtml = indexHtml.replace(oldHero1, newHero1);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html hero section successfully!');

// =========================================================================
// REQUEST 4: home-family.html (Home Page 2 Hero Section Background Image)
// =========================================================================
let home2Html = fs.readFileSync('home-family.html', 'utf8');

const oldHero2 = `<section class="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-[#f0f9ff] via-[#e6fffa] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#092329] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 border border-teal-300 dark:border-teal-700 text-teal-800 dark:text-teal-200 text-xs sm:text-sm font-bold">
            <i class="fas fa-shield-heart text-teal-600 dark:text-teal-400"></i>
            <span>Pediatric-Approved Chemical-Free Sanitization</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black dark:text-white">
            Pure Water For Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Children & Parents.</span>
          </h1>

          <p class="text-base sm:text-lg font-medium leading-relaxed text-black dark:text-white max-w-2xl">
            Did you know that children accidentally ingest bathwater, and sensitive baby skin absorbs up to 60% of dissolved tank contaminants? Our Family Safe protocol uses 100% organic, non-toxic bio-sanitizers and germicidal UV lamps. No pungent bleach smells, no harsh chemicals.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base shadow-xl shadow-teal-600/25 transition-all">
              <i class="fas fa-baby"></i>
              <span>Schedule Family Safe Clean</span>
            </a>
            <a href="#water-health-quiz" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-base shadow-sm hover:bg-sky-50 dark:hover:bg-sky-900 transition-all">
              <i class="fas fa-stethoscope text-teal-600 dark:text-teal-400"></i>
              <span>Take Water Health Quiz</span>
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-teal-200 dark:border-teal-900">
            <div>
              <div class="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400">0%</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Chlorine Bleach Used</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-black dark:text-white">100%</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Food-Grade Bio Clean</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">30 Days</div>
              <div class="text-xs sm:text-sm font-semibold text-black dark:text-white">Purity Guarantee</div>
            </div>
          </div>
        </div>`;

const newHero2 = `<section class="relative overflow-hidden py-16 lg:py-24 bg-teal-50 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (Happy Mother & Child Safe Bathing Water) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home2-bg.png" alt="Happy Mother and Infant in Clean Bath Water" class="w-full h-full object-cover object-center filter saturate-120">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md border border-teal-400 dark:border-teal-600 text-black dark:text-white text-xs sm:text-sm font-black shadow-md">
            <i class="fas fa-shield-heart text-teal-600 dark:text-teal-400"></i>
            <span>Pediatric-Approved Chemical-Free Sanitization</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black dark:text-white">
            Pure Water For Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Children & Parents.</span>
          </h1>

          <p class="text-base sm:text-lg font-bold leading-relaxed text-black dark:text-white max-w-2xl">
            Did you know that children accidentally ingest bathwater, and sensitive baby skin absorbs up to 60% of dissolved tank contaminants? Our Family Safe protocol uses 100% organic, non-toxic bio-sanitizers and germicidal UV lamps. No pungent bleach smells, no harsh chemicals.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="book-service.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base shadow-xl shadow-teal-600/25 transition-all">
              <i class="fas fa-baby"></i>
              <span>Schedule Family Safe Clean</span>
            </a>
            <a href="#water-health-quiz" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-base shadow-sm hover:bg-sky-50 dark:hover:bg-sky-900 transition-all">
              <i class="fas fa-stethoscope text-teal-600 dark:text-teal-400"></i>
              <span>Take Water Health Quiz</span>
            </a>
          </div>

          <div class="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-teal-300 dark:border-teal-800">
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-teal-200 dark:border-teal-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400">0%</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Chlorine Bleach</div>
            </div>
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-teal-200 dark:border-teal-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-black dark:text-white">100%</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Bio-Organic</div>
            </div>
            <div class="p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#0c1e33]/85 backdrop-blur-md border border-teal-200 dark:border-teal-800 shadow-md">
              <div class="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">30 Days</div>
              <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Purity Guarantee</div>
            </div>
          </div>
        </div>`;

console.log('home-family.html contains oldHero2:', home2Html.includes(oldHero2));
home2Html = home2Html.replace(oldHero2, newHero2);
fs.writeFileSync('home-family.html', home2Html, 'utf8');
console.log('Updated home-family.html hero section successfully!');

// =========================================================================
// REQUEST 5: about.html (About Us Hero Section Background Image)
// =========================================================================
let aboutHtml = fs.readFileSync('about.html', 'utf8');

const oldHeroAbout = `<section class="py-16 lg:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-bold">
        <i class="fas fa-shield-halved text-cyan-600 dark:text-cyan-400"></i> Engineering Water Purity Since 2014
      </span>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white max-w-4xl mx-auto leading-tight">
        Restoring The Sanctity Of Your Home's Stored Water
      </h1>
      <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
        AquaPure was founded on a simple conviction: clean water is not a luxury, it is the foundational pillar of human health. We replaced dangerous, unscientific manual cleaning with high-precision German mechanization and certified microbiological testing.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <a href="book-service.html" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-lg hover:from-cyan-700 hover:to-teal-700 transition-all flex items-center gap-2">
          <i class="fas fa-calendar-check"></i>
          <span>Schedule A Sanitization Visit</span>
        </a>
        <a href="services.html" class="px-7 py-3.5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold hover:bg-sky-50 dark:hover:bg-sky-900 transition-all flex items-center gap-2">
          <i class="fas fa-gears text-cyan-600 dark:text-cyan-400"></i>
          <span>Explore Our Technology</span>
        </a>
      </div>
    </div>
  </section>`;

const newHeroAbout = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (AquaPure Analytical Laboratory & Research Facility) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-about-bg.png" alt="AquaPure Water Testing & Research Laboratory" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-6">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-black">
          <i class="fas fa-shield-halved text-cyan-600 dark:text-cyan-400"></i> Engineering Water Purity Since 2014
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white leading-tight">
          Restoring The Sanctity Of Your Home's Stored Water
        </h1>
        <p class="text-base sm:text-lg font-bold text-black dark:text-white leading-relaxed max-w-3xl mx-auto">
          AquaPure was founded on a simple conviction: clean water is not a luxury, it is the foundational pillar of human health. We replaced dangerous, unscientific manual cleaning with high-precision German mechanization and certified microbiological testing.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <a href="book-service.html" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-lg hover:from-cyan-700 hover:to-teal-700 transition-all flex items-center gap-2">
            <i class="fas fa-calendar-check"></i>
            <span>Schedule A Sanitization Visit</span>
          </a>
          <a href="services.html" class="px-7 py-3.5 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold hover:bg-sky-50 dark:hover:bg-sky-900 transition-all flex items-center gap-2">
            <i class="fas fa-gears text-cyan-600 dark:text-cyan-400"></i>
            <span>Explore Our Technology</span>
          </a>
        </div>
      </div>
    </div>
  </section>`;

console.log('about.html contains oldHeroAbout:', aboutHtml.includes(oldHeroAbout));
aboutHtml = aboutHtml.replace(oldHeroAbout, newHeroAbout);
fs.writeFileSync('about.html', aboutHtml, 'utf8');
console.log('Updated about.html hero section successfully!');
