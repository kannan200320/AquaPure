const fs = require('fs');

let content = fs.readFileSync('dashboard.html', 'utf8');

// 1. Remove the header nav links (Image 1):
// <!-- Desktop Navigation Links to Website -->
// <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold">
// ...
// </nav>
const navRegex = /<!-- Desktop Navigation Links to Website -->\s*<nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold">[\s\S]*?<\/nav>/;
if (navRegex.test(content)) {
  content = content.replace(navRegex, '<!-- Desktop website links removed for clean dedicated dashboard app header matching KinderNest reference -->');
  console.log('Removed desktop navigation links from header.');
} else {
  console.log('Warning: navRegex did not match.');
}

// 2. Remove "42 Blossom Valley Way, Sunnyvale" from the sidebar top (Image 2):
const addressRegex = /<p class="text-\[11px\] font-semibold text-cyan-600 dark:text-cyan-400">\s*42 Blossom Valley Way, Sunnyvale\s*<\/p>/;
if (addressRegex.test(content)) {
  content = content.replace(addressRegex, '');
  console.log('Removed address subtitle from sidebar.');
} else {
  console.log('Warning: addressRegex did not match.');
}

// 3. Update sidebar width to w-full lg:w-80:
content = content.replace(
  '<aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto',
  '<aside class="w-full lg:w-80 shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto'
);

// 4. Replace the entire nav list with the new spacious, non-truncated menu list (Image 3):
const oldNavRegex = /<nav class="space-y-1\.5" id="dashboard-sidebar-nav">[\s\S]*?<\/nav>/;
const newNav = `<nav class="space-y-2" id="dashboard-sidebar-nav">
          
          <!-- Menu Item 1: Overview Dashboard -->
          <button onclick="switchDashboardTab('tab-overview')" id="nav-btn-tab-overview" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-table-columns text-base w-5 text-center shrink-0"></i>
              <span>Overview Dashboard</span>
            </div>
          </button>

          <!-- Menu Item 2: Booking Cleaning Visits -->
          <button onclick="switchDashboardTab('tab-visits')" id="nav-btn-tab-visits" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-calendar-check text-base w-5 text-center text-cyan-600 dark:text-cyan-400 shrink-0"></i>
              <span>Booking Cleaning Visits</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 text-[10px] font-black shrink-0">1 Due</span>
          </button>

          <!-- Menu Item 3: Viewing Service Reports -->
          <button onclick="switchDashboardTab('tab-reports')" id="nav-btn-tab-reports" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-vial-circle-check text-base w-5 text-center text-teal-600 dark:text-teal-400 shrink-0"></i>
              <span>Viewing Service Reports</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-[10px] font-black shrink-0">Lab Ready</span>
          </button>

          <!-- Menu Item 4: Setting Recurring Reminders -->
          <button onclick="switchDashboardTab('tab-reminders')" id="nav-btn-tab-reminders" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-bell text-base w-5 text-center text-amber-500 shrink-0"></i>
              <span>Setting Recurring Reminders</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-black shrink-0">Active</span>
          </button>

          <!-- Menu Item 5: Managing Invoices -->
          <button onclick="switchDashboardTab('tab-invoices')" id="nav-btn-tab-invoices" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-file-invoice-dollar text-base w-5 text-center text-emerald-500 shrink-0"></i>
              <span>Managing Invoices</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black shrink-0">Paid</span>
          </button>

          <!-- Menu Item 6: Tank & Sump Details -->
          <button onclick="switchDashboardTab('tab-tanks')" id="nav-btn-tab-tanks" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-database text-base w-5 text-center text-sky-600 dark:text-sky-400 shrink-0"></i>
              <span>Tank &amp; Sump Details</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-[10px] font-black shrink-0">2 Units</span>
          </button>

          <!-- Menu Item 7: My Profile -->
          <button onclick="switchDashboardTab('tab-profile')" id="nav-btn-tab-profile" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left">
            <div class="flex items-center gap-3">
              <i class="fas fa-user-gear text-base w-5 text-center text-purple-500 shrink-0"></i>
              <span>My Profile</span>
            </div>
          </button>

        </nav>`;

if (oldNavRegex.test(content)) {
  content = content.replace(oldNavRegex, newNav);
  console.log('Replaced sidebar navigation with clean spacious menu list.');
} else {
  console.log('Warning: oldNavRegex did not match.');
}

// 5. Update switchDashboardTab styling in the inline script:
const oldJsRegex = /navButtons\.forEach\(btn => \{[\s\S]*?\}\);[\s\S]*?if \(activeBtn\) \{[\s\S]*?\}/;
const newJs = `navButtons.forEach(btn => {
        btn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#142942] text-left';
      });

      // Highlight active button
      const activeBtn = document.getElementById('nav-btn-' + targetTabId);
      if (activeBtn) {
        activeBtn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md text-left';
      }`;

if (oldJsRegex.test(content)) {
  content = content.replace(oldJsRegex, newJs);
  console.log('Updated switchDashboardTab JS styling.');
}

// 6. Sign Out link at bottom:
const oldSignOut = `<div class="pt-6 mt-6 border-t border-sky-100 dark:border-sky-800">
        <a href="login-register.html" class="flex items-center gap-2.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline">
          <i class="fas fa-arrow-right-from-bracket text-sm"></i>
          <span>Sign Out</span>
        </a>
      </div>`;

const newSignOut = `<div class="pt-6 mt-6 border-t border-sky-100 dark:border-sky-800">
        <a href="login-register.html" class="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors">
          <i class="fas fa-arrow-right-from-bracket text-sm"></i>
          <span>Sign Out</span>
        </a>
      </div>`;

if (content.includes(oldSignOut)) {
  content = content.replace(oldSignOut, newSignOut);
  console.log('Updated Sign Out button at bottom.');
}

fs.writeFileSync('dashboard.html', content, 'utf8');
console.log('dashboard.html saved successfully.');
