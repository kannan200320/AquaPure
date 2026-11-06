const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldBottomRegex = /<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-black dark:text-white">[\s\S]*?<\/div>\s*<\/div>/;

const newBottom = `<div class="pt-8 text-center text-xs font-semibold text-black dark:text-white">
        &copy; 2026 AquaPure Technologies Inc. All Rights Reserved.
      </div>`;

const oldSocialRegex = /<div class="flex items-center gap-3 pt-2">[\s\S]*?<\/div>/;

const newSocial = `<div class="flex items-center gap-3 pt-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-sky-300 dark:border-sky-700 flex items-center justify-center text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all" aria-label="Instagram">
              <i class="fab fa-instagram text-lg"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-sky-300 dark:border-sky-700 flex items-center justify-center text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all" aria-label="Facebook">
              <i class="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-sky-300 dark:border-sky-700 flex items-center justify-center text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all" aria-label="X">
              <i class="fab fa-x-twitter text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-sky-300 dark:border-sky-700 flex items-center justify-center text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>`;

let updated = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  if (oldBottomRegex.test(content)) {
    content = content.replace(oldBottomRegex, newBottom);
    changed = true;
  }
  if (oldSocialRegex.test(content)) {
    content = content.replace(oldSocialRegex, newSocial);
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updated++;
    console.log('Successfully updated footer in:', f);
  } else {
    console.log('No matches in:', f);
  }
});
console.log('Done! Updated files:', updated);
