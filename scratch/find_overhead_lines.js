const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('overhead-tank-cleaning')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
