const fs = require('fs');

const amcMembershipHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AMC Membership Plans | AquaPure Annual Tank Maintenance</title>
  <meta name="description" content="Subscribe to AquaPure Annual Maintenance Contract (AMC) for your overhead tanks and sumps. Automated quarterly cleanings, zero travel fees, priority emergency dispatch, and digital lab testing.">
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
          <a href="dashboard.html" class="whitespace-nowrap text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Dashboard</a>
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
        <a href="dashboard.html" class="block p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950 text-black dark:text-white">Dashboard</a>

        <div class="pt-4 border-t border-sky-200 dark:border-sky-800 space-y-3">
          <a href="login-register.html" class="block w-full py-3 text-center rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-md">
            <i class="fas fa-user-circle mr-2"></i> Customer Login Portal
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       SECTION 2: PAGE HERO BANNER
       ========================================================================== -->
  <section class="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#07131f] dark:via-[#091b2c] dark:to-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
        <i class="fas fa-award text-amber-500"></i> Annual Maintenance Contract (AMC)
      </span>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
        Year-Round 100% Pure Water Security For Your Family
      </h1>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Stop waiting for tap water to turn yellow or smelly before taking action. Lock in automated seasonal sanitizations, zero travel charges, priority 24-hour emergency response, and verified digital laboratory audits all year long.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 3: AMC QUICK STATS & CREDIBILITY BADGES
       ========================================================================== -->
  <section class="py-12 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <div class="text-3xl font-black text-cyan-600 dark:text-cyan-400">24,000+</div>
          <div class="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Active AMC Homes</div>
          <p class="text-[11px] font-semibold text-black dark:text-white">Zero recurring sludge buildup</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <div class="text-3xl font-black text-teal-600 dark:text-teal-400">100%</div>
          <div class="text-xs font-bold text-black dark:text-white uppercase tracking-wider">On-Time SLA</div>
          <p class="text-[11px] font-semibold text-black dark:text-white">$25 credit if we miss slot</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <div class="text-3xl font-black text-purple-600 dark:text-purple-400">&lt; 0.8 NTU</div>
          <div class="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Average Turbidity</div>
          <p class="text-[11px] font-semibold text-black dark:text-white">Strict WHO potable Grade A</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400">57% Off</div>
          <div class="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Cost Savings</div>
          <p class="text-[11px] font-semibold text-black dark:text-white">Compared to ad-hoc cleaning</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 4: THREE COMPREHENSIVE AMC TIERS
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div class="text-center space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Tailored Recurring Protection
        </span>
        <h2 class="text-3xl sm:text-4xl font-black text-black dark:text-white">
          Three AMC Membership Tiers Engineered For Every Property
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          From compact modern townhouses to expansive multi-story villas and gated residential societies, choose the exact frequency and coverage your water storage demands.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        <!-- TIER 1: SILVER BI-ANNUAL -->
        <div class="p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-xs font-bold uppercase">
                Silver Bi-Annual
              </span>
              <span class="text-xs font-semibold text-black dark:text-white">2 Visits / Year</span>
            </div>
            
            <div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-black dark:text-white">$149</span>
                <span class="text-xs font-bold text-black dark:text-white">/ year</span>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white mt-1">
                Billed annually • Works out to just $12.40 / month
              </p>
            </div>

            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
              Designed for smaller townhouses, vacation homes, and properties that receive clean, treated municipal water supplies with minimal sediment runoff.
            </p>

            <ul class="space-y-2.5 text-xs font-semibold text-black dark:text-white border-t border-sky-100 dark:border-sky-800 pt-4">
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> 2 Complete 7-Stage Deep Cleans per year</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> Covers 1 Overhead Tank up to 1,500L</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> 150-Bar Rotary Hydro Jetting</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> Sludge Slurry Vacuum Extraction</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> 254nm UV-C Photonic Sterilization</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-cyan-600"></i> Digital Turbidity &amp; TDS Audit Certificate</li>
              <li class="flex items-center gap-2 text-black/50 dark:text-white/50 line-through"><i class="fas fa-xmark"></i> Sump Cleaning (Add-on Available)</li>
              <li class="flex items-center gap-2 text-black/50 dark:text-white/50 line-through"><i class="fas fa-xmark"></i> Pipeline Hydro-Pulse Descaling</li>
            </ul>
          </div>

          <a href="book-service.html?plan=silver" class="w-full py-3.5 rounded-xl border-2 border-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950 text-cyan-600 dark:text-cyan-400 text-center font-black text-xs uppercase tracking-wider transition-all block">
            Choose Silver Plan
          </a>
        </div>

        <!-- TIER 2: GOLD QUARTERLY (POPULAR) -->
        <div class="p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border-2 border-teal-500 shadow-2xl flex flex-col justify-between space-y-6 relative transform md:-translate-y-2">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-black text-[11px] uppercase tracking-wider shadow-md">
            Most Popular For Families
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between pt-1">
              <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-xs font-bold uppercase">
                Gold Quarterly
              </span>
              <span class="text-xs font-bold text-teal-600 dark:text-teal-400">4 Visits / Year</span>
            </div>
            
            <div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-teal-600 dark:text-teal-400">$249</span>
                <span class="text-xs font-bold text-black dark:text-white">/ year</span>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white mt-1">
                Billed annually • Just $20.75 / month for total peace of mind
              </p>
            </div>

            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
              Recommended by pediatricians for families with infants, toddlers, or seniors. Aligns with the 4 natural weather seasons to stop algae and biofilm before they multiply.
            </p>

            <ul class="space-y-2.5 text-xs font-semibold text-black dark:text-white border-t border-sky-100 dark:border-sky-800 pt-4">
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> 4 Complete 7-Stage Deep Cleans (Every 90 Days)</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> Dual Coverage: 1 Rooftop Tank + 1 Underground Sump</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> Food-Grade Bio-Organic Anti-Bacterial Fogging</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> 254nm Germicidal UV-C Radiator Sterilization</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> Free VIP 24-Hour Emergency Dispatch Visit</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> Priority Festive &amp; Holiday Slot Booking</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-teal-500"></i> Free Mosquito Mesh &amp; Gasket Inspection</li>
              <li class="flex items-center gap-2 text-black/50 dark:text-white/50 line-through"><i class="fas fa-xmark"></i> Pipeline Hydro-Pulse Descaling</li>
            </ul>
          </div>

          <a href="book-service.html?plan=gold" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white text-center font-black text-xs uppercase tracking-wider shadow-lg transition-all block">
            Choose Gold Quarterly Plan
          </a>
        </div>

        <!-- TIER 3: PLATINUM VILLA TOTAL -->
        <div class="p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 text-xs font-bold uppercase">
                Platinum Comprehensive
              </span>
              <span class="text-xs font-semibold text-black dark:text-white">6 Visits / Year</span>
            </div>
            
            <div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-purple-600 dark:text-purple-400">$399</span>
                <span class="text-xs font-bold text-black dark:text-white">/ year</span>
              </div>
              <p class="text-xs font-semibold text-black dark:text-white mt-1">
                Billed annually • Complete whole-estate infrastructure care
              </p>
            </div>

            <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
              Engineered for large luxury duplex villas, farmhouses, residential boarding academies, and properties with heavy borewell mineral hard water.
            </p>

            <ul class="space-y-2.5 text-xs font-semibold text-black dark:text-white border-t border-sky-100 dark:border-sky-800 pt-4">
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> 6 Complete Deep Cleans (Bi-Monthly Schedule)</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Multi-Unit: Up to 2 Rooftop Tanks + 2 Sumps</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Complimentary Bi-Annual Pipeline Hydro Descaling</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> 4-Hour Guaranteed Emergency Response SLA</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Annual Complete Microbial Lab Water Quality Audit</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Free Replacement of Float Valves &amp; Strainers</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Dedicated Priority Fleet Dispatch Unit</li>
              <li class="flex items-center gap-2"><i class="fas fa-check text-purple-600"></i> Unlimited Free Re-service If Turbidity &gt; 0.8 NTU</li>
            </ul>
          </div>

          <a href="book-service.html?plan=platinum" class="w-full py-3.5 rounded-xl border-2 border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 text-purple-600 dark:text-purple-400 text-center font-black text-xs uppercase tracking-wider transition-all block">
            Choose Platinum Plan
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 5: THE 4-SEASON AMC SANITIZATION SCHEDULE
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Proactive Climate-Synced Maintenance
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          The 4-Season AMC Sanitization Operational Schedule
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Water tank contamination follows the seasons. Our automated AMC calendar executes customized targeted treatments precisely when environmental risks peak.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Spring -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-seedling"></i>
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Quarter 1 (March)</div>
            <h3 class="text-base font-black text-black dark:text-white">Spring Pre-Heat Flush</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Eliminates early bacterial biofilms and calcinated sediment that form during mild spring weather before temperatures climb, preventing foul odors.
          </p>
        </div>

        <!-- Summer -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-sun"></i>
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Quarter 2 (June)</div>
            <h3 class="text-base font-black text-black dark:text-white">Summer Algae Defense</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Intense rooftop sunlight causes exponential blue-green algae blooms. High-intensity 254nm UV-C radiation kills vegetative microorganisms instantly.
          </p>
        </div>

        <!-- Monsoon -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-cloud-showers-heavy"></i>
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Quarter 3 (September)</div>
            <h3 class="text-base font-black text-black dark:text-white">Monsoon Silt Extraction</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Heavy rainfall brings municipal pipeline mud and ground silt into sumps. High-flow vacuum slurry pumps remove fine sand to protect bathroom taps.
          </p>
        </div>

        <!-- Winter -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-snowflake"></i>
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Quarter 4 (December)</div>
            <h3 class="text-base font-black text-black dark:text-white">Winter Bio-Sterilization</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Cold weather traps stagnant water in domestic pipelines. Food-grade anti-bacterial fogging ensures whole-home plumbing remains sterile for hot water baths.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 6: COMPLETE AMC DELIVERABLES GUARANTEE
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          Our Ironclad AMC Contractual Deliverables Guarantee
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto">
          Every AMC agreement signed with AquaPure includes legally enforceable quality standards and service level commitments.
        </p>
      </div>

      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
        <ul class="space-y-4 text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
          <li class="flex items-start gap-3">
            <i class="fas fa-shield-check text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0"></i>
            <div>
              <strong>Guaranteed Technician Attendance SLA:</strong> If our mobile crew fails to arrive within your confirmed 2-hour window without 24 hours prior written notice, we credit $25 directly to your account.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-shield-check text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0"></i>
            <div>
              <strong>Zero Extra Machinery Charges:</strong> Heavy submersible dewatering pumps, hydro-jets, rotary vacuums, and UV-C sterilization lights are 100% included with zero equipment rental surcharges.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-shield-check text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0"></i>
            <div>
              <strong>Permanent Cloud Laboratory Logbook:</strong> View and download timestamped before/after photographic proof and digital water purity test certificates on your Customer Dashboard 24/7.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-shield-check text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0"></i>
            <div>
              <strong>Free Minor Hardware Tune-Ups:</strong> During every scheduled quarterly visit, our technicians inspect and replace worn tank lid mosquito meshes and lubricate sticky inlet float valves free of charge.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-shield-check text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0"></i>
            <div>
              <strong>30-Day Anti-Contamination Re-Service:</strong> If water turbidity exceeds 1.0 NTU or algae reappears within 30 days of any scheduled cleaning, we dispatch a supervisor for an immediate complimentary re-clean.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 7: VIP EMERGENCY WATER CONTAMINATION PROTOCOL
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-rose-50/70 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-3 max-w-xl">
          <span class="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs font-black uppercase tracking-wider">
            AMC Member Exclusive Privilege
          </span>
          <h3 class="text-2xl font-black text-black dark:text-white">
            24-Hour VIP Emergency Contamination Response
          </h3>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
            Accidental lid detachment during a hurricane, dead birds or rodents discovered in the reservoir, or sewage backflow into sumps requires immediate hazardous decontamination. As an AMC member, you bypass regular booking queues and receive guaranteed emergency mobile crew dispatch within 24 hours at flat zero surge pricing.
          </p>
        </div>
        <a href="tel:+18004389283" class="px-7 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm shrink-0 shadow-lg transition-all flex items-center gap-2">
          <i class="fas fa-phone-volume"></i>
          <span>1-800-AQUA-PURE</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 8: HOUSEHOLD FINANCIAL ROI & COST BREAKDOWN
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
      <div class="space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Financial Transparency
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          How Much Will Your Household Save with an AquaPure AMC?
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Comparing the real annual cost of reactive single visits versus an organized recurring annual maintenance plan.
        </p>
      </div>

      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-6">
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="p-5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
            <div class="text-xs font-bold text-black dark:text-white uppercase">4 Ad-Hoc Single Visits</div>
            <div class="text-3xl font-black text-rose-500">$516.00</div>
            <p class="text-[11px] font-semibold text-black dark:text-white">$129 per visit ad-hoc rate</p>
          </div>

          <div class="p-5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border-2 border-teal-500 space-y-1">
            <div class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">Gold AMC Plan</div>
            <div class="text-3xl font-black text-teal-600 dark:text-teal-400">$249.00</div>
            <p class="text-[11px] font-semibold text-black dark:text-white">Covers all 4 seasonal visits</p>
          </div>

          <div class="p-5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
            <div class="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase">Direct Cash Saved</div>
            <div class="text-3xl font-black text-cyan-600 dark:text-cyan-400">$267.00</div>
            <p class="text-[11px] font-semibold text-black dark:text-white">52% Net Discount</p>
          </div>
        </div>

        <div class="pt-4 border-t border-sky-100 dark:border-sky-800 text-left space-y-2">
          <h4 class="text-sm font-black text-black dark:text-white">Additional Hidden Financial Benefits of Clean Tank Water:</h4>
          <ul class="text-xs font-semibold text-black dark:text-white space-y-1.5 leading-relaxed">
            <li>• <strong>RO Water Purifier Membrane Longevity:</strong> Prevents premature fouling of kitchen reverse osmosis filters, saving $150 to $250 annually on replacement cartridges.</li>
            <li>• <strong>Shower Valve &amp; Tap Aerator Protection:</strong> Sludge-free water eliminates calcinated mineral clogs inside expensive thermostatic shower mixers and concealed pipe runs.</li>
            <li>• <strong>Zero Pediatric Medical Expenses:</strong> Eliminates waterborne bacterial gastrointestinal illnesses, amoebic dysentery, and infant skin rashes caused by bathing in contaminated tank water.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 9: ZERO-EFFORT AUTOMATED CALENDAR REMINDERS
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-600 to-teal-600 text-white flex items-center justify-center text-4xl font-black shrink-0 shadow-xl">
        <i class="fas fa-bell-concierge"></i>
      </div>
      <div class="space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Set It &amp; Forget It
        </span>
        <h3 class="text-2xl font-black text-black dark:text-white">
          Zero-Effort Automated Reminders: Never Let Sludge Accumulate
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
          You have enough responsibilities without having to remember when your rooftop tank was last sanitized. The AquaPure automated dispatch system tracks your 90-day maintenance cycle and pings you 14 days and 7 days prior to your due date via SMS, WhatsApp, and email. You can confirm your preferred morning or afternoon window with a single tap, or reschedule anytime directly from your smartphone with zero penalty.
        </p>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 10: HOUSING SOCIETY & RWA BULK AMC CONTRACTS
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
      <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Commercial &amp; Community Scale
      </span>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        Housing Society &amp; Gated Community Bulk AMC Contracts
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
        Managing multi-story apartment reservoirs requires specialized heavy-duty logistics. AquaPure designs custom community contracts for Resident Welfare Associations (RWAs) and facility managers. We deploy high-flow 10 HP industrial submersible pumps to clean 100,000+ liter reservoirs sequentially, ensuring residents enjoy uninterrupted 24/7 tap water pressure without a single minute of water outage.
      </p>

      <div class="pt-2">
        <a href="contact.html?type=society" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-xl transition-all">
          <i class="fas fa-building"></i>
          <span>Request RWA Society Proposal &amp; Site Audit</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 11: VERIFIED AMC MEMBER TESTIMONIALS
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          What Long-Term AMC Members Say About Our Service
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-xl mx-auto">
          Over 94% of our AMC subscribers renew their annual contracts year after year.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "Third year on the Gold AMC plan. I never have to remember when to clean our rooftop tank. The SMS reminder arrives like clockwork, the team is always courteous, and our water quality is pristine."
          </p>
          <div class="pt-2 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Vikram Sharma</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Sunnyvale (3-Year Member)</div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "Our 64-unit apartment complex signed an AMC with AquaPure last year. Their phased cleaning ensured no apartment ran out of water during maintenance. Full digital audit was presented to our board."
          </p>
          <div class="pt-2 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Col. R. K. Nambiar (Retd.)</div>
            <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">RWA President, Palm Grove</div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "The emergency visit perk alone paid for my entire Gold membership when a heavy windstorm blew our rooftop tank lid off. AquaPure had a vacuum crew at my doorstep within 4 hours. Outstanding support!"
          </p>
          <div class="pt-2 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Meenakshi Sundaram</div>
            <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Cupertino Homeowner</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 12: 100% NON-TOXIC & INFANT SAFE IN EVERY VISIT
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      <div class="w-20 h-20 rounded-3xl bg-teal-600 text-white flex items-center justify-center text-4xl font-black shrink-0 shadow-xl">
        <i class="fas fa-baby"></i>
      </div>
      <div class="space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Pediatric Certified Standards
        </span>
        <h3 class="text-2xl font-black text-black dark:text-white">
          100% Non-Toxic, Chemical-Free &amp; Infant-Safe In Every Visit
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
          Standard local contractors rely on hazardous industrial bleach, sodium hypochlorite, and pungent chlorine gas that linger in tap water for days, irritating sensitive baby skin and contaminating formula milk bottles. Every single visit under your AquaPure AMC utilizes 100% biodegradable bio-organic mist and chemical-free 254nm germicidal UV-C photons. The water is immediately pure, odorless, and completely safe for newborn baths the moment our crew wraps up.
        </p>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 13: RELOCATING OR RENOVATING? PAUSE OR TRANSFER ANYTIME
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-2xl shadow-sm">
        <i class="fas fa-arrow-right-arrow-left"></i>
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        Moving Home or Renovating? 100% Flexible Pause &amp; Transfer Terms
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Your AMC contract is fully mobile. If you move to a new property within our metropolitan service radius, we seamlessly transfer your remaining visits to your new address at zero transfer cost. Selling your property? You can transfer the active contract to the new buyer as a valuable home hygiene warranty. If your property is undergoing renovation, you can pause your membership for up to 6 months with a single click in your Customer Dashboard.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 14: INSTITUTIONAL & HEALTHCARE FACILITY STANDARDS
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
      <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
        Clinical Grade Hygiene
      </span>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        Institutional, Daycare &amp; Healthcare Facility Water AMCs
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
        AquaPure services hospitals, dialysis centers, preschools, commercial kitchens, and pharmaceutical labs requiring strict compliance with CDC, EPA, and WHO water safety guidelines. Our commercial AMC agreements include formal multi-parameter microbiology lab reports, chain-of-custody documentation, and regulatory audit certificates.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 15: AMC QUESTIONS & ANSWERS
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Clear Terms</span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">AMC Membership Frequently Asked Questions</h2>
      </div>

      <div class="space-y-3">
        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What happens to unused cleaning visits if I travel frequently?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Unused cleaning visits under active AMC memberships never expire. If you are away on business or vacation during a scheduled quarterly slot, your visit automatically rolls over into the subsequent quarter or can be scheduled upon your return with zero penalty.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Can I upgrade from Silver to Gold or Platinum mid-year?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Yes, you can upgrade your plan at any point during your subscription year. The prorated remaining balance from your existing membership is credited toward your higher tier, and your new deliverables (such as sump coverage or pipeline descaling) activate immediately.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Are there any hidden costs for disposal, chemicals, or machine usage?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Absolutely zero. The annual AMC price is 100% comprehensive and all-inclusive. It covers mobile van travel, technicians, high-pressure rotary machinery, sludge vacuum pumps, food-grade bio-organic fogging mist, UV-C germicidal radiation, digital photometer testing, and eco-certified sludge disposal.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What payment methods are supported for AMC memberships?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            We support all major credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, ACH bank transfers, and automated recurring corporate invoice billing for RWAs and commercial facilities.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 16: CALL TO ACTION BANNER
       ========================================================================== -->
  <section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight">
        Ready For 365 Days of Guaranteed Pure Water?
      </h2>
      <p class="text-sm sm:text-base font-semibold opacity-95 max-w-2xl mx-auto leading-relaxed">
        Join over 24,000 households that enjoy proactive, chemical-free overhead tank and sump maintenance with zero hassle.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="book-service.html?plan=gold" class="px-8 py-4 rounded-xl bg-white text-cyan-700 hover:bg-sky-50 font-black text-sm shadow-xl transition-all">
          Enroll in Gold AMC Online
        </a>
        <a href="contact.html" class="px-8 py-4 rounded-xl border-2 border-white/80 hover:bg-white/10 text-white font-bold text-sm transition-all">
          Speak With An AMC Specialist
        </a>
      </div>
    </div>
  </section>

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
</body>
</html>`;

fs.writeFileSync('amc-membership.html', amcMembershipHtml, 'utf8');
console.log('Successfully written amc-membership.html. Lines:', amcMembershipHtml.split('\n').length);
