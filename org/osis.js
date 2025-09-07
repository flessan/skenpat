// Data structure
    const departmentsData = [
      {
        id: 'wirausaha',
        title: 'Sekbid Wirausaha',
        icon: 'fa-store',
        members: [
          { name: 'Farraz Ibnu Fadli', role: 'Ketua Sekbid' },
          { name: 'Salsabila Azzahra', role: 'Anggota' },
          { name: 'Maskanah', role: 'Anggota' },
          { name: 'Muhammad Naufal', role: 'Anggota' }
        ]
      },
      {
        id: 'humas',
        title: 'Sekbid Humas',
        icon: 'fa-handshake',
        members: [
          { name: 'Muhammad Iqbal', role: 'Ketua Sekbid' },
          { name: 'Akhmad Fitrianoor', role: 'Anggota' },
          { name: 'Adinda Azrelia H.', role: 'Anggota' },
          { name: 'Sarah Naila Humaira', role: 'Anggota' },
          { name: 'Kamila Jamil', role: 'Anggota' },
          { name: 'Nur Rumaisya Adzkiya', role: 'Anggota' }
        ]
      },
      {
        id: 'lingkungan',
        title: 'Sekbid Lingkungan Hidup',
        icon: 'fa-leaf',
        members: [
          { name: 'Muhammad Rasya Azizi', role: 'Ketua Sekbid' },
          { name: 'Dara Puspita Rahayu', role: 'Anggota' },
          { name: 'Salsabila Salma', role: 'Anggota' },
          { name: 'Erika Purnama Saputri', role: 'Anggota' },
          { name: 'Nur Amaliah', role: 'Anggota' }
        ]
      },
      {
        id: 'olahraga',
        title: 'Sekbid Olahraga',
        icon: 'fa-running',
        members: [
          { name: 'Muhammad Rayhan', role: 'Ketua Sekbid' },
          { name: 'Latifatul Azkiya', role: 'Anggota' }
        ]
      },
      {
        id: 'keagamaan',
        title: 'Sekbid Keagamaan',
        icon: 'fa-pray',
        members: [
          { name: 'Humaira Faizatun Husna', role: 'Ketua Sekbid' },
          { name: 'Julia Azzahra', role: 'Anggota' },
          { name: 'Zahratussita', role: 'Anggota' },
          { name: 'Maulida Rizki Ardiani', role: 'Anggota' },
          { name: 'Muhammad Syahrul', role: 'Anggota' }
        ]
      },
      {
        id: 'belanegara',
        title: 'Sekbid Bela Negara',
        icon: 'fa-shield-alt',
        members: [
          { name: 'Gusti Cynthia Anggraini Rinanda', role: 'Ketua Sekbid' },
          { name: 'Ebira Hasanatina', role: 'Anggota' },
          { name: 'Siti Maimunah Fadilla', role: 'Anggota' },
          { name: 'Helma Nazulla', role: 'Anggota' },
          { name: 'Muhammad Iqbal 👦', role: 'Anggota' }
        ]
      },
      {
        id: 'kepemimpinan',
        title: 'Sekbid Kepemimpinan',
        icon: 'fa-crown',
        members: [
          { name: 'Shireen Nur Aura Rizqy', role: 'Ketua Sekbid' },
          { name: 'Muhammad Farhan R.', role: 'Anggota' },
          { name: 'Muhammad Haffi Tasmin', role: 'Anggota' },
          { name: 'Muhammad Nazril Ilham', role: 'Anggota' },
          { name: 'Rizkya Nur Aulia', role: 'Anggota' },
          { name: 'Yeni Agustine', role: 'Anggota' }
        ]
      }
    ];

    // Photo URLs 
    const photoUrls = {
  "Muhammad Reno Helmawan": "https://drive.google.com/uc?export=view&id=1qqyR4UQyh1mectQRTsXPKDia63KqwtTK",
  "Corry Laura Beuty Pakpahan": "https://drive.google.com/uc?export=view&id=19VLZ2yoG0MUVnQkk1bqCHFGe61-sDhvx",
  "Amalia Rahmania": "https://drive.google.com/uc?export=view&id=1Q3gY0djwi9W32DrQZE-dwVdBS1qj8NfN",
  "Nur Almira Putri": "https://drive.google.com/uc?export=view&id=1BFPTyGjN3jWATdR2GaSnMOd_G4SiVjRv",
  "Arya Tri Nugraha": "https://drive.google.com/uc?export=view&id=1hd11D7q8cJ4MhtGsNmH8G6vuQm1PjX70",
  "Muhammad Dede Riyadhi": "https://drive.google.com/uc?export=view&id=1ZWEfxog8cJ4MhtGsNmH8G6vuQm1PjX70",
  "Farraz Ibnu Fadli": "https://drive.google.com/uc?export=view&id=1Ght2dIp5w8WqEjTtCRDAeuOVzz2azhf7",
  "Salsabila Azzahra": "https://drive.google.com/uc?export=view&id=1FvO0jxzp-pO9X5w2NmH8G6vuQm1PjX70",
  "Maskanah": "https://drive.google.com/uc?export=view&id=1CsNSHlUEbGBhJgiMem44zcDwqpZoOYqS",
  "Muhammad Naufal": "https://drive.google.com/uc?export=view&id=1M5vZoRDtuwduUXH35igj9dWOgcZWzQC6",
  "Muhammad Iqbal": "https://drive.google.com/uc?export=view&id=1E-OWlSL15gGZ4iv4gJlOixg5tYkPU2Ga",
  "Akhmad Fitrianoor": "https://drive.google.com/uc?export=view&id=1B_9SZi5TpZOyJJcoRDlMOWTgKAvOpiMb",
  "Adinda Azrelia H.": "https://drive.google.com/uc?export=view&id=12pUEMMe-Dkp1nt0kBTQaamTlq3dPMzFB",
  "Sarah Naila Humaira": "https://drive.google.com/uc?export=view&id=1FS5dcFeqJi8eSGp-cv4Mw4j0SKQp9c6z",
  "Kamila Jamil": "https://drive.google.com/uc?export=view&id=1a-ahw6PLNZCEHIRM60MyrWIzGQ3i3baI",
  "Nur Rumaisya Adzkiya": "https://drive.google.com/uc?export=view&id=1TSkNs1VV83-4iCrmwc0W4pbP-CAgGNxb",
  "Muhammad Rasya Azizi": "https://drive.google.com/uc?export=view&id=1QlPQbzijGF21-UhivYGKmL3PGvDbOSSJ",
  "Dara Puspita Rahayu": "https://drive.google.com/uc?export=view&id=1fcfsZDW3hCBvnfyZ9ILpVptSgLTZdXVT",
  "Salsabila Salma": "https://drive.google.com/uc?export=view&id=10GvNgfDO848uAzRNQiArIiCLd4jQDJUw",
  "Erika Purnama Saputri": "https://drive.google.com/uc?export=view&id=1oM4W-OeIwB_j1nXkW4q9rX6gpG-WvNyx",
  "Nur Amaliah": "https://drive.google.com/uc?export=view&id=16FGPDv1dQQOX6XfFCZpn7OmoLvizNC8X",
  "Muhammad Rayhan": "https://drive.google.com/uc?export=view&id=1r2dc0SVDrW36Or5kJCfM6ZNE0tpH85TO",
  "Latifatul Azkiya": "https://drive.google.com/uc?export=view&id=1puAccURdioDZpiEjPiLZ8PfxOhaFfzqy",
  "Humaira Faizatun Husna": "https://drive.google.com/uc?export=view&id=1U0ffaOenXyvZFnLNDKHU63mhkwmBq9si",
  "Julia Azzahra": "https://drive.google.com/uc?export=view&id=1ZvkP1W76B3bcJcT5LCw6LNppACuXlKdv",
  "Zahratussita": "https://drive.google.com/uc?export=view&id=1XugVGaccTc0q0BVEu7qlyAZILqi_AV2V",
  "Maulida Rizki Ardiani": "https://drive.google.com/uc?export=view&id=1-425RR8U9Me9Lo9r66cK86lCb4lfDnvN",
  "Muhammad Syahrul": "https://drive.google.com/uc?export=view&id=1iMDOJdgjL7N-tLI4pXZWVes8N7H60yxz",
  "Gusti Cynthia Anggraini Rinanda": "https://drive.google.com/uc?export=view&id=1dVYoPPVIN_FAiUvApZBbpowz3A4D1Z9a",
  "Ebira Hasanatina": "https://drive.google.com/uc?export=view&id=1WiCjcBMQNSlmVOymjOW7nTulnsYrWbM1",
  "Siti Maimunah Fadilla": "https://drive.google.com/uc?export=view&id=181ZeOUXyvuVWfJoczknBiNzd1E_PmXxj",
  "Helma Nazulla": "https://drive.google.com/uc?export=view&id=1Rxloa5uVG1zq3LhFqBkkfqxvhzNgL8kR",
  "Muhammad Iqbal 👦": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
  "Shireen Nur Aura Rizqy": "https://drive.google.com/uc?export=view&id=1RiGD5ivNSf8qNztqts1MheC7GGJUlJs9",
  "Muhammad Farhan R.": "https://drive.google.com/uc?export=view&id=1W16WYsZ1hWxxuIh1muXzQTz6cz8vzUa-",
  "Muhammad Haffi Tasmin": "https://drive.google.com/uc?export=view&id=18XBqAbhOcMMaNUX6WQft7Pc7PzHJeIq-",
  "Muhammad Nazril Ilham": "https://drive.google.com/uc?export=view&id=11l6T2-jorJSJ7kEUYLpHObRfsgG0f0y4",
  "Rizkya Nur Aulia": "https://drive.google.com/uc?export=view&id=1XxrNanbGi4FAwm29eY5IMtKGPD3ZWMdW",
  "Yeni Agustine": "https://drive.google.com/uc?export=view&id=1rk0ynoj0QouqwkHq1G6ZiHieLUoUC7qR"
};

    // State
    let filteredDepartments = [...departmentsData];
    let isExpanded = true;

    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchStats = document.getElementById('searchStats');
    const departmentsGrid = document.getElementById('departmentsGrid');
    const themeToggle = document.getElementById('themeToggle');
    const expandAll = document.getElementById('expandAll');
    const collapseAll = document.getElementById('collapseAll');

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
          normalizeText(member.role).includes(normalizedQuery)
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
                    <div class="member-role">${highlightText(member.role, query)}</div>
                  </div>
                  <div class="member-actions">
                    ${photoUrls[member.name] ? `
                      <a class="photo-btn" href="${photoUrls[member.name]}" target="_blank" rel="noopener">   <i class="fas fa-image"></i>   Foto</a>
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
      
      const membersList = dept.members.map(member => member.name).join('\n');
      
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
