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
* **Sumber konten kartu**: Menggunakan data tahun yang sama di `legacy.json`, yaitu `year`, `boat.name`, `boat.image` atau `team.image`, serta `achievements.highlight`. Untuk 2021, pertahankan dua penghargaan setara di `equal_highlights`; jika kartu hanya menampilkan satu, gunakan penghargaan pertama sebagai cuplikan dan tampilkan keduanya pada halaman detail. Jika prestasi belum tersedia, bagian prestasi pada kartu dapat disembunyikan.
* **Detail lengkap**: Cerita tim, inovasi kapal, daftar penghargaan, dan dokumen teknis ditampilkan di halaman detail tahunan agar kartu tetap ringkas.
* **Navigasi halaman detail**: Menggunakan tombol pilihan tahun (*Year Quick Switcher*) yang sederhana, berurutan dari terbaru ke terlama, dengan penanda tahun aktif. Timeline menjadi elemen utama pada section *Past Teams* di Profile.

---

## 3. Spesifikasi Konten Halaman Detail (`/legacy/[year].vue`)

Halaman dinamis berbasis Nuxt 4 (sesuai `package.json`) yang menerima parameter `year` (2021 - 2026).

| Bagian | Elemen | Sumber Data |
| :--- | :--- | :--- |
| **Hero / Header** | Judul Kompetisi, Lokasi (contoh: *Sarasota, Florida*), Tahun, dan Navigasi Cepat (Pill Tahun) | `legacy.json` |
| **Mission & Theme** | *Mission Briefing Card*: Nama tema kompetisi tahun itu & deskripsi misi utama yang harus diselesaikan ASV | `legacy.json` |
| **1. The Vessel** | Foto kapal, nama armada (*Mandakini Neo s/d Raiden*), ringkasan inovasi kapal yang menjawab tema | `legacy.json` |
| **2. The Crew** | Foto tim angkatan, cerita singkat / roster tim | `legacy.json` |
| **3. Achievements** | Highlight juara utama & daftar penghargaan sub-kategori | `legacy.json` |
| **4. Technical Docs** | Tombol baca/unduh *Technical Design Report* (PDF) & link video YouTube | `legacy.json` |

---

## 4. Struktur Data Terpadu (`assets/data/legacy.json`)

Untuk menjaga efisiensi pemeliharaan, seluruh data rekam jejak tahunan disatukan ke dalam satu file data terstruktur:

File `assets/data/legacy.json` telah dibuat untuk 2026 hingga 2021, berurutan dari terbaru ke terlama. File ini menjadi sumber data untuk halaman arsip dan timeline yang akan dibuat; file data lama tetap digunakan oleh halaman yang sudah ada.

Aturan data:

* `year` berupa string empat digit. URL aset lokal diawali `/`.
* Objek kapal, tim, dan anggota roster memiliki `image_width` serta `image_height` sesuai ukuran file asli. Jika gambar tidak tersedia, kedua nilai bernilai `null`. Perbarui dimensi ketika mengganti file gambar agar rasio awal HTML tetap benar.
* Frame tampilan diseragamkan per jenis: 3:4 untuk potret crew dan 3:2 untuk kapal serta foto tim. `member.image_fit: "contain"` mempertahankan kartu berdesain seperti 2025 secara utuh; foto biasa memakai crop dengan posisi atas. File sumber dan metadata dimensinya tetap utuh.
* Nilai `null` berarti konten belum tersedia atau belum terkonfirmasi, bukan tidak pernah ada. Halaman harus dapat menangani tema, foto tim, ringkasan, deskripsi, roster, dan video yang kosong.
* Struktur `achievements` selalu memiliki `highlight`, `sub_highlight`, `equal_highlights`, dan `details`. Array kosong tidak menyatakan tim tidak mendapat penghargaan; untuk 2026 hasilnya belum tersedia. Kedua penghargaan setara 2021 dipertahankan.
* `team.roster` berisi kelompok `team_leader`, `technical_team`, dan `non_technical_team` untuk seluruh tahun. Field utama anggota adalah `name`, `role`, `major`, dan `image`. Hasil ekstraksi 2021–2025 juga dapat memiliki `cohort` (tahun masuk kuliah), `research_area`, dan `specific_role`. Tahun masuk kuliah bukan tahun kompetisi. Seluruh 82 potret anggota lama telah disimpan sebagai WebP pada `/images/legacy/crew/[year]/` dan dihubungkan melalui `image`.
* Tema resmi 2022–2026 telah dikonfirmasi melalui halaman musim kompetisi RoboBoat. Setiap tema memiliki `title`, `summary` yang diparafrasekan, dan `source_url` menuju sumber resmi; tautannya ditampilkan pada kartu Mission & Theme. Tema 2021 tetap `null` karena nama khusus belum ditemukan pada halaman program dan aturan resmi yang diperiksa. Ringkasan kapal dan cerita tim 2021–2025 telah dilengkapi dari halaman lama dan TDR; deskripsi tim dan foto tim 2026 masih `null`.
* `documents.tdr_link` memakai PDF lokal untuk 2021–2026. Empat TDR 2021–2024 disimpan di `/papers/legacy/`; PDF 2025 yang sudah ada dipakai ulang setelah hash-nya cocok dengan unduhan website lama. `tdr_filename` mengikuti nama file lokal.
* `documents.video_link` berisi video yang dilabeli *Team Introduction* untuk 2023–2025. `documents.supporting_videos` pada 2021–2025 adalah daftar `{ "title": "...", "url": "..." }` untuk video berlabel lain; 2021 memiliki dua Skills Video dan 2022 memiliki Competition Video serta Demonstration Video. Video 2026 belum dikonfirmasi. Pemutaran video eksternal belum diverifikasi.
* URL sumber, jumlah roster, hash PDF, dan perbedaan antar sumber dicatat pada `docs/legacy-sources.json`. Nama yang hanya muncul sebagai inisial penulis TDR tidak otomatis ditambahkan sebagai anggota dengan identitas lengkap.

