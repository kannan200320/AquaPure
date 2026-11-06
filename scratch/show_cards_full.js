const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const targets = [
  'blog-details-sintex.html',
  'blog-details-eczema.html',
  'blog-details-sump.html',
  'blog-details-pipeline.html',
  'blog-details-lab.html'
];

targets.forEach(target => {
  const pos = blog.indexOf(target);
  // find start of card: look backwards for <div class="rounded-3xl border
  const cardStart = blog.lastIndexOf('<div class="rounded-3xl border', pos);
  // find end of card: look forward for </div> followed by next card or </main> or </section>
  const readArticlePos = blog.indexOf('Read Article', pos);
  const cardEnd = blog.indexOf('</div>\n        </div>', readArticlePos) + 14;
  
  console.log(`\n=================== CARD FOR ${target} ===================`);
  console.log(blog.substring(cardStart, Math.min(blog.length, readArticlePos + 200)));
});
