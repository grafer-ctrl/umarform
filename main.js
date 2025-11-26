// Data tarif dan jasa berdasarkan jenis pemeriksaan
const TARIF_DATA = {
    'THORAX': {
        tarif: ['122500', '130500', '145500', '153500'],
        jasa: ['40000', '46000', '54000', '58000']
    },
    'BNO': {
        tarif: ['190500', '195500', '202500', '209500'],
        jasa: ['66000', '70000', '74000', '76000']
    },
    'ABDOMEN': {
        tarif: ['302500', '326500', '366000', '388500'],
        jasa: ['124000', '138000', '160000', '174000']
    },
    'PELVIS': {
        tarif: ['150000', '216000', '259200', '311040'],
        jasa: ['36000', '39000', '41000', '43000']
    },
    'ABDOMEN 3 PSS': {
        tarif: ['302500', '326500', '366000', '388500'],
        jasa: ['124000', '138000', '160000', '174000']
    },
    'KEPALA': {
        tarif: ['150000', '216000', '259200', '311040'],
        jasa: ['36000', '39000', '41000', '43000']
    },
    'CERVICAL': {
        tarif: ['167000', '190500', '205000', '217500'],
        jasa: ['66000', '80000', '88000', '96000']
    },
    'CLAVICULA': {
        tarif: ['104000', '116500', '124000', '131000'],
        jasa: ['33000', '40000', '44000', '48000']
    },
    'SHOULDER': {
        tarif: ['147500', '154500', '162500', '171500'],
        jasa: ['52000', '55000', '60000', '64000']
    },
    'HUMERUS': {
        tarif: ['147500', '154500', '162500', '171500'],
        jasa: ['52000', '55000', '60000', '64000']
    },
    'ANTEBRACHI': {
        tarif: ['147500', '154500', '162500', '171500'],
        jasa: ['52000', '55000', '60000', '64000']
    },
    'ELBOW': {
        tarif: ['147500', '154500', '162500', '171500'],
        jasa: ['52000', '55000', '60000', '64000']
    },
    'MANUS': {
        tarif: ['158500', '165500', '173500', '182500'],
        jasa: ['52000', '55000', '60000', '64000']
    },
    'WRIST': {
        tarif: ['158500', '165500', '173500', '182500'],
        jasa: ['5000', '6000', '7000', '8000']
    },
    'FEMUR': {
        tarif: ['172500', '179500', '186500', '193500'],
        jasa: ['66000', '70000', '73000', '76000']
    },
    'CRURIS': {
        tarif: ['172500', '179500', '186500', '193500'],
        jasa: ['66000', '70000', '73000', '76000']
    },
    'GENU': {
        tarif: ['149500', '154500', '162500', '171500'],
        jasa: ['50000', '55000', '60000', '64000']
    },
    'ANKLE': {
        tarif: ['149500', '154500', '162500', '171500'],
        jasa: ['50000', '55000', '60000', '64000']
    },
    'PEDIS': {
        tarif: ['149500', '154500', '162500', '171500'],
        jasa: ['50000', '55000', '60000', '64000']
    },
    'LUMBAL': {
        tarif: ['190500', '195500', '202500', '209500'],
        jasa: ['66000', '70000', '74000', '76000']
    },
    'THORACHAL': {
        tarif: ['190500', '195500', '202500', '209500'],
        jasa: ['66000', '70000', '74000', '76000']
    },
    'THORACHOLUMBAL': {
        tarif: ['228000', '273600', '328320', '393984'],
        jasa: ['78796', '65664', '54720', '45600']
    },
    'USG ABDOMEN': {
        tarif: ['400000', '440000', '480000', '520000'],
        jasa: ['']
    },
    'USG TIROID': {
        tarif: ['175000', '192000', '210000', '227500'],
        jasa: ['']
    },
    'USG MAMAE': {
        tarif: ['190000', '209000', '219000', '228000'],
        jasa: ['']
    },
    'USG DOPLER': {
        tarif: ['220000', '242000', '264000', '286000'],
        jasa: ['']
    },
    'USG LAIN LAIN': {
        tarif: [''],
        jasa: ['']
    }
};

// Global variables
let records = [];
let editingId = null;
let deleteId = null;

// DOM elements
const formModal = document.getElementById('formModal');
const deleteModal = document.getElementById('deleteModal');
const radiologyForm = document.getElementById('radiologyForm');
const dataTableBody = document.getElementById('dataTableBody');
const notification = document.getElementById('notification');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadRecords();
    updateStatistics();
    updateMonthFilter();
    setDefaultDate();
    
    // Event listeners
    radiologyForm.addEventListener('submit', handleFormSubmit);
    document.getElementById('searchInput').addEventListener('input', filterTable);
    document.getElementById('monthFilter').addEventListener('change', filterTable);
});

