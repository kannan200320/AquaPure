const fs = require('fs');
const s = fs.readFileSync('services.html', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id=') || l.includes('Overhead Tank') || l.includes('Underground Sump') || l.includes('UV Bio') || l.includes('Pipeline De-scaling') || l.includes('7-Stage')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
