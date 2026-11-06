const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const heroStart = index.indexOf('<section class="relative pt-12');
console.log('Hero start index:', heroStart);
const heroEnd = index.indexOf('</section>', heroStart) + 10;
console.log(index.substring(heroStart, Math.min(index.length, heroStart + 2500)));
