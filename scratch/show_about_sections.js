const fs = require('fs');
const about = fs.readFileSync('about.html', 'utf8');

const sections = about.match(/<section[\s\S]*?<\/section>/g) || [];
console.log('Total sections in about.html:', sections.length);
if (sections.length > 0) {
  console.log('First section:\n', sections[0].substring(0, 2000));
}
