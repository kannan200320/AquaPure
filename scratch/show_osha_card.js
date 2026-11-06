const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const title = 'OSHA Confined Space Protocols: Why Our Crew Uses 24V Air Blowers & Gas Monitors';
const pos = blog.indexOf(title);
console.log('Pos in blog.html:', pos);
const artStart = blog.lastIndexOf('<article', pos);
const artEnd = blog.indexOf('</article>', pos) + 10;
console.log(blog.substring(artStart, artEnd));
