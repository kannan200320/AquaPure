const fs = require('fs');

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

let failed = false;
contentPages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasOverhead = content.includes('href="services.html#overhead-tank"');
  const hasSump = content.includes('href="services.html#underground-sump"');
  const hasDisinfection = content.includes('href="services.html#disinfection"');
  const hasFlushing = content.includes('href="services.html#pipeline-flushing"');
  const has7Stage = content.includes('href="service-details.html"');
  const hasAmc = content.includes('href="amc-membership.html"');

  if (hasOverhead && hasSump && hasDisinfection && hasFlushing && has7Stage && hasAmc) {
    console.log(`PASS: ${file} footer links verified.`);
  } else {
    console.error(`FAIL: ${file} footer links missing anchors!`, {
      hasOverhead, hasSump, hasDisinfection, hasFlushing, has7Stage, hasAmc
    });
    failed = true;
  }
});

if (!failed) {
  console.log('ALL 13 PAGES HAVE PROPER DEEP-LINKING FOOTER SERVICE LINKS!');
}
