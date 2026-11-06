const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');

const titles = [
  'Why Rooftop Black Sintex Tanks Turn into High-Heat Microbial Incubators',
  'Infant Eczema and Bath Water: The Dangerous Link to Heavy Tank Silt',
  'How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts',
  'Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling',
  'Understanding TDS, pH, and Turbidity: The Homeowner\'s Guide to Water Lab Reports'
];

titles.forEach((title, idx) => {
  const pos = blog.indexOf(title);
  if (pos !== -1) {
    const cardSnippet = blog.substring(pos - 400, pos + 300);
    const imgMatch = cardSnippet.match(/<img[^>]+src=["']([^"']+)["']/);
    console.log(`\nCard ${idx + 1}: ${title}`);
    console.log(`Current img in blog.html: ${imgMatch ? imgMatch[1] : 'NONE'}`);
  } else {
    console.log(`\nCard ${idx + 1}: NOT FOUND: ${title}`);
  }
});
