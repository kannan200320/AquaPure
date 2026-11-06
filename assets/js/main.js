/**
 * AquaPure - Overhead Tank & Sump Cleaning Service
 * Core Script: Theme Toggle, LTR/RTL Toggle, Mobile Nav, Dashboard, Calculators & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initMobileMenu();
  initDropdowns();
  initFaqAccordions();
  initTabs();
  initModals();
  initCalculators();
  initBlogFilter();
  initForms();
  initCounters();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   Enforces: Light = Pure Light with Black Text; Dark = Deep Navy with White Text
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('aquapure-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  updateThemeIcons();

  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('aquapure-theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    });
  });
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun', 'text-yellow-400');
    } else {
      icon.classList.remove('fa-sun', 'text-yellow-400');
      icon.classList.add('fa-moon', 'text-sky-700');
    }
  });
}

/* ==========================================================================
   2. LTR / RTL TOGGLE
   Dynamically flips HTML direction attribute with full state preservation
   ========================================================================== */
function initDirection() {
  const savedDir = localStorage.getItem('aquapure-dir') || 'ltr';
  setDirection(savedDir);

  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      setDirection(newDir);
      localStorage.setItem('aquapure-dir', newDir);
    });
  });
}

function setDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const rtlTexts = document.querySelectorAll('.rtl-toggle-text');
  rtlTexts.forEach(txt => {
    txt.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

/* ==========================================================================
   3. MOBILE MENU & RESPONSIVENESS
   Hamburger button remains strictly on top-right on mobile
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    // For off-canvas drawer transition
    requestAnimationFrame(() => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => {
      if (mobileMenu.classList.contains('translate-x-full')) {
        mobileMenu.classList.add('hidden');
      }
    }, 300);
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isClosed = mobileMenu.classList.contains('translate-x-full') || mobileMenu.classList.contains('hidden');
      if (isClosed) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Close when clicking mobile menu drawer links that navigate to anchors on same page
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('#') || href.includes('#'))) {
          closeMobileMenu();
        }
      });
    });
  }

  // Mobile submenu accordion toggles (Home, Explore)
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-btn');
  mobileDropdowns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const content = btn.nextElementSibling;
      const arrow = btn.querySelector('.mobile-dropdown-arrow') || btn.querySelector('.fa-chevron-down');
      if (content) {
        content.classList.toggle('hidden');
        if (arrow) {
          arrow.classList.toggle('rotate-180');
        }
      }
    });
  });

  // Mobile Dashboard Sidebar Toggle & Scroll Lock
  const dashboardToggle = document.getElementById('dashboard-sidebar-toggle');
  const dashboardSidebar = document.getElementById('dashboard-sidebar');
  const dashboardBackdrop = document.getElementById('dashboard-sidebar-backdrop');
  const dashboardClose = document.getElementById('dashboard-sidebar-close');

  function openDashboardSidebar() {
    if (!dashboardSidebar) return;
    dashboardSidebar.classList.remove('-translate-x-full');
    dashboardSidebar.classList.add('translate-x-0');
    if (dashboardBackdrop) dashboardBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeDashboardSidebar() {
    if (!dashboardSidebar) return;
    dashboardSidebar.classList.remove('translate-x-0');
    dashboardSidebar.classList.add('-translate-x-full');
    if (dashboardBackdrop) dashboardBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (dashboardToggle && dashboardSidebar) {
    dashboardToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dashboardSidebar.classList.contains('translate-x-0');
      if (isOpen) {
        closeDashboardSidebar();
      } else {
        openDashboardSidebar();
      }
    });
  }

  if (dashboardClose) {
    dashboardClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeDashboardSidebar();
    });
  }

  if (dashboardBackdrop) {
    dashboardBackdrop.addEventListener('click', () => {
      closeDashboardSidebar();
    });
  }

  // Close dashboard sidebar on tab select when in mobile view
  if (dashboardSidebar) {
    const tabButtons = dashboardSidebar.querySelectorAll('#dashboard-sidebar-nav button');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          closeDashboardSidebar();
        }
      });
    });
  }
}

/* ==========================================================================
   4. DESKTOP DROPDOWNS
   ========================================================================== */
function initDropdowns() {
  const dropdownContainers = document.querySelectorAll('.nav-dropdown');
  dropdownContainers.forEach(container => {
    const menu = container.querySelector('.dropdown-menu');
    if (!menu) return;

    let timeout;
    container.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      menu.classList.remove('hidden', 'opacity-0', 'scale-95');
      menu.classList.add('opacity-100', 'scale-100');
    });

    container.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        menu.classList.remove('opacity-100', 'scale-100');
        menu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => menu.classList.add('hidden'), 150);
      }, 100);
    });
  });
}