Contoh berikut menunjukkan struktur entri 2025; roster disingkat menjadi ketua saja agar mudah dibaca. File aktual juga berisi 6 anggota teknis dan 10 anggota nonteknis. Hasil inventarisasi awal dan pembaruan ekstraksi tersedia pada bagian 6 dan 7.

```json
[
  {
    "year": "2025",
    "competition": "RoboBoat 2025",
    "location": "Sarasota, Florida",
    "theme": {
      "title": "Environmental Monitoring",
      "summary": "An environmental-monitoring season in which student-built autonomous surface vessels tackled maritime tasks including obstacle avoidance and precise autonomous navigation.",
      "source_url": "https://roboboat.org/2025-roboboat/"
    },
    "boat": {
      "name": "Mandakini Zenith",
      "image": "/images/mandakini/2025-mandakini-zenith.webp",
      "summary": "Mandakini Zenith retained the modular concept with a round catamaran hull and a raised frame. Development focused on control algorithms, camera and LiDAR sensor fusion, azimuth propulsion, power monitoring, and mechanisms for object and water delivery."
    },
    "team": {
      "name": "RoboBoat 2025 Team",
      "image": "/images/past-team/buv-rbb-2025.webp",
      "description": "Muhammad Rayhan Bramantyo led the Mandakini Zenith delegation. Technical members worked on navigation, perception, hull design, and manufacturing; non-technical members supported administration, finances, external relations, sponsorship, and visual media.",
      "roster": {
        "team_leader": [
          {
            "name": "Muhammad Rayhan Bramantyo",
            "role": "Team Leader",
            "major": "Electrical Engineering",
            "cohort": "2022",
            "image": "/images/legacy/crew/2025/muhammad-rayhan-bramantyo.webp",
            "image_fit": "contain",
            "research_area": "Power System, Mechatronic, IoT"
          }
        ],
        "technical_team": [],
        "non_technical_team": []
      }
    },
    "achievements": {
      "highlight": "2nd Place Autonomy Challenge",
      "sub_highlight": "6th Place Overall Design Documentation",
      "equal_highlights": [],
      "details": [
        "3rd Place Technical Design Report",
        "5th Place Team Website",
        "7th Place Team Video Introduction"
      ]
    },
    "documents": {
      "tdr_link": "/papers/TDR_Universitas-Sebelas-Maret_RB2025.pdf",
      "tdr_filename": "TDR_Universitas-Sebelas-Maret_RB2025.pdf",
      "video_link": "https://www.youtube.com/embed/aXdJKITc04k",
      "supporting_videos": []
    }
  }
]
```

---

## 5. Tahapan Eksekusi Teknis

- [ ] **Fase 1: Konsolidasi Data**
  - [x] Menginventarisasi dan mencocokkan sumber lokal tahun 2021–2026 serta mencatat kekurangan data (lihat bagian 6).
  - [x] Membuat file `assets/data/legacy.json` mencakup data tahun 2021, 2022, 2023, 2024, 2025, dan 2026.
  - [x] Memastikan seluruh path gambar dan PDF lokal yang digunakan oleh `legacy.json` tersedia, serta URL eksternal berformat HTTPS.
  - [ ] Memverifikasi akses publik dan isi dokumen eksternal serta melengkapi konten yang belum terkonfirmasi.
- [x] **Fase 2: Pembuatan Halaman Dinamis**
  - [x] Membuat file `app/pages/legacy/[year].vue`.
  - [x] Mengimplementasikan layout 4 seksi (Armada, Tim, Prestasi, Dokumen), ditambah Mission & Theme jika tersedia.
  - [x] Menambahkan *Year Quick Switcher* berupa tombol tahun dari terbaru ke terlama, dengan penanda tahun aktif.
  - [x] Menambahkan validasi tahun dan respons 404 untuk tahun yang tidak tersedia.
  - [x] Mendaftarkan rute `/legacy/[year]` dari `legacy.json` pada konfigurasi prerender agar proses generate tidak bergantung pada tautan dari timeline.
- [x] **Fase 3: Pembaharuan Komponen Timeline di Profile**
  - [x] Memperbarui section `#past-teams` di `app/pages/profile.vue` dengan kartu timeline interaktif.
  - [x] Mengurutkan kartu dari 2026 hingga 2021 menggunakan data dari `legacy.json`.
  - [x] Membuat layout desktop dengan kartu bergantian kiri–kanan dan layout mobile satu kolom dengan garis timeline di kiri.
  - [x] Menampilkan tahun, foto kapal atau tim, nama kapal, dan satu pencapaian utama jika tersedia pada setiap kartu.
  - [x] Mengganti tombol tautan eksternal *"Visit Website"* dengan tombol internal *"Explore [Year] Journey →"*.
- [x] **Fase 4: Integrasi Jalur Masuk Arsip**
  - [x] Menambahkan tautan dari seluruh kartu Fleet History di `app/pages/boat.vue` menuju ke halaman `/legacy/[year]`, beserta label *Explore [Year] Journey* dan indikator fokus keyboard.
  - [x] Menambahkan tautan *Team Legacy & History* pada footer `app/layouts/default.vue` menuju `/profile#past-teams`.
  - [x] Mempertahankan dropdown *Profile > Past Teams* menuju `/profile#past-teams`, serta membuka dropdown Profile saat fokus keyboard berada di dalamnya.
- [ ] **Fase 5: Testing & Validasi**
  - [x] Uji responsivitas timeline pada Edge dengan lebar 1280 dan 390 piksel: kartu bergantian kiri–kanan pada desktop dan satu kolom pada mobile, tanpa luapan horizontal.
  - Memastikan urutan tahun terbaru di atas, tombol kartu menuju tahun yang sesuai, dan penanda tahun aktif pada *Year Quick Switcher* benar.
  - [x] Memastikan *build* statis (`npm run generate`) berhasil dan menghasilkan halaman Profile serta seluruh halaman legacy.