// Set default date to today
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tglPemeriksaan').value = today;
}

// Update tarif options based on jenis pemeriksaan
function updateTarifOptions() {
    const jenisPemeriksaan = document.getElementById('jenisPemeriksaan').value;
    const tarifSelect = document.getElementById('tarifPemeriksaan');
    const jasaSelect = document.getElementById('jasaDokter');
    
    // Clear existing options
    tarifSelect.innerHTML = '<option value="">Pilih Tarif</option>';
    jasaSelect.innerHTML = '<option value="">Pilih Jasa</option>';
    
    if (jenisPemeriksaan && TARIF_DATA[jenisPemeriksaan]) {
        const data = TARIF_DATA[jenisPemeriksaan];
        
        // Add tarif options
        data.tarif.forEach(tarif => {
            if (tarif) {
                const option = document.createElement('option');
                option.value = tarif;
                option.textContent = `Rp ${parseInt(tarif).toLocaleString('id-ID')}`;
                tarifSelect.appendChild(option);
            } else {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'Input Manual';
                tarifSelect.appendChild(option);
            }
        });
        
        // Add jasa options
        data.jasa.forEach(jasa => {
            if (jasa) {
                const option = document.createElement('option');
                option.value = jasa;
                option.textContent = `Rp ${parseInt(jasa).toLocaleString('id-ID')}`;
                jasaSelect.appendChild(option);
            } else {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'Input Manual';
                jasaSelect.appendChild(option);
            }
        });
    }
}

// Show form modal
function showForm(editing = false) {
    formModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (editing) {
        document.querySelector('.modal-title').textContent = 'Edit Data Pemeriksaan';
    } else {
        document.querySelector('.modal-title').textContent = 'Tambah Data Pemeriksaan';
        radiologyForm.reset();
        setDefaultDate();
        editingId = null;
    }
}

// Close form modal
function closeForm() {
    formModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    radiologyForm.reset();
    editingId = null;
}

// Show delete modal
function showDeleteModal(id) {
    deleteId = id;
    deleteModal.classList.add('active');
}

// Close delete modal
function closeDeleteModal() {
    deleteModal.classList.remove('active');
    deleteId = null;
}

