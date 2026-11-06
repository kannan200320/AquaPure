const fs = require('fs');
const files = [
  'blog-details.html',
  'blog-details-sintex.html',
  'blog-details-eczema.html',
  'blog-details-jetting.html',
  'blog-details-sump.html',
  'blog-details-uv.html',
  'blog-details-pipeline.html',
  'blog-details-lab.html',
  'blog-details-bleach.html',
  'blog-details-osha.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const sections = (content.match(/<!-- Section \d+:/g) || []);
  const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const authorMatch = content.match(/<div class="text-sm font-semibold text-black dark:text-white leading-tight">([\s\S]*?)<\/div>/);
  const imageMatch = content.match(/<img[^>]+src=["'](assets\/images\/[^"']+)["'][^>]*hero-image/i) || content.match(/<section class="max-w-4xl[\s\S]*?<img[^>]+src=["']([^"']+)["']/i);
  
  console.log(`\nFile: ${f}`);
  console.log(`  Sections count: ${sections.length} (${sections.join(', ')})`);
  console.log(`  Title: ${titleMatch ? titleMatch[1].trim() : 'NONE'}`);
  console.log(`  Author: ${authorMatch ? authorMatch[1].trim() : 'NONE'}`);
  console.log(`  Hero Image: ${imageMatch ? imageMatch[1] : 'NONE'}`);
});
