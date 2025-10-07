// --- FLOATING PARTICLES - Optimized for performance ---
function createParticles() {
  if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
  
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = ['#F46900', '#DE6805', '#6FB9FF', '#50FFA3'];
  for (let i = 0; i < 12; i++) { // Reduced from 24 → 12
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 6 + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.opacity = '0.12';
    container.appendChild(p);
  }
}

// --- LOADER ---
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 300);
  createParticles();
});

// --- Back to Top ---
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn?.classList.toggle('visible', window.scrollY > 200);
});
backBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- FAB Fun Fact ---
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
    <div style="background:rgba(30,30,30,0.98);color:#ffe6b8;border-radius:16px;box-shadow:0 4px 24px #0009;position:fixed;bottom:96px;right:32px;max-width:330px;z-index:9999;padding:1.3rem 2.1rem 1.15rem 1.15rem;font-size:1rem;line-height:1.5;animation:fadeInNotif .4s;border:1px solid #F46900;font-family:'Poppins',sans-serif;">
      <button onclick="this.parentElement.parentElement.remove()" aria-label="Tutup" style="position:absolute;top:0.3rem;right:0.6rem;background:none;border:none;color:#f0ad4e;font-size:1.5rem;cursor:pointer;opacity:.6;">×</button>
      <b style="color:#FFD966">Fun Fact:</b><br/>
      <span>${fact}</span>
    </div>
  `;
  document.body.appendChild(notif);
}

document.getElementById('fab')?.addEventListener('click', showFunFact);

// --- Add keyframes dynamically (only once) ---
if (!document.getElementById('dynamic-styles')) {
  const style = document.createElement('style');
  style.id = 'dynamic-styles';
  style.textContent = `
    @keyframes floaty {
      0% { transform: translateY(0) scale(1); }
      100% { transform: translateY(-60px) scale(1.3); }
    }
    @keyframes fadeInNotif {
      from { opacity: 0; transform: translateY(30px) scale(0.98); }
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
