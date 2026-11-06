const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const linkRegex = /<a href="(blog-details[^"]*)"/g;
let m;
while ((m = linkRegex.exec(blog)) !== null) {
  const link = m[1];
  const idx = m.index;
  // look backwards for the img src
  const before = blog.substring(Math.max(0, idx - 1000), idx);
  const imgMatch = before.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
  const lastImg = imgMatch ? imgMatch[imgMatch.length - 1] : 'NONE';
  
  // look forward for title
  const after = blog.substring(idx, idx + 200);
  const titleMatch = after.match(/>([^<]+)<\/a>/);
  console.log(`Link: ${link}`);
  console.log(`  Title: ${titleMatch ? titleMatch[1].trim() : 'NONE'}`);
  console.log(`  Img: ${lastImg}`);
}
