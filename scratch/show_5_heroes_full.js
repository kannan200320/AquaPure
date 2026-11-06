const fs = require('fs');

const pages = [
  'services.html',
  'pricing.html',
  'book-service.html',
  'amc-membership.html',
  'service-details.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const start = content.indexOf('<section');
  const end = content.indexOf('</section>', start) + 10;
  console.log(`\n=================== ${p} ===================`);
  console.log(content.substring(start, end));
});
