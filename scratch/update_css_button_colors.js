const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

// Replace the generic span rule so it doesn't break buttons
const oldDarkRule = `html.dark p,
html.dark span:not(.badge-colored):not(.text-cyan-400):not(.text-teal-400):not(.text-sky-400),
html.dark label,
html.dark li,
html.dark dt,
html.dark dd,
html.dark h1,
html.dark h2,
html.dark h3,
html.dark h4,
html.dark h5,
html.dark h6 {
  color: #ffffff;
}`;

const newDarkRule = `html.dark p,
html.dark span:not(.badge-colored):not(.text-cyan-400):not(.text-teal-400):not(.text-sky-400):not(.btn-text):not(button *):not(a *),
html.dark label,
html.dark li,
html.dark dt,
html.dark dd,
html.dark h1,
html.dark h2,
html.dark h3,
html.dark h4,
html.dark h5,
html.dark h6 {
  color: #ffffff;
}

/* Ensure button and link text ALWAYS inherit their intended button color */
html.dark button span,
html.dark a span,
html.dark .btn-text {
  color: inherit !important;
}

/* Critical Rule: Buttons or links with white or light backgrounds MUST have dark, crisp, visible text in Dark Mode */
html.dark a.bg-white:not([class*="dark:bg"]),
html.dark a.bg-white:not([class*="dark:bg"]) span,
html.dark button.bg-white:not([class*="dark:bg"]),
html.dark button.bg-white:not([class*="dark:bg"]) span,
html.dark .bg-white:not([class*="dark:bg"]) > span,
html.dark [class*="bg-white"]:not([class*="dark:bg"]) > a > span,
html.dark a[class*="bg-white"]:not([class*="dark:bg"]) {
  color: #042f2e !important; /* Deep rich contrast text on white buttons */
}`;

if (css.includes(oldDarkRule)) {
  css = css.replace(oldDarkRule, newDarkRule);
  console.log('Successfully replaced oldDarkRule in style.css');
} else {
  console.log('oldDarkRule not matched exactly, appending new rules');
  css += '\n\n' + newDarkRule;
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('style.css updated successfully.');
