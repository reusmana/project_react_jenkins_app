# ISSUE 4: Fitur Navigasi, Halaman Projects, React Router, & Migrasi TypeScript

Ini adalah rancangan implementasi (planning) untuk memperbesar cakupan portofolio Anda sesuai request:

## 1. Navbar Smooth Scroll & Responsif
- **Smooth Scroll (On-Page)**: Karena aplikasi akan menggunakan Lenis & GSAP, klik menu (Work, Story, Skills) tidak memakai link URL biasa yang mendadak melompat. Akan dibuat fungsi kustom pengawas interaksi yang memaksa Lenis menggulir layar dengan halus ke ID elemen bersangkutan (`scrollTo('#work')`).
- **Hamburger Menu (Mobile)**: Di layar kecil/HP, *navbar* default akan disembunyikan. Sebagai gantinya, ada tombol Hamburger yang memicu modal *full-screen* ala Neo-Brutalism dengan background cerah yang terbuka, dan menu animasi *stagger* dari bawah ke atas menggunakan GSAP.

## 2. Penambahan CTA di WorkScrollStory
- Saat ini seksi menceritakan 3 fase ('22, '23, '24).
- Tepat di bawah rincian Phase 3 (`CYBER_SEC`), akan kita sematkan blok kecil atau *button* baru bertuliskan **"MORE PROJECT"**.
- Karena `WorkScrollStory` menerapkan GSAP *pin*, menempatkan tombol di kolom statis (kiri) akan disesuaikan visualnya agar selalu ada atau muncul bertepatan pada detik akhir ScrollTrigger agar flow ceritanya solid.

## 3. Halaman "Semua Project" (All Projects)
- Membuat komponen halaman baru di rute `/projects`.
- **Alternating Layout (Zig-Zag)**: Layout yang Anda minta secara dinamis terbuat dengan Tailwind `flex-row` dan `flex-row-reverse`.
  - Item Ganjil: Judul di Kiri, Gambar di Kanan.
  - Item Genap: Gambar di Kiri, Judul di Kanan.
- Komponen ini akan memiliki transisi ScrollTrigger sederhana (`y: 50, opacity: 0`) ke orientasi asli agar lebih hidup.

## 4. Konfigurasi React Router
- Setup `react-router-dom` untuk sistem MPA (*Multi-Page Application*) tersemat, mengelola `BrowserRouter`.
- Struktur dasar:
  - `src/App.tsx` (Root Setup, Layout, Cursor)
  - `src/router.tsx` (Difungsikan mencatat rute `<Route path="/" element={<Home/>} />` dan `<Route path="/projects" element={<Projects/>} />`)
  - File `App.tsx` lama akan diubah menjadi representasi khusus rute `pages/Home.tsx`.

## 5. Implementasi ke TypeScript
Berpindah dari `.jsx` menjadi `.tsx` untuk keamanan alur pengembangan ke depannya:
- Melakukan install dependensi `@types/react`, `@types/react-dom` maupun `typescript`. Terbitkan file `tsconfig.json`.
- Merubah eksistensi file: `main.jsx` -> `main.tsx`. Menyesuaikan referensi `script src="/src/main.tsx"` di `index.html`.
- Menyusun konvesi nama *type* (contoh: *Props* data project array agar terhindar dari *type-error*).

**Silakan tinjau (*review*) perencanaan implementasi mendasar di atas**, jika sudah memenuhi standar arsitektur yang Anda inginkan, saya akan mengubahnya satu persatu mulai dari seting migrasi TypeScript.
