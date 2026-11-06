const fs = require('fs');

const dash = fs.readFileSync('dashboard.html', 'utf8');
const index = fs.readFileSync('index.html', 'utf8');

const getButtons = (html, name) => {
  console.log(`=== ${name} ===`);
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('theme-toggle') || l.includes('rtl-toggle') || l.includes('login') || l.includes('signin') || l.includes('Sign In')) {
      if (i < 150) {
        console.log(`L${i+1}: ${l.trim()}`);
      }
    }
  });
};

getButtons(dash, 'dashboard.html');
getButtons(index, 'index.html');
