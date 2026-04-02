# ISSUE 2: Button Interactions & WorkScroll Synchronization

## 1. Button "Press" Hover Animation
Untuk memperkuat kesan **Neo-Brutalism**, setiap button (`CTA`) akan memiliki animasi "press" saat di-hover/klik:
- **DefaultState**: Memiliki `neo-shadow` (4px/2px).
- **Hover/ActiveState**: Menggunakan GSAP untuk melakukan `translate(2px, 2px)` dan secara bersamaan mengurangi `box-shadow` menjadi nol.
- **Implementation**: Saya akan membuat fungsi `useButtonAnimation` atau menerapkan class utility Tailwind yang di-trigger oleh event listener kursor.

## 2. Sinkronisasi WorkScrollStory (Fix)
Masalah pada implementasi sebelumnya adalah penggunaan `ScrollTrigger` terpisah untuk setiap item di dalam container yang sudah di-pin. Ini sering menyebabkan konflik kalkulasi *start/end*.

**Solusi Baru**:
- Menggunakan **Single Timeline** yang terikat pada ScrollTrigger utama di `.work-container`.
- **Logic**:
  - `0% - 33%`: Label 1 Active, Image 1 Visible.
  - `33% - 66%`: Animasi transisi Label 1 (out) -> Label 2 (in). Gambar 2 terungkap menutupi Gambar 1.
  - `66% - 100%`: Animasi transisi Label 2 (out) -> Label 3 (in). Gambar 3 terungkap menutupi Gambar 2.
- **Reveal Effect**: Menggunakan `clip-path` yang dikontrol langsung oleh progress timeline agar terasa sangat *snappy* dan presisi.

## 3. Langkah Implementasi
1. Update `src/components/WorkScrollStory.jsx` dengan struktur timeline tunggal.
2. Tambahkan global hover listener di `App.jsx` atau `Navbar.jsx`, `ContactSection.jsx`, dll untuk efek "Button Press".
3. Lakukan verifikasi visual di browser (opsional jika saya bisa mensimulasikannya).

**Apakah rencana perbaikan sinkronisasi dan animasi tombol ini sudah oke untuk di-implementasi?**
