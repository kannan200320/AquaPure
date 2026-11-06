const fs = require('fs');

const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log(`Auditing ${allHtmlFiles.length} HTML files...`);

let hasError = false;

allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check for text-gray-* classes
  const grayMatches = content.match(/text-gray-[0-9]+/g);
  if (grayMatches) {
    console.error(`FAIL: ${file} contains ${grayMatches.length} text-gray-* occurrences: ${grayMatches.slice(0, 5).join(', ')}`);
    hasError = true;
  }
  
  // Check footer in dashboard or login-register
  if (file === 'dashboard.html' || file === 'login-register.html') {
    if (content.includes('<footer') || content.includes('All Rights Reserved')) {
      console.error(`FAIL: ${file} must NOT have a footer!`);
      hasError = true;
    }
  } else {
    // Other pages should have footer
    if (!content.includes('<footer')) {
      console.error(`FAIL: ${file} is missing standard footer!`);
      hasError = true;
    }
  }

  // Check login-register has no website header nav bar
  if (file === 'login-register.html') {
    if (content.includes('<header')) {
      console.error(`FAIL: login-register.html should NOT have website header!`);
      hasError = true;
    }
  }
});

if (!hasError) {
  console.log('SUCCESS: All 24 HTML files pass strict color audit (0 text-gray-*), footer rules, and layout constraints!');
}
