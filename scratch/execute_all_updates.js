const fs = require('fs');

console.log('=== STARTING MULTI-FILE UPDATES FOR USER REQUESTS 1 TO 5 ===');

// ============================================================================
// 1. BLOG-DETAILS.HTML: Add the same featured image as in blog.html
// ============================================================================
let blogDetails = fs.readFileSync('blog-details.html', 'utf8');

const heroImgBlock = `
    <!-- ==========================================================================
         FEATURED ARTICLE HERO IMAGE (Matches Blog Archive Featured Image)
         ========================================================================== -->
    <section class="py-8 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-sky-200 dark:border-sky-800 relative group bg-sky-100 dark:bg-sky-950">
          <div class="relative h-72 sm:h-96 lg:h-[450px] overflow-hidden">
            <img src="assets/images/overhead-tank-cleaning.jpg" alt="Rooftop Black Sintex Tank Cleaning" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="eager">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div class="space-y-1">
                <span class="px-3 py-1 rounded-full bg-cyan-600 text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Field Investigation Photo
                </span>
                <p class="text-xs sm:text-sm font-semibold text-white/90 drop-shadow-md max-w-xl">
                  AquaPure certified hygiene technician conducting 150-bar rotary mechanized jetting inside a 1,500L rooftop polyethylene storage tank.
                </p>
              </div>
              <span class="text-xs font-bold text-white/80 shrink-0">
                <i class="fas fa-camera mr-1"></i> Verified Field Audit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

if (!blogDetails.includes('overhead-tank-cleaning.jpg')) {
  // Insert right before SECTION 3: EXECUTIVE SUMMARY
  const marker = '<!-- ==========================================================================\n       SECTION 3: EXECUTIVE SUMMARY';
  if (blogDetails.includes(marker)) {
    blogDetails = blogDetails.replace(marker, heroImgBlock + '\n    ' + marker);
    console.log('PASS: Inserted featured hero image into blog-details.html');
  } else {
    console.log('WARNING: marker not found in blog-details.html');
  }
} else {
  console.log('NOTE: blog-details.html already contains overhead-tank-cleaning.jpg');
}

fs.writeFileSync('blog-details.html', blogDetails, 'utf8');


// ============================================================================
// 2 & 3 & 4. FOOTER SERVICE LINKS, HEADER BUTTON SHAPES, & SIGN IN TEXT
// Across all 13 pages (all pages with header/footer)
// ============================================================================
const contentPages = [
  '404.html',
  'about.html',
  'amc-membership.html',
  'blog-details.html',
  'blog.html',
  'book-service.html',
  'coming-soon.html',
  'contact.html',
  'home-family.html',
  'index.html',
  'pricing.html',
  'service-details.html',
  'services.html'
];

contentPages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // --- FOOTER SERVICE LINKS (Request 2) ---
  // Replace old services list with specific anchor links
  const oldServicesRegex = /<!-- Services -->\s*<div class="space-y-3">\s*<h4 class="text-sm font-bold uppercase tracking-wider text-black dark:text-white">Services<\/h4>\s*<ul class="space-y-2 text-xs sm:text-sm font-semibold text-black dark:text-white">[\s\S]*?<\/ul>\s*<\/div>/;
  
  const newServicesBlock = `<!-- Services -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold uppercase tracking-wider text-black dark:text-white">Services</h4>
          <ul class="space-y-2 text-xs sm:text-sm font-semibold text-black dark:text-white">
            <li><a href="services.html#overhead-tank" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Overhead Tank Cleaning</a></li>
            <li><a href="services.html#underground-sump" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Underground Sump Cleaning</a></li>
            <li><a href="services.html#disinfection" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">UV Bio-Sanitization</a></li>
            <li><a href="services.html#pipeline-flushing" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pipeline De-scaling</a></li>
            <li><a href="service-details.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">7-Stage Deep Clean</a></li>
            <li><a href="amc-membership.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AMC Memberships</a></li>
          </ul>
        </div>`;

  if (oldServicesRegex.test(content)) {
    content = content.replace(oldServicesRegex, newServicesBlock);
    modified = true;
  }

  // --- HEADER BUTTON SHAPES & SIGN IN TEXT (Requests 3 & 4) ---
  // Standardize the utility controls:
  // Regex to match from <!-- Right Side Utility Controls / Right Header Action Utilities --> down to </header>
  const headerUtilityRegex = /(<!-- (?:Right Side Utility Controls|Right Header Action Utilities) -->\s*<div class="flex items-center gap-[0-9.]+[^"]*">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/header>)/;
  
  const newHeaderControls = `<!-- Right Side Utility Controls -->
        <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button class="theme-toggle w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors" title="Toggle Light / Dark Mode">
            <i class="theme-toggle-icon fas fa-moon text-sm"></i>
          </button>

          <button class="rtl-toggle h-9 px-3 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white font-bold text-xs flex items-center gap-1.5 transition-colors" title="Toggle RTL / LTR">
            <i class="fas fa-arrow-right-arrow-left text-xs"></i>
            <span class="rtl-toggle-text">RTL</span>
          </button>

          <a href="login-register.html" class="whitespace-nowrap h-9 px-3.5 sm:px-4 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#0c1e33] hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm">
            <i class="fas fa-circle-user text-cyan-600 dark:text-cyan-400 text-sm"></i>
            <span>Sign In</span>
          </a>

          <button id="mobile-menu-btn" class="lg:hidden w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors">
            <i id="mobile-menu-icon" class="fas fa-bars text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  </header>`;

  // Also replace any "Login" text inside mobile menus with "Sign In"
  if (content.includes('>Login<') || content.includes('>Login <') || content.includes('Login</span>')) {
    content = content.replace(/<span>Login<\/span>/g, '<span>Sign In</span>');
    content = content.replace(/>Login<\/a>/g, '>Sign In</a>');
    modified = true;
  }

  // Replace header utility controls
  const beforeHeader = content.indexOf('<!-- Right');
  const afterHeader = content.indexOf('</header>');
  if (beforeHeader !== -1 && afterHeader !== -1) {
    const sub = content.substring(beforeHeader, afterHeader + '</header>'.length);
    content = content.replace(sub, newHeaderControls);
    modified = true;
    console.log(`PASS: Updated header controls & Sign In button in ${file}`);
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
  }
});


