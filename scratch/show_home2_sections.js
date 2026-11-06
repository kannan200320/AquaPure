const fs = require('fs');
const home2 = fs.readFileSync('home-family.html', 'utf8');

const sections = home2.match(/<section[\s\S]*?<\/section>/g) || [];
console.log('Total sections in home-family.html:', sections.length);
if (sections.length > 0) {
  console.log('First section:\n', sections[0].substring(0, 2000));
}
