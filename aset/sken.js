// ================================
// ENHANCED JAVASCRIPT FOR SKENPAT WEBSITE
// ================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initFloatingButtons();
  initFunFacts();
  initModals();
  initSmoothScrolling();
  initAccessibility();
});

// ================================
// NAVIGATION FUNCTIONALITY
// ================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  // Mobile menu toggle
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      const icon = navbarToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    
    // Close menu when clicking on a link
    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        const icon = navbarToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

// ================================
// SCROLL EFFECTS
// ================================
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTop');
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    backToTopBtn?.classList.toggle('visible', window.scrollY > 300);
  });
}

// ================================
// FLOATING BUTTONS
// ================================
function initFloatingButtons() {
  const backToTopBtn = document.getElementById('backToTop');
  
  // Back to top functionality
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ================================
// FUN FACTS FUNCTIONALITY
// ================================
function initFunFacts() {
  const fab = document.getElementById('fab');
  
  const funFacts = [
    "👾 Website ini dibuat full oleh satu orang siswa RPL 1 kelas 10.",
    "🦄 Pemilik Subdomain & UI/UX designer adalah satu orang yang sama.",
    "✨ Tanpa framework, cuma HTML, CSS & JS. Udahh Html Statis aja Gitu",
    '🌱 Selalu update, kalo tidak hubungi saja <a href="https://flessan.pages.dev/#contact" target="_blank" style="color:#ffd966;text-decoration:underline;">klik aku!</a>',
    "💡 Powered by Orang Baik, Siapa Lagi? Github Ama Cloudflare ygy",
    "🤕 Si Atmin Kerja Kerja Gini Ga Bergaji Loo, Siapa Juga Yg Bayar Ama Ginian",
    "😄 Kamu Coba Bacain Semua Fun Fact Ini?</br> </br>(Kesempatan Mendapatkan Chat Langka Naik -1 Persen)",
    "🔥 Support SMKN 4 Banjarmasin, spread positivity!",
    "😎 Fitur baru akan hadir, pantau terus ya!",
    '😄 Donasi Atmin tempatnya</br>Disini yaa <a href=" https://flessan.pages.dev/donate " target="_blank" style="color:#ffd966;text-decoration:underline;">klik aku!</a></br> </br>Si Atmin Belum Bergaji Nich, Bantuin Ya Orang Orang Baik :3',
    "😄 DAMN! i Love Skenpat! </br>SMK Negeri 4 Banjarmasin!",
    "🦧 DAMN! i Love Banjarmasin! </br>Kayuh Baimbai Waja Sampai Kaputing",
    "😓 Dulu Webset Ini Ga Berloading Loo, Jadi Kutambahin Aja Biar Maksimol hehe",
    "🎨 Desain UI ku buat biar enak di skrol di hape."
  ];
  
  function showFunFact() {
    // Remove existing notification if any
    const existingNotif = document.getElementById('fun-fact-notif');
    if (existingNotif) {
      existingNotif.remove();
    }
    
    // Create new notification
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    const notif = document.createElement('div');
    notif.id = 'fun-fact-notif';
    notif.innerHTML = `
      <div class="fun-fact-notification">
        <button class="fun-fact-close" aria-label="Tutup">&times;</button>
        <div class="fun-fact-title">Fun Fact:</div>
        <div class="fun-fact-content">${fact}</div>
      </div>
    `;
    
    document.body.appendChild(notif);
    
    // Add event listener to close button
    const closeBtn = notif.querySelector('.fun-fact-close');
    closeBtn.addEventListener('click', () => {
      notif.remove();
    });
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notif.parentNode) {
        notif.remove();
      }
    }, 10000);
  }
  
  // Add event listener to FAB
  if (fab) {
    fab.addEventListener('click', showFunFact);
  }
}

