# Planning Migrasi Design: Organic Neo-Brutalism ke React + GSAP

## 1. Pendahuluan
Dokumen ini berisi perencanaan struktur komponen React dan strategi animasi GSAP untuk mengubah file HTML/CSS statis dari *STUDIO_CURATOR Portfolio* menjadi aplikasi React JS interaktif, dengan tetap mempertahankan 100% *design system* "Organic Neo-Brutalism". Interaksi antar bagian akan dibuat lebih *smooth* dengan elemen *storytelling* dan animasi *pinning* menggunakan GSAP.

## 2. Inisiasi Proyek & Konfigurasi
- **Framework Utama**: Vite + React JS (sebagai *Single Page Application*). Pendekatan klien tunggal ini optimal untuk kendali yang presisi pada ScrollTrigger dan GSAP secara menyeluruh.
- **Styling**: Tailwind CSS. Kita akan memindahkan konfigurasi dari skrip `tailwind-config` dalam HTML ke file konfigurasi `tailwind.config.js`.
- **Library Animasi & Interaksi**: 
  - `gsap` (Core Animation & ScrollTrigger)
  - `@gsap/react` (Manajemen *lifecycle* animasi GSAP di React `useGSAP`)
  - `@studio-freight/lenis` (Untuk efek *momentum smooth scrolling* global agar kesan interaksinya premium)

## 3. Arsitektur Komponen
Satu *landing page* akan dibagi menjadi struktur parent-child komponen sebagai rentetan visual yang mulus:

*   **`App.jsx`** (Komponen Utama pembungkus Landing Page)
    *   `SmoothScrollWrapper`: Komponen wrapper dari Lenis untuk mem-bypass scroll standar peramban.
    *   **`CustomCursor.jsx`**: Mengelola status titik koordinat/pergerakan kursor custom.
    *   **`Navbar.jsx`**: Top navigation (*fixed*, *glassmorphism*).
    *   **`HeroSection.jsx`**: Area masuk pertama, memuat tulisan STUDIO CURATOR raksasa dan elemen ilustrasi 3D yang mengambang.
    *   **`MarqueeSection.jsx`**: Skrol teks horizontal tanpa henti.
    *   **`WorkScrollStory.jsx`** (Membungkus seksi `#work` untuk mengelola *Pinning/Storytelling*)
        *   `ChallengePhase.jsx` (01 // THE CHALLENGE)
        *   `ProcessPhase.jsx` (02 // THE PROCESS)
        *   `ResultPhase.jsx` (03 // THE RESULT)
    *   **`JourneySection.jsx`**: Sejarah/The Journey dengan visualisasi teks interaktif transparan ke tebal.
    *   **`SkillsBentoGrid.jsx`**: Grid kemampuan stack teknologi (*The Stack*).
    *   **`ContactSection.jsx`**: Formulir Start a Conversation.
    *   **`Footer.jsx`**: Baris kontak terbawah dengan *digital clock*.

## 4. Strategi Animasi GSAP

### A. Global Smooth Scrolling (Lenis + GSAP)
HTML saat ini menggunakan `<html class="scroll-smooth">` yang cukup kasar dan monoton. Lenis akan dipasang agar ada sedikit inersia. Scroll Lenis akan disinkronkan dengan `ScrollTrigger.update` dari GSAP sehingga animasi dan deteksi skrol menjadi sepenuhnya terpadu.

### B. Storytelling & Pin Animations (`WorkScrollStory.jsx`)
Saat ini, seksi *Story* `div` hanya menggunakan `sticky top-0`. Konsep "sticky" ini cukup kaku. Sebagai gantinya, GSAP akan melakukan **Pinning**:
1. Saat pengguna tiba di *The Challenge*, komponen utama akan terkunci di layar (`pin: true`, `scrub: true`).
2. *The Process* secara mulus akan masuk menumpuk atau menggantikan tampilan layar dengan animasi transisi masuk sumbu Y (*translate-Y*).
3. Setelah *The Result* terlihat utuh dengan statistik angka interaktif masuk, kunci layar dilepaskan dan skrol ke beranda lanjut normal. Seluruh urutan cerita ini terasa berangsur seperti menceritakan buku per langkah.

### C. Kursor Kustom yang Ekstra Halus
Event monitor `mousemove` standar akan digantikan oleh `gsap.quickTo()`. Ini menghasilkan jeda organik (*slight trailing drift*) yang sangat halus ketika kursor memindahkan titik putih di layar, membuat antarmuka terasa hidup atau elastis. Kursor putih membesar ketika masuk ( *hover/mouseenter* ) ke tombol atau tautan yang *clickable*.

### D. Stagger & Reveal (Micro-Interactions)
- **Teks Headline & Intro**: Pada detik ke-nol halaman muncul, tulisan akan terungkap (*stagger reveal*) satu per satu, dengan penambahan efek `opacity: 0` dan `y: 100`.
- **Marquee Dinamis**: Jalur *loop* akan memakai algoritma GSAP horizontal repeat, dan kecepatannya akan merespon percepatan *scroll* (*scroll velocity*): saat *scroll* mendadak cepat ke bawah, teks *marquee* memutar sedikit lebih kencang sekejap.
- **Bento Grid**: Kartu-kartu kemampuan/sertifikasi akan bermunculan (*staggered fade up*) hanya saat bagian Skill berada 20% di layar pandang menggunakan penanda awal GSAP *ScrollTrigger*.

## 5. Rencana Eksekusi Langkah Selanjutnya
1. Membuat direktori baru untuk proyek dengan `npm create vite@latest`.
2. Menerapkan *Color Palette* dan *Typography* dari `design.txt` ke dalam React Vite.
3. Menciptakan seluruh blok komponen tanpa transisi (Struktur CSS).
4. Melancarkan elemen GSAP lapis demi lapis, memulai dari kursor dan gulir hingga *pinning* cerita (*scrollytelling*).
