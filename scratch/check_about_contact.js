const fs = require('fs');
['about.html', 'contact.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const bgMatch = content.match(/<!-- Hero Background Image[\s\S]*?<\/div>\s*<\/div>/i);
  console.log(`\n${f}:`);
  console.log(bgMatch ? bgMatch[0] : 'NOT FOUND');
});
