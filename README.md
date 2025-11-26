# Logbook Radiologi PKU Muhammadiyah Kutoarejo

Form responsive UI modern untuk pencatatan data pemeriksaan radiologi dengan fitur lengkap penyimpanan lokal, edit, hapus, dan ekspor data.

## 🚀 Fitur Utama

- **Form Responsive Modern**: Desain UI yang menarik dan mudah digunakan
- **Penyimpanan Lokal**: Data tersimpan otomatis di browser (Local Storage)
- **CRUD Operations**: Tambah, Edit, Hapus data per pasien
- **Ekspor Data**: Unduh data dalam format CSV per bulan
- **Search & Filter**: Pencarian dan filter data berdasarkan bulan
- **Statistik Real-time**: Menampilkan total data, data bulanan, dan total pendapatan
- **Validasi Form**: Validasi input yang comprehensive
- **Mobile-Friendly**: Responsif untuk semua ukuran layar

## 📋 Data yang Dicatat

### Data Pasien
- NO (input manual)
- KODE PENJAMIN (ROBPJS, ROUMUM, USGBPJS, USGUMUM)
- TGL PEMERIKSAAN (dengan kalender)
- NAMA PASIEN
- JENIS KELAMIN (Laki-laki/Perempuan)
- KELAS (ASYYIFA, MULTAZAM, SALSABILA, FIRDAUS, POLI UMUM, LUAR RS, UGD, POLI DALAM, POLI ANAK, RUJUKAN LUAR)

### Data Dokter
- JENIS DOKTER (UMUM/SPESIALIS)
- DOKTER PENGIRIM (daftar lengkap dokter)

### Data Radiografi
- JUMLAH FILM
- PENGULANGAN FOTO (Ya/Tidak)
- PENGGUNAAN FAKTOR EKSPOSI
- RADIOGRAFER (Umar Said/Wafiq Farida Az Zahraa)
- JASA RADIOGRAFER (5000-8000)
- JASA BAHAYA RADIASI (3500-6000)

### Jenis Pemeriksaan
- **Radiologi**: THORAX, BNO, ABDOMEN, PELVIS, KEPALA, CERVICAL, CLAVICULA, SHOULDER, HUMERUS, ANTEBRACHI, ELBOW, MANUS, WRIST, FEMUR, CRURIS, GENU, ANKLE, PEDIS, LUMBAL, THORACHAL, THORACHOLUMBAL
- **USG**: USG ABDOMEN, USG TIROID, USG MAMAE, USG DOPLER, USG LAIN LAIN

### Tarif & Jasa
Tarif dan jasa dokter bervariasi berdasarkan jenis pemeriksaan dengan pilihan yang telah ditentukan.

## 🛠 Teknologi

- **HTML5**: Struktur semantic modern
- **CSS3**: 
  - CSS Grid & Flexbox untuk layout responsive
  - CSS Custom Properties untuk konsistensi warna
  - Animations & transitions yang smooth
  - Mobile-first approach
- **JavaScript (ES6+)**:
  - Modern JavaScript features
  - Local Storage API
  - File download API
  - Event-driven architecture

## 🎨 Desain

### Sistem Warna
- **Primary**: Biru profesional (#007BFF)
- **Neutral**: Skala abu-abu untuk struktur
- **Success/Warning/Error**: Untuk notifikasi status

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarki**: Heading 1-4 dengan ukuran dan weight yang optimal
- **Readability**: Line height dan letter spacing yang nyaman dibaca

### Layout
- **Container**: Max-width 1280px dengan padding responsif
- **Grid System**: 4px grid untuk konsistensi spacing
- **Cards**: Shadow dan border radius untuk depth
- **Responsive**: Mobile-first dengan breakpoint 768px

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 kolom, touch-friendly)
- **Desktop**: ≥ 768px (2 kolom form, table expanded)

## 🚀 Cara Penggunaan

### 1. Menambah Data
1. Klik tombol "Tambah Data"
2. Isi semua field yang wajib diisi (ber tanda *)
3. Pilih jenis pemeriksaan untuk mendapatkan tarif otomatis
4. Klik "Simpan Data"

### 2. Mengedit Data
1. Klik ikon edit pada data yang ingin diubah
2. Ubah field yang diperlukan
3. Klik "Simpan Data"

### 3. Menghapus Data
1. Klik ikon hapus pada data yang ingin dihapus
2. Konfirmasi pada popup dialog

### 4. Mencari Data
1. Gunakan kolom "Cari data" untuk pencarian teks
2. Gunakan dropdown "Semua Bulan" untuk filter bulan

### 5. Mengekspor Data
1. Klik tombol "Unduh CSV"
2. File akan terunduh dengan nama `logbook-radiologi-YYYY-MM.csv`

## 🔧 Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub
1. Buat akun GitHub jika belum ada
2. Buat repository baru dengan nama `logbook-radiologi`
3. Pilih "Public" untuk GitHub Pages gratis

### Langkah 2: Upload File
1. Upload semua file ke repository:
   - `index.html`
   - `styles/main.css`
   - `scripts/main.js`
   - `README.md`

### Langkah 3: Enable GitHub Pages
1. Masuk ke repository Settings
2. Scroll ke bagian "Pages"
3. Pilih Source: "Deploy from a branch"
4. Pilih Branch: "main"
5. Folder: "/ (root)"
6. Klik Save

### Langkah 4: Akses Website
- Website akan tersedia di: `https://username.github.io/logbook-radiologi`
- Ganti `username` dengan username GitHub Anda

## 💾 Penyimpanan Data

- **Tipe**: Local Storage (Browser)
- **Format**: JSON
- **Kapasitas**: ±5-10MB (tergantung browser)
- **Backup**: Manual dengan fitur export CSV

## 🔒 Keamanan & Privasi

- **Data Lokal**: Semua data tersimpan di browser pengguna
- **Tidak Ada Server**: Tidak ada data yang dikirim ke server
- **Offline**: Website berfungsi tanpa koneksi internet
- **Manual Backup**: Gunakan fitur export untuk backup data

## 🛡 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📞 Support

Untuk bantuan atau pertanyaan:
1. Baca dokumentasi ini dengan teliti
2. Periksa console browser untuk error messages
3. Pastikan browser mendukung Local Storage

## 📄 Lisensi

Proyek ini dibuat khusus untuk PKU Muhammadiyah Kutoarejo.

## 🔄 Changelog

### v1.0.0 (2025-11-26)
- ✅ Form responsive modern dengan UI menarik
- ✅ Sistem penyimpanan lokal storage
- ✅ Fitur CRUD (Create, Read, Update, Delete)
- ✅ Ekspor data ke CSV
- ✅ Search dan filter data
- ✅ Statistik real-time
- ✅ Validasi form comprehensive
- ✅ Tarif dinamis berdasarkan jenis pemeriksaan
- ✅ Deploy ready untuk GitHub Pages

---

**Dibuat dengan ❤️ untuk PKU Muhammadiyah Kutoarejo**