// Confirm delete
function confirmDelete() {
    if (deleteId) {
        records = records.filter(record => record.id !== deleteId);
        saveRecords();
        updateTable();
        updateStatistics();
        closeDeleteModal();
        showNotification('Data berhasil dihapus', 'success');
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(radiologyForm);
    const record = {
        id: editingId || generateId(),
        no: formData.get('no'),
        kodePenjamin: formData.get('kodePenjamin'),
        tglPemeriksaan: formData.get('tglPemeriksaan'),
        namaPasien: formData.get('namaPasien'),
        jenisKelamin: formData.get('jenisKelamin'),
        kelas: formData.get('kelas'),
        jenisDokter: formData.get('jenisDokter'),
        dokterPengirim: formData.get('dokterPengirim'),
        jumlahFilm: formData.get('jumlahFilm'),
        pengulanganFoto: formData.get('pengulanganFoto'),
        penggunaanFaktorEksposi: formData.get('penggunaanFaktorEksposi'),
        radiografer: formData.get('radiografer'),
        jasaRadiografer: formData.get('jasaRadiografer'),
        jasaBahayaRadiasi: formData.get('jasaBahayaRadiasi'),
        jenisPemeriksaan: formData.get('jenisPemeriksaan'),
        tarifPemeriksaan: formData.get('tarifPemeriksaan'),
        jasaDokter: formData.get('jasaDokter'),
        createdAt: editingId ? records.find(r => r.id === editingId).createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    // Calculate total
    record.total = calculateTotal(record);
    
    if (editingId) {
        const index = records.findIndex(r => r.id === editingId);
        records[index] = record;
        showNotification('Data berhasil diperbarui', 'success');
    } else {
        records.push(record);
        showNotification('Data berhasil disimpan', 'success');
    }
    
    saveRecords();
    updateTable();
    updateStatistics();
    closeForm();
}

// Calculate total cost
function calculateTotal(record) {
    let total = 0;
    
    // Add main examination cost
    if (record.tarifPemeriksaan) {
        total += parseInt(record.tarifPemeriksaan) || 0;
    }
    
    // Add doctor fee
    if (record.jasaDokter) {
        total += parseInt(record.jasaDokter) || 0;
    }
    
    // Add radiographer fee
    if (record.jasaRadiografer && record.jasaRadiografer !== '-') {
        total += parseInt(record.jasaRadiografer) || 0;
    }
    
    // Add radiation hazard fee
    if (record.jasaBahayaRadiasi && record.jasaBahayaRadiasi !== '-') {
        total += parseInt(record.jasaBahayaRadiasi) || 0;
    }
    
    return total;
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Load records from localStorage
function loadRecords() {
    const saved = localStorage.getItem('radiologyRecords');
    if (saved) {
        records = JSON.parse(saved);
    }
}

// Save records to localStorage
function saveRecords() {
    localStorage.setItem('radiologyRecords', JSON.stringify(records));
}

// Update data table
function updateTable() {
    const tbody = document.getElementById('dataTableBody');
    tbody.innerHTML = '';
    
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.no || '-'}</td>
            <td>${formatDate(record.tglPemeriksaan)}</td>
            <td>${record.namaPasien}</td>
            <td>${record.jenisKelamin}</td>
            <td>${record.kelas}</td>
            <td>${record.jenisPemeriksaan}</td>
            <td>${record.dokterPengirim}</td>
            <td>Rp ${parseInt(record.tarifPemeriksaan || 0).toLocaleString('id-ID')}</td>
            <td><strong>Rp ${record.total.toLocaleString('id-ID')}</strong></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="editRecord('${record.id}')" title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                    <button class="btn-icon danger" onclick="showDeleteModal('${record.id}')" title="Hapus">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3,6 5,6 21,6"/>
                            <path d="M19,6V20A2,2,0,0,1,17,22H7A2,2,0,0,1,5,20V6M8,6V4A2,2,0,0,1,10,2H14A2,2,0,0,1,16,4V6"/>
                            <line x1="10" y1="11" x2="10" y2="17"/>
                            <line x1="14" y1="11" x2="14" y2="17"/>
                        </svg>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Edit record
function editRecord(id) {
    const record = records.find(r => r.id === id);
    if (record) {
        editingId = id;
        showForm(true);
        
        // Populate form
        Object.keys(record).forEach(key => {
            const element = document.getElementById(key);
            if (element && key !== 'id' && key !== 'total' && key !== 'createdAt' && key !== 'updatedAt') {
                element.value = record[key];
            }
        });
        
        // Update tarif options based on jenis pemeriksaan
        updateTarifOptions();
        
        // Set the values for tarif and jasa
        if (record.tarifPemeriksaan) {
            document.getElementById('tarifPemeriksaan').value = record.tarifPemeriksaan;
        }
        if (record.jasaDokter) {
            document.getElementById('jasaDokter').value = record.jasaDokter;
        }
    }
}

// Filter table
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const monthFilter = document.getElementById('monthFilter').value;
    const rows = dataTableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const date = row.cells[1]?.textContent;
        const monthMatch = !monthFilter || (date && date.includes(monthFilter));
        const searchMatch = !searchTerm || text.includes(searchTerm);
        
        row.style.display = (searchMatch && monthMatch) ? '' : 'none';
    });
}

// Update statistics
function updateStatistics() {
    const totalRecords = records.length;
    const currentMonth = new Date().toISOString().substr(0, 7); // YYYY-MM
    const monthlyRecords = records.filter(record => 
        record.tglPemeriksaan && record.tglPemeriksaan.startsWith(currentMonth)
    ).length;
    
    const totalRevenue = records.reduce((sum, record) => sum + (record.total || 0), 0);
    
    document.getElementById('totalRecords').textContent = totalRecords;
    document.getElementById('monthlyRecords').textContent = monthlyRecords;
    document.getElementById('totalRevenue').textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
}

// Update month filter options
function updateMonthFilter() {
    const months = [...new Set(records.map(record => {
        if (record.tglPemeriksaan) {
            return record.tglPemeriksaan.substr(0, 7); // YYYY-MM
        }
        return null;
    }).filter(Boolean))].sort().reverse();
    
    const monthFilter = document.getElementById('monthFilter');
    const currentValue = monthFilter.value;
    
    monthFilter.innerHTML = '<option value="">Semua Bulan</option>';
    
    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = new Date(month + '-01').toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long' 
        });
        monthFilter.appendChild(option);
    });
    
    monthFilter.value = currentValue;
}

