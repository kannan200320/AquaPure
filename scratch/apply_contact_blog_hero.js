const fs = require('fs');

// =========================================================================
// 1. contact.html
// =========================================================================
let contactHtml = fs.readFileSync('contact.html', 'utf8');

const oldHeroContact = `<section class="py-16 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700 text-xs font-bold uppercase tracking-wider text-black dark:text-white">
        <i class="fas fa-headset text-cyan-600 dark:text-cyan-400"></i>
        <span>24/7 Rapid Response & Water Hygiene Support</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">Connect With AquaPure Water Engineers</h1>
      <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Have urgent questions regarding brown tap water, need an immediate emergency sanitization crew dispatched, or require an on-site commercial survey for your residential apartment complex? Our certified water hygiene engineers respond in under 15 minutes.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="tel:+18004389283" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
          <i class="fas fa-phone-volume"></i>
          <span>Call Toll-Free: 1-800-AQUA-PURE</span>
        </a>
        <a href="#contact-form-section" class="px-6 py-3 rounded-xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-sm hover:border-cyan-500 transition-colors flex items-center gap-2">
          <i class="fas fa-file-pen text-cyan-600 dark:text-cyan-400"></i>
          <span>Request Free Estimate</span>
        </a>
      </div>
    </div>
  </section>`;

const newHeroContact = `<section class="relative overflow-hidden py-16 lg:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (AquaPure Support & Water Engineering Operations Center) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-contact-bg.jpg" alt="AquaPure Customer Support Specialists & Water Treatment Engineers" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
      <div class="p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700 text-xs font-black uppercase tracking-wider text-black dark:text-white shadow-sm">
          <i class="fas fa-headset text-cyan-600 dark:text-cyan-400"></i>
          <span>24/7 Rapid Response & Water Hygiene Support</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight leading-tight">Connect With AquaPure Water Engineers</h1>
        <p class="text-base sm:text-lg font-bold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Have urgent questions regarding brown tap water, need an immediate emergency sanitization crew dispatched, or require an on-site commercial survey for your residential apartment complex? Our certified water hygiene engineers respond in under 15 minutes.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="tel:+18004389283" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
            <i class="fas fa-phone-volume"></i>
            <span>Call Toll-Free: 1-800-AQUA-PURE</span>
          </a>
          <a href="#contact-form-section" class="px-6 py-3.5 rounded-xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-sm hover:border-cyan-500 transition-colors flex items-center gap-2">
            <i class="fas fa-file-pen text-cyan-600 dark:text-cyan-400"></i>
            <span>Request Free Estimate</span>
          </a>
        </div>
      </div>
    </div>
  </section>`;

console.log('contact.html contains oldHeroContact:', contactHtml.includes(oldHeroContact));
contactHtml = contactHtml.replace(oldHeroContact, newHeroContact);
fs.writeFileSync('contact.html', contactHtml, 'utf8');
console.log('Updated contact.html hero section successfully!');

// =========================================================================
// 2. blog.html
// =========================================================================
let blogHtml = fs.readFileSync('blog.html', 'utf8');

