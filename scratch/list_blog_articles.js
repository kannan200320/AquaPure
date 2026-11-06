const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');

const regex = /<article[\s\S]*?<\/article>/g;
let m;
let i = 1;
while ((m = regex.exec(content)) !== null) {
  const art = m[0];
  const h3 = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = h3 ? h3[1].replace(/<[^>]+>/g, '').trim() : 'No title';
  const catMatch = art.match(/data-category="([^"]+)"/);
  const cat = catMatch ? catMatch[1] : 'unknown';
  console.log(i + '. [' + cat + '] ' + title);
  i++;
}
