const fs = require('fs');

let bd = fs.readFileSync('blog-details.html', 'utf8');

const target = '<!-- ==========================================================================\n       SECTION 3: EXECUTIVE SUMMARY';
// Handle both CRLF and LF
let idx = bd.indexOf('SECTION 3: EXECUTIVE SUMMARY');
if (idx !== -1) {
  // Find start of comment block before it
  let commentStart = bd.lastIndexOf('<!--', idx);
  console.log('Found commentStart at:', commentStart);
  
  const heroImgBlock = `<!-- ==========================================================================
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
    </section>\n\n    `;

  bd = bd.substring(0, commentStart) + heroImgBlock + bd.substring(commentStart);
  fs.writeFileSync('blog-details.html', bd, 'utf8');
  console.log('SUCCESS: Inserted featured hero image into blog-details.html');
} else {
  console.log('ERROR: SECTION 3 not found in blog-details.html');
}
