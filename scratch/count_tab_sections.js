const fs = require('fs');
const d = fs.readFileSync('dashboard.html', 'utf8');

const tabs = ['tab-overview', 'tab-visits', 'tab-reports', 'tab-reminders', 'tab-invoices', 'tab-tanks', 'tab-profile'];

for (let i = 0; i < tabs.length; i++) {
  const current = tabs[i];
  const next = tabs[i + 1];
  const startIdx = d.indexOf('id="' + current + '"');
  const endIdx = next ? d.indexOf('id="' + next + '"') : d.indexOf('</main>');
  const tabContent = d.substring(startIdx, endIdx);
  console.log(`\n=================== ${current} (length: ${tabContent.length}) ===================`);
  // Look for sections or large containers
  const lines = tabContent.split('\n');
  lines.forEach((l, lineIdx) => {
    if (l.includes('<h2') || l.includes('<h3') || l.includes('<!-- Section') || l.includes('<!-- Tab') || l.includes('class="grid') || l.includes('class="space-y')) {
      if (lineIdx < 30 || l.includes('<h3')) {
        console.log(`  L${lineIdx}: ${l.trim()}`);
      }
    }
  });
}
