# Website Desa Molopatu

Website profesional untuk Desa Molopatu dengan fokus pada penjualan produk olahan pangan lokal berkualitas.

## 📋 Fitur Utama

### 1. **Halaman Beranda (Home)**
   - Hero section dengan pengenalan desa
   - Highlight keunggulan produk kami (organik, harga terjangkau, komunitas lokal, kualitas terjamin)
   - Call-to-action buttons untuk navigasi mudah
   - Footer dengan informasi kontak lengkap

### 2. **Halaman Produk**
   - Menampilkan 8 produk olahan pangan lokal dengan kategori:
     - Kue & Pastry
     - Sambalan
     - Minuman
     - Snack
     - Confectionery
     - Preserves
     - Protein
   - Setiap produk menampilkan:
     - Gambar/emoji produk
     - Nama produk
     - Harga dalam Rupiah
     - Deskripsi singkat
     - Kategori
     - Tombol keranjang belanja
   - Responsive grid layout (1 kolom mobile, 2 desktop, 4 desktop besar)

### 3. **Halaman Kontak**
   - Form kontak lengkap dengan field:
     - Nama Lengkap (required)
     - Email (required)
     - Nomor Telepon (required)
     - Pesan (required)
   - Informasi kontak langsung (Telepon, Email, Lokasi)
   - Jam operasional desa
   - Panduan cara memesan produk
   - Notifikasi sukses setelah pengiriman form

### 4. **Navigasi & Layout**
   - Navigation bar responsif dengan mobile menu
   - Logo desa dengan inisial "M"
   - Footer konsisten di semua halaman
   - Desain responsif untuk semua ukuran layar

## 🎨 Desain & Warna

- **Warna Utama (Primary)**: Hijau teal (`oklch(0.48 0.15 152)`) - mencerminkan kepercayaan dan pertanian
- **Warna Sekunder (Secondary)**: Hijau muda (`oklch(0.88 0.08 111)`) - untuk aksen dan hover
- **Background**: Putih/Off-white untuk kejelasan
- **Text**: Gelap untuk kontras yang baik

## 📁 Struktur File

```
/app
  /layout.tsx              - Layout utama dengan metadata
  /page.tsx                - Halaman beranda
  /produk
    /page.tsx              - Halaman produk
  /kontak
    /page.tsx              - Halaman kontak
/components
  /navbar.tsx              - Navigation bar
  /footer.tsx              - Footer
/public
  - Gambar dan aset statis
```

## 🚀 Cara Menjalankan

```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev

# Buka di browser
http://localhost:3000
```

## 📝 Data yang Dapat Diubah

### Produk
Edit `/app/produk/page.tsx` - array `products` untuk menambah/mengubah produk

### Informasi Kontak
Edit `/components/footer.tsx` dan `/app/kontak/page.tsx` untuk:
- Nomor telepon
- Email
- Alamat
- Jam operasional

### Teks & Konten
Semua teks dapat diubah langsung di file halaman masing-masing

## ✨ Tips Penggunaan

1. **Menambah Produk**: Edit array produk di `/app/produk/page.tsx`
2. **Menambah Halaman**: Buat folder baru di `/app` dengan `page.tsx`
3. **Styling**: Gunakan Tailwind CSS classes, hindari inline CSS
4. **Responsif**: Gunakan breakpoints: `md:` untuk tablet, `lg:` untuk desktop

## 🎯 Optimisasi SEO

- Metadata sudah disesuaikan dengan bahasa Indonesia
- Title dan description sudah dioptimasi
- Semantic HTML digunakan untuk struktur yang lebih baik
- Alt text pada gambar untuk accessibility

## 📱 Responsive Design

- Mobile First approach
- Teruji di berbagai ukuran layar
- Navigation menu adaptif untuk mobile
- Grid layout yang fleksibel

## 🔒 Keamanan

- Form validation pada input
- Input fields bersertifikat required
- Tidak ada data sensitif yang hardcoded

## 📞 Support & Kontak

Untuk informasi lebih lanjut tentang website, silahkan hubungi:
- WhatsApp: (62) 812-3456-7890
- Email: info@molopatu.id
- Lokasi: Desa Molopatu, Indonesia

---

**Dibuat dengan ❤️ untuk Desa Molopatu**
