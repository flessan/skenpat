document.addEventListener('DOMContentLoaded', () => {
  // --- STATE MANAGEMENT ---
  const appState = {
    currentView: 'card',
    allExpanded: false,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    activities: []
  };

  // --- DOM ELEMENTS ---
  const elements = {
    loader: document.getElementById('loader'),
    schedule: document.getElementById('schedule'),
    listView: document.getElementById('list-view'),
    calendarView: document.getElementById('calendar-view'),
    searchInput: document.getElementById('search'),
    sortSelect: document.getElementById('sort-select'),
    viewToggleBtns: document.querySelectorAll('.view-toggle button'),
    filterPills: document.querySelectorAll('.filter-pill'),
    statsTotal: document.getElementById('total-activities'),
    statsCategories: document.getElementById('total-categories'),
    statsToday: document.getElementById('today-activities'),
    statsFavorites: document.getElementById('favorite-count'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    // ... (elemen lainnya)
  };

  // --- INITIALIZATION ---
  const init = () => {
    // Load schedule data from HTML
    loadScheduleFromHTML();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial UI updates
    updateStats();
    highlightToday();
    generateCalendar();
    
    // Hide loader
    setTimeout(() => {
      elements.loader.classList.add('hidden');
      animateDaysIn();
    }, 500);
  };

  // --- EVENT LISTENERS ---
  const setupEventListeners = () => {
    // View toggle
    elements.viewToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Search
    elements.searchInput.addEventListener('input', handleSearch);

    // Sort
    elements.sortSelect.addEventListener('change', handleSort);

    // Filter
    elements.filterPills.forEach(pill => {
      pill.addEventListener('click', () => filterByCategory(pill.dataset.category));
    });

    // FAB
    document.getElementById('add-activity-btn').addEventListener('click', showAddActivityModal);

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('active');
      });
    });

    // Form submissions
    document.getElementById('reminder-form').addEventListener('submit', handleSetReminder);
    document.getElementById('add-activity-form').addEventListener('submit', handleAddActivity);

    // Event delegation for dynamic content
    elements.schedule.addEventListener('click', (e) => {
      if (e.target.matches('.day-header')) {
        toggleDay(e.target.closest('.day'));
      }
      if (e.target.matches('.favorite-btn')) {
        toggleFavorite(e.target.closest('.activity'));
      }
    });
  };

  // --- CORE FUNCTIONS ---
  const switchView = (view) => {
    appState.currentView = view;
    // ... (logika perpindahan view)
  };

  const handleSearch = () => {
    const query = elements.searchInput.value.toLowerCase();
    // ... (logika pencarian)
  };

  const handleSort = () => {
    const sortBy = elements.sortSelect.value;
    // ... (logika pengurutan)
  };

  const filterByCategory = (category) => {
    // ... (logika filter)
  };

  const toggleFavorite = (activityEl) => {
    // ... (logika favorit)
  };

  // --- HELPER FUNCTIONS ---
  const updateStats = () => {
    // ... (logika update statistik)
  };

  const showToast = (message, type = 'success') => {
    // ... (logika toast notification)
  };

  // --- START THE APP ---
  init();
});
