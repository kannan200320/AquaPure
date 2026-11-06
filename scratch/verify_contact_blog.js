const fs = require('fs');

const tests = [
  { file: 'contact.html', img: 'assets/images/hero-contact-bg.jpg' },
  { file: 'blog.html', img: 'assets/images/hero-blog-bg.jpg' }
];

tests.forEach(t => {
  const content = fs.readFileSync(t.file, 'utf8');
  console.log(`${t.file}:`);
  console.log(`  Contains ${t.img}:`, content.includes(t.img));
  console.log(`  Contains light overlay:`, content.includes('bg-white/75 dark:hidden'));
  console.log(`  Contains dark overlay:`, content.includes('hidden dark:block absolute inset-0 bg-[#07131f]/80'));
  console.log(`  Contains text-black dark:text-white:`, content.includes('text-black dark:text-white'));
});