---

## 6. Hasil Inventarisasi Konten 2021–2026

Audit dilakukan pada **4 November 2026**, berdasarkan file yang tersedia di repository. Status "tersedia" berarti ditemukan dan cocok antarfile lokal; kebenaran hasil kompetisi, isi PDF, identitas foto, serta akses publik tautan eksternal belum diverifikasi melalui sumber luar.

### 6.1. Peta Sumber

| Konten | Sumber lokal | Catatan pencocokan |
| :--- | :--- | :--- |
| Kapal 2021–2025 | `assets/data/past_boats.json` | `year`, `name`, dan `image`; nama kapal cocok dengan `boat_name` di `tdr.json` untuk seluruh tahun ini. |
| Kapal 2026 | `assets/data/tdr.json`, `app/pages/boat.vue` | Mandakini Raiden; belum menjadi entri di `past_boats.json`. |
| Tim 2021–2025 | `assets/data/team.json` → `past_team` | Berisi label alumni, tahun, foto, dan website lama; belum ada cerita atau roster tiap angkatan. Nilai `year` berbentuk `Roboboat 2025`, sehingga perlu dinormalisasi menjadi `2025`. |
| Tim 2026 | `assets/data/team.json`, `app/pages/profile.vue` → `#team2026` | Roster yang ditampilkan: 1 ketua, 5 anggota teknis, dan 9 anggota nonteknis; JSON belum memiliki penanda tahun untuk kelompok ini. |
| Prestasi 2021–2025 | `assets/data/achievements.json` | Tahun diambil dari `competition`, bukan field `year`. Prestasi 2026 belum tercantum. |
| TDR 2021–2026 | `assets/data/tdr.json`, `public/papers/` | `tdr.json` adalah sumber TDR. `papers.json` berisi publikasi ilmiah, bukan daftar TDR kompetisi. |
| Tema dan misi 2026 | `app/pages/roboboat2026.vue`, `app/pages/boat.vue` | Kedua halaman menyebut Storm Response. Tema 2021–2025 belum ditemukan di sumber konten yang diperiksa. |
| Inovasi kapal | `app/pages/boat.vue`, `assets/data/improvements.json` | Ada penjelasan Raiden 2026 dan perbandingan dengan Zenith 2025; ringkasan historis 2021–2024 belum tersedia. |
| Video | `app/pages/roboboat2026.vue`, `app/pages/index.vue`, `assets/data/news.json` | Perlu membedakan video perkenalan tim, demonstrasi misi, outreach, dan liputan berita. |
| Galeri | `assets/data/gallery.json` | Jumlah entri: 2021 = 2, 2022 = 1, 2023 = 5, 2024 = 10, 2025 = 20, 2026 = 0. |

### 6.2. Matriks Konten per Tahun

Lokasi berikut mengikuti `achievements.json` untuk 2021–2025 dan halaman kompetisi serta `tdr.json` untuk 2026. Seluruh tahun memiliki nama kompetisi RoboBoat sesuai tahunnya.

| Tahun | Kapal | Lokasi / format | Tim | Prestasi utama dari data lokal | TDR | Tema dan video perkenalan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2026 | Mandakini Raiden | Sarasota, Florida | Roster tersedia; foto perlu konfirmasi | Belum tersedia | PDF lokal | Storm Response tersedia di halaman; kandidat video `7QeoMlpd-fY` |
| 2025 | Mandakini Zenith | Sarasota, Florida | Foto dan label Alumni 2025 | 2nd Place Autonomy Challenge | Google Drive dan kandidat PDF lokal | Tema dan video perkenalan belum terkonfirmasi |
| 2024 | Mandakini Hydra | Sarasota, Florida | Foto dan label Alumni 2024 | 3rd Place Overall Design Documentation | Google Drive | Tema dan video perkenalan belum tersedia |
| 2023 | Mandakini Catra | Sarasota, Florida | Foto dan label Alumni 2023 | 4th Place Overall Design Documentation | Google Drive | Tema dan video perkenalan belum tersedia |
| 2022 | Mandakini Evo | Online | Foto dan label Alumni 2022 | 2nd Place Overall Design Documentation | Google Drive | Tema dan video perkenalan belum tersedia |
| 2021 | Mandakini Neo | Online | Foto dan label Alumni 2021 | Dua penghargaan setara: 2nd Place Skills Video: Hull Design dan 2nd Place Skills Video: Sensor Optimization | Google Drive | Tema dan video perkenalan belum tersedia |

Seluruh `sub_highlight`, `details`, dan `equal_highlights` harus ikut dipertahankan saat konsolidasi. `highlight: null` pada 2021 berarti penghargaan disimpan di `equal_highlights`, bukan tidak memiliki prestasi.

### 6.3. Inventaris Foto dan PDF Lokal

Path berikut adalah URL aset website; file fisiknya berada di dalam `public/`.

| Tahun | Foto kapal | Foto tim |
| :--- | :--- | :--- |
| 2026 | `/images/mandakini/about-raiden1.webp`; alternatif render: `/images/mandakini/render-baru-raiden3.webp` | Kandidat `/images/team/team-red-bg.png`, dipakai pada tautan Team 2026 di Home; perlu konfirmasi identitas angkatan |
| 2025 | `/images/mandakini/2025-mandakini-zenith.webp` | `/images/past-team/buv-rbb-2025.webp` |
| 2024 | `/images/mandakini/2024-mandakini-hydra.webp` | `/images/past-team/buv-rbb-2024.webp` |
| 2023 | `/images/mandakini/2023-mandakini-catra.webp` | `/images/past-team/buv-rbb-2023.webp` |
| 2022 | `/images/mandakini/2022-mandakini-evo.webp` | `/images/past-team/buv-rbb-2022.webp` |
| 2021 | `/images/mandakini/2021-mandakini-neo.webp` | `/images/past-team/buv-rbb-2021.webp` |

