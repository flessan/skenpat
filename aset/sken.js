// --- ENHANCED FLOATING PARTICLES ---
function createParticles() {
  if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
  
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = ['#F46900', '#FF8A4C', '#4ECDC4', '#FFD166'];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 8 + 5;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.opacity = '0.15';
    container.appendChild(p);
  }
}

// --- ENHANCED LOADER ---
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 400);
  createParticles();
});

// --- ENHANCED NAVBAR ---
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle?.addEventListener('click', () => {
  navbarMenu?.classList.toggle('active');
  navbarToggle.querySelector('i')?.classList.toggle('fa-bars');
  navbarToggle.querySelector('i')?.classList.toggle('fa-times');
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// --- ENHANCED Back to Top ---
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn?.classList.toggle('visible', window.scrollY > 300);
});
backBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- ENHANCED FAB Fun Fact ---
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
  const old = document.getElementById('fun-fact-notif');
  if (old) old.remove();

  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const notif = document.createElement('div');
  notif.id = 'fun-fact-notif';
  notif.innerHTML = `
    <div style="background:rgba(30,30,30,0.98);color:#ffe6b8;border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,0.5);position:fixed;bottom:100px;right:32px;max-width:350px;z-index:9999;padding:1.5rem 2.2rem 1.25rem 1.25rem;font-size:1.05rem;line-height:1.6;animation:fadeInNotif 0.5s;border:1px solid #F46900;font-family:'Poppins',sans-serif;">
      <button onclick="this.parentElement.parentElement.remove()" aria-label="Tutup" style="position:absolute;top:0.5rem;right:0.8rem;background:none;border:none;color:#f0ad4e;font-size:1.6rem;cursor:pointer;opacity:.7;">×</button>
      <b style="color:#FFD966; font-size:1.1rem">Fun Fact:</b><br/>
      <span>${fact}</span>
    </div>
  `;
  document.body.appendChild(notif);
}

document.getElementById('fab')?.addEventListener('click', showFunFact);

// --- Privacy Policy & Terms of Service ---
function showPrivacyPolicy() {
  const content = `
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: var(--card-dark); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
      <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">Kebijakan Privasi</h2>
      <p>Kami tidak mengumpulkan data pribadi apa pun dari pengunjung website ini. Website ini murni untuk informasi dan tidak memiliki fitur yang memerlukan data pribadi.</p>
      <p>Kami menggunakan cookie minimal untuk pengalaman pengguna yang lebih baik, tetapi tidak melacak aktivitas pribadi Anda.</p>
      <p style="margin-top: 1.5rem;">Terakhir diperbarui: Januari 2025</p>
    </div>
  `;
  showModal("Kebijakan Privasi", content);
}

function showTermsOfService() {
  const content = `
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: var(--card-dark); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
      <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">Syarat & Ketentuan</h2>
      <p>Website ini adalah website tidak resmi yang dibuat untuk siswa SMKN 4 Banjarmasin. Kami tidak berafiliasi dengan pihak sekolah secara resmi.</p>
      <p>Semua informasi di website ini bersifat informatif dan kami berusaha untuk menyajikan informasi yang akurat. Namun, kami tidak bertanggung jawab atas ketidakakuratan informasi yang mungkin ada.</p>
      <p style="margin-top: 1.5rem;">Terakhir diperbarui: Januari 2025</p>
    </div>
  `;
  showModal("Syarat & Ketentuan", content);
}

function showModal(title, content) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 10000;
    display: flex; align-items: center; justify-content: center; padding: 1rem;
    backdrop-filter: blur(5px);
  `;
  
  modal.innerHTML = `
    <div style="background: var(--card-dark); border-radius: 20px; max-width: 90vw; max-height: 90vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 60px rgba(0,0,0,0.5); position: relative;">
      <div style="padding: 2rem;">
        <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">${title}</h2>
        ${content}
        <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" style="margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: 600; cursor: pointer;">Tutup</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// --- Add keyframes dynamically (only once) ---
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
  `;
  document.head.appendChild(style);
}

// --- PWA Service Worker Registration (optional but recommended) ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/aset/sw.js').catch(console.warn);
  });
}

// --- Smooth scroll for anchor links ---
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
