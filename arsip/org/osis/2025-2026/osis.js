// Data structure
    const departmentsData = [
      {
        id: 'wirausaha',
        title: 'Sekbid Wirausaha',
        icon: 'fa-store',
        members: [
          { name: 'Muhammad Naufal', role: 'Ketua', class: 'XI Kuliner 2' },
          { name: 'Nayla Mufida Amalia', role: 'Anggota', class: 'X Kuliner 1' },
          { name: 'Nur Aleesya Nashirah', role: 'Anggota', class: 'X Kuliner 1' },
          { name: 'Arini Dia Astuti', role: 'Anggota', class: 'X Kecantikan' },
          { name: 'Aira Dwi Astuti', role: 'Anggota', class: 'X Kuliner 2' }
        ]
      },
      {
        id: 'lingkungan',
        title: 'Sekbid Lingkungan Hidup',
        icon: 'fa-leaf',
        members: [
          { name: 'Salsabila Salma', role: 'Ketua', class: 'XI Kuliner 3' },
          { name: 'Nur Rumaisya Adzkiya', role: 'Anggota', class: 'XI Busana 3' },
          { name: 'Nur Amaliah', role: 'Anggota', class: 'XI RPL 2' },
          { name: 'Desi Maulida', role: 'Anggota', class: 'X Kuliner 2' },
          { name: 'Maulidina Chesa Amandani', role: 'Anggota', class: 'X Kuliner 2' }
        ]
      },
      {
        id: 'humas',
        title: 'Sekbid Humas',
        icon: 'fa-handshake',
        members: [
          { name: 'Kamilia Jamil', role: 'Ketua', class: 'XI Busana 3' },
          { name: 'Dhini Maulida', role: 'Anggota', class: 'XI ULW' },
          { name: 'Muhammad Nizam', role: 'Anggota', class: 'X RPL 1' },
          { name: 'Muhammad Saman Mulia', role: 'Anggota', class: 'X RPL 2' },
          { name: 'Utari Kartika Putri', role: 'Anggota', class: 'X Seni Musik' }
        ]
      },
      {
        id: 'kepemimpinan',
        title: 'Sekbid Kepemimpinan',
        icon: 'fa-crown',
        members: [
          { name: 'Rizkya Nur Aulia', role: 'Ketua', class: 'XI RPL 2' },
          { name: 'Yeni Agustine', role: 'Anggota', class: 'XI RPL 2' },
          { name: 'Intan Karunia Putri', role: 'Anggota', class: 'X Busana 1' },
          { name: 'Reany Fathinah Nuraini', role: 'Anggota', class: 'X Kuliner 2' },
          { name: 'Anna Nogo Kelen', role: 'Anggota', class: 'X ULW' }
        ]
      },
      {
        id: 'olahraga',
        title: 'Sekbid Olahraga',
        icon: 'fa-running',
        members: [
          { name: 'Nur Almira Putri', role: 'Ketua', class: 'XI Busana 3' },
          { name: 'Muhammad Nazril Ilham', role: 'Anggota', class: 'XI RPL 1' },
          { name: 'Muhammad Zhia Al-Kautsar', role: 'Anggota', class: 'X RPL 2' },
          { name: 'Andrea Tifany', role: 'Anggota', class: 'X RPL 2' },
          { name: 'Salwa Elysia', role: 'Anggota', class: 'X Perhotelan 2' }
        ]
      },
      {
        id: 'keagamaan',
        title: 'Sekbid Keagamaan',
        icon: 'fa-pray',
        members: [
          { name: 'Maulida Rizki Ardiani', role: 'Ketua', class: 'XI RPL 1' },
          { name: 'Muhammad Thio Saputra', role: 'Anggota', class: 'X RPL 1' },
          { name: 'Raisha', role: 'Anggota', class: 'X Busana 2' },
          { name: 'Kirana Saskiya Puteri', role: 'Anggota', class: 'X ULW' }
        ]
      },
      {
        id: 'belanegara',
        title: 'Sekbid Bela Negara',
        icon: 'fa-shield-alt',
        members: [
          { name: 'Helma Nazulla Husna', role: 'Ketua', class: 'XI Busana 3' },
          { name: 'Muhammad Iqbal', role: 'Anggota', class: 'XI RPL 1' },
          { name: 'Kaswid Yatma Rifa\'i', role: 'Anggota', class: 'X Kuliner 2' },
          { name: 'Zahra Salsabila', role: 'Anggota', class: 'X Kuliner 3' },
          { name: 'Kalila Rahma', role: 'Anggota', class: 'X RPL 2' }
        ]
      }
    ];

    // Chat messages data
    const chatMessages = [
      {
        author: 'Dhini Maulida',
        time: '18/11/25 19.47',
        message: 'Halo temen temen semua kenalin nama aku Dhini Mualida aku dari kelas XI ulw , Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'XI ULW'
      },
      {
        author: 'Nor Fitriah',
        time: '18/11/25 19.48',
        message: 'Halo temen temen semua kenalin nama aku Nor Fitriah, aku dari kelas 10 Kecantikan, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Kecantikan'
      },
      {
        author: 'Nizam',
        time: '18/11/25 19.48',
        message: 'Halo temen temen semua kenalin nama aku Mahammad Nizam, aku dari kelas X RPL 2, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X RPL 2'
      },
      {
        author: 'Arini Astuti',
        time: '18/11/25 19.48',
        message: 'Halo temen temen semua kenalin nama aku Arini Dia Astuti, aku dari kelas 10 Kecantikan, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Kecantikan'
      },
      {
        author: 'Reany Fathinah',
        time: '18/11/25 19.49',
        message: 'Halo temen temen semua kenalin nama aku Reany Fathinah Nuraini, aku dari kelas X Kuliner 2, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Kuliner 2'
      },
      {
        author: 'Raisya Oktama',
        time: '18/11/25 19.51',
        message: 'Halo temen temen semua kenalin nama aku anandha raisya oktama putri simpel nya raisya, aku dari kelas X rpl 1, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X RPL 1'
      },
      {
        author: 'Thio Saputra',
        time: '18/11/25 19.52',
        message: 'Halo semuaa, kenalin nama aku Muhammad Thio Saputra, bisa dipanggil thio, aku dari kelas x rpl satuu, mohon kerjasamanya untuk kedepannya nyaa yaa teman temann, salam kenalll',
        class: 'X RPL 1'
      },
      {
        author: 'Kaswid Rifa\'i',
        time: '18/11/25 19.52',
        message: 'Halo semuanya perkenalkan saya Kaswid Yatma Rifa\'i dari kelas 10 Kuliner 2, mohon kerjasama nya yaa. Salam kenal semuanya',
        class: 'X Kuliner 2'
      },
      {
        author: 'Utari Putri',
        time: '18/11/25 19.54',
        message: 'Halo temen temen semua kenalin nama aku Utari Kartika Putri, aku dari kelas X Seni Musik, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Seni Musik'
      },
      {
        author: 'Zahra Salsabila',
        time: '18/11/25 19.59',
        message: 'Halo temen temen semua kenalin nama aku (bela), aku dari kelas (x boga 3), Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Kuliner 3'
      },
      {
        author: 'Aleesya Nashirah',
        time: '18/11/25 20.08',
        message: 'Halo temen temen semua kenalin nama aku Aleesya , aku dari kelas x kuliner 1, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall yaa',
        class: 'X Kuliner 1'
      },
      {
        author: 'Raisha',
        time: '18/11/25 20.35',
        message: 'Halo temen temen semua kenalin nama aku Raisha, aku dari kelas 10 busana 2, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall yoo',
        class: 'X Busana 2'
      },
      {
        author: 'Intan Putri',
        time: '18/11/25 21.34',
        message: 'halo temen temen semua kenalin aku intan aku dari kelas 10 busana 1 , mohon kerjasama nyaa untuk kedepannya teman teman salam kenal yya',
        class: 'X Busana 1'
      },
      {
        author: 'Desi Maulida',
        time: '18/11/25 21.42',
        message: 'halo teman teman salam kenal aku dyaa dari kelas 10 bodu mohon kerja sama nya untuk kedepaya teman-teman salam kenal',
        class: 'X Kuliner 2'
      },
      {
        author: 'Leonardus Noverianto',
        time: '18/11/25 21.57',
        message: 'Halo rekan-rekan dan kawan-kawan semua ijinkan saya melakukan suatu kegiatan guna identitas diri di ketahui oleh anggota suatu kelompok kenalin nama saya Leonardus Dwi Noverianto, saya merupakan seorang siswa yang duduk di bangku SMKN 4 Banjarmasin dari sebuah lingkup yang mencakup suatu ruangan yang dinamakan kelas yaitu XA1. Demi kesejahteraan dan kelancaran performa dalam melaksanakan tugas oleh karena itu saya mohon kerjasama nyaa untuk kedepannya kepada rekan-rekan dan kawan-kawan sekalian salam kenal.',
        class: 'X Kuliner 1'
      },
      {
        author: 'Nayla Amalia',
        time: '19/11/25 05.52',
        message: 'Halo temen temen semua kenalin nama aku Nayla Mufida Amalia, aku dari kelas X Kuliner 1, Mohon kerjasama nyaa untuk kedepannya teman teman salam kenall',
        class: 'X Kuliner 1'
      },
      {
        author: 'Andrea Tifany',
        time: '19/11/25 06.07',
        message: 'halo guys, kenalin ak Andrea Tifany dari 10 RPL 2, salam kenal semuanyaaa',
        class: 'X RPL 2'
      },
      {
        author: 'Salwa Elysia',
        time: '20/11/25 19.10',
        message: 'hayy temann temann semua prknlkn nama akuu Salwa Elysia, dri kelas x perhotelan 2, mohon kerjasamanya untuk kedepannya teman" salam kenal',
        class: 'X Perhotelan 2'
      },
      {
        author: 'Kalila Rahma',
        time: '20/11/25 20.38',
        message: 'haii semuaa, perkenalkan namaku kalila rahma dari kelas x rpl 2, mohon kerjasamanya untuk kedepannya yaa, salam kenal teman"',
        class: 'X RPL 2'
      },
      {
        author: 'Anna Kelen',
        time: '20/11/25 20.43',
        message: 'Selamat malam teman-teman semua perkenalkan nama aku anna nogo kelen dari kelas 10 usaha layanan wisata, aku suka sekali sama keju dan semua yang berwarna pink🤗💞 kalo ketemu aku maaf ya kalo blm bisa aku sapa kalian semua karena jujur aku belum ingat nama nama dan muka kalian🙏🏼😊 oh iya maaf ya kalo selama kita masih jadi calon dan masih tahap seleksi kemarin aku ada buat salah sama kalian, Entah itu yang aku sengaja atau yang aku tidak sengaja. Kedepannya mohon kerja sama dari kalian semua ya teman teman 🫂❤️',
        class: 'X ULW'
      },
      {
        author: 'Saman Mulia',
        time: '21/11/25 06.09',
        message: 'haii semuaa, perkenalkan namaku Muhammad Saman Mulia dari kelas x rpl 2, mohon kerjasamanya untuk kedepannya yaa, salam kenal teman"',
        class: 'X RPL 2'
      },
      {
        author: 'Aira Astuti',
        time: '05/12/25 09.04',
        message: 'Halo temen-temen semua, kenalin aku Aira Dwi Astuti dari kelas 10 Kuliner 2. Mohon kerja samanya yaa buat ke depannya. Salam kenal semuanya!🫰🏻',
        class: 'X Kuliner 2'
      },
      {
        author: 'Kirana Puteri',
        time: '05/12/25 09.28',
        message: 'halo temen-temen semua, perkenalkan aku kirana saskiya puteri dari kelas x ulw. mohon kerja samanya yaa buat ke depannya..',
        class: 'X ULW'
      },
      {
        author: 'Chesa Amandani',
        time: '05/12/25 09.51',
        message: 'EH AKU BELUM JUGAA 🫠 sorry telat guyss, baiklah baiklah. Perkenalkan aku Maulidina Chesa Amandani dari kelas 10 kuliner 2. Mohon kerja samanya yaa buat kedepaya, salam kenal teman teman semuaa 👋🏻👋🏻',
        class: 'X Kuliner 2'
      }
    ];

    // Photo URLs 
    const photoUrls = {
      "Corry Laura Beuty Pakpahan": "https://drive.google.com/uc?export=view&id=19VLZ2yoG0MUVnQkk1bqCHFGe61-sDhvx",
      "Nor Firiah": "https://drive.google.com/uc?export=view&id=1BFPTyGjN3jWATdR2GaSnMOd_G4SiVjRv",
      "Muhammad Syahrul": "https://drive.google.com/uc?export=view&id=1hd11D7q8cJ4MhtGsNmH8G6vuQm1PjX70",
      "Anandha Raisya Oktama Putri": "https://drive.google.com/uc?export=view&id=1CsNSHlUEbGBhJgiMem44zcDwqpZoOYqS",
      "Muhammad Dede Riyadhi": "https://drive.google.com/uc?export=view&id=1ZWEfxog8cJ4MhtGsNmH8G6vuQm1PjX70",
      "Leonardus Dwi Noverianto": "https://drive.google.com/uc?export=view&id=1M5vZoRDtuwduUXH35igj9dWOgcZWzQC6",
      "Muhammad Naufal": "https://drive.google.com/uc?export=view&id=1E-OWlSL15gGZ4iv4gJlOixg5tYkPU2Ga",
      "Nayla Mufida Amalia": "https://drive.google.com/uc?export=view&id=12pUEMMe-Dkp1nt0kBTQaamTlq3dPMzFB",
      "Nur Aleesya Nashirah": "https://drive.google.com/uc?export=view&id=1FS5dcFeqJi8eSGp-cv4Mw4j0SKQp9c6z",
      "Arini Dia Astuti": "https://drive.google.com/uc?export=view&id=1a-ahw6PLNZCEHIRM60MyrWIzGQ3i3baI",
      "Aira Dwi Astuti": "https://drive.google.com/uc?export=view&id=1TSkNs1VV83-4iCrmwc0W4pbP-CAgGNxb",
      "Salsabila Salma": "https://drive.google.com/uc?export=view&id=1QlPQbzijGF21-UhivYGKmL3PGvDbOSSJ",
      "Nur Rumaisya Adzkiya": "https://drive.google.com/uc?export=view&id=1fcfsZDW3hCBvnfyZ9ILpVptSgLTZdXVT",
      "Nur Amaliah": "https://drive.google.com/uc?export=view&id=10GvNgfDO848uAzRNQiArIiCLd4jQDJUw",
      "Desi Maulida": "https://drive.google.com/uc?export=view&id=1oM4W-OeIwB_j1nXkW4q9rX6gpG-WvNyx",
      "Maulidina Chesa Amandani": "https://drive.google.com/uc?export=view&id=16FGPDv1dQQOX6XfFCZpn7OmoLvizNC8X",
      "Kamilia Jamil": "https://drive.google.com/uc?export=view&id=1r2dc0SVDrW36Or5kJCfM6ZNE0tpH85TO",
      "Dhini Maulida": "https://drive.google.com/uc?export=view&id=1puAccURdioDZpiEjPiLZ8PfxOhaFfzqy",
      "Muhammad Nizam": "https://drive.google.com/uc?export=view&id=1U0ffaOenXyvZFnLNDKHU63mhkwmBq9si",
      "Muhammad Saman Mulia": "https://drive.google.com/uc?export=view&id=1ZvkP1W76B3bcJcT5LCw6LNppACuXlKdv",
      "Utari Kartika Putri": "https://drive.google.com/uc?export=view&id=1XugVGaccTc0q0BVEu7qlyAZILqi_AV2V",
      "Rizkya Nur Aulia": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
      "Yeni Agustine": "https://drive.google.com/uc?export=view&id=1-425RR8U9Me9Lo9r66cK86lCb4lfDnvN",
      "Intan Karunia Putri": "https://drive.google.com/uc?export=view&id=1iMDOJdgjL7N-tLI4pXZWVes8N7H60yxz",
      "Reany Fathinah Nuraini": "https://drive.google.com/uc?export=view&id=1RiGD5ivNSf8qNztqts1MheC7GGJUlJs9",
      "Anna Nogo Kelen": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
      "Nur Almira Putri": "https://drive.google.com/uc?export=view&id=18XBqAbhOcMMaNUX6WQft7Pc7PzHJeIq-",
      "Muhammad Nazril Ilham": "https://drive.google.com/uc?export=view&id=11l6T2-jorJSJ7kEUYLpHObRfsgG0f0y4",
      "Muhammad Zhia Al-Kautsar": "https://drive.google.com/uc?export=view&id=1XxrNanbGi4FAwm29eY5IMtKGPD3ZWMdW",
      "Andrea Tifany": "https://drive.google.com/uc?export=view&id=1rk0ynoj0QouqwkHq1G6ZiHieLUoUC7qR",
      "Salwa Elysia": "https://drive.google.com/uc?export=view&id=1Rxloa5uVG1zq3LhFqBkkfqxvhzNgL8kR",
      "Maulida Rizki Ardiani": "https://drive.google.com/uc?export=view&id=1WiCjcBMQNSlmVOymjOW7nTulnsYrWbM1",
      "Muhammad Thio Saputra": "https://drive.google.com/uc?export=view&id=181ZeOUXyvuVWfJoczknBiNzd1E_PmXxj",
      "Raisha": "https://drive.google.com/uc?export=view&id=1dVYoPPVIN_FAiUvApZBbpowz3A4D1Z9a",
      "Kirana Saskiya Puteri": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
      "Helma Nazulla Husna": "https://drive.google.com/uc?export=view&id=1Rxloa5uVG1zq3LhFqBkkfqxvhzNgL8kR",
      "Muhammad Iqbal": "https://drive.google.com/uc?export=view&id=1RiGD5ivNSf8qNztqts1MheC7GGJUlJs9",
      "Kaswid Yatma Rifa\'i": "https://drive.google.com/uc?export=view&id=1XxrNanbGi4FAwm29eY5IMtKGPD3ZWMdW",
      "Zahra Salsabila": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
      "Kalila Rahma": "https://drive.google.com/uc?export=view&id=1rk0ynoj0QouqwkHq1G6ZiHieLUoUC7qR"
    };

    // State
    let filteredDepartments = [...departmentsData];
    let isExpanded = true;
    let currentTab = 'structure';

    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchStats = document.getElementById('searchStats');
    const departmentsGrid = document.getElementById('departmentsGrid');
    const themeToggle = document.getElementById('themeToggle');
    const expandAll = document.getElementById('expandAll');
    const collapseAll = document.getElementById('collapseAll');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const chatContainer = document.getElementById('chatContainer');
    const refreshChat = document.getElementById('refreshChat');

    // Utility functions
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function normalizeText(text) {
      return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    function highlightText(text, query) {
      if (!query) return escapeHtml(text);
      
      const normalizedText = normalizeText(text);
      const normalizedQuery = normalizeText(query);
      
      if (!normalizedText.includes(normalizedQuery)) {
        return escapeHtml(text);
      }
      
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return escapeHtml(text).replace(regex, '<span class="highlight">$1</span>');
    }

    // Search functionality
    function performSearch(query) {
      const normalizedQuery = normalizeText(query.trim());
      
      if (!normalizedQuery) {
        filteredDepartments = [...departmentsData];
        renderDepartments();
        updateStats();
        return;
      }

      filteredDepartments = departmentsData.filter(dept => {
        const titleMatch = normalizeText(dept.title).includes(normalizedQuery);
        const memberMatch = dept.members.some(member => 
          normalizeText(member.name).includes(normalizedQuery) ||
          normalizeText(member.role).includes(normalizedQuery) ||
          normalizeText(member.class).includes(normalizedQuery)
        );
        return titleMatch || memberMatch;
      });

      renderDepartments(query);
      updateSearchStats(query);
    }

    function updateStats() {
      const totalDepts = departmentsData.length;
      const totalMembers = departmentsData.reduce((sum, dept) => sum + dept.members.length, 0);
      
      document.getElementById('totalDepartments').textContent = totalDepts;
      document.getElementById('totalMembers').textContent = totalMembers;
      document.getElementById('statDepartments').textContent = totalDepts;
      document.getElementById('statMembers').textContent = totalMembers;
      
      searchStats.innerHTML = `Total: <strong>${totalDepts}</strong> seksi · <strong>${totalMembers}</strong> anggota`;
    }

    function updateSearchStats(query) {
      const visibleDepts = filteredDepartments.length;
      const visibleMembers = filteredDepartments.reduce((sum, dept) => sum + dept.members.length, 0);
      
      searchStats.innerHTML = `Ditemukan: <strong>${visibleMembers}</strong> anggota di <strong>${visibleDepts}</strong> seksi`;
    }

    // Render functions
    function renderDepartments(query = '') {
      departmentsGrid.innerHTML = '';
      
      filteredDepartments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.dataset.id = dept.id;
        
        card.innerHTML = `
          <div class="department-header">
            <div class="department-title">
              <i class="fas ${dept.icon}"></i>
              <span>${highlightText(dept.title, query)}</span>
            </div>
            <div class="department-actions">
              <button class="action-btn copy-btn" title="Salin daftar anggota" data-dept="${dept.id}">
                <i class="fas fa-copy"></i>
              </button>
              <button class="action-btn toggle-btn" title="Tutup/Buka" data-dept="${dept.id}">
                <i class="fas fa-chevron-up"></i>
              </button>
            </div>
          </div>
          <div class="department-content">
            <ul class="member-list">
              ${dept.members.map(member => `
                <li class="member-item">
                  <div class="member-info">
                    <div class="member-name">${highlightText(member.name, query)}</div>
                    <div class="member-role">${highlightText(member.role, query)} · ${highlightText(member.class, query)}</div>
                  </div>
                  <div class="member-actions">
                    ${photoUrls[member.name] ? `
                      <a class="photo-btn" href="${photoUrls[member.name]}" target="_blank" rel="noopener">
                        <i class="fas fa-image"></i>
                        Foto
                      </a>
                    ` : ''}
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
        
        departmentsGrid.appendChild(card);
      });
      
      // Set initial state
      if (!isExpanded) {
        collapseAllDepartments();
      }
    }

    // Render chat messages
    function renderChatMessages() {
      chatContainer.innerHTML = '';
      
      // Sort messages by time
      const sortedMessages = [...chatMessages].sort((a, b) => {
        const dateA = new Date(a.time.replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$1-$2'));
        const dateB = new Date(b.time.replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$1-$2'));
        return dateA - dateB;
      });
      
      sortedMessages.forEach(msg => {
        const messageEl = document.createElement('div');
        messageEl.className = 'chat-message';
        
        // Get initials for avatar
        const initials = msg.author.split(' ').map(n => n[0]).join('').substring(0, 2);
        
        messageEl.innerHTML = `
          <div class="message-avatar">${initials}</div>
          <div class="message-content">
            <div class="message-header">
              <div class="message-author">${msg.author}</div>
              <div class="message-time">${msg.time}</div>
            </div>
            <div class="message-bubble">
              <div class="message-text">${msg.message}</div>
            </div>
          </div>
        `;
        
        chatContainer.appendChild(messageEl);
      });
      
      // Scroll to bottom
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Department actions
    function toggleDepartment(deptId) {
      const card = document.querySelector(`[data-id="${deptId}"]`);
      const content = card.querySelector('.department-content');
      const toggleBtn = card.querySelector('.toggle-btn i');
      
      if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleBtn.className = 'fas fa-chevron-up';
      } else {
        content.style.display = 'none';
        toggleBtn.className = 'fas fa-chevron-down';
      }
    }

    function copyDepartmentMembers(deptId) {
      const dept = departmentsData.find(d => d.id === deptId);
      if (!dept) return;
      
      const membersList = dept.members.map(member => `${member.name} (${member.class})`).join('\n');
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(membersList).then(() => {
          showNotification('Daftar anggota berhasil disalin!', 'success');
        }).catch(() => {
          fallbackCopyToClipboard(membersList);
        });
      } else {
        fallbackCopyToClipboard(membersList);
      }
    }

    function fallbackCopyToClipboard(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        showNotification('Daftar anggota berhasil disalin!', 'success');
      } catch (err) {
        showNotification('Gagal menyalin. Coba lagi.', 'error');
      }
      
      document.body.removeChild(textArea);
    }

    function expandAllDepartments() {
      const contents = document.querySelectorAll('.department-content');
      const toggleBtns = document.querySelectorAll('.toggle-btn i');
      
      contents.forEach(content => {
        content.style.display = 'block';
      });
      
      toggleBtns.forEach(btn => {
        btn.className = 'fas fa-chevron-up';
      });
      
      isExpanded = true;
    }

    function collapseAllDepartments() {
      const contents = document.querySelectorAll('.department-content');
      const toggleBtns = document.querySelectorAll('.toggle-btn i');
      
      contents.forEach(content => {
        content.style.display = 'none';
      });
      
      toggleBtns.forEach(btn => {
        btn.className = 'fas fa-chevron-down';
      });
      
      isExpanded = false;
    }

    // Photo viewing
    function viewPhoto(url, name) {
      // Create modal overlay
      const overlay = document.createElement('div');
      overlay.className = 'photo-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
        padding: 2rem;
      `;
      
      const photoContainer = document.createElement('div');
      photoContainer.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        text-align: center;
      `;
      
      const img = document.createElement('img');
      img.src = url;
      img.alt = `Foto ${name}`;
      img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
      `;
      
      const caption = document.createElement('p');
      caption.textContent = name;
      caption.style.cssText = `
        color: white;
        margin-top: 1rem;
        font-size: 1.25rem;
        font-weight: 500;
      `;
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '<i class="fas fa-times"></i>';
      closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 1rem;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.25rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      
      photoContainer.appendChild(img);
      photoContainer.appendChild(caption);
      overlay.appendChild(photoContainer);
      overlay.appendChild(closeBtn);
      
      // Close handlers
      const closeModal = () => document.body.removeChild(overlay);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
      closeBtn.addEventListener('click', closeModal);
      
      // ESC key handler
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', handleEsc);
        }
      };
      document.addEventListener('keydown', handleEsc);
      
      document.body.appendChild(overlay);
    }

    // Notification system
    function showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: var(--transition);
      `;
      notification.textContent = message;
      
      document.body.appendChild(notification);
      
      // Animate in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 10);
      
      // Remove after delay
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }

    // Theme management
    function toggleTheme() {
      const isDark = document.documentElement.hasAttribute('data-theme');
      const themeIcon = themeToggle.querySelector('i');
      const themeText = themeToggle.querySelector('span');
      
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Mode Gelap';
        localStorage.removeItem('osis-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Mode Terang';
        localStorage.setItem('osis-theme', 'dark');
      }
    }

    // Tab management
    function switchTab(tabName) {
      // Update tab buttons
      tabButtons.forEach(btn => {
        if (btn.dataset.tab === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update tab contents
      tabContents.forEach(content => {
        if (content.id === `${tabName}-tab`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
      
      currentTab = tabName;
      
      // Initialize chat when switching to chat tab
      if (tabName === 'chat' && chatContainer.children.length === 0) {
        renderChatMessages();
      }
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      
      if (query.length > 0) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
      
      performSearch(query);
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.classList.add('hidden');
      performSearch('');
    });

    // Tab navigation
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Refresh chat
    refreshChat.addEventListener('click', () => {
      renderChatMessages();
      showNotification('Pesan berhasil diperbarui!', 'success');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt + F to focus search
      if (e.altKey && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        searchInput.focus();
      }
      
      // Ctrl + K to focus search
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      
      // Tab shortcuts
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        switchTab('structure');
      }
      
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        switchTab('chat');
      }
    });

    // Event delegation for department actions
    departmentsGrid.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.toggle-btn');
      const copyBtn = e.target.closest('.copy-btn');
      
      if (toggleBtn) {
        const deptId = toggleBtn.dataset.dept;
        toggleDepartment(deptId);
      }
      
      if (copyBtn) {
        const deptId = copyBtn.dataset.dept;
        copyDepartmentMembers(deptId);
      }
    });

    // Global action buttons
    themeToggle.addEventListener('click', toggleTheme);
    expandAll.addEventListener('click', expandAllDepartments);
    collapseAll.addEventListener('click', collapseAllDepartments);

    // Initialize theme from localStorage
    function initializeTheme() {
      if (localStorage.getItem('osis-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('i').className = 'fas fa-sun';
        themeToggle.querySelector('span').textContent = 'Mode Terang';
      }
    }

    // Debounced search for better performance
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Replace the immediate search with debounced version for better performance
    const debouncedSearch = debounce(performSearch, 300);
    searchInput.removeEventListener('input', performSearch);
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      
      if (query.length > 0) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
      
      debouncedSearch(query);
    });

    // Initialize the application
    function initialize() {
      initializeTheme();
      renderDepartments();
      updateStats();
      
      // Add loading state management if needed
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
      }, 100);
    }

    // Run initialization when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }

    // Expose functions globally for onclick handlers
    window.viewPhoto = viewPhoto;