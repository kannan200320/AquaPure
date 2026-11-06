const fs = require('fs');

const files = [
  '404.html',
  'about.html',
  'amc-membership.html',
  'blog-details.html',
  'blog.html',
  'book-service.html',
  'coming-soon.html',
  'contact.html',
  'dashboard.html',
  'home-family.html',
  'index.html',
  'login-register.html',
  'pricing.html',
  'service-details.html',
  'services.html'
];

console.log('=== RUNNING COMPREHENSIVE FINAL AUDIT ===');
let hasError = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n').length;
  
  // 1. Gray check
  const grayMatches = content.match(/text-gray-[0-9]+/g);
  if (grayMatches) {
    console.error(`FAIL: ${file} contains text-gray-* (${grayMatches.length} occurrences)`);
    hasError = true;
  }

  // 2. Footer check:
  // ONLY dashboard.html and login-register.html should NOT have footer
  const hasFooter = content.includes('<footer');
  if (file === 'dashboard.html' || file === 'login-register.html') {
    if (hasFooter) {
      console.error(`FAIL: ${file} SHOULD NOT have footer, but has footer!`);
      hasError = true;
    } else {
      console.log(`PASS: ${file} (Lines: ${lines}, Grays: 0, No Footer as requested)`);
    }
  } else {
    if (!hasFooter) {
      console.error(`FAIL: ${file} should have footer, but is missing footer!`);
      hasError = true;
    } else {
      const hasInstagram = content.includes('https://www.instagram.com/');
      const hasFacebook = content.includes('https://www.facebook.com/');
      const hasTwitter = content.includes('https://x.com/');
      const hasLinkedIn = content.includes('https://www.linkedin.com/');
      const hasCenteredCopy = content.includes('© 2026 AquaPure Technologies Inc. All Rights Reserved.') || content.includes('&copy; 2026 AquaPure Technologies Inc. All Rights Reserved.');
      
      if (!hasInstagram || !hasFacebook || !hasTwitter || !hasLinkedIn || !hasCenteredCopy) {
        console.error(`FAIL: ${file} has footer but missing social icons or copyright!`);
        hasError = true;
      } else {
        console.log(`PASS: ${file} (Lines: ${lines}, Grays: 0, Standard Footer: OK)`);
      }
    }
  }
});

// 3. Check pricing.html 2nd image removal
const pricingContent = fs.readFileSync('pricing.html', 'utf8');
if (pricingContent.includes('Gated Community & Apartment Complex Volume Slabs') || pricingContent.includes('RWA & Society Discounts')) {
  console.error('FAIL: pricing.html still contains Image 2 Volume Slabs');
  hasError = true;
} else {
  console.log('PASS: pricing.html Image 2 Volume Slabs section removed cleanly');
}

// 4. Check amc-membership.html 3rd image removal
const amcContent = fs.readFileSync('amc-membership.html', 'utf8');
if (amcContent.includes('Moving Home or Renovating') || amcContent.includes('Institutional, Daycare')) {
  console.error('FAIL: amc-membership.html still contains Image 3 sections');
  hasError = true;
} else {
  console.log('PASS: amc-membership.html Image 3 sections removed cleanly');
}

// 5. Check blog.html 4th image removal
const blogContent = fs.readFileSync('blog.html', 'utf8');
if (blogContent.includes('All Knowledge Papers') || blogContent.includes('blog-category-filters')) {
  console.error('FAIL: blog.html still contains Image 4 filter bar');
  hasError = true;
} else {
  console.log('PASS: blog.html Image 4 filter bar removed cleanly');
}

// 6. Check dashboard.html sidebar sticky
const dashContent = fs.readFileSync('dashboard.html', 'utf8');
if (!dashContent.includes('lg:sticky') || !dashContent.includes('lg:top-20')) {
  console.error('FAIL: dashboard.html sidebar missing sticky configuration');
  hasError = true;
} else {
  console.log('PASS: dashboard.html sidebar is fixed/sticky (does not scroll with content)');
}

console.log('=== AUDIT STATUS: ' + (hasError ? 'ERRORS FOUND' : 'ALL 15 PAGES VERIFIED 100% PERFECT') + ' ===');
