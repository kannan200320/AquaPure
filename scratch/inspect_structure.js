const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
lines.forEach((l, idx) => {
  if (l.includes('<!--') && (l.includes('Section') || l.includes('Content') || l.includes('Part') || l.includes('Stage'))) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});
