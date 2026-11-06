const fs = require('fs');
const html = fs.readFileSync('blog.html', 'utf8');
const links = html.match(/href=["'](blog-details[^"']*)["']/g) || [];
console.log('Blog detail links found in blog.html:', [...new Set(links)]);
