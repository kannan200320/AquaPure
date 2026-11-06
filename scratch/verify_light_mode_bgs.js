const fs = require('fs');

const pages = [
  { file: 'index.html', isExcluded: false },
  { file: 'home-family.html', isExcluded: false },
  { file: 'services.html', isExcluded: false },
  { file: 'pricing.html', isExcluded: false },
  { file: 'book-service.html', isExcluded: false },
  { file: 'amc-membership.html', isExcluded: false },
  { file: 'service-details.html', isExcluded: false },
  { file: 'blog.html', isExcluded: false },
  { file: 'about.html', isExcluded: true },
  { file: 'contact.html', isExcluded: true }
];

pages.forEach(p => {
  const content = fs.readFileSync(p.file, 'utf8');
  console.log(`\n${p.file} (excluded: ${p.isExcluded}):`);
  if (!p.isExcluded) {
    console.log('  Has saturate-[1.45]:', content.includes('saturate-[1.45]'));
    console.log('  Has increased light visibility (bg-white/15 or from-white/70):', content.includes('bg-white/15') || content.includes('from-white/70'));
  } else {
    console.log('  Has original bg-white/75 overlay:', content.includes('bg-white/75 dark:hidden'));
  }
});
