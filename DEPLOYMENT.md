# Panduan Deploy ke GitHub Pages

Panduan lengkap untuk deploy aplikasi Logbook Radiologi ke GitHub Pages agar dapat diakses secara online.

## 📋 Persyaratan

- Akun GitHub (gratis)
- File website sudah siap (HTML, CSS, JS)
- Koneksi internet

## 🚀 Langkah Deploy

### 1. Buat Repository GitHub

1. **Masuk ke GitHub**
   - Kunjungi https://github.com
   - Login ke akun Anda

2. **Buat Repository Baru**
   - Klik tombol "+" di pojok kanan atas
   - Pilih "New repository"
   - Isi nama repository: `logbook-radiologi-kutoarejo`
   - Pilih "Public" (wajib untuk GitHub Pages gratis)
   - Centang "Add a README file"
   - Klik "Create repository"

### 2. Upload File Website

#### Opsi A: Upload via Web Interface

1. **Masuk ke Repository**
   - Buka repository yang baru dibuat
   - Klik "uploading an existing file" atau drag & drop file

2. **Upload File satu per satu**
   ```
   - index.html (file utama)
   - styles/main.css (stylesheet)
   - scripts/main.js (JavaScript)
   - README.md (dokumentasi)
   ```

3. **Commit Changes**
   - Tulis commit message: "Initial upload - Logbook Radiologi"
   - Klik "Commit changes"

#### Opsi B: Clone dan Push (Untuk yang familiar dengan Git)

```bash
# Clone repository
git clone https://github.com/USERNAME/logbook-radiologi-kutoarejo.git
cd logbook-radiologi-kutoarejo

# Copy file ke folder repository
# index.html, styles/main.css, scripts/main.js, README.md

# Add, commit, dan push
git add .
git commit -m "Initial upload - Logbook Radiologi"
git push origin main
```

### 3. Enable GitHub Pages

1. **Buka Settings Repository**
   - Di repository, klik tab "Settings"

2. **Scroll ke Bagian Pages**
   - Di sidebar kiri, scroll ke bawah dan klik "Pages"

3. **Configure Source**
   - Di bagian "Source", pilih "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Klik "Save"

4. **Tunggu Proses Deploy**
   - GitHub akan memproses deploy (biasanya 1-5 menit)
   - Akan muncul URL website Anda

### 4. Akses Website

- **URL Website**: `https://USERNAME.github.io/logbook-radiologi-kutoarejo`
- **Ganti USERNAME** dengan username GitHub Anda

## 🔧 Konfigurasi Tambahan

### Custom Domain (Opsional)

Jika Anda memiliki domain sendiri:

1. **Tambahkan File CNAME**
   - Buat file bernama `CNAME` (tanpa ekstensi)
   - Isi dengan nama domain Anda, contoh: `radiologi.pkumuhammadiyah-kutoarejo.com`

2. **Konfigurasi DNS**
   - Tambahkan CNAME record di provider DNS
   - Point ke `USERNAME.github.io`

### HTTPS (Otomatis)

- GitHub Pages menyediakan SSL certificate otomatis
- Website akan tersedia di `https://` secara default

## 📱 Testing Website

Setelah deploy, test fitur-fitur berikut:

### ✅ Fitur yang Harus Berfungsi

1. **Form Input**
   - Semua field dapat diisi
   - Dropdown menampilkan pilihan yang benar
   - Date picker berfungsi

2. **Penyimpanan Data**
   - Data tersimpan saat klik "Simpan"
   - Data tetap ada setelah refresh halaman

3. **Tabel Data**
   - Data muncul di tabel
   - Kolom terisi dengan benar

4. **Edit Data**
   - Tombol edit membuka form dengan data yang benar
   - Perubahan tersimpan

5. **Hapus Data**
   - Konfirmasi hapus muncul
   - Data terhapus dari tabel

6. **Search & Filter**
   - Pencarian berdasarkan teks
   - Filter berdasarkan bulan

7. **Export CSV**
   - File CSV terunduh
   - Data lengkap sesuai dengan yang diinput

8. **Responsive**
   - Tampilan bagus di desktop
   - Tampilan bagus di mobile

## 🛠 Troubleshooting

### Website Tidak Muncul

**Masalah**: Setelah deploy, website tidak muncul atau 404 error

**Solusi**:
1. Tunggu 5-10 menit untuk proses deploy
2. Pastikan repository bersifat Public
3. Periksa Settings > Pages sudah dikonfigurasi dengan benar
4. Refresh halaman dengan Ctrl+F5

### Data Tidak Tersimpan

**Masalah**: Data tidak tersimpan setelah form disubmit

**Solusi**:
1. Periksa browser mendukung Local Storage
2. Pastikan tidak ada ad-blocker yang memblokir
3. Check console browser untuk error (F12 > Console)

### CSS/JS Tidak Terload

**Masalah**: Tampilan website berantakan atau tidak ada interaksi

**Solusi**:
1. Periksa nama file sudah sesuai (case-sensitive)
2. Pastikan struktur folder benar:
   ```
   /
   ├── index.html
   ├── styles/
   │   └── main.css
   └── scripts/
       └── main.js
   ```
3. Clear cache browser

### Mobile Tampilan Berantakan

**Masalah**: Website tidak responsif di mobile

**Solusi**:
1. Pastikan meta viewport ada di HTML:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. Test di berbagai device/browser
3. Periksa CSS media queries

## 📊 Monitoring & Maintenance

### Backup Data

1. **Manual Backup**
   - Gunakan fitur "Unduh CSV" secara berkala
   - Simpan file CSV di komputer yang aman

2. **Export Semua Data**
   ```javascript
   // Buka console browser (F12)
   // Copy dan paste kode ini untuk export semua data
   const records = JSON.parse(localStorage.getItem('radiologyRecords'));
   const dataStr = JSON.stringify(records, null, 2);
   const dataBlob = new Blob([dataStr], {type:'application/json'});
   const url = URL.createObjectURL(dataBlob);
   const link = document.createElement('a');
   link.href = url;
   link.download = 'backup-radiologi.json';
   link.click();
   ```

### Update Website

Untuk update fitur atau fix bug:

1. Edit file lokal
2. Upload file yang sudah diubah ke repository
3. GitHub Pages akan otomatis update (1-5 menit)

### Performance

- Website adalah static site, sangat cepat loading
- Tidak perlu server atau database
- Mendukung thousands of records tanpa masalah performa

## 🔒 Security & Privacy

### Data Security
- ✅ Semua data tersimpan lokal di browser user
- ✅ Tidak ada data yang dikirim ke server GitHub
- ✅ User memiliki kontrol penuh atas data mereka

### Privacy
- ✅ Tidak ada tracking atau analytics
- ✅ Tidak ada cookies tracking
- ✅ Tidak ada data yang dikumpulkan

### Best Practices
- Regular backup menggunakan export CSV
- Jangan share link website secara public jika berisi data sensitif
- Update browser untuk keamanan

## 📞 Support

Jika mengalami masalah:

1. **Cek Console Browser**: F12 > Console untuk error messages
2. **Test di Browser Lain**: Chrome, Firefox, Safari, Edge
3. **Check GitHub Status**: https://www.githubstatus.com/
4. **Dokumentasi**: Baca README.md untuk detail fitur

---

**Deploy berhasil! Website Logbook Radiologi PKU Muhammadiyah Kutoarejo sudah online dan siap digunakan.** 🎉