// ============================================================================
// 5. INDEX.HTML: Replace "Instant Service Dispatch" form card in Hero Section
// with relevant hero image card (Request 5)
// ============================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldHeroRightRegex = /<!-- Right Hero Visual Card -->\s*<div class="lg:col-span-5 relative">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newHeroRightBlock = `<!-- Right Hero Visual Card (Relevant Tank Cleaning Hero Image) -->
        <div class="lg:col-span-5 relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-200 dark:border-sky-800 relative group bg-white dark:bg-[#0c1e33]">
            <div class="relative h-[440px] sm:h-[480px] overflow-hidden">
              <img src="assets/images/overhead-tank-cleaning.jpg" alt="Certified Mechanized Overhead Tank Cleaning" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="eager">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              
              <!-- Floating Top Badges -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md border border-sky-200 dark:border-sky-800 text-black dark:text-white text-xs font-bold shadow-lg">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>German Mechanized Tech</span>
                </div>
                <div class="px-3 py-1.5 rounded-full bg-cyan-600/90 backdrop-blur-md text-white text-xs font-black shadow-lg">
                  150-Bar Rotary Jets
                </div>
              </div>

              <!-- Floating Bottom Info Card -->
              <div class="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md border border-sky-200 dark:border-sky-800 shadow-xl space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                      <i class="fas fa-droplet"></i>
                    </div>
                    <div>
                      <div class="font-black text-sm text-black dark:text-white">Mechanized Deep Disinfection</div>
                      <div class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Zero Sludge &bull; UV-C Germicidal Inactivation</div>
                    </div>
                  </div>
                  <span class="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-black">
                    100% Sterile
                  </span>
                </div>

                <div class="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-black dark:text-white pt-2 border-t border-sky-200/80 dark:border-sky-800/80">
                  <div class="p-1.5 rounded-lg bg-sky-50 dark:bg-[#07131f]">
                    <div class="text-cyan-600 dark:text-cyan-400 font-black">0%</div>
                    <div>Bleach</div>
                  </div>
                  <div class="p-1.5 rounded-lg bg-sky-50 dark:bg-[#07131f]">
                    <div class="text-teal-600 dark:text-teal-400 font-black">60 Min</div>
                    <div>Fast Clean</div>
                  </div>
                  <div class="p-1.5 rounded-lg bg-sky-50 dark:bg-[#07131f]">
                    <div class="text-emerald-600 dark:text-emerald-400 font-black">Free</div>
                    <div>Lab Report</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldHeroRightRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldHeroRightRegex, newHeroRightBlock);
  console.log('PASS: Replaced Instant Service Dispatch card with relevant hero image in index.html');
  fs.writeFileSync('index.html', indexHtml, 'utf8');
} else {
  console.log('WARNING: oldHeroRightRegex did not match in index.html');
}

console.log('=== MULTI-FILE EXECUTION FINISHED ===');
