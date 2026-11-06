const fs = require('fs');
const lr = fs.readFileSync('login-register.html', 'utf8');
const lines = lr.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<button') || l.includes('type="submit"') || l.includes('Sign In') || l.includes('Register')) {
    console.log((i + 1) + ': ' + l.trim());
  }
});
