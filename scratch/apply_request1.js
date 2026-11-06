const fs = require('fs');

// 1. Update scratch/build_all_blog_details.js
let buildCode = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');

buildCode = buildCode.replace(
  /slug:\s*'blog-details-osha\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-osha-vacuum.png'")
);
buildCode = buildCode.replace(
  /slug:\s*'blog-details-osha\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'ReinWasch 2000 Industrial Vacuum and Sludge Extraction System'")
);
buildCode = buildCode.replace(
  /slug:\s*'blog-details-osha\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'ReinWasch® 2000 6.0 kW automatic high suction sludge extraction vacuum and sealed 200L waste container used by AquaPure for confined space sump de-silting.'")
);

fs.writeFileSync('scratch/build_all_blog_details.js', buildCode, 'utf8');
console.log('Updated scratch/build_all_blog_details.js for OSHA article');

// 2. Update blog.html
let blogHtml = fs.readFileSync('blog.html', 'utf8');
const oshaImgOld = `<img src="assets/images/sludge-vacuum-extractor.png" alt="Confined Space Water Tank Safety Equipment" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const oshaImgNew = `<img src="assets/images/blog-osha-vacuum.png" alt="ReinWasch 2000 Industrial Vacuum and Sludge Extraction System" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

console.log('Found oshaImgOld in blog.html:', blogHtml.includes(oshaImgOld));
blogHtml = blogHtml.replace(oshaImgOld, oshaImgNew);

// Also fix any remaining "Read Article" links pointing to blog-details.html in the cards
// Let's check each article card's Read Article link in blog.html
const cards = [
  { slug: 'blog-details-sintex.html' },
  { slug: 'blog-details-eczema.html' },
  { slug: 'blog-details-jetting.html' },
  { slug: 'blog-details-sump.html' },
  { slug: 'blog-details-uv.html' },
  { slug: 'blog-details-pipeline.html' },
  { slug: 'blog-details-lab.html' },
  { slug: 'blog-details-bleach.html' },
  { slug: 'blog-details-osha.html' }
];

cards.forEach(c => {
  const pos = blogHtml.indexOf(c.slug);
  if (pos !== -1) {
    const nextRead = blogHtml.indexOf('Read Article', pos);
    const beforeRead = blogHtml.substring(pos, nextRead);
    const afterRead = blogHtml.substring(nextRead, nextRead + 100);
    // find href="blog-details.html" between pos and nextRead + 100
    const sub = blogHtml.substring(pos, nextRead + 100);
    if (sub.includes('href="blog-details.html"')) {
      const fixedSub = sub.replace('href="blog-details.html"', `href="${c.slug}"`);
      blogHtml = blogHtml.substring(0, pos) + fixedSub + blogHtml.substring(nextRead + 100);
      console.log(`Fixed Read Article link for ${c.slug}`);
    }
  }
});

fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html successfully!');
