const fs = require('fs');
const content = fs.readFileSync('login-register.html', 'utf8');
console.log('Includes <header:', content.includes('<header'));
console.log('Includes theme-toggle:', content.includes('theme-toggle'));
const lines = content.split('\n').slice(0, 50);
console.log('First 50 lines:\n', lines.join('\n'));
