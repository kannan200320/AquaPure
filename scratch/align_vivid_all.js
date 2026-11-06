const fs = require('fs');

const centeredPages = [
  'services.html',
  'pricing.html',
  'book-service.html',
  'amc-membership.html',
  'service-details.html',
  'blog.html'
];

centeredPages.forEach(p => {
  let html = fs.readFileSync(p, 'utf8');
  
  // Replace image classes
  html = html.replace(
    /filter saturate-\[[^\]]+\] contrast-\[[^\]]+\] brightness-\[[^\]]+\]/g,
    'filter saturate-[1.65] contrast-[1.12] brightness-[1.02] dark:saturate-110 dark:contrast-100 dark:brightness-100'
  );
  
  // Replace light overlay
  html = html.replace(
    /<div class="absolute inset-0 bg-white\/15 dark:hidden"><\/div>/g,
    '<div class="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-white/30 dark:hidden"></div>'
  );
  
  fs.writeFileSync(p, html, 'utf8');
  console.log(`Aligned ${p} to rich vivid light mode`);
});

// Update index.html and home-family.html
['index.html', 'home-family.html'].forEach(p => {
  let html = fs.readFileSync(p, 'utf8');
  
  html = html.replace(
    /filter saturate-\[[^\]]+\] contrast-\[[^\]]+\] brightness-\[[^\]]+\]/g,
    'filter saturate-[1.65] contrast-[1.12] brightness-[1.02] dark:saturate-110 dark:contrast-100 dark:brightness-100'
  );
  
  html = html.replace(
    /bg-gradient-to-r from-white\/70 via-white\/35 to-transparent dark:hidden/g,
    'bg-gradient-to-r from-white/60 via-white/20 to-transparent dark:hidden'
  );
  
  fs.writeFileSync(p, html, 'utf8');
  console.log(`Aligned ${p} to rich vivid light mode`);
});
