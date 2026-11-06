const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const match = index.match(/Overhead Tank Cleaning[\s\S]{1,500}?<img[^>]+src=["']([^"']+)["']/i) || index.match(/<img[^>]+src=["']([^"']+)["'][\s\S]{1,300}?Overhead Tank Cleaning/i);
console.log('Overhead Tank Cleaning card image match:', match ? match[1] : 'NOT FOUND');

// Also check all occurrences of overhead-tank-cleaning in index.html
const allImgs = index.match(/assets\/images\/[a-zA-Z0-9_\-\.]+/g) || [];
console.log('All image paths in index.html:', [...new Set(allImgs)]);
