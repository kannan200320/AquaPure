const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const bgMatch = content.match(/assets\/images\/hero-[^"']+/g);
  if (bgMatch) {
    console.log(f, bgMatch);
  }
});