* **Pemeriksaan aset**: 59 referensi lokal diperiksa, seluruhnya ditemukan: 5 foto kapal dari `past_boats.json`, 5 foto alumni, 6 gambar TDR, 38 referensi galeri, dan 5 kandidat aset (2 PDF, 2 gambar Raiden, serta `/images/team/team-photo.webp`). Kandidat `team-red-bg.png` juga diperiksa terpisah dan tersedia. Pemeriksaan ini memastikan keberadaan file, bukan isi atau kecocokan visualnya.
* **TDR 2026**: `/papers/TDR_Universitas-Sebelas-Maret_2026.pdf` tersedia (10.197.155 byte). Nilai di `tdr.json` masih `papers/...` tanpa awalan `/`; gunakan URL dari root saat konsolidasi agar aman dibuka dari `/legacy/2026`.
* **TDR 2025**: `/papers/TDR_Universitas-Sebelas-Maret_RB2025.pdf` tersedia (2.837.185 byte), tetapi `tdr.json` masih menggunakan Google Drive. Bandingkan isi/versinya sebelum memilih PDF lokal sebagai sumber utama.
* **Foto tim 2026**: `team-red-bg.png` berukuran 1.616.484 byte dan belum mengikuti SOP WebP di bawah 500 KB dalam `manual.md`. Kandidat `/images/team/team-photo.webp` juga tersedia, tetapi tahun fotonya tidak dapat ditentukan dari nama file saja. Pilih foto setelah identitasnya dipastikan.

### 6.4. Inventaris Tautan TDR dan Video

Tautan Google Drive berikut disalin dari `tdr.json`. Format URL tersedia, tetapi izin akses publik, isi, dan kemampuan unduhnya belum diperiksa.

| Tahun | Tautan TDR yang tercatat |
| :--- | :--- |
| 2026 | `/papers/TDR_Universitas-Sebelas-Maret_2026.pdf` (normalisasi dari path relatif) |
| 2025 | https://drive.google.com/file/d/1QJmuV4IBkKs0jUoPjFI_g7CEAseUbGi4/view?usp=drive_link |
| 2024 | https://drive.google.com/file/d/1YG1aLOrvpWq66CKchG2TeCR9MrWGZw0x/view?usp=drive_link |
| 2023 | https://drive.google.com/file/d/1wPYgbaZP07TN8XxS2WCk2bjZao7Eywhq/view?usp=drive_link |
| 2022 | https://drive.google.com/file/d/1_hrbScPkZxpB4Qb6tPF1wUuH9fZO8YgM/view?usp=drive_link |
| 2021 | https://drive.google.com/file/d/1Oa40Pa7In00-WX74ZsEMp-Lx9j7j2hMG/view?usp=drive_link |

* **Kandidat video perkenalan 2026**: `https://www.youtube.com/embed/7QeoMlpd-fY`, ditampilkan sebagai *Team Introduction* di `index.vue` dan `roboboat2026.vue`. Penetapan tahun dan akses pemutaran masih perlu dikonfirmasi sebelum menjadi arsip final.
* **Video pada contoh 2025 sebelumnya**: `https://www.youtube.com/embed/-b4el_OHARQ` tercatat sebagai liputan INews di `news.json`, bukan sebagai video perkenalan tim. Jangan memasukkannya sebagai video intro; dapat digunakan sebagai media pendukung dengan label liputan berita.
* Video tugas di `roboboat2026.vue` adalah demonstrasi misi, sedangkan video pada artikel outreach adalah dokumentasi kegiatan. Keduanya tidak otomatis menjadi video perkenalan tahunan.

### 6.5. Kekurangan Data dan Keputusan untuk Tahap Konsolidasi

- [x] Konfirmasi tema 2022–2026 menggunakan halaman musim kompetisi resmi dan simpan sumbernya. Tema 2025 kini mengikuti sumber resmi, bukan contoh Storm Response sebelumnya.
- [x] Periksa halaman program dan aturan resmi 2021. Nama tema khusus belum ditemukan pada sumber yang ditinjau; `theme` tetap `null` tanpa menyatakan bahwa tema resmi pasti tidak ada.
- [x] Lengkapi ringkasan inovasi kapal 2021–2026 dari halaman teknis dan TDR yang sesuai; lihat pembaruan ekstraksi pada bagian 7.
- [x] Lengkapi cerita singkat dan roster historis tim 2021–2025 dari website lama.
- [ ] Lengkapi cerita singkat tim 2026.
- [ ] Konfirmasi foto tim 2026 serta kandidat video perkenalannya; kumpulkan video perkenalan 2021–2025.
- [ ] Lengkapi prestasi 2026 dari hasil yang terkonfirmasi. Untuk sementara gunakan nilai kosong, bukan klaim tidak mendapat penghargaan.
- [x] Pertahankan kedua penghargaan setara 2021 di `legacy.json`.
- [x] Tampilkan kedua penghargaan setara 2021 pada halaman detail.
- [x] Unduh TDR 2021–2025 dari halaman arsip, periksa keterbacaan dan identitas kapal/tahunnya, dan gunakan salinan lokal; file 2025 cocok dengan file lokal yang sudah ada.
- [ ] Periksa isi PDF 2026 serta pemutaran video eksternal yang dipilih. Tautan Drive lama dipertahankan sebagai catatan sumber, bukan tautan utama halaman legacy.
- [x] Normalisasi tahun di `legacy.json` menjadi string empat digit dan URL aset lokal menjadi path berawalan `/`.
- [x] Tentukan `legacy.json` sebagai sumber tampilan arsip. Data lama tetap dipertahankan untuk halaman yang masih menggunakannya.