// Export to CSV
function exportToCSV() {
    if (records.length === 0) {
        showNotification('Tidak ada data untuk diekspor', 'warning');
        return;
    }
    
    const headers = [
        'No', 'Kode Penjamin', 'Tanggal Pemeriksaan', 'Nama Pasien', 
        'Jenis Kelamin', 'Kelas', 'Jenis Dokter', 'Dokter Pengirim',
        'Jumlah Film', 'Pengulangan Foto', 'Penggunaan Faktor Eksposi',
        'Radiografer', 'Jasa Radiografer', 'Jasa Bahaya Radiasi',
        'Jenis Pemeriksaan', 'Tarif Pemeriksaan', 'Jasa Dokter', 'Total'
    ];
    
    const csvContent = [
        headers.join(','),
        ...records.map(record => [
            `"${record.no || ''}"`,
            `"${record.kodePenjamin || ''}"`,
            `"${record.tglPemeriksaan || ''}"`,
            `"${record.namaPasien || ''}"`,
            `"${record.jenisKelamin || ''}"`,
            `"${record.kelas || ''}"`,
            `"${record.jenisDokter || ''}"`,
            `"${record.dokterPengirim || ''}"`,
            `"${record.jumlahFilm || ''}"`,
            `"${record.pengulanganFoto || ''}"`,
            `"${record.penggunaanFaktorEksposi || ''}"`,
            `"${record.radiografer || ''}"`,
            `"${record.jasaRadiografer || ''}"`,
            `"${record.jasaBahayaRadiasi || ''}"`,
            `"${record.jenisPemeriksaan || ''}"`,
            `"${record.tarifPemeriksaan || ''}"`,
            `"${record.jasaDokter || ''}"`,
            `"${record.total || 0}"`
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    
    const month = new Date().toISOString().substr(0, 7);
    link.setAttribute('download', `logbook-radiologi-${month}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Data berhasil diekspor ke CSV', 'success');
}

// Format date
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID');
}

// Show notification
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target === formModal) {
        closeForm();
    }
    if (e.target === deleteModal) {
        closeDeleteModal();
    }
});

// Handle escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeForm();
        closeDeleteModal();
    }
});

// Handle form validation
function validateForm() {
    const requiredFields = [
        'kodePenjamin', 'tglPemeriksaan', 'namaPasien', 'jenisKelamin', 
        'kelas', 'jenisDokter', 'dokterPengirim', 'jumlahFilm', 
        'pengulanganFoto', 'penggunaanFaktorEksposi', 'radiografer',
        'jasaRadiografer', 'jasaBahayaRadiasi', 'jenisPemeriksaan',
        'tarifPemeriksaan', 'jasaDokter'
    ];
    
    let isValid = true;
    const errors = [];
    
    requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!element.value) {
            isValid = false;
            errors.push(`${field} wajib diisi`);
            element.style.borderColor = 'var(--danger)';
        } else {
            element.style.borderColor = 'var(--neutral-300)';
        }
    });
    
    if (!isValid) {
        showNotification('Mohon lengkapi semua field yang wajib diisi', 'error');
    }
    
    return isValid;
}

// Mobile optimizations
function initMobileOptimizations() {
    // Add touch-friendly interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Optimize table for mobile
    if (window.innerWidth <= 768) {
        // Could add horizontal scroll indicator or stack layout
        const table = document.querySelector('.data-table');
        if (table) {
            table.style.fontSize = '12px';
        }
    }
}

// Initialize mobile optimizations
window.addEventListener('load', initMobileOptimizations);
window.addEventListener('resize', initMobileOptimizations);

// Auto-save functionality (optional)
function enableAutoSave() {
    const inputs = document.querySelectorAll('input, select');
    let saveTimeout;
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                // Save form state to sessionStorage
                const formData = new FormData(radiologyForm);
                const tempData = {};
                for (let [key, value] of formData.entries()) {
                    tempData[key] = value;
                }
                sessionStorage.setItem('tempFormData', JSON.stringify(tempData));
            }, 1000);
        });
    });
}

// Load saved form data on page load
function loadTempFormData() {
    const saved = sessionStorage.getItem('tempFormData');
    if (saved && !editingId) {
        try {
            const tempData = JSON.parse(saved);
            Object.keys(tempData).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.value = tempData[key];
                }
            });
        } catch (e) {
            console.log('Error loading temp data:', e);
        }
    }
}

// Clear temp data when form is successfully submitted
function clearTempFormData() {
    sessionStorage.removeItem('tempFormData');
}

// Initialize auto-save
document.addEventListener('DOMContentLoaded', function() {
    loadTempFormData();
    enableAutoSave();
});

// Clear temp data after successful form submission
const originalHandleFormSubmit = handleFormSubmit;
handleFormSubmit = function(e) {
    originalHandleFormSubmit.call(this, e);
    clearTempFormData();
};