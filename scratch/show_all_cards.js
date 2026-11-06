const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const regex = /<div class="rounded-3xl border border-sky-200[\s\S]*?<img src="([^"]+)"[\s\S]*?<a href="([^"]+)">([^<]+)<\/a>/g;
let match;
let count = 0;
while ((match = regex.exec(blog)) !== null) {
  count++;
  console.log(`Card ${count}:`);
  console.log(`  Title: ${match[3].trim()}`);
  console.log(`  Link: ${match[2]}`);
  console.log(`  Image: ${match[1]}`);
}
console.log('Total cards found by regex:', count);
