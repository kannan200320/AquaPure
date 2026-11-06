const fs = require('fs');

const checks = [
  { file: 'blog-details-sintex.html', expected: 'assets/images/blog-sintex-tanks.png' },
  { file: 'blog-details-eczema.html', expected: 'assets/images/blog-infant-eczema.png' },
  { file: 'blog-details-sump.html', expected: 'assets/images/blog-gated-sump.jpg' },
  { file: 'blog-details-pipeline.html', expected: 'assets/images/blog-pipeline-descaling.png' },
  { file: 'blog-details-lab.html', expected: 'assets/images/blog-water-lab.png' }
];

checks.forEach(c => {
  const content = fs.readFileSync(c.file, 'utf8');
  const found = content.includes(c.expected);
  console.log(`${c.file} contains ${c.expected}: ${found}`);
});