/* ==========================================================================
   5. FAQ ACCORDIONS
   ========================================================================== */
function initFaqAccordions() {
  const accordions = document.querySelectorAll('.faq-accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close sibling accordions in same group
      const parent = header.closest('.faq-group');
      if (parent) {
        parent.querySelectorAll('.faq-accordion-content').forEach(c => c.classList.add('hidden'));
        parent.querySelectorAll('.faq-icon').forEach(i => {
          i.classList.remove('rotate-180');
        });
      }

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   6. TAB NAVIGATION SYSTEM (Dashboard, Services, Pricing, Auth)
   ========================================================================== */
function initTabs() {
  const tabGroups = document.querySelectorAll('[data-tab-group]');
  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('[data-tab-target]');
    const contents = document.querySelectorAll(`[data-tab-content-group="${group.getAttribute('data-tab-group')}"]`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        buttons.forEach(b => {
          b.classList.remove('active', 'bg-cyan-600', 'text-white', 'border-cyan-600');
          b.classList.add('text-black', 'dark:text-white', 'bg-sky-50', 'dark:bg-[#0c1e33]');
        });

        btn.classList.add('active', 'bg-cyan-600', 'text-white');
        btn.classList.remove('bg-sky-50', 'dark:bg-[#0c1e33]');

        contents.forEach(content => {
          if (content.id === targetId) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE SERVICE ESTIMATOR / CALCULATOR
   ========================================================================== */
function initCalculators() {
  const tankSelect = document.getElementById('calc-tank-capacity');
  const sumpSelect = document.getElementById('calc-sump-capacity');
  const uvCheck = document.getElementById('calc-uv-treatment');
  const pipeCheck = document.getElementById('calc-pipeline-flush');
  const resultDisplay = document.getElementById('calc-total-estimate');

  if (!resultDisplay) return;

  function recalculate() {
    let total = 0;
    const tankVal = tankSelect ? parseInt(tankSelect.value) || 0 : 0;
    const sumpVal = sumpSelect ? parseInt(sumpSelect.value) || 0 : 0;

    // Rates based on capacity
    if (tankVal > 0) {
      if (tankVal <= 1000) total += 899;
      else if (tankVal <= 2000) total += 1499;
      else if (tankVal <= 5000) total += 2699;
      else total += 4499;
    }

    if (sumpVal > 0) {
      if (sumpVal <= 2000) total += 1299;
      else if (sumpVal <= 5000) total += 2499;
      else if (sumpVal <= 10000) total += 3999;
      else total += 6499;
    }

    if (uvCheck && uvCheck.checked) total += 399;
    if (pipeCheck && pipeCheck.checked) total += 599;

    // Combo discount if both tank and sump selected
    if (tankVal > 0 && sumpVal > 0) {
      total = Math.round(total * 0.85); // 15% Combo Savings
    }

    resultDisplay.textContent = `$${total > 0 ? total : 899}`;
  }

  [tankSelect, sumpSelect, uvCheck, pipeCheck].forEach(elem => {
    if (elem) {
      elem.addEventListener('change', recalculate);
    }
  });

  recalculate();
}

/* ==========================================================================
   8. BLOG SEARCH & CATEGORY FILTER
   ========================================================================== */
function initBlogFilter() {
  const searchInput = document.getElementById('blog-search');
  const categoryBtns = document.querySelectorAll('.blog-category-btn');
  const blogCards = document.querySelectorAll('.blog-card');

  if (!blogCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterPosts() {
    let visibleCount = 0;
    blogCards.forEach(card => {
      const title = (card.querySelector('.blog-title')?.textContent || '').toLowerCase();
      const snippet = (card.querySelector('.blog-snippet')?.textContent || '').toLowerCase();
      const category = (card.getAttribute('data-category') || '').toLowerCase();

      const matchesSearch = title.includes(searchQuery) || snippet.includes(searchQuery);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    const noResults = document.getElementById('blog-no-results');
    if (noResults) {
      if (visibleCount === 0) noResults.classList.remove('hidden');
      else noResults.classList.add('hidden');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPosts();
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => {
        b.classList.remove('bg-cyan-600', 'text-white');
        b.classList.add('bg-sky-50', 'dark:bg-[#0c1e33]', 'text-black', 'dark:text-white');
      });
      btn.classList.add('bg-cyan-600', 'text-white');
      btn.classList.remove('bg-sky-50', 'dark:bg-[#0c1e33]');
      currentCategory = btn.getAttribute('data-category') || 'all';
      filterPosts();
    });
  });
}

/* ==========================================================================
   9. INTERACTIVE FORMS & DEMO ACTIONS
   ========================================================================== */
function initForms() {
  // Service Booking Form
  const bookingForm = document.getElementById('service-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Booking Scheduled Successfully! Confirmation sent via SMS & Email with Booking ID #AQ-7842.', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your water hygiene inquiry has been routed to our nearest field supervisor.', 'success');
      contactForm.reset();
    });
  }

  // Login / Register Form
    // Login / Register Form (Dummy submit: no alerts, no messages, no navigation)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Dummy button - no alerts, no messages, no redirect
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Dummy button - no alerts, no messages, no redirect
    });
  }

  // Dashboard Reminder Setting
  const reminderForm = document.getElementById('reminder-setting-form');
  if (reminderForm) {
    reminderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Automated Cleaning Reminder Configured! We will notify you 7 days before your cycle is due.', 'success');
    });
  }
}

