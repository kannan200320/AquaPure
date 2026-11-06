const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const home2 = fs.readFileSync('home-family.html', 'utf8');
const about = fs.readFileSync('about.html', 'utf8');
const blog = fs.readFileSync('blog.html', 'utf8');
const osha = fs.readFileSync('blog-details-osha.html', 'utf8');
const login = fs.readFileSync('login-register.html', 'utf8');

console.log('1. OSHA card in blog.html has blog-osha-vacuum.png:', blog.includes('assets/images/blog-osha-vacuum.png'));
console.log('1. blog-details-osha.html has blog-osha-vacuum.png:', osha.includes('assets/images/blog-osha-vacuum.png'));
console.log('2. login-register.html has footer-sized logo navigating to index.html:', login.includes('href="index.html" class="flex items-center gap-3 group"'));
console.log('3. index.html hero has hero-home1-bg.jpg:', index.includes('assets/images/hero-home1-bg.jpg'));
console.log('4. home-family.html hero has hero-home2-bg.png:', home2.includes('assets/images/hero-home2-bg.png'));
console.log('5. about.html hero has hero-about-bg.png:', about.includes('assets/images/hero-about-bg.png'));