**Status poin 1:** Inventarisasi dan pencocokan sumber lokal selesai. Konten yang belum terkonfirmasi telah dicatat.

**Status poin 2:** `assets/data/legacy.json` telah dibuat dengan enam entri tahunan, seluruh penghargaan dari sumber lama, roster 2026, serta nilai kosong untuk konten yang belum terkonfirmasi. Validasi struktur, pencocokan sumber, dan keberadaan aset lokal dilakukan tanpa mengubah halaman website. Fase 1 secara keseluruhan tetap belum selesai karena konten yang kurang dan akses publik dokumen eksternal masih perlu diverifikasi.

**Status poin 3:** Halaman `app/pages/legacy/[year].vue` telah dibuat untuk seluruh tahun di `legacy.json`. Halaman menampilkan identitas kompetisi, tema jika tersedia, kapal, foto atau roster tim, seluruh penghargaan termasuk dua penghargaan setara 2021, serta dokumen dan video jika tersedia. Tombol pilihan tahun beserta penanda tahun aktif sudah disertakan pada header. TDR lokal memiliki tombol baca dan unduh; tautan Google Drive dibuka melalui tombol baca. Tema dan video kosong disembunyikan; prestasi atau detail tim yang kosong diberi keterangan tanpa mengasumsikan tidak ada pencapaian. Validasi rute mengembalikan 404 untuk tahun yang tidak tersedia. Metadata judul dan deskripsi mengikuti tahun yang dibuka.

Verifikasi poin 3:

* Kompilasi Vue SFC dan render server terisolasi untuk keenam tahun lulus, dengan stub untuk komponen navigasi/ikon dan composable Nuxt. Pemeriksaan mencakup data kapal, tim, seluruh penghargaan, TDR, tahun aktif, dan metadata.
* Pemeriksaan validasi menolak `2099`, `2025abc`, `unknown`, serta parameter array; fallback halaman melempar error 404. Kondisi roster/TDR kosong dan video terisi juga diperiksa menggunakan data sementara dalam memori.
* `git diff --check` lulus.
* Build penuh dicoba dengan `npm.cmd run generate` (PowerShell memblokir `npm.ps1`). Proses berhenti saat inisialisasi Nuxt Content karena dependensi `better-sqlite3` belum tersedia, disusul kegagalan prompt TTY. Hasil statis dan navigasi Nuxt di browser belum terverifikasi; ulangi generate setelah dependensi proyek terpenuhi.
* Tampilan responsif menggunakan layout satu kolom, grid roster bertahap, dan pilihan tahun yang membungkus baris. Pemeriksaan visual desktop/mobile masih termasuk Fase 5.

**Status poin 4:** Navigasi antar tahun telah diselesaikan bersama poin 3 melalui *Year Quick Switcher* di header halaman detail, dengan urutan terbaru ke terlama dan atribut `aria-current` untuk tahun aktif.

**Status poin 5:** Section `#past-teams` pada `app/pages/profile.vue` telah diubah menjadi timeline kartu dari `legacy.json`, berurutan 2026 hingga 2021. Pada desktop, kartu bergantian kiri–kanan dengan penanda tahun di garis tengah; pada mobile, kartu berada dalam satu kolom dengan garis di kiri. Setiap kartu menampilkan foto kapal (atau foto tim sebagai cadangan), nama kapal, pencapaian utama jika tersedia, serta tautan internal *Explore [Year] Journey*. Kartu 2021 memakai penghargaan setara pertama sebagai cuplikan, sementara halaman detail tetap memuat keduanya. Kartu 2026 tidak menampilkan pencapaian yang belum tersedia.

Verifikasi lanjutan setelah implementasi timeline:

* Dependensi `better-sqlite3` kini tersedia di proyek. `npm.cmd run generate` berhasil dengan exit code 0 dan menghasilkan 71 rute; hambatan build yang dicatat pada poin 3 sudah teratasi. Build masih mengeluarkan peringatan tooling, tetapi proses generate selesai.
* Hasil HTML Profile diperiksa: keenam kartu berurutan benar, foto tersedia, nama kapal dan pencapaian sesuai data, kolom desktop bergantian, dan tombol menuju `/legacy/[year]` yang sesuai. Tidak ada lagi tautan subdomain lama di section Past Teams.
* Seluruh file HTML tujuan `/legacy/2021` sampai `/legacy/2026` tersedia dalam `.output/public` dan memuat nama kapal yang sesuai. Kedua penghargaan setara 2021 tetap ada pada hasil HTML detail.
* Utility CSS untuk kolom bergantian, garis tengah desktop, jarak garis mobile, dan rasio foto ditemukan pada hasil produksi. Pemeriksaan visual desktop/mobile serta interaksi browser belum dilakukan dan tetap termasuk Fase 5.

---

## 7. Ekstraksi Website Lama 2021–2025

Pembaruan pada **4 November 2026** ini melengkapi hasil audit lokal bagian 6. Halaman publik kelima subdomain dapat diambil melalui HTTPS langsung. Sumber setiap field, tautan TDR sebelumnya, hash SHA-256 PDF, dan perbedaan sumber dicatat di `docs/legacy-sources.json`.

### Konten yang Dipindahkan

