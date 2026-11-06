const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const featuredPos = blog.indexOf('5 Dangerous Signs Your Rooftop Water Tank Is Contaminated with Invisible Biofilm');
console.log('Featured article found at:', featuredPos);
if (featuredPos !== -1) {
  console.log(blog.substring(Math.max(0, featuredPos - 300), featuredPos + 300));
}
