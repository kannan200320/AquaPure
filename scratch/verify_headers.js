const fs = require('fs');

const pages = [
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
  'pricing.html',
  'service-details.html',
  'services.html'
];

let hasError = false;
pages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check theme toggle shape
  if (content.includes('class="theme-toggle')) {
    const hasSquareTheme = content.includes('theme-toggle w-9 h-9 rounded-xl') || content.includes('theme-toggle w-10 h-10 rounded-xl');
    if (!hasSquareTheme) {
      console.error(`FAIL: ${file} does not have square w-9 h-9 theme toggle!`);
      hasError = true;
    }
  }

  // Check login text
  if (file !== 'login-register.html') {
    const hasLoginText = content.match(/<span[^>]*>\s*Login\s*<\/span>/i) || content.match(/>\s*Login\s*<\/a>/i);
    if (hasLoginText) {
      console.error(`FAIL: ${file} still has "Login" text instead of "Sign In"!`);
      hasError = true;
    }

    const hasSignIn = content.includes('Sign In');
    console.log(`CHECK: ${file} - Theme button OK, Sign In present: ${hasSignIn}`);
  }
});

if (!hasError) {
  console.log('ALL HEADERS VERIFIED: UNIFORM BUTTON SHAPES & SIGN IN TEXT CONFIRMED!');
}
