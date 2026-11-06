const fs = require('fs');
const login = fs.readFileSync('login-register.html', 'utf8');

const pos = login.indexOf('Top Card Header: Brand Logo');
console.log(login.substring(pos, pos + 800));
