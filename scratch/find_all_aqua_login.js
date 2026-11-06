const fs = require('fs');
const login = fs.readFileSync('login-register.html', 'utf8');

const regex = /Aqua/g;
let m;
while ((m = regex.exec(login)) !== null) {
  console.log(`Pos: ${m.index}:\n${login.substring(m.index - 100, m.index + 200)}\n----------------`);
}
