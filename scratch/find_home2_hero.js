const fs = require('fs');
const home2 = fs.readFileSync('home-family.html', 'utf8');

const heroMatch = home2.match(/<!-- =+\s*SECTION 2:[^>]*-->[\s\S]*?<section[^>]*>/i);
if (heroMatch) {
  const start = heroMatch.index;
  console.log(home2.substring(start, start + 3000));
} else {
  console.log('Not found by regex in home-family.html');
}