/* ==========================================================================
   10. MODAL DIALOGS
   ========================================================================== */
function initModals() {
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-container');
      if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });
}

/* ==========================================================================
   11. ANIMATED COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 1500;
        const step = target / (duration / 25);
        let current = 0;

        const update = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.ceil(current).toLocaleString();
            setTimeout(update, 25);
          } else {
            counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
          }
        };

        update();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   12. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item flex items-center gap-3 p-4 rounded-xl shadow-xl border text-sm font-medium transition-all ${
    type === 'success'
      ? 'bg-teal-50 border-teal-300 text-teal-900 dark:bg-[#0d2a2f] dark:border-teal-700 dark:text-teal-200'
      : type === 'error'
      ? 'bg-red-50 border-red-300 text-red-900 dark:bg-[#2c1317] dark:border-red-700 dark:text-red-200'
      : 'bg-sky-50 border-sky-300 text-sky-900 dark:bg-[#0c223a] dark:border-sky-700 dark:text-sky-200'
  }`;

  const iconClass = type === 'success' ? 'fa-circle-check text-teal-500' : type === 'error' ? 'fa-circle-exclamation text-red-500' : 'fa-circle-info text-sky-500';

  toast.innerHTML = `
    <i class="fas ${iconClass} text-lg"></i>
    <span class="flex-1 text-black dark:text-white font-medium">${message}</span>
    <button class="ml-2 text-black dark:text-white hover:opacity-70 focus:outline-none" onclick="this.parentElement.remove()">
      <i class="fas fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Global exposure for inline calls
window.showToast = showToast;
