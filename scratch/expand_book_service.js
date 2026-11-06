const fs = require('fs');

const bookServiceHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Service | AquaPure Overhead Tank & Sump Cleaning</title>
  <meta name="description" content="Book certified mechanized overhead tank and underground sump cleaning online. Choose your preferred time slot, select property size, and get instant pricing with zero upfront payment.">
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
        <i class="fas fa-calendar-check text-cyan-600 dark:text-cyan-400"></i> Seamless Online Service Reservation
      </span>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white">
        Schedule Your Mechanized Tank Cleaning Visit
      </h1>
      <p class="text-sm sm:text-base font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Select your property configuration, choose your certified hygienic service package, pick your preferred 2-hour arrival window, and enjoy 100% bacterial-free drinking water with zero upfront payment.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 3: INTERACTIVE 4-STEP BOOKING WIZARD FORM
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="p-8 sm:p-10 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-2xl space-y-8">
        
        <div class="border-b border-sky-200 dark:border-sky-800 pb-5">
          <h2 class="text-2xl font-black text-black dark:text-white">Step-by-Step Service Dispatch Wizard</h2>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white mt-1">
            Complete the details below to lock your certified sanitation slot. No credit card required to reserve.
          </p>
        </div>

        <form id="booking-wizard-form" class="space-y-8">
          
          <!-- Step 1: Select Property Type -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-xs">1</span>
              <h3 class="text-base sm:text-lg font-black text-black dark:text-white">Select Your Property Layout</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label class="p-4 rounded-2xl border-2 border-cyan-500 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Independent House / Villa</span>
                  <input type="radio" name="property_type" checked class="text-cyan-600">
                </div>
                <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">1 Rooftop Tank + 1 Sump</div>
                <p class="text-[10px] text-black dark:text-white">Typical 1,000L to 2,000L rooftop setup with ground sump.</p>
              </label>

              <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Duplex or Row House</span>
                  <input type="radio" name="property_type" class="text-cyan-600">
                </div>
                <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Multiple Dual Tanks</div>
                <p class="text-[10px] text-black dark:text-white">Dual overhead tanks (2,000L - 4,000L) with heavy usage.</p>
              </label>

              <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Apartment / RWA Society</span>
                  <input type="radio" name="property_type" class="text-cyan-600">
                </div>
                <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Commercial &amp; Community</div>
                <p class="text-[10px] text-black dark:text-white">Massive underground reservoirs (10,000L - 100,000L+).</p>
              </label>
            </div>
          </div>

          <!-- Step 2: Choose Service Package -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-xs">2</span>
              <h3 class="text-base sm:text-lg font-black text-black dark:text-white">Choose Your Mechanized Cleaning Package</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1.5">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Single Tank Deep Clean</span>
                  <input type="radio" name="cleaning_pkg" class="text-cyan-600">
                </div>
                <div class="text-2xl font-black text-cyan-600 dark:text-cyan-400">$69</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Full 7-stage mechanized cleaning for 1 rooftop tank up to 1,500L, including 150-bar jet wash and UV-C lamp sterilization.
                </p>
              </label>

              <label class="p-4 rounded-2xl border-2 border-teal-500 bg-white dark:bg-[#07131f] cursor-pointer space-y-1.5">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Tank + Sump Combo</span>
                  <input type="radio" name="cleaning_pkg" checked class="text-cyan-600">
                </div>
                <div class="text-2xl font-black text-teal-600 dark:text-teal-400">$129</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Complete whole-home dual reservoir service. Covers 1 overhead tank + 1 underground sump with heavy sludge slurry extraction.
                </p>
              </label>

              <label class="p-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] cursor-pointer space-y-1.5">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs text-black dark:text-white">Full Home Deep Clean</span>
                  <input type="radio" name="cleaning_pkg" class="text-cyan-600">
                </div>
                <div class="text-2xl font-black text-purple-600 dark:text-purple-400">$189</div>
                <p class="text-[11px] font-semibold text-black dark:text-white leading-relaxed">
                  Tanks + Sump + Hydro-pulsed internal pipeline descaling flush to eliminate rust lines and biofilm inside household taps.
                </p>
              </label>
            </div>
          </div>

          <!-- Step 3: Date & Slot Picker -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-xs">3</span>
              <h3 class="text-base sm:text-lg font-black text-black dark:text-white">Select Preferred Date &amp; Arrival Window</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-black dark:text-white mb-1.5">Scheduled Cleaning Date</label>
                <input type="date" required value="2026-11-06" class="w-full p-3 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs font-bold">
              </div>
              <div>
                <label class="block text-xs font-bold text-black dark:text-white mb-1.5">Preferred 2-Hour Window</label>
                <select class="w-full p-3 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs font-bold">
                  <option>Morning (08:00 AM – 10:00 AM) • Best for early refill</option>
                  <option selected>Mid-Day (10:30 AM – 12:30 PM)</option>
                  <option>Afternoon (01:30 PM – 03:30 PM)</option>
                  <option>Late Afternoon (04:00 PM – 06:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Step 4: Contact & Address Information -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-xs">4</span>
              <h3 class="text-base sm:text-lg font-black text-black dark:text-white">Homeowner Contact &amp; Service Address</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" required placeholder="Full Name (e.g. Vikram Sharma)" class="p-3 text-xs font-semibold rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white">
              <input type="tel" required placeholder="Mobile Number (e.g. +1 408-555-0192)" class="p-3 text-xs font-semibold rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white">
            </div>
            <input type="email" required placeholder="Email Address for Digital Water Certificate (e.g. vikram.sharma@gmail.com)" class="w-full p-3 text-xs font-semibold rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white">
            <input type="text" required placeholder="Complete Street Address (e.g. 42 Blossom Valley Way, Sunnyvale, CA 94087)" class="w-full p-3 text-xs font-semibold rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white">
          </div>

          <!-- Submit Bar -->
          <div class="p-5 rounded-2xl bg-white dark:bg-[#07131f] border border-sky-200 dark:border-sky-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">Total Service Cost (Zero Upfront):</div>
              <div class="text-3xl font-black text-teal-600 dark:text-teal-400 mt-0.5">$129.00 <span class="text-xs font-bold text-black dark:text-white">(All Taxes, Travel &amp; Disposal Included)</span></div>
            </div>
            <button type="submit" class="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black text-sm shadow-xl transition-all whitespace-nowrap">
              Confirm Booking Visit Now
            </button>
          </div>

        </form>

      </div>

    </div>
  </section>

  <!-- ==========================================================================
       SECTION 4: SERVICE RADIUS & RAPID RESPONSE COVERAGE
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
      <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
        Direct Mobile Van Dispatch
      </span>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        Serving All Metro Zones with $0 Travel &amp; Zero Sludge Disposal Surcharges
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
        Our fleet of custom-engineered mobile sanitation vans operates 7 days a week across the entire metropolitan area including Sunnyvale, San Jose, Santa Clara, Mountain View, Cupertino, and Palo Alto. Every van is self-contained with industrial generators, 150-bar rotary pressure equipment, 100-foot suction hoses, and digital water quality testing photometers. You are guaranteed transparent flat-rate pricing with zero travel fees, zero hazardous sludge handling surcharges, and zero hidden equipment rental additions.
      </p>
      
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-bold text-black dark:text-white">
        <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <i class="fas fa-truck-fast text-cyan-600 text-xl block"></i>
          <div>Metro Radius</div>
          <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Within 35 Miles ($0 Fee)</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <i class="fas fa-clock text-teal-600 text-xl block"></i>
          <div>On-Time SLA</div>
          <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Exact 2-Hour Arrival Window</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <i class="fas fa-bolt text-purple-600 text-xl block"></i>
          <div>Self-Powered Equipment</div>
          <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">No Power Drop Required</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-1">
          <i class="fas fa-shield-halved text-emerald-600 text-xl block"></i>
          <div>Full Insurance</div>
          <div class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">$2,000,000 Liability Cover</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 5: CAPACITY ESTIMATOR & SIZING GUIDE
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Capacity Identification Guide
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          How to Calculate Your Overhead Tank &amp; Sump Volume Accurately
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Not sure about your reservoir capacity? Use our simple physical dimension reference to determine exact liter storage before our crew arrives.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Polyethylene Tanks -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-cubes-stacked"></i>
          </div>
          <h3 class="text-lg font-black text-black dark:text-white">Molded Polyethylene Tanks</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Standard 3-layer, 4-layer, or 5-layer cylindrical roto-molded tanks (Sintex, Vectus, Supreme) have manufacturer capacity markings stamped directly on the upper rim or neck.
          </p>
          <ul class="text-xs font-semibold space-y-1.5 text-black dark:text-white pt-1">
            <li>• <strong>500 Liters:</strong> Approx. 3 ft height × 3 ft diameter (1-2 persons)</li>
            <li>• <strong>1,000 Liters:</strong> Approx. 4.2 ft height × 3.6 ft diameter (3-4 persons)</li>
            <li>• <strong>1,500 Liters:</strong> Approx. 5 ft height × 4.2 ft diameter (5-6 persons)</li>
            <li>• <strong>2,000 Liters:</strong> Approx. 6 ft height × 4.6 ft diameter (Large Villa)</li>
          </ul>
        </div>

        <!-- Concrete Sumps -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-calculator"></i>
          </div>
          <h3 class="text-lg font-black text-black dark:text-white">Underground Masonry Sumps</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Underground rectangular or square sumps are calculated by multiplying interior dimensions: <strong>Length (m) × Width (m) × Depth (m) × 1,000 = Volume in Liters</strong>.
          </p>
          <ul class="text-xs font-semibold space-y-1.5 text-black dark:text-white pt-1">
            <li>• <strong>3,000 Liters:</strong> Approx. 6 ft × 5 ft × 4 ft depth</li>
            <li>• <strong>5,000 Liters:</strong> Approx. 8 ft × 6 ft × 4.5 ft depth</li>
            <li>• <strong>8,000 Liters:</strong> Approx. 10 ft × 7 ft × 5 ft depth</li>
            <li>• <strong>10,000+ Liters:</strong> Heavy residential community reservoir</li>
          </ul>
        </div>

        <!-- Stainless Steel Tanks -->
        <div class="p-6 rounded-3xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl">
            <i class="fas fa-shield-virus"></i>
          </div>
          <h3 class="text-lg font-black text-black dark:text-white">Stainless Steel &amp; Custom RCC</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Stainless steel SS304/SS316 food-grade tanks feature mirror-finish interiors that require specialized rotary nylon brushes to prevent scratches while descaling hard water deposits.
          </p>
          <ul class="text-xs font-semibold space-y-1.5 text-black dark:text-white pt-1">
            <li>• <strong>Scratch-Free Protocol:</strong> Zero wire brushes used</li>
            <li>• <strong>Gasket Inspection:</strong> Manhole seal check included</li>
            <li>• <strong>Sludge Depth Metric:</strong> Average silt layer is 1.5 cm/quarter</li>
            <li>• <strong>Pipe Strainer Check:</strong> Bottom intake valve clearance</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 6: WHAT EVERY BOOKING INCLUDES
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Complete Operational Deliverables
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          Included in Every Single Booking at Zero Extra Surcharge
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          Unlike ordinary domestic manual cleaners who merely splash a bucket of bleaching powder, AquaPure executes a scientifically validated, multi-stage engineering protocol.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-water"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white">150-Bar Rotary Hydro-Jetting</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Our rotary high-pressure jets blast micro-droplets at 150 times atmospheric pressure to strip stubborn calcinated lime scale, green algae roots, and biological slime from internal corners without scratching polymer walls.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-wind"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white">Industrial Sludge Vacuum Slurry Extraction</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Heavy-duty rotary sludge extractors pump out dense bottom municipal mud, fine construction sand, and dead biological matter directly into sealed disposal drums, leaving the floor bone-dry and spotless.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white">Food-Grade Bio-Organic Anti-Bacterial Fogging</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            We spray an FDA-approved, non-toxic bio-organic sanitizing mist across all internal surfaces. It completely eliminates bacteria, viruses, and amoebic cysts with zero chemical odor, zero harsh chlorine residue, and zero bleaching taste.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="text-base font-black text-black dark:text-white">254nm Germicidal UV-C Photonic Sterilization</h3>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            A high-intensity germicidal UV-C radiator is suspended inside the sealed reservoir for 15 minutes to irradiate airborne bacterial spores, fungal micro-particles, and viral pathogens that escape conventional physical wiping.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 7: TECHNICIAN VETTING & CREDENTIALING PROTOCOL
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-600 to-teal-600 text-white flex items-center justify-center text-4xl font-black shrink-0 shadow-xl">
        <i class="fas fa-user-shield"></i>
      </div>
      <div class="space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Homeowner Safety &amp; Trust
        </span>
        <h3 class="text-2xl font-black text-black dark:text-white">
          100% Background-Verified Technicians with Biometric Photo Badges
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
          Inviting technicians onto your rooftop or into your private residence requires absolute confidence. Every AquaPure field crew member undergoes mandatory police background verification, bi-annual medical health screenings, and 120 hours of certified mechanized sanitation training. Technicians arrive in official branded uniforms, wearing disposable hygienic boot covers, sterile industrial gloves, and high-visibility safety harnesses. You can verify your lead technician's credential badge and live dispatch status directly on your Customer Portal before they ring your doorbell.
        </p>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 8: 3 SIMPLE PRE-VISIT STEPS FOR HOMEOWNERS
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Preparation Checklist
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          3 Simple Steps Before Our Cleaning Crew Arrives
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
          To minimize water wastage and complete your 7-stage sanitization in under 90 minutes, please follow this quick pre-arrival guide.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-sm">
            1
          </div>
          <h3 class="text-base font-black text-black dark:text-white">Consume Water to 15-20%</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Turn off your municipal automatic booster pump 4 to 6 hours before your appointment. Use existing tank reserves for laundry, dishwashing, or watering your garden so the remaining water level drops to roughly 6 to 10 inches. This prevents wasting hundreds of gallons of clean tap water.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-sm">
            2
          </div>
          <h3 class="text-base font-black text-black dark:text-white">Provide Standard 16A Power Plug</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Our high-pressure rotary pumps and vacuum extractors require a single domestic 15A/16A grounded wall outlet (standard geyser or AC plug point). Our service vans carry 100-foot industrial heavy-duty extension cables, so an indoor outlet near a balcony or utility room works perfectly.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm">
            3
          </div>
          <h3 class="text-base font-black text-black dark:text-white">Clear Rooftop &amp; Sump Pathways</h3>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            Ensure rooftop terrace stairwells, attic access ladders, and underground sump manholes are unlocked and unobstructed. Move any delicate potted plants or outdoor furniture away from the tank opening to allow our technicians to position equipment safely.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 9: FLEXIBLE RESCHEDULING & WEATHER CONTINGENCY
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-2xl shadow-sm">
        <i class="fas fa-calendar-xmark"></i>
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        100% Free Rescheduling &amp; Zero-Penalty Cancellation Policy
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        Life happens. If unexpected travel, plumbing work, or weather changes interrupt your plans, you can reschedule or cancel your visit up to 2 hours before your scheduled arrival window directly from your Customer Dashboard with zero cancellation fees. In the event of severe rooftop thunderstorms or lightning, our dispatch safety algorithm automatically prioritizes an expedited rebooking slot within 24 hours at no surcharge.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 10: VERIFIED CUSTOMER REVIEWS
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <div class="flex items-center justify-center gap-1 text-amber-500 text-lg">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          Rated 4.9/5 by 48,000+ Verified Homeowners
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-xl mx-auto">
          Read real experiences from families who upgraded from manual local cleaners to AquaPure mechanized care.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "Booking was ridiculously easy. Selected a 10 AM slot, crew arrived right on time with full vacuum equipment. The before/after photos shocked me — 3 inches of mud gone in 75 minutes!"
          </p>
          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Siddharth Sen</div>
            <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Sunnyvale Villa Owner</div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "We have a 6-month-old baby, so harsh chlorine smell was my biggest fear. AquaPure used food-grade herbal fogging and UV-C. Water was completely clear and odorless immediately after refill."
          </p>
          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Ananya Deshmukh</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">San Jose Resident</div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-md space-y-3">
          <div class="flex items-center gap-1 text-amber-500 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs font-semibold text-black dark:text-white leading-relaxed">
            "Signed up for the Combo package for my rooftop tank and underground sump. The lab report on my dashboard showed turbidity dropped from 12 NTU down to 0.5 NTU. Unbelievable precision."
          </p>
          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>David Reynolds</div>
            <div class="text-[11px] font-semibold text-purple-600 dark:text-purple-400">Santa Clara Homeowner</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 11: BOOKING FREQUENTLY ASKED QUESTIONS
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Got Questions?</span>
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">Booking Frequently Asked Questions</h2>
      </div>

      <div class="space-y-3">
        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Can we use the water immediately after your crew finishes?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Yes, absolutely. Because AquaPure strictly avoids hazardous chlorine bleaching powders and toxic detergents, there is zero toxic chemical residue. Once our crew completes the UV-C sterilization and wipes the interior dry, you can turn on your main supply inlet and start using pure, safe water immediately with zero bad odor or chemical taste.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>How long does a complete overhead tank and sump cleaning take?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            A single overhead rooftop tank (1,000L - 1,500L) takes approximately 60 to 75 minutes. A dual reservoir Combo package (1 overhead tank + 1 underground sump) takes roughly 90 to 120 minutes. Our high-efficiency submersible pumps and 150-bar rotary pressure equipment ensure thorough, rapid execution without disrupting your daily routine.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>Do you require an upfront payment or deposit when reserving online?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            No upfront payment is ever required. You only pay after our supervisor conducts the 12-point physical inspection, tests the water purity on digital meters, and displays the photographic before-and-after proof. You can pay via credit card, Apple Pay, Google Pay, or bank transfer directly from your Customer Portal.
          </div>
        </div>

        <div class="faq-item p-5 rounded-2xl bg-[#f0f9ff] dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 space-y-2">
          <button class="faq-btn w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-black dark:text-white focus:outline-none">
            <span>What happens if it rains heavily during our scheduled rooftop slot?</span>
            <i class="faq-arrow fas fa-chevron-down text-xs transition-transform"></i>
          </button>
          <div class="faq-answer text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed pt-2 border-t border-sky-200 dark:border-sky-800">
            Technician safety on wet rooftops with high-voltage equipment is vital. If severe rainfall or lightning occurs during your slot, our dispatch supervisor will immediately notify you and reschedule your visit to the next dry morning window of your choice with zero penalty or price change.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 12: SAME-DAY EMERGENCY CONTAMINATION DISPATCH
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1e33] border-2 border-rose-400 dark:border-rose-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 max-w-xl">
          <span class="px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 text-xs font-black uppercase">
            Emergency Water Alert
          </span>
          <h3 class="text-2xl font-black text-black dark:text-white">Need Same-Day Emergency Tank Cleaning?</h3>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
            Did you detect foul sulfur odors, discolored brownish water, or discover a blown-off tank lid after a storm? Our emergency rapid-response mobile unit is on standby for immediate dewatering, microbial decontamination, and sterilization.
          </p>
        </div>
        <a href="tel:+18004389283" class="px-7 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm shrink-0 shadow-lg transition-all flex items-center gap-2">
          <i class="fas fa-phone-volume"></i>
          <span>Call 1-800-AQUA-PURE</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 13: 30-DAY WATER PURITY & ODOR-FREE GUARANTEE
       ========================================================================== -->
  <section class="py-16 bg-white dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-2xl shadow-sm">
        <i class="fas fa-certificate"></i>
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
        100% Workmanship &amp; 30-Day Anti-Contamination Guarantee
      </h2>
      <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
        If any visible algae regrowth, sediment cloudiness, or abnormal odor reappears within 30 days of your AquaPure service visit, our quality assurance supervisor will re-dispatch a mobile crew to perform a comprehensive re-cleaning and UV-C re-sterilization completely free of charge.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 14: SUPERVISOR DIGITAL INSPECTION & HANDOVER CARD
       ========================================================================== -->
  <section class="py-16 bg-[#f0f9ff] dark:bg-[#07131f] border-b border-sky-200 dark:border-sky-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-black text-black dark:text-white">
          Digital Handover &amp; Instant Water Lab Certificate
        </h2>
        <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-xl mx-auto">
          Every visit concludes with a transparent digital handover directly synced to your Customer Dashboard.
        </p>
      </div>

      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-xl space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-black dark:text-white">
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
            <div class="font-bold text-cyan-600 dark:text-cyan-400">1. On-Site Digital Audit</div>
            <p class="text-[11px]">Calibrated photometer measures turbidity, TDS, and pH in front of you.</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
            <div class="font-bold text-teal-600 dark:text-teal-400">2. Photographic Proof</div>
            <p class="text-[11px]">Before and after high-resolution photos permanently archived in your portal.</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 space-y-1">
            <div class="font-bold text-purple-600 dark:text-purple-400">3. Signed PDF Certificate</div>
            <p class="text-[11px]">Automated WHO compliance report generated and emailed within 15 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 15: CALL TO ACTION BANNER
       ========================================================================== -->
  <section class="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight">
        Protect Your Family's Water Supply Today
      </h2>
      <p class="text-sm sm:text-base font-semibold opacity-95 max-w-2xl mx-auto leading-relaxed">
        Join over 48,000 satisfied homeowners who enjoy sparkling clean, odorless, and bacterial-free tap water every single day.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a href="#booking-wizard-form" class="px-8 py-4 rounded-xl bg-white text-cyan-700 hover:bg-sky-50 font-black text-sm shadow-xl transition-all">
          Reserve Your Slot Online
        </a>
        <a href="amc-membership.html" class="px-8 py-4 rounded-xl border-2 border-white/80 hover:bg-white/10 text-white font-bold text-sm transition-all">
          Explore AMC Membership Plans
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

fs.writeFileSync('book-service.html', bookServiceHtml, 'utf8');
console.log('Successfully written book-service.html. Lines:', bookServiceHtml.split('\n').length);
