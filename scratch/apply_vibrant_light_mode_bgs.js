const fs = require('fs');

// =========================================================================
// 1. index.html
// =========================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldHero1Bg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home1-bg.jpg" alt="Pristine Water Tank Cleaned by AquaPure" class="w-full h-full object-cover object-center filter saturate-125">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>`;

const newHero1Bg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home1-bg.jpg" alt="Pristine Water Tank Cleaned by AquaPure" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: vibrant full-color image in light mode while ensuring 100% text legibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>`;

const oldIndexCol7 = `<div class="lg:col-span-7 space-y-6">`;
const newIndexCol7 = `<div class="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-transparent backdrop-blur-[2px] dark:backdrop-blur-none border border-sky-200/70 dark:border-transparent shadow-lg dark:shadow-none">`;

console.log('index.html contains oldHero1Bg:', indexHtml.includes(oldHero1Bg));
indexHtml = indexHtml.replace(oldHero1Bg, newHero1Bg);
if (indexHtml.includes(oldIndexCol7)) {
  indexHtml = indexHtml.replace(oldIndexCol7, newIndexCol7);
  console.log('index.html updated col7 container');
}
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html successfully!');

// =========================================================================
// 2. home-family.html
// =========================================================================
let home2Html = fs.readFileSync('home-family.html', 'utf8');

const oldHero2Bg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home2-bg.png" alt="Happy Mother and Infant in Clean Bath Water" class="w-full h-full object-cover object-center filter saturate-120">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>`;

