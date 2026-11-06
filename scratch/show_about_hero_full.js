const fs = require('fs');
const about = fs.readFileSync('about.html', 'utf8');

const heroStart = about.indexOf('<section class="py-16');
const heroEnd = about.indexOf('</section>', heroStart) + 10;
console.log(about.substring(heroStart, heroEnd));
