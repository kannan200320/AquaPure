const fs = require('fs');

const files = [
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

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (i < 160 && (l.includes('theme-toggle') || l.includes('rtl-toggle') || l.includes('login-register.html'))) {
      console.log(`${file} L${i+1}: ${l.trim()}`);
    }
  });
});
