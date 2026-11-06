const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');
const lines = blog.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('Case Studies')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});
