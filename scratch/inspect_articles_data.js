const fs = require('fs');
const content = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');

const slugs = [
  'blog-details-sintex.html',
  'blog-details-eczema.html',
  'blog-details-sump.html',
  'blog-details-pipeline.html',
  'blog-details-lab.html'
];

slugs.forEach(slug => {
  const pos = content.indexOf(`slug: '${slug}'`);
  if (pos !== -1) {
    console.log(content.substring(pos, pos + 400));
    console.log('-------------------------');
  }
});
