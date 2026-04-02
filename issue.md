# ISSUE: Revamping WorkScrollStory Interaction

## 1. Objective
Ubah komponen `WorkScrollStory` menjadi interaksi **Side-by-Side Pinning**. 
- Sisi Kiri: Judul/Teks yang tetap (*sticky/pinned*) saat skrol.
- Sisi Kanan: Konten/Gambar yang berganti/terungkap (*reveal*) sesuai dengan posisi skrol.
- Sinkronisasi: Saat konten di kanan berubah, judul di kiri ikut berubah status aktifnya secara halus (*reveal change*).

## 2. Struktur Visual (Proposed)
Komponen akan menggunakan Flexbox atau Grid:
- **`left-col` (40%)**: Berisi daftar judul ('22 INTERFACE, '23 DEVELOPMENT, '24 CYBER_SEC). Bagian ini akan di-pin menggunakan GSAP. Saat skrol aktif di section tertentu, judul tersebut akan berubah dari `opacity: 0.2` menjadi `opacity: 1` dengan garis bawah brutalist yang muncul.
- **`right-col` (60%)**: Berisi tumpukan gambar atau blok konten besar. Kita akan menggunakan efek **Image reveal/swap** atau **Clipping mask** agar transisi antar gambar terasa sangat modern.

## 3. Logika GSAP ScrollTrigger
- **Pinning**: Konten utama `WorkScrollStory` akan di-pin selama skrol (misal: `300vh` untuk 3 bagian).
- **Control**: Kita akan membuat satu `timeline` utama. 
  - Saat `scroll: 0% - 33%`: Menampilkan INTERFACE (Left: active, Right: Image 1).
  - Saat `scroll: 34% - 66%`: Menampilkan DEVELOPMENT (Left: active, Right: Image 2).
  - Saat `scroll: 67% - 100%`: Menampilkan CYBER_SEC (Left: active, Right: Image 3).
- **Animations**:
  - `opacity` & `scale` untuk transisi gambar.
  - `clip-path` (inset) untuk efek "pintu terbuka" saat gambar baru muncul.
  - `stagger` untuk teks deskripsi.

## 4. Perubahan Content
Saya akan menyesuaikan konten agar sesuai dengan fase yang Anda minta (Interface, Development, Cyber_sec) agar selaras dengan `JourneySection`.

**Apakah konsep pinning side-by-side dengan sinkronisasi teks-gambar ini sudah sesuai dengan visi Anda?**