| Tahun | Ketua | Roster dari website | Halaman crew | Video yang ditemukan |
| :--- | :--- | :--- | :--- | :--- |
| 2021 | Fahri Setyo Utomo | 20 anggota: 1 ketua, 8 teknis, 11 nonteknis | `https://2021.buvroboboatuns.com/Delegation.html` | Skills Video: Sensor Optimization dan Hull Design, dari arsip 2021 pada website 2022 |
| 2022 | Ahmad Ramadhan Yusfianda | 13 anggota: 1 ketua, 4 teknis, 8 nonteknis | `https://2022.buvroboboatuns.com/Profile.html` | Competition Video dan Demonstration Video |
| 2023 | Naufal Nur Saifullah | 15 anggota: 1 ketua, 6 teknis, 8 nonteknis | `https://2023.buvroboboatuns.com/profile.html` | Team Introduction |
| 2024 | Muhammad Zainnal Mutaqin | 17 anggota: 1 ketua, 6 teknis, 10 nonteknis | `https://2024.buvroboboatuns.com/profile.html` | Team Introduction |
| 2025 | Muhammad Rayhan Bramantyo | 17 anggota: 1 ketua, 6 teknis, 10 nonteknis | `https://2025.buvroboboatuns.com/profile.html` | Team Introduction dari `report&video.html` |

* **Crew:** 82 anggota historis dimasukkan ke `legacy.json`, dengan kelompok, nama, posisi jika disebutkan, dan jurusan jika tersedia. Tahun masuk kuliah disimpan sebagai `cohort`, terpisah dari tahun kompetisi. Area riset dan tanggung jawab yang disebutkan di kartu anggota 2024–2025 ikut dipertahankan dan ditampilkan di halaman detail.
* **Cerita tim dan kapal:** Deskripsi tim serta ringkasan inovasi Neo, Evo, Catra, Hydra, dan Zenith dirangkum dari halaman sesuai tahun dan TDR. Teks boilerplate yang masih menyebut urutan keikutsertaan tahun lain tidak digunakan.
* **TDR:** Empat PDF 2021–2024 disalin ke `public/papers/legacy/`. PDF 2025 hasil unduhan identik byte demi byte dengan `public/papers/TDR_Universitas-Sebelas-Maret_RB2025.pdf`, sehingga memakai file yang sudah ada. Kelima dokumen dapat dibaca sebagai PDF dan judul/identitasnya sesuai kapal atau tahun arsip. Halaman legacy kini memakai tautan lokal untuk baca dan unduh.
* **Video:** Tiga video perkenalan 2023–2025 masuk ke `documents.video_link`. Dua Skills Video 2021 dan dua video 2022 masuk ke `documents.supporting_videos` dengan label asal. Query autoplay/mute yang tidak diperlukan dihapus dari URL embed. Izin embed dan pemutaran saat ini belum diperiksa.
* **Penghargaan tambahan:** Blue Robotics Award serta Best Team for Testing and Innovation 2022 ditambahkan dari riwayat pada website 2023. BlueRobotics Award: 2 x T200 Thrusters + ESC serta Special Award: Perseverance 2023 ditambahkan dari riwayat IRC 2023 pada profil 2024. Semua penghargaan yang sebelumnya ada tetap dipertahankan.

### Perbedaan Sumber dan Data yang Masih Kosong

* Delegasi RoboBoat 2021 dipisahkan dari roster organisasi umum yang juga mencakup FERC dan ERC. Delegasi memuat 20 orang, sedangkan TDR memuat 19 penulis dan tidak mencantumkan Putri Nurfadilah. Namanya tetap disertakan berdasarkan halaman delegasi, tetapi jurusannya dibiarkan `null`.
* Profil 2025 memuat 17 orang, sedangkan TDR memiliki 19 entri penulis, termasuk F. U. Halima dan F. A. Mulya yang tidak muncul di kartu profil. Inisial ini tidak otomatis diperluas menggunakan roster 2026 dan belum dimasukkan sebagai dua anggota tambahan.
* Kartu teknis dan nonteknis 2025 tidak menyebutkan nama jabatan per orang. Field `role` memakai kelompok *Technical Team* atau *Non-Technical Team*, sementara bidang riset atau tanggung jawab asli tetap dicatat. Nama jabatan rinci tidak disimpulkan dari data 2024/2026.
* Nama singkatan diperluas hanya jika nama lengkap tercantum dalam biografi atau TDR tahun yang sama. Variasi ejaan pada halaman lama dipertahankan bila belum ada dasar yang cukup untuk mengubahnya.
* Foto tim tahunan lokal tetap dipakai. Potret individu yang awalnya belum dipindahkan kini sudah tersedia secara lokal; lihat bagian 8. Halaman tidak memakai hotlink potret ke hosting lama.
* Tema yang sebelumnya kosong telah diperiksa melalui arsip resmi RoboBoat; tema 2022–2025 kini terisi (lihat bagian 10). Tema 2021 tetap `null` karena nama khusus belum ditemukan pada sumber resmi yang ditinjau. Daftar misi atau format daring tidak dijadikan nama tema resmi.
* `technicalinfo.html` pada website 2025 mengembalikan 404; ringkasan Zenith bersumber dari halaman kompetisi yang dapat diakses serta TDR.
* Data konten 2026 dipertahankan. Kekurangan foto tim, cerita, prestasi, dan konfirmasi videonya tetap mengikuti audit sebelumnya.

### Verifikasi Hasil Ekstraksi

* Struktur JSON dan jumlah roster unik sesuai sumber: 20, 13, 15, 17, dan 17 anggota untuk 2021 hingga 2025. Total 82 anggota historis.
* Kelima PDF dapat dibaca, jumlah halaman dan hash SHA-256 sesuai catatan sumber. Salinan PDF 2025 cocok dengan file lokal yang sudah ada.
* `npm.cmd run generate` berhasil dengan exit code 0 dan menghasilkan 71 rute. Percobaan awal sempat terhalang izin penghapusan cache Nuxt di sandbox; build final dijalankan kembali dengan izin yang sesuai dan berhasil.
* HTML statis kelima tahun memuat seluruh nama crew, jurusan/tahun masuk yang tersedia, area riset/tanggung jawab, cerita tim, ringkasan kapal, seluruh penghargaan, dan tujuh embed video dengan label yang sesuai. Seluruh PDF lokal ikut tersedia pada `.output/public` dan tombol unduh mengarah ke nama file yang benar.
* `git diff --check` lulus. Pemutaran YouTube dan tampilan/interaksi browser belum diverifikasi.

