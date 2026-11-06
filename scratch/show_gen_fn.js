const fs = require('fs');
const content = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');
const fnIdx = content.indexOf('function generateBlogDetailsPage');
console.log('Function found at:', fnIdx);
console.log(content.substring(fnIdx, fnIdx + 4000));
