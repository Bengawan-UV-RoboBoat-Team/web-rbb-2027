# Rencana Implementasi: Fitur Arsip & Rekam Jejak Tim (Team Legacy)

Dokumen ini merinci rencana teknis dan desain untuk menggantikan integrasi website lama (*external subdomains*) menjadi modul arsip terpadu di dalam website **RoboBoat Bengawan UV**.

---

## 1. Latar Belakang & Tujuan

### Masalah Saat Ini
* Bagian *Past Team* di `profile.vue` masih mengarahkan pengguna ke subdomain terpisah (`https://2025.buvroboboatuns.com`, `https://2024...`, dst.).
* Mengakibatkan inkonsistensi antarmuka pengguna (UI/UX), risiko *broken link* jika domain/hosting lama non-aktif, serta mengurangi waktu retensi pengunjung di website utama.

### Solusi & Sasaran
* Menyediakan sistem arsip internal yang menampilkan informasi secukupnya mengenai rekam jejak tiap tahun (2021 – 2026).
* Fokus pada 4 pilar yang dinilai oleh juri RoboBoat: **Armada (Vessel)**, **Tim (Crew)**, **Prestasi (Achievements)**, dan **Dokumen Teknis (TDR/Media)**.
* Navigasi tetap bersih tanpa perlu menambah menu baru di Navbar utama.

---

## 2. Arsitektur Navigasi & User Flow

```
[ Navbar: Profile > Past Teams ]
                 │
                 ▼
[ Profile Page: Timeline Kartu (2026 → 2021) ]
  ├── Klik Card Tahun (Misal: 2024)
  │
  ▼
[ Halaman Dinamis: /legacy/[year] ]
  ├── Quick Year Switcher: [2026] [2025] [2024] [2023] [2022] [2021]
  ├── 🎯 Mission & Theme (Tantangan & Skenario Kompetisi)
  ├── 🚤 1. The Vessel (Nama & Foto Kapal, Inovasi Penjawab Misi)
  ├── 👥 2. The Crew (Foto Tim Angkatan & Deskripsi)
  ├── 🏆 3. Achievements (Penghargaan & Ranking)
  └── 📄 4. Technical Documents & Video (TDR PDF & Video Intro)
```

### Akses Masuk (Entry Points)
1. **Dropdown Profile**: Menu *Profile > Past Teams* mengarahkan ke anchor `#past-teams` di `profile.vue`.
2. **Halaman Profile (`/profile`)**: Section *Past Teams* diubah menjadi **timeline vertikal berbasis kartu**, dengan tahun terbaru di atas (2026 → 2021).
3. **Halaman Our Boat (`/boat`)**: Bagian *Our Fleet History* dapat diberi tautan langsung ke `/legacy/[year]`.
4. **Footer**: Link ringkas *"Team Legacy & History"* pada footer navigasi.

### Desain Past Teams: Timeline Berbasis Kartu

Timeline memperlihatkan perjalanan tim dari tahun ke tahun, sementara kartu memberi identitas visual untuk setiap angkatan melalui foto kapal atau tim.

* **Desktop**: Garis timeline vertikal di tengah, dengan kartu bergantian di sisi kiri dan kanan serta penanda tahun pada garis.
* **Mobile**: Kartu disusun dalam satu kolom, dengan garis timeline dan penanda tahun di sisi kiri.
* **Urutan**: Tahun terbaru ditampilkan paling atas, dari 2026 hingga 2021.
* **Isi setiap kartu**: Tahun, satu foto kapal atau tim, nama kapal, satu pencapaian utama, dan tombol *"Explore [Year] Journey →"* menuju `/legacy/[year]`.
* **Sumber konten kartu**: Menggunakan data tahun yang sama di `legacy.json`, yaitu `year`, `boat.name`, `boat.image` atau `team.image`, serta `achievements.highlight`.
* **Detail lengkap**: Cerita tim, inovasi kapal, daftar penghargaan, dan dokumen teknis ditampilkan di halaman detail tahunan agar kartu tetap ringkas.
* **Navigasi halaman detail**: Menggunakan tombol pilihan tahun (*Year Quick Switcher*) yang sederhana, berurutan dari terbaru ke terlama, dengan penanda tahun aktif. Timeline menjadi elemen utama pada section *Past Teams* di Profile.

---

## 3. Spesifikasi Konten Halaman Detail (`/legacy/[year].vue`)

Halaman dinamis berbasis Nuxt 3 yang menerima parameter `year` (2021 - 2026).

