const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const col7 = index.indexOf('lg:col-span-7');
console.log(index.substring(col7, col7 + 500));
