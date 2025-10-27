document.addEventListener('DOMContentLoaded', function() {
    // URL CSV Google Spreadsheet
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQmOaIjXmtY3dnOWCRs4YvV4a8fv9ri-PVLHzGWpQkclFRC1OiPotJZjYmx41ORMGK-kFJsuaxt94oB/pub?output=csv';
    
    // Elemen DOM
    const loadingIndicator = document.getElementById('loadingIndicator');
    const dashboardContent = document.getElementById('dashboardContent');
    const lastUpdateElement = document.querySelector('.last-update');
    const totalReportsElement = document.getElementById('totalReports');
    const nihilReportsElement = document.getElementById('nihilReports');
    const absentTeachersElement = document.getElementById('absentTeachers');
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('searchInput');
    
    // Elemen insight
    const lastUpdateInsight = document.getElementById('lastUpdateInsight');
    const nihilPercentageInsight = document.getElementById('nihilPercentageInsight');
    const mostAbsentInsight = document.getElementById('mostAbsentInsight');
    
    // Variabel untuk menyimpan data
    let csvData = [];
    let filteredData = [];
    
    // Fetch data dari CSV
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvText => {
            // Parse CSV menggunakan PapaParse
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    csvData = results.data;
                    filteredData = [...csvData];
                    
                    // Update dashboard dengan data
                    updateDashboard();
                    
                    // Tampilkan dashboard dan sembunyikan loading
                    loadingIndicator.style.display = 'none';
                    dashboardContent.style.display = 'block';
                }
            });
        })
        .catch(error => {
            console.error('Error fetching CSV data:', error);
            loadingIndicator.innerHTML = '<p>Gagal memuat data. Silakan coba lagi nanti.</p>';
        });
    
    // Fungsi untuk update dashboard
    function updateDashboard() {
        // Update tanggal terakhir
        updateLastUpdateDate();
        
        // Update statistik
        updateStatistics();
        
        // Update tabel
        updateTable();
        
        // Update grafik
        updateCharts();
        
        // Update insight
        updateInsights();
        
        // Setup event listener untuk pencarian
        setupSearch();
    }
    
    // Fungsi untuk update tanggal terakhir
    function updateLastUpdateDate() {
        if (csvData.length > 0) {
            const lastDate = csvData[csvData.length - 1].Tanggal;
            const formattedDate = new Date(lastDate).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            lastUpdateElement.textContent = `Data terakhir diupdate: ${formattedDate}`;
            lastUpdateInsight.textContent = `📅 Data terakhir diupdate pada: ${formattedDate}`;
        }
    }
    
    // Fungsi untuk update statistik
    function updateStatistics() {
        const totalReports = csvData.length;
        const nihilReports = csvData.filter(row => 
            row.Keterangan && row.Keterangan.toUpperCase() === 'NIHIL'
        ).length;
        const absentTeachers = csvData.filter(row => 
            row.Keterangan && row.Keterangan.toLowerCase().includes('tidak hadir')
        ).length;
        
        totalReportsElement.textContent = totalReports;
        nihilReportsElement.textContent = nihilReports;
        absentTeachersElement.textContent = absentTeachers;
    }
    
    // Fungsi untuk update tabel
    function updateTable() {
        // Kosongkan tabel
        tableBody.innerHTML = '';
        
        // Tambahkan data ke tabel
        filteredData.forEach(row => {
            const tr = document.createElement('tr');
            
            // Tambahkan kelas berdasarkan keterangan
            if (row.Keterangan && row.Keterangan.toUpperCase() === 'NIHIL') {
                tr.classList.add('nihil-row');
            } else if (row.Keterangan && row.Keterangan.toLowerCase().includes('tidak hadir')) {
                tr.classList.add('absent-row');
            }
            
            // Format tanggal
            const formattedDate = row.Tanggal ? new Date(row.Tanggal).toLocaleDateString('id-ID') : '-';
            
            // Buat sel untuk setiap kolom
            tr.innerHTML = `
                <td>${formattedDate}</td>
                <td>${row['Kelas X'] || '-'}</td>
                <td>${row['Kelas XI'] || '-'}</td>
                <td>${row['Nama Guru'] || '-'}</td>
                <td>${row.Tugas || '-'}</td>
                <td>${row.Keterangan || '-'}</td>
            `;
            
            tableBody.appendChild(tr);
        });
    }
    
    // Fungsi untuk update grafik
    function updateCharts() {
        // Data untuk grafik perbandingan
        const nihilReports = csvData.filter(row => 
            row.Keterangan && row.Keterangan.toUpperCase() === 'NIHIL'
        ).length;
        const absentReports = csvData.filter(row => 
            row.Keterangan && row.Keterangan.toLowerCase().includes('tidak hadir')
        ).length;
        const otherReports = csvData.length - nihilReports - absentReports;
        
        // Grafik perbandingan
        const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(comparisonCtx, {
            type: 'pie',
            data: {
                labels: ['NIHIL', 'Guru Tidak Hadir', 'Lainnya'],
                datasets: [{
                    data: [nihilReports, absentReports, otherReports],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.7)',
                        'rgba(255, 235, 59, 0.7)',
                        'rgba(74, 144, 226, 0.7)'
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(255, 235, 59, 1)',
                        'rgba(74, 144, 226, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
        
        // Data untuk grafik frekuensi per kelas
        const classFrequency = {};
        csvData.forEach(row => {
            if (row['Kelas X']) {
                classFrequency[row['Kelas X']] = (classFrequency[row['Kelas X']] || 0) + 1;
            }
            if (row['Kelas XI']) {
                classFrequency[row['Kelas XI']] = (classFrequency[row['Kelas XI']] || 0) + 1;
            }
        });
        
        const classLabels = Object.keys(classFrequency);
        const classData = Object.values(classFrequency);
        
        // Grafik frekuensi per kelas
        const classFrequencyCtx = document.getElementById('classFrequencyChart').getContext('2d');
        new Chart(classFrequencyCtx, {
            type: 'bar',
            data: {
                labels: classLabels,
                datasets: [{
                    label: 'Jumlah Laporan',
                    data: classData,
                    backgroundColor: 'rgba(74, 144, 226, 0.7)',
                    borderColor: 'rgba(74, 144, 226, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Fungsi untuk update insight
    function updateInsights() {
        // Hitung persentase NIHIL
        const nihilReports = csvData.filter(row => 
            row.Keterangan && row.Keterangan.toUpperCase() === 'NIHIL'
        ).length;
        const nihilPercentage = csvData.length > 0 ? Math.round((nihilReports / csvData.length) * 100) : 0;
        nihilPercentageInsight.textContent = `✅ ${nihilPercentage}% laporan menyatakan nihil.`;
        
        // Cari guru yang paling sering tidak hadir
        const absentCount = {};
        csvData.forEach(row => {
            if (row.Keterangan && row.Keterangan.toLowerCase().includes('tidak hadir') && row['Nama Guru']) {
                absentCount[row['Nama Guru']] = (absentCount[row['Nama Guru']] || 0) + 1;
            }
        });
        
        let mostAbsentTeacher = 'Tidak ada data';
        if (Object.keys(absentCount).length > 0) {
            mostAbsentTeacher = Object.keys(absentCount).reduce((a, b) => absentCount[a] > absentCount[b] ? a : b);
        }
        mostAbsentInsight.textContent = `⚠️ Guru yang paling sering tercatat tidak hadir: ${mostAbsentTeacher}.`;
    }
    
    // Fungsi untuk setup pencarian
    function setupSearch() {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm === '') {
                filteredData = [...csvData];
            } else {
                filteredData = csvData.filter(row => {
                    // Cari di kolom kelas dan nama guru
                    const classX = (row['Kelas X'] || '').toLowerCase();
                    const classXI = (row['Kelas XI'] || '').toLowerCase();
                    const teacherName = (row['Nama Guru'] || '').toLowerCase();
                    
                    return classX.includes(searchTerm) || 
                           classXI.includes(searchTerm) || 
                           teacherName.includes(searchTerm);
                });
            }
            
            // Update tabel dengan data yang sudah difilter
            updateTable();
        });
    }
});
