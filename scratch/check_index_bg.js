const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const heroBgStart = index.indexOf('Hero Background Image');
console.log(index.substring(heroBgStart - 50, heroBgStart + 600));
