const fs = require('fs');

const tests = [
  { file: 'services.html', img: 'assets/images/hero-services-bg.png' },
  { file: 'pricing.html', img: 'assets/images/hero-pricing-bg.png' },
  { file: 'book-service.html', img: 'assets/images/hero-book-bg.png' },
  { file: 'amc-membership.html', img: 'assets/images/hero-amc-bg.png' },
  { file: 'service-details.html', img: 'assets/images/hero-7stage-bg.png' }
];

tests.forEach(t => {
  const content = fs.readFileSync(t.file, 'utf8');
  console.log(`${t.file}:`);
  console.log(`  Contains ${t.img}:`, content.includes(t.img));
  console.log(`  Contains light overlay:`, content.includes('bg-white/75 dark:hidden'));
  console.log(`  Contains dark overlay:`, content.includes('hidden dark:block absolute inset-0 bg-[#07131f]/80'));
  console.log(`  Contains text-black dark:text-white:`, content.includes('text-black dark:text-white'));
});
