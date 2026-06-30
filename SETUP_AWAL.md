# 🚀 SETUP AWAL - Website Desa Molopatu

Selamat! Website Desa Molopatu telah berhasil dibuat. Dokumen ini menjelaskan setup awal dan langkah selanjutnya.

## ✅ Yang Sudah Siap

Website Anda sudah dilengkapi dengan:

- ✅ **3 Halaman Utama** (Beranda, Produk, Kontak)
- ✅ **Navigation Bar Responsif** (Mobile-friendly)
- ✅ **Footer dengan Informasi Lengkap**
- ✅ **8 Produk Olahan Pangan** dengan kategori
- ✅ **Form Kontak Interaktif** (Nama, Email, Telepon, Pesan)
- ✅ **Design Responsif** (Desktop, Tablet, Mobile)
- ✅ **SEO-Friendly** dengan metadata Indonesia
- ✅ **Warna Tema Hijau Profesional** (standar website desa)

## 📂 File-File Penting

### Halaman & Routing
```
/app/page.tsx              → Halaman Beranda
/app/produk/page.tsx       → Halaman Produk (8 produk)
/app/kontak/page.tsx       → Halaman Kontak (Form)
/app/layout.tsx            → Layout global & metadata
```

### Komponen
```
/components/navbar.tsx     → Navigation bar
/components/footer.tsx     → Footer
```

### Konfigurasi & Styling
```
/lib/constants.ts          → Data desa terpusat
/app/globals.css           → Warna & styling global
```

### Dokumentasi
```
README.md                  → Overview website
PANDUAN.md                 → Panduan lengkap customization
DAFTAR_PRODUK.md          → Daftar produk dengan template
SETUP_AWAL.md             → File ini
```

## 🎯 Langkah-Langkah Selanjutnya

### 1. Update Data Desa Anda

Edit `/lib/constants.ts`:
```typescript
export const DESA_CONFIG = {
  nama: 'Desa Molopatu',           // Ganti dengan nama desa Anda
  kontak: {
    telepon: '(62) 812-3456-7890', // Ganti nomor WhatsApp
    email: 'info@molopatu.id',     // Ganti email
  },
  // ...
}
```

### 2. Update Produk

Edit `/app/produk/page.tsx` - ubah array `products` dengan produk nyata Anda:
- Ubah nama produk
- Ubah harga
- Ubah deskripsi
- Ubah emoji/gambar
- Ubah atau tambah kategori

### 3. Update Informasi Kontak

Di `/components/footer.tsx` dan `/app/kontak/page.tsx`:
- Nomor telepon
- Email
- Alamat lengkap
- Jam operasional

### 4. Personalisasi Logo (Opsional)

Ganti inisial "M" dengan logo desa atau inisial desa Anda di `/components/navbar.tsx`

## 🌐 Cara Menjalankan Locally

```bash
# 1. Masuk folder project
cd vercel/share/v0-project

# 2. Install dependencies (sudah ada)
pnpm install

# 3. Jalankan dev server
pnpm dev

# 4. Buka di browser
http://localhost:3000
```

## 📱 Test Responsivitas

Di browser, tekan `F12` → klik device toggle untuk test:
- 📱 Mobile (375px)
- 📲 Tablet (768px)
- 🖥️ Desktop (1920px)

Website sudah fully responsive!

## 🚀 Deploy ke Internet

Untuk membuat website live di internet:

### Opsi 1: Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opsi 2: Deploy ke Platform Lain
- Netlify
- GitHub Pages
- Render
- Railway

## 📋 Checklist Sebelum Production

- [ ] Update nama desa di `/lib/constants.ts`
- [ ] Update nomor WhatsApp & email
- [ ] Update jam operasional
- [ ] Update atau tambah produk yang sesuai
- [ ] Test semua link & form berfungsi
- [ ] Test di mobile, tablet, desktop
- [ ] Update metadata di `/app/layout.tsx` jika perlu
- [ ] Buat akun email untuk menerima pesan kontak
- [ ] Test form kontak bekerja

## ❓ Pertanyaan Umum

### Q: Bagaimana cara mengubah warna website?
**A**: Edit `/app/globals.css` - ubah nilai `--primary` untuk warna utama

### Q: Bagaimana cara menambah halaman baru?
**A**: Buat folder baru di `/app/nama-halaman` dengan file `page.tsx`

### Q: Bagaimana form kontak bekerja?
**A**: Form disimpan di state React. Untuk production, integrasikan dengan backend/email service.

### Q: Bagaimana menghubungkan produk dengan keranjang belanja?
**A**: Tombol keranjang saat ini adalah placeholder. Anda bisa integrate dengan payment gateway seperti Stripe atau Midtrans.

## 📖 Dokumentasi Lengkap

Baca file-file ini untuk penjelasan detail:
- `PANDUAN.md` - Panduan lengkap
- `DAFTAR_PRODUK.md` - Daftar & template produk
- `README.md` - Overview project

## 💡 Tips Berguna

1. **Simpan selalu perubahan Ctrl+S** - File auto-sync ke browser
2. **Gunakan emoji untuk produk** - Lebih menarik visual
3. **Update data di `constants.ts`** - Terpusat dan mudah
4. **Test di mobile** - Pastikan responsive
5. **Backup file penting** - Jaga keamanan data

## 🆘 Butuh Bantuan?

1. Cek dokumentasi: `PANDUAN.md` dan `README.md`
2. Baca komentar di dalam code
3. Cek console browser (F12 → Console) untuk error
4. Restart dev server: Ctrl+C lalu `pnpm dev`

## 📞 Kontak Support

Jika ada pertanyaan teknis, hubungi developer atau tim support Anda.

---

## 🎉 Selesai!

Website Desa Molopatu Anda sudah siap! 

Sekarang Anda bisa:
1. **Customisasi** sesuai kebutuhan desa
2. **Update produk** dengan data real
3. **Deploy** ke internet
4. **Share** kepada pengunjung

**Sukses untuk website Desa Molopatu! 🌾**

---

*Last Updated: Senin, 30 Juni 2026*
*Version: 1.0*