const newHero2Bg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-home2-bg.png" alt="Happy Mother and Infant in Clean Bath Water" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: vibrant full-color image in light mode while ensuring 100% text legibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/80 to-[#07131f]/60"></div>
    </div>`;

const oldHome2Col7 = `<div class="lg:col-span-7 space-y-6">`;
const newHome2Col7 = `<div class="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-transparent backdrop-blur-[2px] dark:backdrop-blur-none border border-teal-200/70 dark:border-transparent shadow-lg dark:shadow-none">`;

console.log('home-family.html contains oldHero2Bg:', home2Html.includes(oldHero2Bg));
home2Html = home2Html.replace(oldHero2Bg, newHero2Bg);
if (home2Html.includes(oldHome2Col7)) {
  home2Html = home2Html.replace(oldHome2Col7, newHome2Col7);
  console.log('home-family.html updated col7 container');
}
fs.writeFileSync('home-family.html', home2Html, 'utf8');
console.log('Updated home-family.html successfully!');

// =========================================================================
// 3. services.html
// =========================================================================
let servicesHtml = fs.readFileSync('services.html', 'utf8');

const oldHeroServicesBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-services-bg.png" alt="Mechanized Tank Cleaning and UV Sterilization Technology" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

const newHeroServicesBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-services-bg.png" alt="Mechanized Tank Cleaning and UV Sterilization Technology" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
      <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

console.log('services.html contains oldHeroServicesBg:', servicesHtml.includes(oldHeroServicesBg));
servicesHtml = servicesHtml.replace(oldHeroServicesBg, newHeroServicesBg);
fs.writeFileSync('services.html', servicesHtml, 'utf8');
console.log('Updated services.html successfully!');

// =========================================================================
// 4. pricing.html
// =========================================================================
let pricingHtml = fs.readFileSync('pricing.html', 'utf8');

const oldHeroPricingBg = `<div class="absolute inset-0 z-0 overflow-hidden">
        <img src="assets/images/hero-pricing-bg.png" alt="Crystal Clear Pure Drinking Water" class="w-full h-full object-cover object-center filter saturate-110">
        <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
        <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
        <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
      </div>`;

const newHeroPricingBg = `<div class="absolute inset-0 z-0 overflow-hidden">
        <img src="assets/images/hero-pricing-bg.png" alt="Crystal Clear Pure Drinking Water" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
        <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
        <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
        <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
      </div>`;

console.log('pricing.html contains oldHeroPricingBg:', pricingHtml.includes(oldHeroPricingBg));
pricingHtml = pricingHtml.replace(oldHeroPricingBg, newHeroPricingBg);
fs.writeFileSync('pricing.html', pricingHtml, 'utf8');
console.log('Updated pricing.html successfully!');

// =========================================================================
// 5. book-service.html
// =========================================================================
let bookHtml = fs.readFileSync('book-service.html', 'utf8');

const oldHeroBookBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-book-bg.png" alt="Seamless Online Booking for Mechanized Tank Sanitization" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

const newHeroBookBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-book-bg.png" alt="Seamless Online Booking for Mechanized Tank Sanitization" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
      <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

console.log('book-service.html contains oldHeroBookBg:', bookHtml.includes(oldHeroBookBg));
bookHtml = bookHtml.replace(oldHeroBookBg, newHeroBookBg);
fs.writeFileSync('book-service.html', bookHtml, 'utf8');
console.log('Updated book-service.html successfully!');

// =========================================================================
// 6. amc-membership.html
// =========================================================================
let amcHtml = fs.readFileSync('amc-membership.html', 'utf8');

const oldHeroAmcBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-amc-bg.png" alt="Annual Four-Season Water Purity Maintenance Protection" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

const newHeroAmcBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-amc-bg.png" alt="Annual Four-Season Water Purity Maintenance Protection" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
      <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

console.log('amc-membership.html contains oldHeroAmcBg:', amcHtml.includes(oldHeroAmcBg));
amcHtml = amcHtml.replace(oldHeroAmcBg, newHeroAmcBg);
fs.writeFileSync('amc-membership.html', amcHtml, 'utf8');
console.log('Updated amc-membership.html successfully!');

// =========================================================================
// 7. service-details.html (7-Stage Deep Clean)
// =========================================================================
let detailsHtml = fs.readFileSync('service-details.html', 'utf8');

const oldHeroDetailsBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-7stage-bg.png" alt="Complete 7-Stage Mechanized Tank Sanitization Equipment Lineup" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

const newHeroDetailsBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-7stage-bg.png" alt="Complete 7-Stage Mechanized Tank Sanitization Equipment Lineup" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
      <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

console.log('service-details.html contains oldHeroDetailsBg:', detailsHtml.includes(oldHeroDetailsBg));
detailsHtml = detailsHtml.replace(oldHeroDetailsBg, newHeroDetailsBg);
fs.writeFileSync('service-details.html', detailsHtml, 'utf8');
console.log('Updated service-details.html successfully!');

// =========================================================================
// 8. blog.html
// =========================================================================
let blogHtml = fs.readFileSync('blog.html', 'utf8');

const oldHeroBlogBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-blog-bg.jpg" alt="AquaPure Microbiology Lab and Water Safety Research Center" class="w-full h-full object-cover object-center filter saturate-110">
      <!-- Adaptive Contrast Overlays: ensures background image is clearly visible while text has 100% legibility in both light & dark mode -->
      <div class="absolute inset-0 bg-white/75 dark:hidden backdrop-blur-[0.5px]"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

const newHeroBlogBg = `<div class="absolute inset-0 z-0 overflow-hidden">
      <img src="assets/images/hero-blog-bg.jpg" alt="AquaPure Microbiology Lab and Water Safety Research Center" class="w-full h-full object-cover object-center filter saturate-[1.45] contrast-[1.08] brightness-[1.02]">
      <!-- Adaptive Contrast Overlays: rich full-color background in light mode -->
      <div class="absolute inset-0 bg-white/15 dark:hidden"></div>
      <div class="hidden dark:block absolute inset-0 bg-[#07131f]/80 backdrop-blur-[0.5px]"></div>
    </div>`;

console.log('blog.html contains oldHeroBlogBg:', blogHtml.includes(oldHeroBlogBg));
blogHtml = blogHtml.replace(oldHeroBlogBg, newHeroBlogBg);
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html successfully!');
