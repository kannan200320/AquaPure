const fs = require('fs');

['contact.html', 'blog.html'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const start = content.indexOf('<section');
  const end = content.indexOf('</section>', start) + 10;
  console.log(`\n=================== ${p} HERO SECTION ===================`);
  console.log(content.substring(start, end));
});
