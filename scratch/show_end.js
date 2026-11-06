const fs = require('fs');
const content = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');
console.log('Total length:', content.length);
console.log('Last 2000 chars:\n', content.substring(content.length - 2000));
