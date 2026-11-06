const fs = require('fs');

const pages = [
  'index.html',
  'home-family.html',
  'services.html',
  'pricing.html',
  'book-service.html',
  'amc-membership.html',
  'service-details.html',
  'blog.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const heroBg = content.match(/<!-- Hero Background Image[\s\S]*?<\/div>\s*<\/div>/i) || content.match(/<div class="absolute inset-0 z-0[\s\S]*?<\/div>\s*<\/div>/);
  console.log(`\n=================== ${p} HERO BG ===================`);
  if (heroBg) {
    console.log(heroBg[0]);
  } else {
    console.log('NOT FOUND');
  }
});
