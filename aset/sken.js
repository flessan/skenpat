// --- FLOATING PARTICLES - 3D RANDOM & COLORFUL ---
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 24;
  const colors = [
    'rgba(244,105,0,0.12)',
    'rgba(222,104,5,0.15)',
    'rgba(111,185,255,0.15)',
    'rgba(80,255,163,0.12)'
  ];
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    // Random size, position, color, opacity
    const size = Math.random() * 8 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    // Slight blur for glowing effect
    particle.style.filter = 'blur(0.5px)';
    // Animate in random direction
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 8;
    particle.style.animation = `floaty ${duration}s ${delay}s infinite alternate ease-in-out`;
    particlesContainer.appendChild(particle);
  }
}
// --- FLOATY KEYFRAMES (add to style if needed) ---
if (!document.getElementById('floaty-keyframes')) {
  const style = document.createElement('style');
  style.id = 'floaty-keyframes';
  style.innerHTML = `
    @keyframes floaty {
      0% { transform: translateY(0) scale(1) rotate(0deg);}
      100% { transform: translateY(-60px) scale(1.3) rotate(15deg);}
    }
  `;
  document.head.appendChild(style);
}

// --- LOADER ---
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 500);
  createParticles();
});

// --- Back to Top Button ---
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

  // --- FAB NOTIFICATION (RANDOM FACT, MODERN, CLOSEABLE) ---
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
  '😄 Donasi Atmin tempatnya</br>Disini yaa <a href="https://flessan.pages.dev/donate" target="_blank" style="color:#ffd966;text-decoration:underline;">klik aku!</a></br> </br>Si Atmin Belum Bergaji Nich, Bantuin Ya Orang Orang Baik :3',
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
    <div style="
      background:rgba(30,30,30,0.98);
      color:#ffe6b8;
      border-radius:16px;
      box-shadow:0 4px 24px #0009;
      position:fixed;
      bottom:96px;
      right:32px;
      max-width:330px;
      z-index:9999;
      padding:1.3rem 2.1rem 1.15rem 1.15rem;
      font-size:1rem;
      line-height:1.5;
      animation:fadeInNotif .4s cubic-bezier(.4,0,.2,1);
      border:1px solid #F46900;
      font-family:'Poppins',sans-serif;
      ">
      <button onclick="this.parentElement.parentElement.remove()" aria-label="Tutup" style="
        position:absolute;
        top:0.3rem;
        right:0.6rem;
        background:none;
        border:none;
        color:#f0ad4e;
        font-size:1.5rem;
        cursor:pointer;
        opacity:.6;
        transition:.2s">
        ×
      </button>
      <b style="color:#FFD966;font-size:1.02em">Fun Fact:</b><br/>
      <span style="color:#ffe6b8">${fact}</span>
    </div>
  `;
  document.body.appendChild(notif);
}
if (document.getElementById('fab')) {
  document.getElementById('fab').onclick = showFunFact;
}
if (!document.getElementById('fun-fact-notif-css')) {
  const style = document.createElement('style');
  style.id = 'fun-fact-notif-css';
  style.innerHTML = `
    @keyframes fadeInNotif {
      from {opacity:0;transform:translateY(30px) scale(.98);}
      to {opacity:1;transform:translateY(0) scale(1);}
    }
  `;
  document.head.appendChild(style);
}
