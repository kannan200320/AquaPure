const fs = require('fs');
const content = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');
const fnIdx = content.indexOf('function generateBlogDetailsPage');
console.log(content.substring(fnIdx + 15000, fnIdx + 21000));
