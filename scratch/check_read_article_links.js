const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const cards = [
  'blog-details-sintex.html',
  'blog-details-eczema.html',
  'blog-details-jetting.html',
  'blog-details-sump.html',
  'blog-details-uv.html',
  'blog-details-pipeline.html',
  'blog-details-lab.html',
  'blog-details-bleach.html',
  'blog-details-osha.html'
];

cards.forEach(card => {
  const pos = blog.indexOf(card);
  if (pos !== -1) {
    const cardBlock = blog.substring(pos, pos + 1200);
    const readArticleMatch = cardBlock.match(/href="([^"]+)"[^>]*>\s*Read Article/);
    console.log(`Card: ${card}`);
    console.log(`  Read Article href: ${readArticleMatch ? readArticleMatch[1] : 'NOT FOUND'}`);
  }
});
