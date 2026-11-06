const fs = require('fs');
const d = fs.readFileSync('dashboard.html', 'utf8');

const tabs = ['tab-overview', 'tab-visits', 'tab-reports', 'tab-reminders', 'tab-invoices', 'tab-tanks', 'tab-profile'];

tabs.forEach(t => {
  const startIdx = d.indexOf('id="' + t + '"');
  const nextTab = tabs[tabs.indexOf(t) + 1];
  const endIdx = nextTab ? d.indexOf('id="' + nextTab + '"') : d.indexOf('</main>');
  const content = d.substring(startIdx, endIdx);
  
  console.log(`\n=== CHECKING TAB: ${t} ===`);
  const sectionMatches = content.match(/<h2[^>]*>\s*([0-9]\.[^<]+)<\/h2>/g);
  if (sectionMatches) {
    sectionMatches.forEach(m => console.log('  Found Section:', m.replace(/<[^>]+>/g, '').trim()));
    console.log(`  Total Sections: ${sectionMatches.length} / 4`);
  } else {
    console.log('  No matching h2 sections found!');
  }
});