const oldHeroBlog = `<section class="py-16 sm:py-20 bg-gradient-to-b from-sky-100/70 via-sky-50 to-[#f0f9ff] dark:from-[#08182b] dark:via-[#091e36] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
          <i class="fas fa-microscope text-cyan-600 dark:text-cyan-400"></i> AquaPure Water Hygiene & Engineering Archive
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Scientific Guides to Domestic Water Safety & Tank Health
        </h1>
        <p class="text-base sm:text-lg font-medium text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
          Discover verified field reports, microbiological insights, and practical engineering guides on overhead tank maintenance, sump de-sludging, pipeline scaling, and drinking water safety.
        </p>

        <!-- Search Bar & Live Metrics -->
        <div class="max-w-2xl mx-auto pt-4">
          <div class="relative flex items-center shadow-lg rounded-2xl overflow-hidden border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#0c1e33]">
            <i class="fas fa-magnifying-glass absolute left-4 text-cyan-600 dark:text-cyan-400 text-base"></i>
            <input type="text" id="blog-search-input" placeholder="Search articles: E. Coli, Biofilm, Sump Odor, Descaling..." class="w-full pl-12 pr-32 py-4 text-sm font-semibold text-black dark:text-white bg-transparent focus:outline-none">
            <button class="absolute right-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition-all">
              Search
            </button>
          </div>
        </div>

        <!-- Research Archive Metrics Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-left">
          <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm">
            <div class="text-2xl font-black text-cyan-600 dark:text-cyan-400">64+</div>
            <div class="text-xs font-bold text-black dark:text-white">Peer-Reviewed Articles</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm">
            <div class="text-2xl font-black text-teal-600 dark:text-teal-400">12,000+</div>
            <div class="text-xs font-bold text-black dark:text-white">Lab Water Audits Logged</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm">
            <div class="text-2xl font-black text-cyan-600 dark:text-cyan-400">99.98%</div>
            <div class="text-xs font-bold text-black dark:text-white">Biofilm Kill Rate</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm">
            <div class="text-2xl font-black text-teal-600 dark:text-teal-400">ISO 9001</div>
            <div class="text-xs font-bold text-black dark:text-white">Sanitation Certified</div>
          </div>
        </div>
      </div>
    </section>`;

const newHeroBlog = `<section class="relative overflow-hidden py-16 sm:py-24 bg-sky-100 dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900">
    <!-- Hero Background Image (Microbiology Research Laboratory & Biofilm Analysis Station) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-blog-bg.jpg" alt="AquaPure Microbiology Lab and Water Safety Research Center" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
      <div class="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200/80 dark:border-sky-800/80 shadow-2xl space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-wider shadow-sm">
          <i class="fas fa-microscope text-cyan-600 dark:text-cyan-400"></i> AquaPure Water Hygiene & Engineering Archive
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight leading-tight">
          Scientific Guides to Domestic Water Safety & Tank Health
        </h1>
        <p class="text-base sm:text-lg font-bold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
          Discover verified field reports, microbiological insights, and practical engineering guides on overhead tank maintenance, sump de-sludging, pipeline scaling, and drinking water safety.
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto pt-2">
          <div class="relative flex items-center shadow-lg rounded-2xl overflow-hidden border border-sky-300 dark:border-sky-700 bg-white/95 dark:bg-[#07131f]/95">
            <i class="fas fa-magnifying-glass absolute left-4 text-cyan-600 dark:text-cyan-400 text-base"></i>
            <input type="text" id="blog-search-input" placeholder="Search articles: E. Coli, Biofilm, Sump Odor, Descaling..." class="w-full pl-12 pr-32 py-4 text-sm font-bold text-black dark:text-white bg-transparent focus:outline-none">
            <button class="absolute right-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition-all">
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Research Archive Metrics Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2 text-left">
        <div class="p-4 rounded-2xl bg-white/90 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
          <div class="text-2xl font-black text-cyan-600 dark:text-cyan-400">64+</div>
          <div class="text-xs font-bold text-black dark:text-white">Peer-Reviewed Articles</div>
        </div>
        <div class="p-4 rounded-2xl bg-white/90 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
          <div class="text-2xl font-black text-teal-600 dark:text-teal-400">12,000+</div>
          <div class="text-xs font-bold text-black dark:text-white">Lab Water Audits Logged</div>
        </div>
        <div class="p-4 rounded-2xl bg-white/90 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
          <div class="text-2xl font-black text-cyan-600 dark:text-cyan-400">99.98%</div>
          <div class="text-xs font-bold text-black dark:text-white">Biofilm Kill Rate</div>
        </div>
        <div class="p-4 rounded-2xl bg-white/90 dark:bg-[#0c1e33]/90 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-md">
          <div class="text-2xl font-black text-teal-600 dark:text-teal-400">ISO 9001</div>
          <div class="text-xs font-bold text-black dark:text-white">Sanitation Certified</div>
        </div>
      </div>
    </div>
  </section>`;

console.log('blog.html contains oldHeroBlog:', blogHtml.includes(oldHeroBlog));
blogHtml = blogHtml.replace(oldHeroBlog, newHeroBlog);
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html hero section successfully!');
