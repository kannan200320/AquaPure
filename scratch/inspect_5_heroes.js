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
  const heroMatch = content.match(/<section[^>]*hero[^>]*>[\s\S]*?<\/section>/i) || content.match(/<section[\s\S]*?<\/section>/);
  console.log(`\n=================== ${p} HERO SECTION ===================`);
  if (heroMatch) {
    console.log(heroMatch[0].substring(0, 700));
  } else {
    console.log('No hero section found!');
  }
});
