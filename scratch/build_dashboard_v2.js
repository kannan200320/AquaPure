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
<body class="bg-[#f0f9ff] dark:bg-[#07131f] text-black dark:text-white min-h-screen flex flex-col transition-colors duration-300">

  <!-- ==========================================================================
       TOP APP HEADER (Matches Reference Dashboard Layout)
       ========================================================================== -->
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md border-b border-sky-200 dark:border-sky-900 shadow-sm transition-colors duration-300">
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

        <!-- Desktop Navigation Links to Website -->
        <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold">
          <a href="index.html" class="text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</a>
          <a href="services.html" class="text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a>
          <a href="pricing.html" class="text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="book-service.html" class="text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Book Service</a>
          <a href="contact.html" class="text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Support</a>
        </nav>

        <!-- Right Side Utility Controls & User Profile Avatar -->
        <div class="flex items-center gap-3 shrink-0">
          <button class="theme-toggle w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors" title="Toggle Light / Dark Mode">
            <i class="theme-toggle-icon fas fa-moon text-sm"></i>
          </button>

          <button class="rtl-toggle w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors" title="Toggle RTL / LTR">
            <i class="fas fa-arrow-right-arrow-left text-xs"></i>
          </button>

          <!-- User Profile Avatar Pill -->
          <div class="flex items-center gap-2.5 pl-2 border-l border-sky-200 dark:border-sky-800">
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-600 text-white font-black text-xs flex items-center justify-center shadow-md">
              VS
            </div>
            <div class="hidden sm:block text-left leading-tight">
              <div class="font-bold text-xs text-black dark:text-white">Vikram Sharma</div>
              <div class="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400">Customer Portal</div>
            </div>
          </div>

          <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-black dark:text-white">
            <i class="fas fa-bars text-lg"></i>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- ==========================================================================
       MAIN DASHBOARD CONTAINER (Sticky Non-Scrolling Side Menu + Scrollable Workspace)
       ========================================================================== -->
  <div class="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start transition-colors">
    
    <!-- ========================================================================
         LEFT SIDEBAR MENU: Fixed in place while right workspace scrolls!
         ======================================================================== -->
    <aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto bg-white dark:bg-[#0c1e33] border-b lg:border-b-0 lg:border-r border-sky-200 dark:border-sky-800 p-5 sm:p-6 flex flex-col justify-between transition-colors shadow-sm z-30">
      
      <div class="space-y-6">
        
        <!-- Sidebar Hub Title -->
        <div class="space-y-1">
          <span class="text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            CUSTOMER PORTAL
          </span>
          <p class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">
            42 Blossom Valley Way, Sunnyvale
          </p>
        </div>

        <!-- Navigation Menu List -->
        <nav class="space-y-1.5" id="dashboard-sidebar-nav">
          
          <!-- Menu Item 1: Overview Dashboard (Active by default) -->
          <button onclick="switchDashboardTab('tab-overview')" id="nav-btn-tab-overview" class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md text-left">
            <i class="fas fa-table-columns text-base shrink-0"></i>
            <span class="truncate">Overview Dashboard</span>
          </button>

          <!-- Menu Item 2: Booking Cleaning Visits -->
          <button onclick="switchDashboardTab('tab-visits')" id="nav-btn-tab-visits" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <div class="flex items-center gap-3 truncate">
              <i class="fas fa-calendar-check text-base text-cyan-600 dark:text-cyan-400 shrink-0"></i>
              <span class="truncate">Booking Cleaning Visits</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 text-[10px] font-black shrink-0">1 Due</span>
          </button>

          <!-- Menu Item 3: Viewing Service Reports -->
          <button onclick="switchDashboardTab('tab-reports')" id="nav-btn-tab-reports" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <div class="flex items-center gap-3 truncate">
              <i class="fas fa-vial-circle-check text-base text-teal-600 dark:text-teal-400 shrink-0"></i>
              <span class="truncate">Viewing Service Reports</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-[10px] font-black shrink-0">Lab Ready</span>
          </button>

          <!-- Menu Item 4: Setting Recurring Reminders -->
          <button onclick="switchDashboardTab('tab-reminders')" id="nav-btn-tab-reminders" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <div class="flex items-center gap-3 truncate">
              <i class="fas fa-bell text-base text-amber-500 shrink-0"></i>
              <span class="truncate">Setting Recurring Reminders</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-black shrink-0">Active</span>
          </button>

          <!-- Menu Item 5: Managing Invoices -->
          <button onclick="switchDashboardTab('tab-invoices')" id="nav-btn-tab-invoices" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <div class="flex items-center gap-3 truncate">
              <i class="fas fa-file-invoice-dollar text-base text-emerald-500 shrink-0"></i>
              <span class="truncate">Managing Invoices</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black shrink-0">Paid</span>
          </button>

          <!-- Menu Item 6: Tank & Sump Details -->
          <button onclick="switchDashboardTab('tab-tanks')" id="nav-btn-tab-tanks" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <div class="flex items-center gap-3 truncate">
              <i class="fas fa-database text-base text-sky-600 dark:text-sky-400 shrink-0"></i>
              <span class="truncate">Tank &amp; Sump Details</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-[10px] font-black shrink-0">2 Units</span>
          </button>

          <!-- Menu Item 7: My Profile -->
          <button onclick="switchDashboardTab('tab-profile')" id="nav-btn-tab-profile" class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left">
            <i class="fas fa-user-gear text-base text-purple-500 shrink-0"></i>
            <span class="truncate">My Profile</span>
          </button>

        </nav>

      </div>

      <!-- Bottom Sign Out Button -->
      <div class="pt-6 mt-6 border-t border-sky-100 dark:border-sky-800">
        <a href="login-register.html" class="flex items-center gap-2.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline">
          <i class="fas fa-arrow-right-from-bracket text-sm"></i>
          <span>Sign Out</span>
        </a>
      </div>

    </aside>

    <!-- ========================================================================
         RIGHT WORKSPACE AREA: Scrolls smoothly while side menu stays fixed!
         ======================================================================== -->
    <main class="flex-1 min-w-0 p-5 sm:p-8 lg:p-10 space-y-8 bg-[#f0f9ff] dark:bg-[#07131f] transition-colors">
      
      <!-- ======================================================================
           TAB VIEW 1: OVERVIEW DASHBOARD (Exact Match to Image 1 Layout)
           ====================================================================== -->
      <div id="tab-overview" class="dashboard-tab-pane space-y-8">
        
        <!-- Header Row: Title on Left, Status Pill on Right -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 class="text-3xl font-black text-black dark:text-white tracking-tight">
            Water Hygiene Dashboard
          </h1>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold self-start sm:self-auto">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Active AMC Plan 2026</span>
          </div>
        </div>

        <!-- 3 Big Metric Cards (Matches Image 1: Enrolled, Attendance/Purity, Status) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <!-- Metric Card 1: Enrolled Storage -->
          <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
                ENROLLED STORAGE
              </span>
              <div class="text-3xl font-black text-cyan-600 dark:text-cyan-400">
                2 Active
              </div>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl shadow-inner">
              <i class="fas fa-database"></i>
            </div>
          </div>

          <!-- Metric Card 2: Turbidity Purity Score -->
          <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
                WATER PURITY INDEX
              </span>
              <div class="text-3xl font-black text-teal-600 dark:text-teal-400">
                0.6 NTU
              </div>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xl shadow-inner">
              <i class="fas fa-circle-check"></i>
            </div>
          </div>

          <!-- Metric Card 3: Next Service Status -->
          <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
                NEXT CLEANING VISIT
              </span>
              <div class="inline-block mt-1">
                <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-black text-xs">
                  Due Nov 28 (24 Days)
                </span>
              </div>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shadow-inner">
              <i class="fas fa-calendar-days"></i>
            </div>
          </div>

        </div>

        <!-- 2-Column Section (Matches Image 1: Active List on Left, Community Bulletins on Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left Large Card: Active Storage Units & Service List (approx 65% width) -->
          <div class="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-5">
            <h2 class="text-lg font-black text-black dark:text-white">
              Active Storage Reservoirs &amp; Status
            </h2>

            <div class="space-y-3.5">
              
              <!-- Reservoir 1: Overhead Tank -->
              <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-11 h-11 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 font-black text-xs flex items-center justify-center shrink-0">
                    RT
                  </div>
                  <div class="min-w-0 space-y-0.5">
                    <div class="font-black text-xs sm:text-sm text-black dark:text-white truncate">Overhead Rooftop Tank</div>
                    <p class="text-[11px] font-semibold text-black dark:text-white truncate">1,500L Sintex • South Terrace • Last Cleaned: Oct 14</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-[10px] font-black uppercase">
                    Rooftop
                  </span>
                  <button onclick="switchDashboardTab('tab-visits')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs whitespace-nowrap">
                    View Log
                  </button>
                </div>
              </div>

              <!-- Reservoir 2: Underground Sump -->
              <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-11 h-11 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 font-black text-xs flex items-center justify-center shrink-0">
                    US
                  </div>
                  <div class="min-w-0 space-y-0.5">
                    <div class="font-black text-xs sm:text-sm text-black dark:text-white truncate">Underground Masonry Sump</div>
                    <p class="text-[11px] font-semibold text-black dark:text-white truncate">3,000L Concrete • Front Garden • Last Cleaned: Oct 14</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[10px] font-black uppercase">
                    Ground Sump
                  </span>
                  <button onclick="switchDashboardTab('tab-visits')" class="text-teal-600 dark:text-teal-400 hover:underline font-bold text-xs whitespace-nowrap">
                    View Log
                  </button>
                </div>
              </div>

              <!-- Reservoir 3: Pipeline Run -->
              <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-11 h-11 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-black text-xs flex items-center justify-center shrink-0">
                    PL
                  </div>
                  <div class="min-w-0 space-y-0.5">
                    <div class="font-black text-xs sm:text-sm text-black dark:text-white truncate">Concealed Pipeline Network</div>
                    <p class="text-[11px] font-semibold text-black dark:text-white truncate">Whole-Home Copper &amp; PVC • Hydro-Flushed Clean</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-[10px] font-black uppercase">
                    Pipeline Grid
                  </span>
                  <button onclick="switchDashboardTab('tab-reports')" class="text-purple-600 dark:text-purple-400 hover:underline font-bold text-xs whitespace-nowrap">
                    Audit Report
                  </button>
                </div>
              </div>

            </div>

          </div>

          <!-- Right Column Card: Hygiene Community News & Advisories (approx 35% width) -->
          <div class="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-5">
            <h2 class="text-lg font-black text-black dark:text-white">
              Water Hygiene Advisories
            </h2>

            <div class="space-y-3.5">
              
              <!-- Bulletin 1 -->
              <div class="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border-l-4 border-amber-500 space-y-1">
                <div class="font-bold text-xs sm:text-sm text-black dark:text-white">Pre-Monsoon Silt Ingress Alert</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Municipal line maintenance this month increases silt runoff. Check your underground sump intake strainer.
                </p>
              </div>

              <!-- Bulletin 2 -->
              <div class="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/20 border-l-4 border-teal-500 space-y-1">
                <div class="font-bold text-xs sm:text-sm text-black dark:text-white">Digital Lab Certification Published</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Your official 5-point water test certificate (#PUR-2026-9041) is approved and downloadable in the reports tab.
                </p>
              </div>

              <!-- Bulletin 3 -->
              <div class="p-4 rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/20 border-l-4 border-cyan-500 space-y-1">
                <div class="font-bold text-xs sm:text-sm text-black dark:text-white">24/7 VIP Emergency Contamination Hotline</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Notice unusual odor or discolored water? Priority emergency dispatch is active at zero surge charge: 1-800-AQUA-PURE.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 2: BOOKING CLEANING VISITS
           ====================================================================== -->
      <div id="tab-visits" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
          <div>
            <h2 class="text-2xl font-black text-black dark:text-white">Booking Cleaning Visits</h2>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
              Review upcoming appointments, reschedule arrival slots, or schedule an additional visit.
            </p>
          </div>
          <a href="book-service.html" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto">
            <i class="fas fa-calendar-plus"></i>
            <span>Schedule New Visit</span>
          </a>
        </div>

        <!-- Upcoming Appointment Card -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border-2 border-cyan-500 shadow-md space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase">
              <i class="fas fa-circle-check mr-1"></i> Upcoming Confirmed Visit
            </span>
            <span class="text-xs font-bold text-black dark:text-white">Booking Reference: #AQ-8912</span>
          </div>

          <div class="space-y-1">
            <h3 class="text-lg font-black text-black dark:text-white">Quarterly AMC Mechanized Clean (Overhead Tank + Sump)</h3>
            <p class="text-xs font-semibold text-black dark:text-white">
              Includes 150-bar rotary hydro-jetting, vacuum slurry extraction, food-grade fogging, and UV-C sterilization.
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
              <div class="text-[10px] text-purple-600 dark:text-purple-400 uppercase">Lead Technician</div>
              <div class="text-sm mt-0.5"><i class="fas fa-user-shield text-purple-600 mr-1.5"></i> Team Alpha (Rajesh M.)</div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button onclick="showToast('Tracking Mobile Van Alpha: Crew dispatched on schedule. Live GPS activates 30 mins before window.', 'info')" class="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2">
              <i class="fas fa-location-crosshairs"></i> Track Mobile Crew
            </button>
            <button onclick="showToast('Reschedule Window Open: You can choose another slot free of charge up to 2 hours prior.', 'info')" class="px-4 py-2.5 rounded-xl bg-white dark:bg-[#07131f] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 transition-all">
              Reschedule Window
            </button>
          </div>
        </div>

        <!-- Historical Cleaning Log -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-4">
          <h3 class="text-base font-black text-black dark:text-white">Historical Cleaning Visits Log</h3>
          
          <div class="space-y-3">
            <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Completed</span>
                  <span class="text-xs font-bold text-black dark:text-white">#AQ-7432 • 14 Oct 2026</span>
                </div>
                <div class="text-xs sm:text-sm font-bold text-black dark:text-white">Overhead Tank 7-Stage Deep Clean + UV-C</div>
                <div class="text-xs font-semibold text-black dark:text-white">Turbidity: 0.6 NTU (Passed WHO Standards)</div>
              </div>
              <button onclick="switchDashboardTab('tab-reports')" class="px-3.5 py-2 rounded-xl bg-white dark:bg-[#0c1e33] border border-sky-300 dark:border-sky-700 text-black dark:text-white font-bold text-xs hover:border-cyan-500 self-start sm:self-auto">
                View Lab Report
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 3: VIEWING SERVICE REPORTS
           ====================================================================== -->
      <div id="tab-reports" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
          <div>
            <h2 class="text-2xl font-black text-black dark:text-white">Viewing Service Reports</h2>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
              Official water laboratory certifications, digital photometer test metrics, and photo proof.
            </p>
          </div>
          <button onclick="showToast('Downloading Signed PDF Certificate #PUR-2026-9041...', 'success')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto">
            <i class="fas fa-download"></i>
            <span>Download Signed PDF</span>
          </button>
        </div>

        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-6">
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-sky-100 dark:border-sky-800">
            <div>
              <div class="text-[11px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Official Hygiene Certificate</div>
              <div class="text-lg font-black text-black dark:text-white">Certificate #PUR-2026-9041</div>
            </div>
            <div class="text-xs font-semibold text-black dark:text-white">
              Inspection: <strong>14 Oct 2026</strong> • Status: <strong class="text-teal-600 dark:text-teal-400">GRADE A POTABLE</strong>
            </div>
          </div>

          <!-- Comparative 5-Point Lab Table -->
          <div class="overflow-x-auto rounded-2xl border border-sky-200 dark:border-sky-800">
            <table class="w-full text-left border-collapse text-xs sm:text-sm font-semibold">
              <thead>
                <tr class="border-b border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white font-bold">
                  <th class="p-3.5">Parameter</th>
                  <th class="p-3.5">Before Cleaning</th>
                  <th class="p-3.5">After AquaPure Clean</th>
                  <th class="p-3.5">WHO Standard</th>
                  <th class="p-3.5 text-right">Result</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-sky-100 dark:divide-sky-800 text-black dark:text-white">
                <tr>
                  <td class="p-3.5 font-bold">Turbidity</td>
                  <td class="p-3.5 text-red-500 font-bold">14.8 NTU</td>
                  <td class="p-3.5 text-teal-600 dark:text-teal-400 font-bold">0.6 NTU</td>
                  <td class="p-3.5">&lt; 1.0 NTU</td>
                  <td class="p-3.5 text-right text-emerald-500 font-black"><i class="fas fa-check mr-1"></i> PASSED</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold">Total Dissolved Solids (TDS)</td>
                  <td class="p-3.5">385 ppm</td>
                  <td class="p-3.5 text-teal-600 dark:text-teal-400 font-bold">210 ppm</td>
                  <td class="p-3.5">&lt; 300 ppm</td>
                  <td class="p-3.5 text-right text-emerald-500 font-black"><i class="fas fa-check mr-1"></i> PASSED</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold">pH Level</td>
                  <td class="p-3.5">6.4</td>
                  <td class="p-3.5 text-teal-600 dark:text-teal-400 font-bold">7.2 (Neutral)</td>
                  <td class="p-3.5">6.5 – 8.5</td>
                  <td class="p-3.5 text-right text-emerald-500 font-black"><i class="fas fa-check mr-1"></i> PASSED</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold">Bacterial Count</td>
                  <td class="p-3.5 text-red-500 font-bold">&gt; 240 CFU/ml</td>
                  <td class="p-3.5 text-teal-600 dark:text-teal-400 font-bold">0 CFU/ml</td>
                  <td class="p-3.5">0 CFU/ml</td>
                  <td class="p-3.5 text-right text-emerald-500 font-black"><i class="fas fa-check mr-1"></i> PASSED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Photo Verification -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-2">
              <div class="text-xs font-bold text-red-500 uppercase"><i class="fas fa-triangle-exclamation mr-1"></i> Before Cleaning</div>
              <img src="assets/images/allow-water-level-drop.jpg" alt="Before Cleaning" class="w-full h-40 object-cover rounded-xl border border-sky-300 dark:border-sky-700">
              <p class="text-[11px] font-semibold text-black dark:text-white">Algae formation and 3.5 inches bottom silt buildup.</p>
            </div>
            <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-2">
              <div class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase"><i class="fas fa-circle-check mr-1"></i> After AquaPure Sanitization</div>
              <img src="assets/images/overhead-tank-cleaning.jpg" alt="After Cleaning" class="w-full h-40 object-cover rounded-xl border border-sky-300 dark:border-sky-700">
              <p class="text-[11px] font-semibold text-black dark:text-white">150-bar rotary cleaned, vacuum extracted, and UV-C sterilized.</p>
            </div>
          </div>

        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 4: SETTING RECURRING REMINDERS
           ====================================================================== -->
      <div id="tab-reminders" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="pb-4 border-b border-sky-200 dark:border-sky-800">
          <h2 class="text-2xl font-black text-black dark:text-white">Setting Recurring Reminders</h2>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
            Configure automated proactive cleaning cycle alerts so you never have to remember service dates.
          </p>
        </div>

        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-6">
          <form onsubmit="event.preventDefault(); showToast('Reminder preferences saved successfully.', 'success');" class="space-y-6">
            
            <div class="space-y-3">
              <label class="block text-sm font-bold text-black dark:text-white">Preferred Cleaning Recurrence Interval</label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="p-4 rounded-2xl border-2 border-cyan-500 bg-sky-50 dark:bg-[#07131f] cursor-pointer space-y-1">
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-xs text-black dark:text-white">Quarterly (90 Days)</span>
                    <input type="radio" name="freq" checked class="text-cyan-600">
                  </div>
                  <p class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Pediatric Safe (Recommended)</p>
                </label>
                <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-xs text-black dark:text-white">Bi-Annual (180 Days)</span>
                    <input type="radio" name="freq" class="text-cyan-600">
                  </div>
                  <p class="text-[11px] font-semibold text-black dark:text-white">Standard Municipal Tap Care</p>
                </label>
                <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-xs text-black dark:text-white">Seasonal Monsoon Prep</span>
                    <input type="radio" name="freq" class="text-cyan-600">
                  </div>
                  <p class="text-[11px] font-semibold text-black dark:text-white">Pre &amp; Post Monsoon Flush</p>
                </label>
              </div>
            </div>

            <div class="space-y-3">
              <label class="block text-sm font-bold text-black dark:text-white">Notification Alert Channels</label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                  <span class="text-xs font-bold text-black dark:text-white"><i class="fas fa-envelope text-cyan-600 mr-2"></i> Email Digest</span>
                  <input type="checkbox" checked class="w-4 h-4 text-cyan-600">
                </label>
                <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                  <span class="text-xs font-bold text-black dark:text-white"><i class="fas fa-comment-sms text-teal-600 mr-2"></i> SMS Text Alert</span>
                  <input type="checkbox" checked class="w-4 h-4 text-cyan-600">
                </label>
                <label class="p-3.5 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] flex items-center justify-between cursor-pointer">
                  <span class="text-xs font-bold text-black dark:text-white"><i class="fab fa-whatsapp text-emerald-500 mr-2"></i> WhatsApp Updates</span>
                  <input type="checkbox" checked class="w-4 h-4 text-cyan-600">
                </label>
              </div>
            </div>

            <button type="submit" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all">
              Save Reminder Settings
            </button>

          </form>
        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 5: MANAGING INVOICES
           ====================================================================== -->
      <div id="tab-invoices" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200 dark:border-sky-800">
          <div>
            <h2 class="text-2xl font-black text-black dark:text-white">Managing Invoices</h2>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
              Review billing history, download official tax receipts, and inspect your payment method.
            </p>
          </div>
        </div>

        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-4">
          <div class="overflow-x-auto rounded-2xl border border-sky-200 dark:border-sky-800">
            <table class="w-full text-left border-collapse text-xs sm:text-sm font-semibold">
              <thead>
                <tr class="border-b border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white font-bold">
                  <th class="p-3.5">Invoice #</th>
                  <th class="p-3.5">Date</th>
                  <th class="p-3.5">Description</th>
                  <th class="p-3.5">Amount</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-sky-100 dark:divide-sky-800 text-black dark:text-white">
                <tr>
                  <td class="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-1048</td>
                  <td class="p-3.5">14 Oct 2026</td>
                  <td class="p-3.5">Quarterly AMC Visit (Tank + Sump)</td>
                  <td class="p-3.5 font-bold">$129.00</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Paid</span></td>
                  <td class="p-3.5 text-right">
                    <button onclick="showToast('Downloading Receipt #INV-2026-1048...', 'success')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-0391</td>
                  <td class="p-3.5">15 Apr 2026</td>
                  <td class="p-3.5">Annual Villa Total AMC Plan (4 Visits)</td>
                  <td class="p-3.5 font-bold">$399.00</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-black uppercase">Paid</span></td>
                  <td class="p-3.5 text-right">
                    <button onclick="showToast('Downloading Receipt #INV-2026-0391...', 'success')" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold text-xs">
                      PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 6: TANK & SUMP DETAILS
           ====================================================================== -->
      <div id="tab-tanks" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="pb-4 border-b border-sky-200 dark:border-sky-800">
          <h2 class="text-2xl font-black text-black dark:text-white">Tank &amp; Sump Inventory Details</h2>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
            Registered storage specifications, capacity metrics, and material configurations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-3">
            <span class="px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 text-xs font-bold uppercase">
              Unit #01 • Rooftop
            </span>
            <h3 class="text-lg font-black text-black dark:text-white">Overhead Rooftop Tank</h3>
            <div class="space-y-1.5 text-xs font-semibold text-black dark:text-white">
              <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800"><span>Capacity:</span> <strong>1,500 Liters</strong></div>
              <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800"><span>Material:</span> <strong>Sintex 3-Layer Polyethylene</strong></div>
              <div class="flex justify-between py-1"><span>Next Scheduled Clean:</span> <strong class="text-cyan-600 dark:text-cyan-400">28 Nov 2026</strong></div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-3">
            <span class="px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-xs font-bold uppercase">
              Unit #02 • Sump
            </span>
            <h3 class="text-lg font-black text-black dark:text-white">Underground Masonry Sump</h3>
            <div class="space-y-1.5 text-xs font-semibold text-black dark:text-white">
              <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800"><span>Capacity:</span> <strong>3,000 Liters</strong></div>
              <div class="flex justify-between py-1 border-b border-sky-100 dark:border-sky-800"><span>Material:</span> <strong>RCC Masonry with Epoxy Liner</strong></div>
              <div class="flex justify-between py-1"><span>Next Scheduled Clean:</span> <strong class="text-teal-600 dark:text-teal-400">28 Nov 2026</strong></div>
            </div>
          </div>
        </div>

      </div>

      <!-- ======================================================================
           TAB VIEW 7: MY PROFILE
           ====================================================================== -->
      <div id="tab-profile" class="dashboard-tab-pane hidden space-y-6">
        
        <div class="pb-4 border-b border-sky-200 dark:border-sky-800">
          <h2 class="text-2xl font-black text-black dark:text-white">My Profile &amp; Account Settings</h2>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
            Manage your customer credentials, primary service address, and contact numbers.
          </p>
        </div>

        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-sm space-y-4">
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
              <label class="text-xs font-bold text-black dark:text-white">Customer Account ID</label>
              <input type="text" readonly value="#AQ-4921 (Verified AMC Member)" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-100/60 dark:bg-[#07131f] text-cyan-600 dark:text-cyan-400 text-xs font-black">
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-xs font-bold text-black dark:text-white">Registered Service Address</label>
            <input type="text" value="42 Blossom Valley Way, Sunnyvale, CA 94087" class="w-full p-3 rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-[#07131f] text-black dark:text-white text-xs font-semibold">
          </div>

          <div class="pt-2">
            <button onclick="showToast('Profile credentials updated successfully.', 'success')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all">
              Update Profile Information
            </button>
          </div>
        </div>

      </div>

    </main>

  </div>

  <script src="assets/js/main.js"></script>
  <script>
    function switchDashboardTab(targetTabId) {
      // Hide all panes
      document.querySelectorAll('.dashboard-tab-pane').forEach(pane => {
        pane.classList.add('hidden');
      });

      // Show target pane
      const target = document.getElementById(targetTabId);
      if (target) {
        target.classList.remove('hidden');
      }

      // Reset all nav buttons in sidebar
      const navButtons = document.querySelectorAll('#dashboard-sidebar-nav button');
      navButtons.forEach(btn => {
        btn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all text-black dark:text-white hover:bg-sky-50 dark:hover:bg-[#07131f] text-left';
      });

      // Highlight active button
      const activeBtn = document.getElementById('nav-btn-' + targetTabId);
      if (activeBtn) {
        activeBtn.className = 'w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md text-left';
      }
    }
  </script>
</body>
</html>`;

fs.writeFileSync('dashboard.html', dashboardHtml, 'utf8');
console.log('Successfully updated dashboard.html. Lines:', dashboardHtml.split('\n').length);
