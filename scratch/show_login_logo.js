const fs = require('fs');
const login = fs.readFileSync('login-register.html', 'utf8');

const pos = login.indexOf('Aqua');
console.log('Aqua found in login-register.html at:', pos);
console.log(login.substring(Math.max(0, pos - 300), pos + 500));
