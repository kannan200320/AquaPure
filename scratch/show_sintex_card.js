const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const title = 'Why Rooftop Black Sintex Tanks Turn into High-Heat Microbial Incubators';
const pos = blog.indexOf(title);
console.log('Position:', pos);
console.log(blog.substring(Math.max(0, pos - 500), pos + 500));
