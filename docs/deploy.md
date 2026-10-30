# PANDUAN DEPLOYMENT WEBSITE BENGAWAN UV ROBOBOAT
## Hosting Gratis, Cepat & Otomatis via Git Push

Dokumen ini adalah panduan lengkap mempublikasikan (*deploy*) website **Bengawan UV RoboBoat** secara **100% GRATIS** menggunakan platform modern (**Cloudflare Pages** atau **Vercel**), menggantikan shared hosting/cPanel berbayar.

---

## 📋 Informasi Teknis Proyek

* **Framework:** Nuxt 3 (Static Site Generation / SSG)
* **Build Command:** `npm run generate`
* **Output Directory:** `.output/public`
* **Node.js Version:** `20` (Wajib LTS)
* **GitHub Repository:** `https://github.com/Bengawan-UV-RoboBoat-Team/web-rbb-2027`

---

## 🛡️ OPSI 1: Cloudflare Pages (Pilihan Utama - Kuota Unlimited)

Sangat direkomendasikan karena **Bandwidth dan Request 100% UNLIMITED**. Bebas biaya selamanya, meskipun juri dan ribuan pengunjung mengunduh file PDF TDR (10MB+) dan melihat galeri foto resolusi tinggi.

### Langkah-Langkah Setup (Hanya Sekali di Awal):

1. **Daftar / Login ke Cloudflare:**
   * Buka [dash.cloudflare.com](https://dash.cloudflare.com/) dan buat akun (atau login).

2. **Hubungkan ke GitHub:**
   * Di dashboard sebelah kiri, klik menu **Workers & Pages**.
   * Klik tombol **Create Application** $\rightarrow$ pilih tab **Pages**.
   * Klik **Connect to Git** $\rightarrow$ Pilih akun/organisasi GitHub tim Anda.
   * Pilih repositori: **`web-rbb-2027`** $\rightarrow$ Klik **Begin setup**.

3. **Pengaturan Build (Build Settings):**
   Isi konfigurasi persis seperti berikut:
   * **Project name:** `bengawan-roboboat` *(atau nama pilihan tim)*
   * **Production branch:** `main`
   * **Framework preset:** Pilih **`Nuxt.js`**
   * **Build command:** `npm run generate`
   * **Build output directory:** `.output/public`

4. **Konfigurasi Environment Variable (Penting):**
   * Di bagian bawah, buka dropdown **Environment variables**.
   * Tambahkan variabel baru:
     * **Variable name:** `NODE_VERSION`
     * **Value:** `20`
   *(Langkah ini wajib agar server Cloudflare menggunakan Node.js v20 yang kompatibel dengan Nuxt 3).*

5. **Deploy:**
   * Klik tombol **Save and Deploy**.
   * Tunggu proses build selesai (~1 - 2 menit).
   * Website Anda langsung online dengan alamat gratis: `https://bengawan-roboboat.pages.dev`.

---

## ▲ OPSI 2: Vercel (Opsi Alternatif - Sangat Cepat & Instan)

Alternatif jika ingin antarmuka yang sangat ramah pengguna dan integrasi otomatis bawaan Nuxt.

### Langkah-Langkah Setup:
1. Buka [vercel.com](https://vercel.com/) dan klik **Sign Up** menggunakan akun GitHub tim.
2. Di dashboard, klik **Add New...** $\rightarrow$ **Project**.
3. Cari repositori `web-rbb-2027`, lalu klik **Import**.
4. Vercel akan otomatis mendeteksi Framework **Nuxt.js**.
5. Klik tombol **Deploy**.
6. Dalam waktu 1 menit, web Anda online di alamat: `https://[nama-proyek].vercel.app`.

*(Catatan: Batas kuota gratis Vercel adalah 100 GB bandwidth/bulan).*

---

## 🔄 Cara Update Konten Selanjutnya (Otomatis via Git)

Setelah salah satu platform di atas terpasang, Anda **TIDAK PERLU** lagi upload file zip atau buka file manager hosting.

Cukup lakukan langkah standar Git di laptop Anda:
```bash
# 1. Pastikan perubahan sudah disimpan
git add .

# 2. Buat catatan perubahan
git commit -m "Update konten profil dan data armada 2027"

# 3. Kirim ke GitHub
git push origin main
```

**Selesai!** Cloudflare Pages atau Vercel akan otomatis mendeteksi push tersebut, me-render ulang website, dan memperbarui web live dalam 1-2 menit.

---

## 🌐 Menghubungkan Domain / Subdomain Kampus

Jika domain lama habis, tim dapat menggunakan **Subdomain Resmi UNS (Gratis Selamanya)**.

### Contoh Alamat:
* `bengawanuv.uns.ac.id` atau `roboboat.uns.ac.id`

### Cara Pengajuan & Integrasi:
1. **Hubungi UPT TIK / Biro Akademik UNS:**
   * Ajukan permohonan penambahan **DNS Record (CNAME)** untuk subdomain tim.
2. **Jika menggunakan Cloudflare Pages:**
   * Di Cloudflare Pages $\rightarrow$ Buka project Anda $\rightarrow$ Tab **Custom Domains** $\rightarrow$ Klik **Set up a custom domain**.
   * Masukkan nama domain/subdomain yang diinginkan.
   * Cloudflare akan memberikan alamat target CNAME, misalnya:
     * **Type:** `CNAME`
     * **Name:** `roboboat`
     * **Target:** `bengawan-roboboat.pages.dev`
3. Berikan informasi target tersebut ke pihak admin IT/TIK UNS untuk dipasangkan ke DNS kampus.

---

## 🛠️ Troubleshooting (Masalah Umum Saat Deploy)

### 1. Error: `Node version not supported`
* **Penyebab:** Cloudflare Pages secara bawaan terkadang menggunakan Node.js versi lama (v16/v18).
* **Solusi:** Pastikan Environment Variable `NODE_VERSION` sudah diisi `20` di menu Settings $\rightarrow$ Environment Variables.

### 2. File Gambar Tidak Muncul (Broken Image)
* **Penyebab:** Server Linux bersifat *case-sensitive* (huruf besar dan kecil dibedakan).
* **Solusi:** Pastikan nama file gambar di kode dan di folder `public/images/` persis sama huruf besar/kecilnya (misal `kapal.webp` bukan `Kapal.webp`).

### 3. Halaman 404 Saat Refresh Sub-halaman
* **Penyebab:** Output directory salah disetel.
* **Solusi:** Pastikan build output directory adalah `.output/public` dan perintah build menggunakan `npm run generate` (bukan `npm run build`).