// ================================
// MODAL FUNCTIONALITY
// ================================
function initModals() {
  // Privacy Policy
  window.showPrivacyPolicy = function() {
    const content = `
      <div class="modal-content">
        <h2>Kebijakan Privasi</h2>
        <p>Kami tidak mengumpulkan data pribadi apa pun dari pengunjung website ini. Website ini murni untuk informasi dan tidak memiliki fitur yang memerlukan data pribadi.</p>
        <p>Kami menggunakan cookie minimal untuk pengalaman pengguna yang lebih baik, tetapi tidak melacak aktivitas pribadi Anda.</p>
        <p class="modal-footer">Terakhir diperbarui: Januari 2025</p>
      </div>
    `;
    showModal("Kebijakan Privasi", content);
  };
  
  // Terms of Service
  window.showTermsOfService = function() {
    const content = `
      <div class="modal-content">
        <h2>Syarat & Ketentuan</h2>
        <p>Website ini adalah website tidak resmi yang dibuat untuk siswa SMKN 4 Banjarmasin. Kami tidak berafiliasi dengan pihak sekolah secara resmi.</p>
        <p>Semua informasi di website ini bersifat informatif dan kami berusaha untuk menyajikan informasi yang akurat. Namun, kami tidak bertanggung jawab atas ketidakakuratan informasi yang mungkin ada.</p>
        <p class="modal-footer">Terakhir diperbarui: Januari 2025</p>
      </div>
    `;
    showModal("Syarat & Ketentuan", content);
  };
  
  // Generic modal function
  window.showModal = function(title, content) {
    // Remove existing modal if any
    const existingModal = document.getElementById('custom-modal');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'custom-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="modal-close-btn" aria-label="Tutup">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary modal-close">Tutup</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeButtons = modal.querySelectorAll('.modal-close-btn, .modal-close');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.remove();
      });
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function handleEscape(e) {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', handleEscape);
      }
    });
  };
}

// ================================
// SMOOTH SCROLLING
// ================================
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================
function initAccessibility() {
  // Add keyboard navigation for cards
  const cards = document.querySelectorAll('.grid .btn, .card-balance .actions a');
  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
  
  // Add skip to content link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to content';
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// ================================
// PERFORMANCE OPTIMIZATIONS
// ================================

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('loading');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
});

// Add animation classes when elements come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.section, .visi-misi');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback
    elements.forEach(element => {
      element.classList.add('animate-in');
    });
  }
};

document.addEventListener('DOMContentLoaded', animateOnScroll);

// ================================
// SERVICE WORKER REGISTRATION
// ================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/aset/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// ================================
// ERROR HANDLING
// ================================
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.message);
  // You could send this error to a logging service
  // For production, you might want to show a user-friendly message
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add CSS dynamically for animations
function addDynamicStyles() {
  if (!document.getElementById('dynamic-styles')) {
    const style = document.createElement('style');
    style.id = 'dynamic-styles';
    style.textContent = `
      @keyframes floaty {
        0% { transform: translateY(0) scale(1); }
        100% { transform: translateY(-80px) scale(1.3); }
      }
      @keyframes fadeInNotif {
        from { opacity: 0; transform: translateY(40px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .fun-fact-notification {
        background: rgba(30, 30, 30, 0.98);
        color: #ffe6b8;
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        position: fixed;
        bottom: 100px;
        right: 32px;
        max-width: 350px;
        z-index: 9999;
        padding: 1.5rem 2.2rem 1.25rem 1.25rem;
        font-size: 1.05rem;
        line-height: 1.6;
        animation: fadeInNotif 0.5s;
        border: 1px solid #F46900;
        font-family: 'Poppins', sans-serif;
      }
      .fun-fact-close {
        position: absolute;
        top: 0.5rem;
        right: 0.8rem;
        background: none;
        border: none;
        color: #f0ad4e;
        font-size: 1.6rem;
        cursor: pointer;
        opacity: 0.7;
      }
      .fun-fact-title {
        color: #FFD966;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .fun-fact-content {
        margin-top: 0.5rem;
      }
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        backdrop-filter: blur(5px);
      }
      .modal-container {
        background: var(--card-dark);
        border-radius: 20px;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        position: relative;
        width: 100%;
        max-width: 600px;
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .modal-header h2 {
        color: var(--primary-color);
        margin: 0;
      }
      .modal-close-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--transition);
      }
      .modal-close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-light);
      }
      .modal-body {
        padding: 2rem;
      }
      .modal-actions {
        padding: 1rem 2rem 2rem;
        display: flex;
        justify-content: flex-end;
      }
      .modal-content h2 {
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }
      .modal-content p {
        margin-bottom: 1rem;
      }
      .modal-footer {
        margin-top: 1.5rem;
        font-style: italic;
        color: var(--text-muted);
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        z-index: 100;
      }
      .skip-link:focus {
        top: 0;
      }
      .animate-in {
        animation: fadeInUp 0.7s forwards;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize dynamic styles
addDynamicStyles();
