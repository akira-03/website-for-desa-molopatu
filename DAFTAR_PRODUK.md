# 📦 Daftar Produk Desa Molopatu

Dokumen ini berisi daftar produk yang saat ini ditampilkan di website. Gunakan untuk referensi atau penambahan produk baru.

## 📋 Produk Saat Ini

### 1. Kue Tradisional Molopatu
- **Harga**: Rp 45.000
- **Kategori**: Kue & Pastry
- **Emoji**: 🍰
- **Deskripsi**: Kue tradisional dengan resep turun-temurun, lembut dan gurih, cocok untuk souvenir atau camilan pribadi.

### 2. Sambal Andaliman
- **Harga**: Rp 35.000
- **Kategori**: Sambalan
- **Emoji**: 🌶️
- **Deskripsi**: Sambal original dengan cita rasa pedas dan wangi, dibuat dari cabai pilihan dan bumbu alami.

### 3. Teh Herbal Organik
- **Harga**: Rp 50.000
- **Kategori**: Minuman
- **Emoji**: 🫖
- **Deskripsi**: Teh kesehatan dari ramuan herbal organik lokal, dipanen langsung dari kebun desa.

### 4. Keripik Singkong Rasa Gurih
- **Harga**: Rp 30.000
- **Kategori**: Snack
- **Emoji**: 🥔
- **Deskripsi**: Keripik singkong yang renyah dan gurih, sempurna sebagai snack atau hadiah.

### 5. Dodol Coklat Premium
- **Harga**: Rp 60.000
- **Kategori**: Confectionery
- **Emoji**: 🍫
- **Deskripsi**: Dodol coklat premium dengan bahan-bahan pilihan, elastis dan manis pas di lidah.

### 6. Selai Buah Nusantara
- **Harga**: Rp 40.000
- **Kategori**: Preserves
- **Emoji**: 🫙
- **Deskripsi**: Selai buah-buahan tropis dengan pewarna alami, tanpa pemanis buatan.

### 7. Tempe Organik Goreng
- **Harga**: Rp 25.000
- **Kategori**: Protein
- **Emoji**: 🌱
- **Deskripsi**: Tempe segar dari kacang kedelai organik, siap dimakan atau dijadikan lauk.

### 8. Kacang Goreng Bawang
- **Harga**: Rp 35.000
- **Kategori**: Snack
- **Emoji**: 🥜
- **Deskripsi**: Kacang pilihan yang digoreng dengan bawang merah, cemilan renyah yang nikmat.

---

## ➕ Template Produk Baru

Gunakan template ini untuk menambah produk baru:

```typescript
{
  id: 9,                              // ID unik (increment)
  name: 'Nama Produk',               // Nama produk
  price: 50000,                       // Harga dalam Rupiah
  description: 'Deskripsi singkat produk...', // Deskripsi
  category: 'Kategori Produk',       // Kategori
  image: '🍱',                        // Emoji produk
}
```

## 📊 Kategori yang Ada

- ✅ Kue & Pastry
- ✅ Sambalan
- ✅ Minuman
- ✅ Snack
- ✅ Confectionery
- ✅ Preserves
- ✅ Protein

Anda bisa membuat kategori baru jika diperlukan!

## 🎯 Rekomendasi Emoji untuk Produk

| Kategori | Emoji | Pilihan Lain |
|----------|-------|--------------|
| Kue | 🍰 | 🎂, 🥐, 🍪 |
| Sambalan | 🌶️ | 🔥, 🌶, 🫑 |
| Minuman | 🫖 | ☕, 🍵, 🧃, 🥤 |
| Snack | 🥔 | 🍿, 🥨, 🍟, 🥒 |
| Confectionery | 🍫 | 🍬, 🍭, 🍮 |
| Preserves | 🫙 | 🍯, 🥫 |
| Protein | 🌱 | 🥬, 🌾, 🥚, 🍖 |
| Lainnya | 🍱 | 🥘, 🍲, 🥗 |

## 💡 Tips Menambah Produk

1. **Gunakan emoji yang jelas** - Gunakan emoji yang mudah dikenali
2. **Harga yang menarik** - Pastikan harga kompetitif dengan produk sejenis
3. **Deskripsi yang informatif** - Jelaskan keunggulan produk dalam 1-2 baris
4. **Kategori yang tepat** - Gunakan kategori yang sudah ada atau buat baru yang relevan
5. **ID unik** - Pastikan setiap produk punya ID berbeda

## 🔄 Cara Menambah Produk di Website

1. Edit file `/app/produk/page.tsx`
2. Cari array `products`
3. Tambahkan produk baru di akhir array sebelum penutup `]`
4. Simpan file
5. Website akan otomatis update (refresh browser)

Contoh:
```typescript
const products: Product[] = [
  // Produk yang ada...
  {
    id: 9,
    name: 'Produk Baru Saya',
    price: 45000,
    description: 'Ini adalah produk baru yang saya jual',
    category: 'Snack',
    image: '🍪',
  },
]
```

---

**Update terakhir**: Daftar produk ini sesuai dengan versi website v1.0

Untuk perubahan, silakan edit dokumen ini dan file `/app/produk/page.tsx` secara bersamaan.
