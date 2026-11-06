const fs = require('fs');

const files = [
  'about.html',
  'amc-membership.html',
  'blog-details.html',
  'blog.html',
  'book-service.html',
  'contact.html',
  'home-family.html',
  'index.html',
  'pricing.html',
  'service-details.html',
  'services.html'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace buttons with bg-white inside CTA sections
  // e.g. class="px-8 py-4 rounded-2xl bg-white text-teal-800 ...
  // or class="px-8 py-4 rounded-2xl bg-white text-cyan-700 ...
  // or class="px-8 py-4 rounded-xl bg-white text-cyan-700 ...
  
  if (content.includes('Schedule Family Safe Clean')) {
    content = content.replace(
      /class="px-8 py-4 rounded-2xl bg-white text-teal-800[^"]*"/g,
      'class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] hover:bg-sky-50 font-black text-base shadow-xl transition-all flex items-center gap-2"'
    );
    changed = true;
  }

  // Ensure all white CTA buttons have high contrast text
  content = content.replace(
    /class="px-8 py-4 rounded-2xl bg-white text-cyan-700 font-extrabold/g,
    'class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] font-black'
  );
  content = content.replace(
    /class="px-8 py-4 rounded-2xl bg-white text-cyan-800 font-extrabold/g,
    'class="px-8 py-4 rounded-2xl bg-white text-[#042f2e] font-black'
  );
  content = content.replace(
    /class="px-8 py-4 rounded-xl bg-white text-cyan-700 hover:bg-sky-50 font-black/g,
    'class="px-8 py-4 rounded-xl bg-white text-[#042f2e] hover:bg-sky-50 font-black'
  );

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated CTA buttons in ${f}`);
});
