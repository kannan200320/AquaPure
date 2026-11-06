const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const articleRegex = /<article[\s\S]*?<\/article>/g;
let match;
let count = 0;
while ((match = articleRegex.exec(blog)) !== null) {
  count++;
  const art = match[0];
  const title = (art.match(/<h3[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/) || [])[1];
  const link = (art.match(/<h3[^>]*>[\s\S]*?<a href="([^"]+)"/) || [])[1];
  const img = (art.match(/<img[^>]+src="([^"]+)"/) || [])[1];
  const readLink = (art.match(/Read Article[\s\S]*?href="([^"]+)"/) || art.match(/href="([^"]+)"[^>]*>[\s\S]*?Read Article/i) || [])[1];
  console.log(`Article ${count}:`);
  console.log(`  Title: ${title ? title.trim().replace(/\s+/g, ' ') : 'NONE'}`);
  console.log(`  Title Link: ${link}`);
  console.log(`  Img: ${img}`);
  console.log(`  Read Link: ${readLink}`);
}
