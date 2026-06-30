# 📖 Panduan Website Desa Molopatu

Selamat datang! Panduan ini akan membantu Anda menggunakan dan mengkustomisasi website Desa Molopatu.

## 🎯 Apa yang Ada di Website Ini?

Website Anda memiliki 3 halaman utama:

### 1️⃣ Halaman Beranda (`/`)
Halaman pertama yang dilihat pengunjung dengan:
- Pengenalan desa yang menarik
- Highlight 4 keunggulan utama (Organik, Harga, Komunitas, Kualitas)
- Tombol "Lihat Produk Kami" untuk navigasi cepat

**File**: `/app/page.tsx`

### 2️⃣ Halaman Produk (`/produk`)
Menampilkan koleksi 8 produk olahan pangan dengan:
- Grid responsive (1 kolom mobile, 2 tablet, 4 desktop)
- Info produk: nama, harga, kategori, deskripsi
- Tombol keranjang belanja
- Tombol "Hubungi Kami" untuk pemesanan

**File**: `/app/produk/page.tsx`

### 3️⃣ Halaman Kontak (`/kontak`)
Form dan informasi kontak dengan:
- Form kontak: Nama, Email, Telepon, Pesan
- Info kontak langsung (Telepon, Email, Lokasi)
- Jam operasional desa
- Panduan cara memesan produk

**File**: `/app/kontak/page.tsx`

## 🔧 Cara Mengubah Informasi Desa

### Mengubah Data Kontak

Edit file `/lib/constants.ts`:

```typescript
export const DESA_CONFIG = {
  nama: 'Desa Molopatu',
  kontak: {
    telepon: '(62) 812-3456-7890',
    email: 'info@molopatu.id',
  },
  // ... data lainnya
}
```

Data ini akan otomatis terpancar ke halaman Footer dan Kontak.

### Mengubah Jam Operasional

Edit file `/lib/constants.ts` bagian `jamOperasional`:

```typescript
jamOperasional: {
  senin_jumat: '08:00 - 17:00',
  sabtu: '08:00 - 14:00',
  minggu: 'Libur',
}
```

Atau langsung edit di:
- `/components/footer.tsx` - Untuk footer
- `/app/kontak/page.tsx` - Untuk halaman kontak

## 🛍️ Cara Menambah/Mengubah Produk

### Menambah Produk Baru

Edit file `/app/produk/page.tsx`:

Cari array `products` dan tambahkan produk baru:

```typescript
const products: Product[] = [
  // Produk yang ada...
  {
    id: 9,
    name: 'Kopi Tradisional Molopatu',
    price: 55000,
    description: 'Kopi pilihan dari kebun lokal desa',
    category: 'Minuman',
    image: '☕',
  },
  // Produk baru tambahan...
]
```

**Perhatian:**
- `id`: Harus unik dan berbeda
- `price`: Harga dalam Rupiah (angka saja)
- `image`: Gunakan emoji atau simbol
- `category`: Kategori produk

### Mengubah Produk Existing

Cari produk di array `products` dan ubah field yang diinginkan.

### Mengubah Kategori

Kategori otomatis tampil di halaman produk. Anda bisa membuat kategori baru dengan memasukkan nilai baru di field `category`.

## 📝 Cara Mengubah Teks & Konten

Setiap teks di website bisa diubah dengan mengedit file halaman:

### Mengubah Teks di Beranda
Edit `/app/page.tsx` - cari text yang ingin diubah dan ganti langsung

### Mengubah Teks di Produk
Edit `/app/produk/page.tsx` - cari text yang ingin diubah

### Mengubah Teks di Kontak
Edit `/app/kontak/page.tsx` - cari text yang ingin diubah

## 🎨 Mengubah Warna & Styling

Website menggunakan Tailwind CSS. Warna utama bisa diubah di `/app/globals.css`:

```css
:root {
  --primary: oklch(0.48 0.15 152); /* Hijau teal - warna utama */
  --primary-foreground: oklch(1 0 0); /* Putih - teks di tombol hijau */
}
```

Untuk mudah, Anda juga bisa menggunakan class Tailwind secara langsung di JSX files.

## 🚀 Tips Pengembangan

### Menjalankan Website Lokal

```bash
pnpm dev
```

Buka `http://localhost:3000`

### Melihat Perubahan Real-time

Setiap kali Anda menyimpan file, website akan otomatis update (Hot Reload).

### Testing di Mobile

Klik F12 atau buka DevTools → Toggle device toolbar untuk melihat tampilan mobile.

## 📱 Struktur File yang Penting

```
/app
  /page.tsx              ← Halaman Beranda
  /layout.tsx            ← Metadata & struktur global
  /produk
    /page.tsx            ← Halaman Produk
  /kontak
    /page.tsx            ← Halaman Kontak

/components
  /navbar.tsx            ← Menu navigasi
  /footer.tsx            ← Footer

/lib
  /constants.ts          ← Data desa terpusat

/app
  /globals.css           ← Warna & styling global
```

## ❓ FAQ

### Q: Bagaimana cara menambah halaman baru?
**A**: Buat folder baru di `/app`, misalnya `/app/tentang`, lalu buat file `/app/tentang/page.tsx`. Next.js akan otomatis membuat route `/tentang`.

### Q: Bagaimana cara menghubungkan tombol ke WhatsApp?
**A**: Ubah `href` pada link menjadi `https://wa.me/6281234567890?text=Halo%20saya%20ingin%20pesan%20produk`

### Q: Bagaimana cara menambah social media?
**A**: Edit `/components/footer.tsx` dan tambahkan icon + link ke social media.

### Q: Apa yang harus saya ubah untuk production?
**A**: Edit metadata di `/app/layout.tsx`, update kontak di `/lib/constants.ts`, dan pastikan semua link benar.

## 🆘 Bantuan

Jika ada masalah:
1. Cek console browser (F12 → Console)
2. Cek error di terminal dev server
3. Pastikan syntax TypeScript/JSX benar
4. Restart `pnpm dev`

## 📚 Resources Tambahan

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Selamat menggunakan website Desa Molopatu! 🎉**
