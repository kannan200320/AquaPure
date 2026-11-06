const fs = require('fs');

const loginRegisterHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Login & Registration | AquaPure Customer Portal</title>
  <meta name="description" content="Sign in to your AquaPure customer portal to book visits, review lab reports, set automated reminders, and download invoices.">
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

          <a href="login-register.html" class="whitespace-nowrap px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-sm transition-all shadow-sm">
            <i class="fas fa-user-circle mr-1.5"></i>
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
       AUTHENTICATION CARD (Matches Reference Images 4 & 5 Layout)
       ========================================================================== -->
  <main class="flex-1 py-10 sm:py-14 flex items-center justify-center px-4 sm:px-6">
    <div class="w-full max-w-[460px] p-7 sm:p-9 rounded-[2.5rem] bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 shadow-2xl space-y-6 transition-all duration-300">
      
      <!-- Top Card Header: Brand Logo & Name (Left) + Theme & RTL Toggles (Right) -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md">
            <i class="fas fa-droplet text-lg"></i>
          </div>
          <div class="flex items-center gap-0.5 text-xl font-black tracking-tight">
            <span class="text-cyan-600 dark:text-cyan-400">Aqua</span>
            <span class="text-black dark:text-white">Pure</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button class="theme-toggle w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors" title="Toggle Dark / Light Mode">
            <i class="theme-toggle-icon fas fa-moon text-sm"></i>
          </button>
          <button class="rtl-toggle w-9 h-9 rounded-xl bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-800 text-black dark:text-white flex items-center justify-center transition-colors" title="Toggle RTL / LTR">
            <i class="fas fa-arrow-right-arrow-left text-xs"></i>
          </button>
        </div>
      </div>

      <hr class="border-sky-100 dark:border-sky-900/80">

      <!-- Card Title & Subtitle (Dynamically switched with tabs) -->
      <div class="text-center space-y-1.5">
        <h1 id="auth-card-title" class="text-2xl sm:text-[26px] font-black text-black dark:text-white tracking-tight">Welcome Back</h1>
        <p id="auth-card-subtitle" class="text-xs sm:text-[13px] font-semibold text-black dark:text-white max-w-sm mx-auto leading-relaxed">
          Login to access your clean water portal, schedule visits, and view service reports.
        </p>
      </div>

      <!-- Tab Switcher (Sign In / Register) -->
      <div class="p-1.5 rounded-2xl bg-sky-50 dark:bg-[#07131f] border border-sky-200 dark:border-sky-800 grid grid-cols-2 gap-1.5">
        <button id="tab-btn-signin" type="button" onclick="switchAuthMode('signin')" class="py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all bg-white dark:bg-[#0c1e33] text-cyan-600 dark:text-cyan-400 shadow-sm border border-sky-200 dark:border-sky-700">
          Sign In
        </button>
        <button id="tab-btn-register" type="button" onclick="switchAuthMode('register')" class="py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400">
          Register
        </button>
      </div>

      <!-- FORM 1: SIGN IN (Matches Reference Image 4) -->
      <form id="login-form" class="space-y-4">
        
        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            EMAIL ADDRESS
          </label>
          <div class="relative">
            <input type="email" required placeholder="name@gmail.com" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-black dark:text-white">
              <i class="far fa-envelope text-base"></i>
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            PASSWORD
          </label>
          <div class="relative">
            <input type="password" id="signin-password" required placeholder="••••••••" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <button type="button" onclick="togglePasswordVisibility('signin-password', this)" class="absolute inset-y-0 right-0 pr-4 flex items-center text-black dark:text-white hover:text-cyan-600 focus:outline-none">
              <i class="far fa-eye text-base"></i>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs font-semibold pt-1">
          <label class="flex items-center gap-2 cursor-pointer text-black dark:text-white">
            <input type="checkbox" class="w-4 h-4 rounded border-sky-300 dark:border-sky-700 text-cyan-600 focus:ring-cyan-500">
            <span>Remember me</span>
          </label>
          <a href="contact.html" class="text-cyan-600 dark:text-cyan-400 hover:underline font-bold">
            Forgot Password?
          </a>
        </div>

        <button type="submit" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all transform active:scale-[0.99]">
          SIGN IN TO CUSTOMER PORTAL
        </button>

        <!-- Divider -->
        <div class="relative flex items-center justify-center my-4">
          <div class="border-t border-sky-200 dark:border-sky-800 w-full"></div>
          <span class="bg-white dark:bg-[#0c1e33] px-3 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-black dark:text-white shrink-0">
            OR CONTINUE WITH
          </span>
          <div class="border-t border-sky-200 dark:border-sky-800 w-full"></div>
        </div>

        <!-- Social Buttons -->
        <div class="grid grid-cols-2 gap-3">
          <button type="button" onclick="demoQuickLogin('Google User')" class="py-2.5 px-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] hover:bg-sky-50 dark:hover:bg-sky-950 flex items-center justify-center gap-2 text-black dark:text-white font-bold text-xs sm:text-sm transition-all shadow-sm">
            <i class="fab fa-google text-black dark:text-white"></i>
            <span>Google</span>
          </button>
          <button type="button" onclick="demoQuickLogin('Apple ID')" class="py-2.5 px-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] hover:bg-sky-50 dark:hover:bg-sky-950 flex items-center justify-center gap-2 text-black dark:text-white font-bold text-xs sm:text-sm transition-all shadow-sm">
            <i class="fab fa-apple text-black dark:text-white text-base"></i>
            <span>Apple ID</span>
          </button>
        </div>

        <div class="text-center text-xs font-semibold text-black dark:text-white pt-2">
          Enrolling a new property? 
          <button type="button" onclick="switchAuthMode('register')" class="text-cyan-600 dark:text-cyan-400 font-black hover:underline ml-1">
            Create Customer Account
          </button>
        </div>

      </form>

      <!-- FORM 2: REGISTER (Matches Reference Image 5) -->
      <form id="register-form" class="hidden space-y-4">
        
        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            CUSTOMER / PROPERTY OWNER NAME
          </label>
          <div class="relative">
            <input type="text" required placeholder="Eleanor Jenkins" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-black dark:text-white">
              <i class="far fa-user text-base"></i>
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            EMAIL ADDRESS
          </label>
          <div class="relative">
            <input type="email" required placeholder="name@gmail.com" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-black dark:text-white">
              <i class="far fa-envelope text-base"></i>
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            PASSWORD (MIN 8 CHARACTERS)
          </label>
          <div class="relative">
            <input type="password" id="register-password" required placeholder="••••••••" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <button type="button" onclick="togglePasswordVisibility('register-password', this)" class="absolute inset-y-0 right-0 pr-4 flex items-center text-black dark:text-white hover:text-cyan-600 focus:outline-none">
              <i class="far fa-eye text-base"></i>
            </button>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="block text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
            CONFIRM PASSWORD
          </label>
          <div class="relative">
            <input type="password" id="register-confirm-password" required placeholder="••••••••" class="w-full px-4 py-3 pr-11 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] text-black dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-black/40 dark:placeholder:text-white/40">
            <button type="button" onclick="togglePasswordVisibility('register-confirm-password', this)" class="absolute inset-y-0 right-0 pr-4 flex items-center text-black dark:text-white hover:text-cyan-600 focus:outline-none">
              <i class="far fa-eye text-base"></i>
            </button>
          </div>
        </div>

        <div class="flex items-start gap-2.5 text-xs font-semibold text-black dark:text-white pt-1">
          <input type="checkbox" required class="w-4 h-4 mt-0.5 rounded border-sky-300 dark:border-sky-700 text-cyan-600 focus:ring-cyan-500">
          <span>
            I agree to the AquaPure <a href="#" class="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">Service Guidelines</a> &amp; Water Safety Standards.
          </span>
        </div>

        <button type="submit" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all transform active:scale-[0.99]\">
          CREATE CUSTOMER ACCOUNT
        </button>

        <!-- Divider -->
        <div class="relative flex items-center justify-center my-4">
          <div class="border-t border-sky-200 dark:border-sky-800 w-full"></div>
          <span class="bg-white dark:bg-[#0c1e33] px-3 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-black dark:text-white shrink-0">
            OR SIGN UP WITH
          </span>
          <div class="border-t border-sky-200 dark:border-sky-800 w-full"></div>
        </div>

        <!-- Social Buttons -->
        <div class="grid grid-cols-2 gap-3">
          <button type="button" onclick="demoQuickLogin('Google User')" class="py-2.5 px-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] hover:bg-sky-50 dark:hover:bg-sky-950 flex items-center justify-center gap-2 text-black dark:text-white font-bold text-xs sm:text-sm transition-all shadow-sm">
            <i class="fab fa-google text-black dark:text-white"></i>
            <span>Google</span>
          </button>
          <button type="button" onclick="demoQuickLogin('Apple ID')" class="py-2.5 px-4 rounded-2xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#07131f] hover:bg-sky-50 dark:hover:bg-sky-950 flex items-center justify-center gap-2 text-black dark:text-white font-bold text-xs sm:text-sm transition-all shadow-sm">
            <i class="fab fa-apple text-black dark:text-white text-base"></i>
            <span>Apple ID</span>
          </button>
        </div>

        <div class="text-center text-xs font-semibold text-black dark:text-white pt-2">
          Already registered? 
          <button type="button" onclick="switchAuthMode('signin')" class="text-cyan-600 dark:text-cyan-400 font-black hover:underline ml-1">
            Sign In Instead
          </button>
        </div>

      </form>

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
    function switchAuthMode(mode) {
      const signinBtn = document.getElementById('tab-btn-signin');
      const registerBtn = document.getElementById('tab-btn-register');
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const title = document.getElementById('auth-card-title');
      const subtitle = document.getElementById('auth-card-subtitle');

      if (mode === 'signin') {
        signinBtn.className = 'py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all bg-white dark:bg-[#0c1e33] text-cyan-600 dark:text-cyan-400 shadow-sm border border-sky-200 dark:border-sky-700';
        registerBtn.className = 'py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400';
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Login to access your clean water portal, schedule visits, and view service reports.';
      } else {
        registerBtn.className = 'py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all bg-white dark:bg-[#0c1e33] text-cyan-600 dark:text-cyan-400 shadow-sm border border-sky-200 dark:border-sky-700';
        signinBtn.className = 'py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400';
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        title.textContent = 'Create Customer Account';
        subtitle.textContent = 'Register a customer portal account to schedule tank cleanings and track water reports.';
      }
    }

    function togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }

    function demoQuickLogin(provider) {
      showToast('Authenticating via ' + provider + '... Redirecting to customer dashboard.', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    }
  </script>
</body>
</html>`;

fs.writeFileSync('login-register.html', loginRegisterHtml, 'utf8');
console.log('Successfully updated login-register.html. Lines:', loginRegisterHtml.split('\n').length);
