const fs = require('fs');

const dashboardHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Dashboard | AquaPure Customer Portal</title>
  <meta name="description" content="AquaPure Customer Portal: Book cleaning visits, view digital lab reports, set recurring reminders, and manage invoices.">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              500: '#0284c7',
              600: '#0369a1',
              700: '#075985',
              800: '#0c4a6e',
              900: '#082f49',
            }
          }
        }
      }
    }
  </script>
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="bg-[#f0f9ff] dark:bg-[#07131f] text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">

  <!-- ==========================================================================
       SECTION 1: STICKY HEADER NAVIGATION
       ========================================================================== -->
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-[#07131f]/95 backdrop-blur-md border-b border-sky-200 dark:border-sky-900 shadow-sm transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-3 group shrink-0">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <i class="fas fa-droplet text-xl"></i>
          </div>
          <div class="flex items-center gap-1 text-2xl font-black tracking-tight">
            <span class="text-cyan-600 dark:text-cyan-400">Aqua</span>
            <span class="text-black dark:text-white">Pure</span>
          </div>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold whitespace-nowrap">
          <!-- Home Dropdown -->
          <div class="relative nav-dropdown group py-4">
            <button class="flex items-center gap-1.5 text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold focus:outline-none whitespace-nowrap">
              <span>Home</span>
              <i class="fas fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
            </button>
            <div class="dropdown-menu hidden absolute top-full left-0 w-64 p-3 bg-white dark:bg-[#0c1e33] rounded-2xl shadow-2xl border border-sky-200 dark:border-sky-800 transition-all duration-200">
              <a href="index.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/50 text-black dark:text-white transition-colors mb-1">
                <i class="fas fa-city mt-1 text-cyan-600 dark:text-cyan-400"></i>
                <div>
                  <div class="font-bold text-sm">AquaPure Landing</div>
                  <div class="text-xs text-black dark:text-white">General Mechanized Sanitization</div>
                </div>
              </a>
              <a href="home-family.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/50 text-black dark:text-white transition-colors">
                <i class="fas fa-house-chimney-medical mt-1 text-teal-600 dark:text-teal-400"></i>
                <div>
                  <div class="font-bold text-sm">Family Safe Home</div>
                  <div class="text-xs text-black dark:text-white">Infant-Safe Chemical-Free Care</div>
                </div>
              </a>
            </div>
          </div>

          <a href="about.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Us</a>
          <a href="services.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a>
          <a href="pricing.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pricing</a>

          <!-- Explore Dropdown -->
          <div class="relative nav-dropdown group py-4">
            <button class="flex items-center gap-1.5 text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold focus:outline-none whitespace-nowrap">
              <span>Explore</span>
              <i class="fas fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
            </button>
            <div class="dropdown-menu hidden absolute top-full left-0 w-64 p-3 bg-white dark:bg-[#0c1e33] rounded-2xl shadow-2xl border border-sky-200 dark:border-sky-800 transition-all duration-200">
              <a href="book-service.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/50 text-black dark:text-white transition-colors mb-1">
                <i class="fas fa-calendar-check mt-1 text-cyan-600 dark:text-cyan-400"></i>
                <div>
                  <div class="font-bold text-sm">Book Service Page</div>
                  <div class="text-xs text-black dark:text-white">Slot Selection & Capacity Estimator</div>
                </div>
              </a>
              <a href="amc-membership.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/50 text-black dark:text-white transition-colors mb-1">
                <i class="fas fa-award mt-1 text-amber-500"></i>
                <div>
                  <div class="font-bold text-sm">AMC Membership</div>
                  <div class="text-xs text-black dark:text-white">Annual Recurring Protection Plans</div>
                </div>
              </a>
              <a href="service-details.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/50 text-black dark:text-white transition-colors">
                <i class="fas fa-list-check mt-1 text-teal-600 dark:text-teal-400"></i>
                <div>
                  <div class="font-bold text-sm">7-Stage Deep Clean</div>
                  <div class="text-xs text-black dark:text-white">Detailed Operational Methodology</div>
                </div>
              </a>
            </div>
          </div>

          <a href="blog.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Blog</a>
          <a href="contact.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact Us</a>
          <a href="dashboard.html" class="whitespace-nowrap text-cyan-600 dark:text-cyan-400 font-bold transition-colors">Dashboard</a>
        </nav>

        <!-- Right Side Utility Controls -->
        <div class="flex items-center gap-3 shrink-0">
          <button class="theme-toggle p-2.5 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white transition-colors" title="Toggle Light / Dark Mode">
            <i class="theme-toggle-icon fas fa-moon text-base"></i>
          </button>

          <button class="rtl-toggle px-3 py-2 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white font-bold text-xs flex items-center gap-1.5 transition-colors">
            <i class="fas fa-arrow-right-arrow-left"></i>
            <span class="rtl-toggle-text">RTL</span>
          </button>

          <a href="login-register.html" class="whitespace-nowrap px-4 py-2 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#0c1e33] hover:bg-sky-50 dark:hover:bg-sky-900 text-black dark:text-white font-semibold text-sm transition-all shadow-sm">
            <i class="fas fa-user-circle text-cyan-600 dark:text-cyan-400 mr-1.5"></i>
            <span>Login</span>
          </a>

          <button id="mobile-menu-btn" class="lg:hidden p-2.5 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white transition-colors">
            <i id="mobile-menu-icon" class="fas fa-bars text-xl"></i>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-sky-200 dark:border-sky-900 bg-white dark:bg-[#07131f] px-4 pt-3 pb-6 shadow-2xl overflow-y-auto max-h-[85vh]">
      <div class="space-y-2 text-base font-semibold">
        <div>
          <button class="mobile-dropdown-btn w-full flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white font-bold">
            <span class="flex items-center gap-2"><i class="fas fa-house text-cyan-600 dark:text-cyan-400"></i> Home Options</span>
            <i class="mobile-dropdown-arrow fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="hidden pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-cyan-500 my-1">
            <a href="index.html" class="block p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white text-sm">AquaPure Landing</a>
            <a href="home-family.html" class="block p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white text-sm">Family Safe Home</a>
          </div>
        </div>

        <a href="about.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">About Us</a>
        <a href="services.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">Services</a>
        <a href="pricing.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">Pricing</a>
        
        <div>
          <button class="mobile-dropdown-btn w-full flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white font-bold">
            <span class="flex items-center gap-2"><i class="fas fa-compass text-teal-600 dark:text-teal-400"></i> Explore</span>
            <i class="mobile-dropdown-arrow fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="hidden pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-cyan-500 my-1">
            <a href="book-service.html" class="block p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white text-sm">Book Service Page</a>
            <a href="amc-membership.html" class="block p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white text-sm">AMC Membership</a>
            <a href="service-details.html" class="block p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white text-sm">7-Stage Deep Clean</a>
          </div>
        </div>

        <a href="blog.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">Blog</a>
        <a href="contact.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">Contact Us</a>
        <a href="dashboard.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-cyan-600 dark:text-cyan-400 font-bold">Dashboard</a>

        <div class="pt-4 border-t border-sky-200 dark:border-sky-800 space-y-3">
          <a href="login-register.html" class="block w-full py-3 text-center rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-md">
            <i class="fas fa-user-circle mr-2"></i> Customer Login Portal
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       CUSTOMER DASHBOARD MAIN CONTENT
       ========================================================================== -->
  <main class="flex-1 py-8 lg:py-10 bg-[#f0f9ff] dark:bg-[#07131f] transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Top Welcome Banner & Quick Action Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-600 text-white flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
            VS
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-black text-black dark:text-white">Vikram Sharma</h1>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[11px] font-bold">
                <i class="fas fa-shield-check mr-1"></i> Verified AMC Member
              </span>
            </div>
            <p class="text-xs font-semibold text-black dark:text-white">
              <i class="fas fa-location-dot text-cyan-600 dark:text-cyan-400 mr-1"></i> 42 Blossom Valley Way, Sunnyvale, CA 94087 • Account #AQ-4921
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button onclick="switchDashboardTab('tab-visits')" class="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2">
            <i class="fas fa-calendar-plus"></i>
            <span>Book Cleaning Visit</span>
          </button>
          <button onclick="window.print()" class="px-4 py-3 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
            <i class="fas fa-print"></i>
            <span>Print Records</span>
          </button>
        </div>
      </div>

      <!-- Quick KPI Stats (4 Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="p-5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Water Tanks</span>
            <div class="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
              <i class="fas fa-database text-sm"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-black dark:text-white">2 Registered</div>
          <div class="text-xs font-semibold text-black dark:text-white">1 Rooftop (1500L) + 1 Sump (3000L)</div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Purity Rating</span>
            <div class="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <i class="fas fa-vial-circle-check text-sm"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-teal-600 dark:text-teal-400">0.6 NTU</div>
          <div class="text-xs font-semibold text-black dark:text-white">WHO Potable Grade A Sterile</div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Next Scheduled Clean</span>
            <div class="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <i class="fas fa-clock text-sm"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-black dark:text-white">24 Days</div>
          <div class="text-xs font-semibold text-black dark:text-white">Due Date: 28 Nov 2026 (09:00 AM)</div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Active Plan</span>
            <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <i class="fas fa-award text-sm"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-black dark:text-white">Villa Total AMC</div>
          <div class="text-xs font-semibold text-black dark:text-white">Zero Outstanding Balance ($0.00 Due)</div>
        </div>
      </div>

      <!-- ======================================================================
           MAIN DASHBOARD WORKSPACE: SIDEBAR MENU + CONTENT PANEL
           (Replicating KinderNest Layout Pattern)
           ====================================================================== -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        <!-- ====================================================================
             LEFT SIDEBAR: CUSTOMER DASHBOARD MENU
             ==================================================================== -->
        <aside class="lg:col-span-1 p-5 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4 sticky top-28">
          
          <div class="pb-3 border-b border-sky-200 dark:border-sky-800">
            <span class="text-[11px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Customer Portal Menu
            </span>
          </div>

          <nav class="space-y-1.5" id="dashboard-sidebar-nav">
            
            <!-- Menu Item 1: Booking Cleaning Visits -->
            <button onclick="switchDashboardTab('tab-visits')" id="nav-btn-tab-visits" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-cyan-600 text-white shadow-md text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-calendar-check text-base"></i>
                <span>Booking Cleaning Visits</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-black">1 Due</span>
            </button>

            <!-- Menu Item 2: Viewing Service Reports -->
            <button onclick="switchDashboardTab('tab-reports')" id="nav-btn-tab-reports" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-vial-circle-check text-base text-teal-600 dark:text-teal-400"></i>
                <span>Viewing Service Reports</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-[10px] font-black">Lab Ready</span>
            </button>

            <!-- Menu Item 3: Setting Recurring Reminders -->
            <button onclick="switchDashboardTab('tab-reminders')" id="nav-btn-tab-reminders" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-bell text-base text-amber-500"></i>
                <span>Setting Recurring Reminders</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-black">Active</span>
            </button>

            <!-- Menu Item 4: Managing Invoices -->
            <button onclick="switchDashboardTab('tab-invoices')" id="nav-btn-tab-invoices" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-file-invoice-dollar text-base text-emerald-500"></i>
                <span>Managing Invoices</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black">Paid</span>
            </button>

            <!-- Menu Item 5: Tank & Sump Details -->
            <button onclick="switchDashboardTab('tab-tanks')" id="nav-btn-tab-tanks" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-database text-base text-sky-600 dark:text-sky-400"></i>
                <span>Tank / Sump Details</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-[10px] font-black">2 Units</span>
            </button>

            <!-- Menu Item 6: My Profile -->
            <button onclick="switchDashboardTab('tab-profile')" id="nav-btn-tab-profile" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left">
              <div class="flex items-center gap-3">
                <i class="fas fa-user-gear text-base text-purple-500"></i>
                <span>My Profile</span>
              </div>
            </button>

          </nav>

          <!-- Sidebar Support Help Box -->
          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 space-y-2">
            <div class="p-3.5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
              <div class="text-[11px] font-black text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                <i class="fas fa-headset"></i> Dedicated Helpdesk
              </div>
              <p class="text-[11px] font-semibold text-black dark:text-white">
                Need immediate technician assistance or water testing guidance?
              </p>
              <a href="tel:+18004389283" class="inline-block text-xs font-black text-teal-600 dark:text-teal-400 hover:underline">
                1-800-AQUA-PURE
              </a>
            </div>
            <a href="login-register.html" class="w-full py-2.5 rounded-xl border border-sky-300 dark:border-sky-700 text-center block text-xs font-bold text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950 transition-all">
              <i class="fas fa-arrow-right-from-bracket mr-1.5"></i> Sign Out
            </a>
          </div>

        </aside>

        <!-- ====================================================================
             RIGHT CONTENT AREA (Drives the 6 Tab Sections)
             ==================================================================== -->
        <div class="lg:col-span-3 space-y-8">
          
          <!-- ==================================================================
               TAB 1: BOOKING CLEANING VISITS
               ================================================================== -->
          <section id="tab-visits" class="dashboard-tab-pane space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Booking Cleaning Visits</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Schedule new mechanized cleanings, view confirmed appointments, and track field teams.</p>
              </div>
              <a href="book-service.html" class="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto">
                <i class="fas fa-calendar-plus"></i>
                <span>New Booking Wizard</span>
              </a>
            </div>

            <!-- Upcoming Confirmed Appointment Card -->
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border-2 border-cyan-500 shadow-lg space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <i class="fas fa-circle-check mr-1.5"></i> Upcoming Confirmed Appointment
                </span>
                <span class="text-xs font-bold text-black dark:text-white">Booking Reference: #AQ-8912</span>
              </div>
              
              <div class="space-y-1">
                <h3 class="text-lg sm:text-xl font-black text-black dark:text-white">Quarterly AMC Mechanized Clean (Overhead Tank + Sump)</h3>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white">
                  Full 7-stage hygienic protocol including high-pressure rotary jetting, sludge extraction, and 254nm germicidal UV-C emitter sterilization.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
                <div>
                  <div class="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase">Service Date</div>
                  <div class="text-sm mt-0.5"><i class="fas fa-calendar text-cyan-600 mr-1.5"></i> 28 Nov 2026</div>
                </div>
                <div>
                  <div class="text-[10px] text-teal-600 dark:text-teal-400 uppercase">Arrival Window</div>
                  <div class="text-sm mt-0.5"><i class="fas fa-clock text-teal-600 mr-1.5"></i> 09:00 AM – 11:00 AM</div>
                </div>
                <div>
                  <div class="text-[10px] text-purple-600 dark:text-purple-400 uppercase">Assigned Field Crew</div>
                  <div class="text-sm mt-0.5"><i class="fas fa-user-shield text-purple-600 mr-1.5"></i> Team Alpha (Rajesh M.)</div>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button onclick="showToast('Dispatch Notification: Crew Alpha is scheduled for 28 Nov. GPS live link will activate 30 mins before arrival.', 'info')" class="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2">
                  <i class="fas fa-location-crosshairs"></i> Track Mobile Unit
                </button>
                <button onclick="showToast('Reschedule Window Open: You can choose an alternate date free of charge up to 2 hours before the slot.', 'info')" class="px-4 py-2.5 rounded-xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 transition-all">
                  Reschedule Appointment
                </button>
                <button onclick="showToast('Need special preparations? Our crew carries dedicated extension cables and 100ft suction hoses.', 'info')" class="px-4 py-2.5 rounded-xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 transition-all">
                  Add Special Instructions
                </button>
              </div>
            </div>

            <!-- Historical Cleaning Visits Log -->
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
              <h3 class="text-lg font-black text-black dark:text-white">Historical Cleaning Visits Log</h3>
              
              <div class="space-y-3">
                <!-- Completed Visit 1 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase">Completed &amp; Certified</span>
                      <span class="text-xs font-bold text-black dark:text-white">#AQ-7432 • 14 Oct 2026</span>
                    </div>
                    <div class="text-sm font-bold text-black dark:text-white">Overhead Tank (1,500L) 7-Stage Deep Clean</div>
                    <div class="text-xs font-semibold text-black dark:text-white">Post-Clean Turbidity: 0.6 NTU (WHO Grade A) • 30-Day Guarantee Active</div>
                  </div>
                  <button onclick="switchDashboardTab('tab-reports')" class="px-4 py-2 rounded-xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 transition-all shrink-0">
                    <i class="fas fa-file-pdf mr-1 text-teal-600 dark:text-teal-400"></i> View Report
                  </button>
                </div>

                <!-- Completed Visit 2 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase">Completed &amp; Certified</span>
                      <span class="text-xs font-bold text-black dark:text-white">#AQ-6109 • 10 Jul 2026</span>
                    </div>
                    <div class="text-sm font-bold text-black dark:text-white">Underground Sump (3,000L) Heavy Silt Vacuum Extraction</div>
                    <div class="text-xs font-semibold text-black dark:text-white">Removed 4.2 kg Municipal Silt • Full Bio-Sanitization Handover</div>
                  </div>
                  <button onclick="switchDashboardTab('tab-reports')" class="px-4 py-2 rounded-xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 transition-all shrink-0">
                    <i class="fas fa-file-pdf mr-1 text-teal-600 dark:text-teal-400"></i> View Report
                  </button>
                </div>
              </div>
            </div>

          </section>

          <!-- ==================================================================
               TAB 2: VIEWING SERVICE REPORTS
               ================================================================== -->
          <section id="tab-reports" class="dashboard-tab-pane hidden space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Viewing Service Reports</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Digital water testing certificates, laboratory metrics, and before/after verification photos.</p>
              </div>
              <button onclick="downloadReportPdf()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto">
                <i class="fas fa-download"></i>
                <span>Download Signed PDF</span>
              </button>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-6">
              
              <!-- Report Certificate Banner -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-200 dark:border-sky-800">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl">
                    <i class="fas fa-certificate"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Official Purity Certificate</div>
                    <div class="text-lg font-black text-black dark:text-white">Certificate #PUR-2026-9041</div>
                  </div>
                </div>
                <div class="text-left sm:text-right text-xs font-semibold text-black dark:text-white">
                  <div>Inspection Date: <strong>14 Oct 2026</strong></div>
                  <div>Lab Validation: <strong class="text-teal-600 dark:text-teal-400">PASSED WHO POTABLE STANDARDS</strong></div>
                </div>
              </div>

              <!-- Lab Test Parameters Table -->
              <div class="space-y-3">
                <h3 class="text-base font-black text-black dark:text-white">5-Point Water Purity Lab Panel Analysis</h3>
                <div class="overflow-x-auto rounded-2xl border border-sky-200 dark:border-sky-800">
                  <table class="w-full text-left border-collapse text-xs sm:text-sm font-semibold">
                    <thead>
                      <tr class="border-b border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white font-bold">
                        <th class="p-3">Tested Parameter</th>
                        <th class="p-3">Before Cleaning</th>
                        <th class="p-3">After AquaPure Clean</th>
                        <th class="p-3">WHO Guideline Standard</th>
                        <th class="p-3 text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-sky-100 dark:divide-sky-800 text-black dark:text-white">
                      <tr>
                        <td class="p-3 font-bold">Turbidity (Cloudiness)</td>
                        <td class="p-3 text-red-500">14.8 NTU</td>
                        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">0.6 NTU</td>
                        <td class="p-3">&lt; 1.0 NTU</td>
                        <td class="p-3 text-right font-black text-emerald-500"><i class="fas fa-check mr-1"></i> PASSED</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold">Total Dissolved Solids (TDS)</td>
                        <td class="p-3">385 ppm</td>
                        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">210 ppm</td>
                        <td class="p-3">&lt; 300 ppm (Excellent)</td>
                        <td class="p-3 text-right font-black text-emerald-500"><i class="fas fa-check mr-1"></i> PASSED</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold">pH Acidity / Alkalinity</td>
                        <td class="p-3">6.4 (Acidic)</td>
                        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">7.2 (Neutral Pure)</td>
                        <td class="p-3">6.5 – 8.5</td>
                        <td class="p-3 text-right font-black text-emerald-500"><i class="fas fa-check mr-1"></i> PASSED</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold">Aerobic Bacterial Count</td>
                        <td class="p-3 text-red-500">&gt; 240 CFU/ml</td>
                        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">0 CFU/ml (Sterile)</td>
                        <td class="p-3">0 CFU / 100ml</td>
                        <td class="p-3 text-right font-black text-emerald-500"><i class="fas fa-check mr-1"></i> PASSED</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold">Bottom Sludge Sediment</td>
                        <td class="p-3 text-red-500">3.5 inches Silt</td>
                        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">0.0 mm (Bone Dry Clean)</td>
                        <td class="p-3">Zero Tolerance</td>
                        <td class="p-3 text-right font-black text-emerald-500"><i class="fas fa-check mr-1"></i> PASSED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Photographic Verification Proof -->
              <div class="space-y-3 pt-2">
                <h3 class="text-base font-black text-black dark:text-white">Photographic On-Site Handover Proof</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold">
                      <span class="text-red-500"><i class="fas fa-triangle-exclamation mr-1"></i> BEFORE CLEANING</span>
                      <span class="text-black dark:text-white">Oct 14, 09:12 AM</span>
                    </div>
                    <img src="assets/images/allow-water-level-drop.jpg" alt="Tank Before Cleaning" class="w-full h-44 object-cover rounded-xl border border-sky-300 dark:border-sky-700">
                    <p class="text-[11px] font-semibold text-black dark:text-white">
                      Heavy rust line precipitation, 3.5 inches of bottom sludge sediment, and biofilm on internal sidewalls.
                    </p>
                  </div>
                  <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold">
                      <span class="text-teal-600 dark:text-teal-400"><i class="fas fa-circle-check mr-1"></i> AFTER AQUAPURE CLEAN</span>
                      <span class="text-black dark:text-white">Oct 14, 11:45 AM</span>
                    </div>
                    <img src="assets/images/overhead-tank-cleaning.jpg" alt="Tank After Cleaning" class="w-full h-44 object-cover rounded-xl border border-sky-300 dark:border-sky-700">
                    <p class="text-[11px] font-semibold text-black dark:text-white">
                      150-bar rotary wash, bone-dry sludge extraction, food-grade fogging, and 254nm UV-C sterilized spotless finish.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Sign-off Details -->
              <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-black dark:text-white">
                <div>Field Inspector: <strong class="text-cyan-600 dark:text-cyan-400">Rajesh Mathur (Badge #TECH-409)</strong></div>
                <div>Lab Microbiologist: <strong class="text-teal-600 dark:text-teal-400">Dr. Meera Nambiar (Reg. #LAB-672)</strong></div>
              </div>

            </div>

          </section>

          <!-- ==================================================================
               TAB 3: SETTING RECURRING REMINDERS
               ================================================================== -->
          <section id="tab-reminders" class="dashboard-tab-pane hidden space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Setting Recurring Reminders</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Never allow stagnant bacterial sludge to go unnoticed. Configure smart proactive cleaning alerts.</p>
              </div>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-6">
              
              <form id="reminder-setting-form" class="space-y-6">
                
                <!-- Cleaning Frequency Options -->
                <div class="space-y-3">
                  <label class="block text-sm font-bold text-black dark:text-white">Preferred Cleaning Recurrence Interval</label>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label class="p-4 rounded-2xl border-2 border-cyan-500 bg-sky-50 dark:bg-[#07131f] cursor-pointer space-y-1">
                      <div class="flex justify-between items-center">
                        <span class="font-bold text-xs text-black dark:text-white">Every 3 Months</span>
                        <input type="radio" name="freq" checked class="text-cyan-600">
                      </div>
                      <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Quarterly (Pediatric Safe)</div>
                      <p class="text-[10px] text-black dark:text-white">Recommended for infant households and hard municipal water zones.</p>
                    </label>

                    <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                      <div class="flex justify-between items-center">
                        <span class="font-bold text-xs text-black dark:text-white">Every 6 Months</span>
                        <input type="radio" name="freq" class="text-cyan-600">
                      </div>
                      <div class="text-[11px] font-semibold text-black dark:text-white">Bi-Annual Cycle</div>
                      <p class="text-[10px] text-black dark:text-white">Standard maintenance interval for treated residential tap water.</p>
                    </label>

                    <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                      <div class="flex justify-between items-center">
                        <span class="font-bold text-xs text-black dark:text-white">Seasonal Monsoon Prep</span>
                        <input type="radio" name="freq" class="text-cyan-600">
                      </div>
                      <div class="text-[11px] font-semibold text-black dark:text-white">Pre &amp; Post Monsoon</div>
                      <p class="text-[10px] text-black dark:text-white">Timed right before rains to prevent heavy runoff pipe silt.</p>
                    </label>
                  </div>
                </div>

                <!-- Notification Channels -->
                <div class="space-y-3">
                  <label class="block text-sm font-bold text-black dark:text-white">Notification Alert Channels</label>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                      <div class="flex items-center gap-2.5">
                        <i class="fas fa-envelope text-cyan-600"></i>
                        <span class="text-xs font-bold text-black dark:text-white">Email Digest</span>
                      </div>
                      <input type="checkbox" checked class="w-4 h-4 rounded text-cyan-600">
                    </label>
                    <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                      <div class="flex items-center gap-2.5">
                        <i class="fas fa-comment-sms text-teal-600"></i>
                        <span class="text-xs font-bold text-black dark:text-white">SMS Reminder</span>
                      </div>
                      <input type="checkbox" checked class="w-4 h-4 rounded text-cyan-600">
                    </label>
                    <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                      <div class="flex items-center gap-2.5">
                        <i class="fab fa-whatsapp text-emerald-500"></i>
                        <span class="text-xs font-bold text-black dark:text-white">WhatsApp Updates</span>
                      </div>
                      <input type="checkbox" checked class="w-4 h-4 rounded text-cyan-600">
                    </label>
                  </div>
                </div>

                <!-- Advance Notice Window -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-black dark:text-white">Lead Time Notice Before Scheduled Visit</label>
                  <select class="w-full sm:w-80 p-3 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs font-bold">
                    <option selected>14 Days in advance (Recommended to allow tank water drawdown)</option>
                    <option>7 Days in advance</option>
                    <option>3 Days in advance</option>
                  </select>
                </div>

                <div class="pt-2">
                  <button type="submit" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all">
                    Save Reminder Preferences
                  </button>
                </div>

              </form>

            </div>

          </section>

          <!-- ==================================================================
               TAB 4: MANAGING INVOICES
               ================================================================== -->
          <section id="tab-invoices" class="dashboard-tab-pane hidden space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Managing Invoices</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Review your billing history, download tax receipts, and view AMC contract statements.</p>
              </div>
              <button onclick="showToast('Exporting billing ledger as CSV...', 'info')" class="px-4 py-2.5 rounded-xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs sm:text-sm hover:border-cyan-500 transition-all flex items-center gap-2 self-start sm:self-auto">
                <i class="fas fa-file-excel text-emerald-500"></i>
                <span>Export Ledger (CSV)</span>
              </button>
            </div>

            <!-- Invoices Ledger Table -->
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
              
              <div class="overflow-x-auto rounded-2xl border border-sky-200 dark:border-sky-800">
                <table class="w-full text-left border-collapse text-xs sm:text-sm font-semibold">
                  <thead>
                    <tr class="border-b border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white font-bold">
                      <th class="p-3.5">Invoice #</th>
                      <th class="p-3.5">Date</th>
                      <th class="p-3.5">Service Description</th>
                      <th class="p-3.5">Amount</th>
                      <th class="p-3.5">Payment Method</th>
                      <th class="p-3.5">Status</th>
                      <th class="p-3.5 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-sky-100 dark:divide-sky-800 text-black dark:text-white">
                    <tr>
                      <td class="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-1048</td>
                      <td class="p-3.5">14 Oct 2026</td>
                      <td class="p-3.5">Quarterly AMC Visit (Tank + Sump Sanitization)</td>
                      <td class="p-3.5 font-bold">$129.00</td>
                      <td class="p-3.5"><i class="fab fa-cc-visa text-blue-500 mr-1"></i> Visa •••• 4821</td>
                      <td class="p-3.5"><span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Paid</span></td>
                      <td class="p-3.5 text-right">
                        <button onclick="showToast('Downloading Invoice #INV-2026-1048 PDF...', 'success')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs">
                          <i class="fas fa-file-pdf mr-1"></i> PDF
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-0812</td>
                      <td class="p-3.5">10 Jul 2026</td>
                      <td class="p-3.5">Sump Deep De-Silting &amp; Pipeline De-Scaling Flush</td>
                      <td class="p-3.5 font-bold">$149.00</td>
                      <td class="p-3.5"><i class="fab fa-cc-mastercard text-amber-500 mr-1"></i> Master •••• 9011</td>
                      <td class="p-3.5"><span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Paid</span></td>
                      <td class="p-3.5 text-right">
                        <button onclick="showToast('Downloading Invoice #INV-2026-0812 PDF...', 'success')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs">
                          <i class="fas fa-file-pdf mr-1"></i> PDF
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-0391</td>
                      <td class="p-3.5">15 Apr 2026</td>
                      <td class="p-3.5">Annual Villa Total AMC Membership Enrolment (4 Visits)</td>
                      <td class="p-3.5 font-bold">$399.00</td>
                      <td class="p-3.5"><i class="fab fa-cc-visa text-blue-500 mr-1"></i> Visa •••• 4821</td>
                      <td class="p-3.5"><span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Paid</span></td>
                      <td class="p-3.5 text-right">
                        <button onclick="showToast('Downloading Invoice #INV-2026-0391 PDF...', 'success')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs">
                          <i class="fas fa-file-pdf mr-1"></i> PDF
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Billing Address Note -->
              <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-semibold text-black dark:text-white">
                <div>
                  <strong>Primary Billing Entity:</strong> Vikram Sharma • 42 Blossom Valley Way, Sunnyvale, CA 94087
                </div>
                <button onclick="showToast('Billing address is synced with your primary property records.', 'info')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold">
                  Edit Billing Info
                </button>
              </div>

            </div>

          </section>

          <!-- ==================================================================
               TAB 5: TANK / SUMP DETAILS
               ================================================================== -->
          <section id="tab-tanks" class="dashboard-tab-pane hidden space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Tank &amp; Sump Inventory Details</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Technical specifications, dimensions, material types, and maintenance cycle histories.</p>
              </div>
              <button onclick="showToast('Opening Add Reservoir dialog...', 'info')" class="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto">
                <i class="fas fa-plus"></i>
                <span>Register Additional Tank</span>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Tank Card 1 -->
              <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 text-xs font-bold uppercase">
                    Storage Unit #01
                  </span>
                  <span class="text-xs font-bold text-teal-600 dark:text-teal-400"><i class="fas fa-shield-check mr-1"></i> Condition: Optimal</span>
                </div>
                <h3 class="text-lg font-black text-black dark:text-white">Overhead Rooftop Tank</h3>
                <div class="space-y-2 text-xs font-semibold text-black dark:text-white">
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Capacity</span>
                    <strong>1,500 Liters</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Material &amp; Make</span>
                    <strong>Sintex 3-Layer Food-Grade Polyethylene</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Installation Location</span>
                    <strong>South Rooftop Terrace</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Last Deep Cleaned</span>
                    <strong>14 Oct 2026</strong>
                  </div>
                  <div class="flex justify-between py-1">
                    <span class="text-black dark:text-white">Next Due Date</span>
                    <strong class="text-cyan-600 dark:text-cyan-400">28 Nov 2026 (AMC Scheduled)</strong>
                  </div>
                </div>
              </div>

              <!-- Tank Card 2 -->
              <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-xs font-bold uppercase">
                    Storage Unit #02
                  </span>
                  <span class="text-xs font-bold text-teal-600 dark:text-teal-400"><i class="fas fa-shield-check mr-1"></i> Condition: Optimal</span>
                </div>
                <h3 class="text-lg font-black text-black dark:text-white">Underground Masonry Sump</h3>
                <div class="space-y-2 text-xs font-semibold text-black dark:text-white">
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Capacity</span>
                    <strong>3,000 Liters</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Material &amp; Make</span>
                    <strong>RCC Masonry with Waterproof Epoxy Liner</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Installation Location</span>
                    <strong>Front Garden Courtyard (Near Main Meter)</strong>
                  </div>
                  <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800">
                    <span class="text-black dark:text-white">Last Deep Cleaned</span>
                    <strong>14 Oct 2026</strong>
                  </div>
                  <div class="flex justify-between py-1">
                    <span class="text-black dark:text-white">Next Due Date</span>
                    <strong class="text-cyan-600 dark:text-cyan-400">28 Nov 2026 (AMC Scheduled)</strong>
                  </div>
                </div>
              </div>

            </div>

          </section>

          <!-- ==================================================================
               TAB 6: MY PROFILE
               ================================================================== -->
          <section id="tab-profile" class="dashboard-tab-pane hidden space-y-6">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-black dark:text-white">Customer Profile &amp; Preferences</h2>
                <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">Manage contact credentials, property address, and security settings.</p>
              </div>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-6">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-black dark:text-white">Full Name</label>
                  <input type="text" value="Vikram Sharma" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white text-xs font-semibold">
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-black dark:text-white">Email Address</label>
                  <input type="email" value="vikram.sharma@gmail.com" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white text-xs font-semibold">
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-black dark:text-white">Mobile Number</label>
                  <input type="tel" value="+1 (408) 555-0192" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white text-xs font-semibold">
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-black dark:text-white">Customer ID</label>
                  <input type="text" readonly value="#AQ-4921 (Verified AMC)" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-100/50 dark:bg-[#07131f]/50 text-cyan-600 dark:text-cyan-400 text-xs font-black">
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-black dark:text-white">Registered Service Address</label>
                <input type="text" value="42 Blossom Valley Way, Sunnyvale, CA 94087" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white text-xs font-semibold">
              </div>

              <div class="pt-4 border-t border-sky-200 dark:border-sky-800 flex items-center justify-between">
                <button type="button" onclick="showToast('Profile changes saved successfully.', 'success')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all">
                  Update Profile Details
                </button>
                <button type="button" onclick="showToast('Password reset instructions sent to your registered email.', 'info')" class="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                  Change Password
                </button>
              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  </main>

  <!-- ==========================================================================
       FOOTER (Standardized Across All 15 Pages)
       ========================================================================== -->
  <footer class="bg-white dark:bg-[#07131f] border-t border-sky-200 dark:border-sky-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        <!-- Brand Summary & Social Icons -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md">
              <i class="fas fa-droplet text-xl"></i>
            </div>
            <div class="flex items-center gap-1 text-2xl font-black tracking-tight">
              <span class="text-cyan-600 dark:text-cyan-400">Aqua</span>
              <span class="text-black dark:text-white">Pure</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
            Leading specialized overhead water tank, underground sump, and pipeline mechanized sanitization service ensuring 100% bacterial-free drinking water.
          </p>
          <!-- Social Icons (Circular Bordered) -->
          <div class="flex items-center gap-3 pt-2">
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
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold uppercase tracking-wider text-black dark:text-white">Navigation</h4>
          <ul class="space-y-2 text-xs sm:text-sm font-semibold text-black dark:text-white">
            <li><a href="index.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AquaPure Landing</a></li>
            <li><a href="home-family.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Family Safe Home</a></li>
            <li><a href="about.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Us</a></li>
            <li><a href="services.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="pricing.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pricing</a></li>
            <li><a href="blog.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Blog</a></li>
            <li><a href="contact.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact Us</a></li>
            <li><a href="dashboard.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Dashboard</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold uppercase tracking-wider text-black dark:text-white">Services</h4>
          <ul class="space-y-2 text-xs sm:text-sm font-semibold text-black dark:text-white">
            <li><a href="services.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Overhead Tank Cleaning</a></li>
            <li><a href="services.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Underground Sump Cleaning</a></li>
            <li><a href="services.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">UV Bio-Sanitization</a></li>
            <li><a href="services.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pipeline De-scaling</a></li>
            <li><a href="service-details.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">7-Stage Deep Clean</a></li>
            <li><a href="amc-membership.html" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AMC Memberships</a></li>
          </ul>
        </div>

        <!-- Contact & Address (42 Blossom Valley Way, Sunnyvale, CA 94087) -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold uppercase tracking-wider text-black dark:text-white">Office Location</h4>
          <div class="space-y-2.5 text-xs sm:text-sm font-semibold text-black dark:text-white">
            <div class="flex items-start gap-2.5">
              <i class="fas fa-location-dot text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"></i>
              <span>42 Blossom Valley Way, Sunnyvale, CA 94087</span>
            </div>
            <div class="flex items-start gap-2.5">
              <i class="fas fa-phone-volume text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"></i>
              <a href="tel:+18004389283" class="hover:underline text-cyan-600 dark:text-cyan-400 font-bold">1-800-AQUA-PURE</a>
            </div>
            <div class="flex items-start gap-2.5">
              <i class="fas fa-envelope text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"></i>
              <span>support@aquapureclean.com</span>
            </div>
            <div class="flex items-start gap-2.5">
              <i class="fas fa-clock text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"></i>
              <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>

      </div>

      <div class="pt-8 text-center text-xs font-semibold text-black dark:text-white">
        &copy; 2026 AquaPure Technologies Inc. All Rights Reserved.
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
  <script>
    function switchDashboardTab(targetTabId) {
      // Hide all tab panes
      document.querySelectorAll('.dashboard-tab-pane').forEach(pane => {
        pane.classList.add('hidden');
      });

      // Show target tab pane
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) {
        targetPane.classList.remove('hidden');
      }

      // Update sidebar nav active classes
      const navButtons = document.querySelectorAll('#dashboard-sidebar-nav button');
      navButtons.forEach(btn => {
        btn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-sky-950/50 text-left';
      });

      const activeBtn = document.getElementById('nav-btn-' + targetTabId);
      if (activeBtn) {
        activeBtn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-cyan-600 text-white shadow-md text-left';
      }

      // Smooth scroll to top of workspace if on mobile
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }
    }

    function downloadReportPdf() {
      showToast('Downloading Official Certificate #PUR-2026-9041 (PDF)...', 'success');
    }
  </script>
</body>
</html>`;

fs.writeFileSync('dashboard.html', dashboardHtml, 'utf8');
console.log('Successfully written dashboard.html. Lines:', dashboardHtml.split('\n').length);