| Bagian | Elemen | Sumber Data |
| :--- | :--- | :--- |
| **Hero / Header** | Judul Kompetisi, Lokasi (contoh: *Sarasota, Florida*), Tahun, dan Navigasi Cepat (Pill Tahun) | `legacy.json` |
| **Mission & Theme** | *Mission Briefing Card*: Nama tema kompetisi tahun itu & deskripsi misi utama yang harus diselesaikan ASV | `legacy.json` |
| **1. The Vessel** | Foto kapal, nama armada (*Mandakini Neo s/d Zenith*), ringkasan inovasi kapal yang menjawab tema | `legacy.json` & `past_boats.json` |
| **2. The Crew** | Foto tim angkatan, cerita singkat / roster tim | `legacy.json` & `team.json` |
| **3. Achievements** | Highlight juara utama & daftar penghargaan sub-kategori | `achievements.json` |
| **4. Technical Docs** | Tombol baca/unduh *Technical Design Report* (PDF) & link video YouTube | `tdr.json` |

---

## 4. Struktur Data Terpadu (`assets/data/legacy.json`)

Untuk menjaga efisiensi pemeliharaan, seluruh data rekam jejak tahunan disatukan ke dalam satu file data terstruktur:

```json
[
  {
    "year": "2025",
    "competition": "RoboBoat 2025",
    "location": "Sarasota, Florida, USA",
    "theme": {
      "title": "Storm Response & Autonomous Navigation",
      "summary": "Tantangan navigasi otonom dalam skenario badai cuaca ekstrem, deteksi rintangan dinamis, dan operasi penyelamatan maritim."
    },
    "boat": {
      "name": "Mandakini Zenith",
      "image": "/images/mandakini/2025-mandakini-zenith.webp",
      "summary": "Pengembangan sistem kendali otonom generasi terbaru dengan peningkatan manuver lambung kapal."
    },
    "team": {
      "name": "RoboBoat 2025 Team",
      "image": "/images/past-team/buv-rbb-2025.webp",
      "description": "Tim delegasi Bengawan UV Universitas Sebelas Maret pada International RoboBoat Competition 2025."
    },
    "achievements": {
      "highlight": "2nd Place Autonomy Challenge",
      "sub_highlight": "6th Place Overall Design Documentation",
      "details": [
        "3rd Place Technical Design Report",
        "5th Place Team Website",
        "7th Place Team Video Introduction"
      ]
    },
    "documents": {
      "tdr_link": "https://drive.google.com/file/d/1QJmuV4IBkKs0jUoPjFI_g7CEAseUbGi4/view?usp=drive_link",
      "tdr_filename": "TDR_Universitas-Sebelas-Maret_RB2025.pdf",
      "video_link": "https://www.youtube.com/embed/-b4el_OHARQ"
    }
  }
]
```

---

## 5. Tahapan Eksekusi Teknis

- [ ] **Fase 1: Konsolidasi Data**
  - Membuat file `assets/data/legacy.json` mencakup data tahun 2021, 2022, 2023, 2024, 2025, dan 2026.
  - Memastikan path foto lokal dan tautan dokumen valid.
- [ ] **Fase 2: Pembuatan Halaman Dinamis**
  - Membuat file `app/pages/legacy/[year].vue`.
  - Mengimplementasikan layout 4 seksi (Armada, Tim, Prestasi, Dokumen).
  - Menambahkan *Year Quick Switcher* berupa tombol tahun dari terbaru ke terlama, dengan penanda tahun aktif.
  - Menambahkan penanganan jika tahun yang dimasukkan di URL tidak valid (redirect/fallback).
- [ ] **Fase 3: Pembaharuan Komponen Timeline di Profile**
  - Memperbarui section `#past-teams` di `app/pages/profile.vue` dengan kartu timeline interaktif.
  - Mengurutkan kartu dari 2026 hingga 2021 menggunakan data dari `legacy.json`.
  - Membuat layout desktop dengan kartu bergantian kiri–kanan dan layout mobile satu kolom dengan garis timeline di kiri.
  - Menampilkan tahun, foto kapal atau tim, nama kapal, dan satu pencapaian utama pada setiap kartu.
  - Mengganti tombol tautan eksternal *"Visit Website"* dengan tombol internal *"Explore [Year] Journey →"*.
- [ ] **Fase 4: Integrasi Halaman Fleet History (`/boat`)**
  - Menambahkan tautan dari kartu kapal di `app/pages/boat.vue` menuju ke halaman `/legacy/[year]`.
- [ ] **Fase 5: Testing & Validasi**
  - Uji responsivitas timeline: kartu bergantian kiri–kanan pada desktop dan satu kolom pada mobile, tanpa luapan horizontal.
  - Memastikan urutan tahun terbaru di atas, tombol kartu menuju tahun yang sesuai, dan penanda tahun aktif pada *Year Quick Switcher* benar.
  - Memastikan *build* statis (`npm run generate`) berjalan tanpa error.

