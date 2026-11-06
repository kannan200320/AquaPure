const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const heroStart = index.indexOf('SECTION 2: HERO SECTION');
const nextSec = index.indexOf('SECTION 3:', heroStart);

console.log('Hero section length:', nextSec - heroStart);
console.log(index.substring(heroStart - 50, nextSec - 10));
