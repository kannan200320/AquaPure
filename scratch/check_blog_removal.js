const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');
const searchTerms = ['Case Studies', 'Prestige Enclave', 'Modern Villa', 'Renal Unit', 'Field Realities'];
searchTerms.forEach(term => {
  console.log(`Checking "${term}":`, blog.includes(term));
});
