const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const heroMatch = index.match(/<!-- =+\s*SECTION 2:[^>]*-->[\s\S]*?<section[^>]*>/i);
if (heroMatch) {
  const start = heroMatch.index;
  console.log(index.substring(start, start + 3000));
} else {
  console.log('Not found by regex');
}
