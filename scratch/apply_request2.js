const fs = require('fs');
let login = fs.readFileSync('login-register.html', 'utf8');

const targetBefore = `<div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md">
            <i class="fas fa-droplet text-lg"></i>
          </div>
          <div class="flex items-center gap-0.5 text-xl font-black tracking-tight">
            <span class="text-cyan-600 dark:text-cyan-400">Aqua</span>
            <span class="text-black dark:text-white">Pure</span>
          </div>
        </div>`;

const targetAfter = `<a href="index.html" class="flex items-center gap-3 group" title="Return to AquaPure Home Page">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <i class="fas fa-droplet text-xl"></i>
          </div>
          <div class="flex items-center gap-1 text-2xl font-black tracking-tight">
            <span class="text-cyan-600 dark:text-cyan-400">Aqua</span>
            <span class="text-black dark:text-white">Pure</span>
          </div>
        </a>`;

console.log('Found target in login-register.html:', login.includes(targetBefore));
login = login.replace(targetBefore, targetAfter);
fs.writeFileSync('login-register.html', login, 'utf8');
console.log('Updated login-register.html successfully!');
