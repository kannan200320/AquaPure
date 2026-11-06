const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== CHECKING BUTTONS WITH BG-WHITE OR LIGHT BG ===');
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if ((l.includes('<button') || l.includes('<a ')) && (l.includes('bg-white') || l.includes('text-teal-') || l.includes('text-cyan-') || l.includes('text-black'))) {
      if (l.includes('bg-white') || (lines[idx-1] && lines[idx-1].includes('bg-white')) || (lines[idx+1] && lines[idx+1].includes('bg-white'))) {
        console.log(`${f} L${idx+1}: ${l.trim()}`);
      }
    }
  });
});