## 8. Migrasi Foto Individu 2021–2025

Migrasi dan verifikasi akhir selesai pada **5 November 2026**.

Seluruh **82 foto individu** berhasil diambil dari website lama dan dihubungkan ke `team.roster[*].image` pada `legacy.json`: 20 foto 2021, 13 foto 2022, 15 foto 2023, 17 foto 2024, dan 17 foto 2025. Data dan aset 2026 tetap dipertahankan.

* Lokasi: `public/images/legacy/crew/[year]/[nama-anggota].webp`.
* Pencocokan menggunakan kartu bernama, biografi, atau selector CSS yang mengikat gambar latar pada kartu. Nama file sumber tidak dijadikan satu-satunya dasar. Foto 2023 dicocokkan lewat biografi karena urutan galeri tidak selalu sama dengan urutan kartu nama.
* Gambar dikonversi ke WebP dengan kualitas 85 dan sisi terpanjang maksimal 800 piksel, tanpa memperbesar, memotong, mengganti latar, atau menghasilkan ulang wajah. Total ukuran 1.819.154 byte (sekitar 1,8 MB), dari sumber 75.144.454 byte. File terbesar 37.752 byte, seluruhnya di bawah target 500 KB pada manual.
* Foto roster memakai frame 3:4 berukuran 96×128 piksel. Foto biasa memakai `cover` dengan posisi atas; kartu berdesain 2025 memakai `contain` dan latar biru senada. Gambar dimuat dengan `loading="lazy"`. Keputusan final frame seragam dijelaskan pada bagian 12.
* URL sumber, metode pencocokan, dimensi, ukuran, serta hash sumber dan WebP setiap anggota tersimpan di `docs/legacy-sources.json` → `years[*].portraits`.
* Koreksi ekstraksi sebelumnya: lima anggota teknis 2023 sempat masuk kelompok nonteknis karena daftar teknis tersebar di beberapa section HTML. Pengelompokan telah diperbaiki menjadi 1 ketua, 6 anggota teknis, dan 8 anggota nonteknis, tanpa menambah atau menghapus anggota.
* Semua unduhan dapat dibaca sebagai gambar dan telah diperiksa secara visual melalui lembar kontak per tahun. Tidak ditemukan file foto identik untuk dua anggota berbeda dalam tahun yang sama. Pencocokan identitas tetap berdasarkan label sumber, bukan pengenalan wajah.
* `npm.cmd run generate` berhasil dengan exit code 0 (71 rute). Seluruh 82 tag gambar pada HTML statis menggunakan URL lokal, nama anggota yang sesuai, dan lazy loading; salinan aset pada `.output/public` cocok hash-nya dengan file sumber lokal. Hasil HTML 2023 juga telah diperiksa: 1 ketua, 6 teknis, dan 8 nonteknis. `git diff --check` lulus. Pemeriksaan gambar di browser kemudian dilakukan pada bagian 11; interaksi lainnya belum diperiksa secara menyeluruh.

## 9. Integrasi Jalur Masuk (Poin 6)

Selesai pada **5 November 2026**. Kelima kartu *Our Fleet History* pada `/boat` kini merupakan tautan ke `/legacy/2021` hingga `/legacy/2025`, dengan label *Explore [Year] Journey*, nama kapal untuk pembaca layar, serta indikator fokus keyboard. Footer menyediakan *Team Legacy & History* menuju `/profile#past-teams`. Dropdown *Profile > Past Teams* tetap menuju anchor tersebut dan kini terbuka melalui fokus keyboard maupun hover.

`npm.cmd run generate` berhasil dengan exit code 0 (71 rute). Hasil HTML diperiksa untuk memastikan lima kartu menuju arsip dengan tahun dan kapal yang cocok, serta footer dan dropdown mengarah ke timeline yang tersedia pada Home, Boat, Profile, dan keenam halaman legacy. `git diff --check` lulus. Pemeriksaan visual desktop/mobile, interaksi keyboard di browser, serta pemutaran video tetap menjadi pekerjaan validasi berikutnya.

## 10. Verifikasi Tema dari Arsip Resmi RoboBoat

