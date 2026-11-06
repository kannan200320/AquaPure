const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const sections = content.match(/<section[\s\S]*?<\/section>/g) || [];
console.log('Number of <section> tags:', sections.length);
sections.forEach((s, idx) => {
  const firstLine = s.split('\n')[0];
  const h2 = (s.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/) || [])[1];
  console.log(`Section ${idx+1}: tag=${firstLine.substring(0, 80)}... heading=${h2 ? h2.trim().replace(/\s+/g, ' ') : 'none'}`);
});
