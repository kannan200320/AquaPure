const fs = require('fs');
const d = fs.readFileSync('dashboard.html', 'utf8');

const tabs = ['tab-overview', 'tab-visits', 'tab-reports', 'tab-reminders', 'tab-invoices', 'tab-tanks', 'tab-profile'];

tabs.forEach(t => {
  const marker = 'id="' + t + '"';
  const idx = d.indexOf(marker);
  if (idx !== -1) {
    const snippet = d.substring(idx, idx + 400);
    console.log('=== TAB:', t, '===');
    console.log(snippet.split('\n').slice(0, 8).join('\n'));
  } else {
    console.log('=== TAB NOT FOUND:', t);
  }
});