Pada **5 November 2026**, pemeriksaan dilanjutkan dari [Past Programs](https://roboboat.org/past-programs/) ke halaman musim kompetisi resmi. Halaman indeks tidak memuat semua nama tema, tetapi halaman musimnya menyebutkan tema secara eksplisit.

| Tahun | Hasil verifikasi | Sumber resmi |
| :--- | :--- | :--- |
| 2021 | Nama tema khusus belum ditemukan; program diselenggarakan daring | [Program 2021](https://roboboat.org/programs/2021/) dan [Rules & Task Descriptions V2](https://robonation.org/app/uploads/sites/3/2021/04/RoboBoat-2021-Rules-and-Task-Description_V2.pdf) |
| 2022 | A Day at the Carnival | [Halaman musim 2022](https://roboboat.org/2022-splash/) |
| 2023 | Ocean Exploration | [Halaman musim 2023](https://roboboat.org/rb23/) |
| 2024 | Ducks Overboard | [Halaman musim 2024](https://roboboat.org/draft-roboboat-2024-splashpage/) |
| 2025 | Environmental Monitoring | [Halaman musim 2025](https://roboboat.org/2025-roboboat/) |
| 2026 | Storm Response | [Halaman musim 2026](https://roboboat.org/roboboat-2026/) |

Data tema dan ringkasan 2022–2025 telah dimasukkan ke `legacy.json`. Tema 2026 yang sebelumnya berasal dari website tim kini memiliki tautan penguat resmi. Halaman detail menampilkan tautan *Official RoboBoat theme* pada setiap tema yang terkonfirmasi. Sumber dan tanggal pemeriksaan dicatat pada `docs/legacy-sources.json` → `official_theme_verification`.

Khusus 2021, halaman program serta buku aturan menjelaskan bahwa penilaian dilakukan daring dan kompetisi operasional tidak dilaksanakan. Keterangan ini diperlakukan sebagai format kompetisi, bukan nama tema. Untuk 2022, tema berlaku bagi musim kompetisi secara keseluruhan; label Online pada data partisipasi Bengawan UV tetap dipertahankan.

Verifikasi: `npm.cmd run generate` berhasil (exit code 0, 71 rute). Hasil HTML 2022–2026 memuat judul tema, ringkasan, serta tautan sumber resmi yang sesuai. Halaman 2021 tetap tidak menampilkan klaim tema tanpa sumber. Catatan sumber dan contoh JSON dokumentasi sesuai dengan data; `git diff --check` lulus.

## 11. Penyesuaian Rasio Gambar dan Frame

Bagian ini mencatat pemeriksaan dan pendekatan awal rasio alami. Setelah tinjauan tampilan, pengguna memilih frame yang seragam per jenis gambar; keputusan final tersedia pada bagian 12.

Pada **5 November 2026**, ukuran file asli diperiksa untuk seluruh gambar legacy. Sumber memiliki beberapa rasio: kapal dan foto tim umumnya 3:2 atau 16:9, sementara potret anggota mencakup landscape, persegi, dan potret. Frame tetap 80×112 piksel pada roster, 16:9 pada timeline, serta frame persegi dengan crop pada Fleet History tidak sesuai untuk semua sumber.

* `legacy.json` dan `past_boats.json` kini menyimpan dimensi asli gambar. Atribut HTML `width` dan `height` mengikuti file yang dipakai, sehingga rasio awal juga sesuai sebelum lazy loading selesai.
* Foto kapal dan tim pada halaman detail memakai frame yang mengikuti ukuran gambar, batas lebar layar, dan batas tinggi masing-masing 560/640 piksel. Gambar besar diperkecil secara proporsional; file kecil tidak diperbesar melampaui resolusi aslinya. Neo 2021 hanya 476×255 piksel dan ditampilkan maksimal pada ukuran tersebut di halaman detail.
* Foto anggota memakai lebar 96 piksel dan tinggi otomatis. Kotak tetap serta aturan crop dihapus agar gambar landscape, persegi, dan kartu potret berdesain tetap utuh tanpa ruang kosong dari frame.
* Gambar timeline dan Fleet History mengikuti rasio alami dengan tinggi otomatis. Frame persegi dan efek zoom yang memotong kapal pada Fleet History dihapus.
* `npm.cmd run generate` berhasil (exit code 0, 71 rute). Pemeriksaan memakai Edge headless terhadap enam halaman detail, Profile, dan Boat pada viewport 1280×900 serta 390×900, dengan 238 pemeriksaan gambar di 16 kombinasi halaman/viewport.
* Seluruh gambar yang diperiksa berhasil dimuat, memiliki atribut dimensi yang sama dengan file asli, rasio render sesuai sumber, dan tidak memakai crop. Frame foto besar menempel pada gambar tanpa letterboxing dan tidak memperbesar sumber. Tidak ditemukan luapan horizontal pada keenam halaman detail, Profile, maupun Boat di kedua lebar layar.
* Screenshot roster 2021/2025 serta timeline diperiksa secara visual pada desktop dan mobile. Layanan pihak ketiga diblokir selama pemeriksaan lokal ini; hasil tersebut tidak memverifikasi pemutaran YouTube. Pemeriksaan interaksi lainnya tetap terpisah.

## 12. Frame Seragam per Jenis Gambar

Selesai pada **5 November 2026**, sesuai pilihan pengguna setelah meninjau variasi tinggi gambar.

* **Crew:** Frame 3:4 berukuran 96×128 piksel untuk seluruh tahun. Foto biasa mengisi frame dengan `object-cover object-top`; kartu berdesain 2025 memakai `image_fit: "contain"` dengan latar biru senada agar tulisan dan desain sumber tetap utuh.
* **Kartu crew:** Grid memakai `auto-rows-fr` sehingga tinggi kartu sama dalam setiap kelompok/divisi, dengan posisi awal teks sejajar dan nama panjang tetap dapat membungkus baris.
* **Kapal:** Komponen bersama `app/components/Legacy/BoatImage.vue` mempertahankan frame 3:2 pada halaman detail, timeline Profile, dan Fleet History. Foto beresolusi cukup memakai crop tengah; Neo 2021 dengan lebar sumber di bawah 800 piksel ditampilkan utuh pada latar netral tanpa diperbesar melampaui resolusi sumber.
* **Foto tim:** Frame 3:2 dengan `contain` untuk mempertahankan anggota di tepi gambar. Dimensi HTML tetap mengikuti file asli; rasio frame diatur melalui CSS.
* **Validasi:** `npm.cmd run generate` berhasil (exit code 0, 71 rute). Edge memeriksa enam halaman detail, Profile, dan Boat pada lebar 1280, 390, dan 320 piksel: 357 pemeriksaan gambar pada 24 kombinasi halaman/viewport. Seluruh frame sesuai rasio yang ditetapkan, kartu crew sama tinggi per kelompok, teks dimulai pada posisi yang sejajar, gambar terisi, dan tidak ada luapan horizontal. Kartu 2025 serta foto tim memakai mode tanpa crop; sumber kecil tidak diperbesar.
* Screenshot desktop/mobile diperiksa untuk crew 2021/2025 dan timeline; crop foto yang ditinjau tetap memperlihatkan wajah serta kapal. `git diff --check` lulus. Video pihak ketiga tetap di luar pemeriksaan frame ini.

