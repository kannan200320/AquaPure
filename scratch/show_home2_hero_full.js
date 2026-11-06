const fs = require('fs');
const home2 = fs.readFileSync('home-family.html', 'utf8');

const heroStart = home2.indexOf('<section class="relative overflow-hidden py-16');
const heroEnd = home2.indexOf('</section>', heroStart) + 10;
console.log(home2.substring(heroStart, heroEnd));
