const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');
const blogDetails = fs.readFileSync('blog-details.html', 'utf8');

console.log('Blog includes img tag:', blog.includes('<img'));
console.log('Blog-details includes img tag:', blogDetails.includes('<img'));

const findImages = (html, name) => {
  console.log(`\n=== ${name} ===`);
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('<img') || l.includes('assets/images') || l.includes('.jpg') || l.includes('.png')) {
      console.log(`Line ${i+1}: ${l.trim()}`);
    }
  });
};

findImages(blog, 'blog.html');
findImages(blogDetails, 'blog-details.html');
