# 📥 Download & Deploy Website Desa Molopatu

Panduan lengkap untuk men-download dan men-deploy website ke internet.

## 📥 STEP 1: DOWNLOAD PROJECT

### Opsi 1: Download dari v0 (RECOMMENDED)

1. Di v0 website, klik tombol **"..."** (3 dots) di top-right
2. Pilih **"Download ZIP"**
3. Tunggu hingga ZIP file terdownload
4. Extract ZIP ke folder yang diinginkan

```
Folder structure setelah extract:
v0-project/
├── app/
├── components/
├── lib/
├── public/
├── PANDUAN.md
├── SETUP_AWAL.md
└── ... (file lainnya)
```

### Opsi 2: Clone dari GitHub (Jika tersedia)

```bash
git clone [GITHUB_URL]
cd v0-project
```

### Opsi 3: Manual Copy

1. Copy semua file dari project
2. Paste ke folder lokal Anda
3. Buka terminal di folder tersebut

---

## 🚀 STEP 2: SETUP LOKAL

### Persyaratan

- Node.js v16+ installed ([Download](https://nodejs.org))
- pnpm atau npm sudah ter-install

Cek dengan:
```bash
node --version
pnpm --version  # atau npm --version
```

### Install Dependencies

```bash
# Navigate ke folder project
cd path/to/v0-project

# Install dependencies
pnpm install
```

Tunggu hingga selesai (~1-2 menit).

### Jalankan Development Server

```bash
pnpm dev
```

**Output yang Anda lihat:**
```
✓ Ready in 1.23s
✓ API route /api available at http://localhost:3000

➜  Local:   http://localhost:3000
➜  press h to show help
```

### Buka di Browser

1. Buka browser favorit Anda (Chrome, Firefox, Safari, Edge)
2. Masuk ke: `http://localhost:3000`
3. Website sudah live & berfungsi!

---

## 🔧 STEP 3: CUSTOMISASI SEBELUM DEPLOY

Sebelum upload ke internet, update data desa Anda:

### Edit Data Desa
```
File: /lib/constants.ts
```

```typescript
export const DESA_CONFIG = {
  nama: 'Desa Molopatu',              // Ganti nama desa Anda
  kontak: {
    telepon: '(62) 812-3456-7890',   // Ganti nomor WhatsApp
    email: 'info@molopatu.id',        // Ganti email
  },
  jamOperasional: {
    senin_jumat: '08:00 - 17:00',
    sabtu: '08:00 - 14:00',
    minggu: 'Libur',
  },
  // ... update field lainnya
}
```

### Edit Produk
```
File: /app/produk/page.tsx
```

Ubah array `products` dengan produk nyata desa Anda.

### Edit Informasi Lainnya
```
File: /components/footer.tsx    → Info footer
File: /app/kontak/page.tsx      → Info kontak & jam operasional
File: /app/globals.css          → Warna website (opsional)
```

### Test Sebelum Deploy

```bash
# Pastikan dev server masih running
pnpm dev

# Test di berbagai perangkat
# Mobile: F12 → Toggle Device → Test berbagai ukuran
# Desktop: Buka langsung di browser
# Tablet: Resize browser window
```

---

## 🌐 STEP 4: DEPLOY KE INTERNET

Website sekarang siap untuk di-deploy! Pilih salah satu platform:

### Opsi A: Deploy ke Vercel (RECOMMENDED - Gratis & Mudah)

**Keuntungan:**
- Gratis untuk hobby project
- Deploy otomatis dari GitHub
- Fast & reliable
- Custom domain support

**Langkah-langkah:**

1. **Siapkan GitHub Repository**
   ```bash
   # Inisialisasi git di folder project
   git init
   git add .
   git commit -m "Initial commit"
   
   # Push ke GitHub
   git remote add origin https://github.com/USERNAME/v0-project.git
   git push -u origin main
   ```

2. **Sign up di Vercel**
   - Buka: https://vercel.com
   - Click "Sign Up"
   - Login dengan GitHub account

3. **Import Project**
   - Klik "New Project"
   - Pilih GitHub repository Anda
   - Click "Import"

4. **Configure & Deploy**
   - Framework: Next.js (auto-detected)
   - Click "Deploy"
   - Tunggu ~3-5 menit

5. **Website Live!**
   - Anda akan dapat URL: `https://v0-project.vercel.app`
   - Share ke orang lain!

---

### Opsi B: Deploy ke Netlify (Gratis & Mudah)

**Langkah-langkah:**

1. **Buat Production Build Lokal**
   ```bash
   pnpm build
   ```

2. **Buka https://netlify.com**
   - Click "Sign Up"
   - Login dengan GitHub

3. **Deploy**
   - Drag & drop folder `.next` + folder lainnya
   - Atau connect GitHub untuk auto-deploy

4. **Website Live!**
   - URL: `https://[nama-project].netlify.app`

---

### Opsi C: Deploy ke Platform Lain

Alternatif platform yang support Next.js:

- **Railway** - https://railway.app (Free tier available)
- **Render** - https://render.com (Free tier available)
- **Heroku** - https://heroku.com (Berbayar, tapi populer)
- **AWS Amplify** - https://aws.amazon.com/amplify/
- **Google Cloud Run** - https://cloud.google.com/run

---

## 📋 CHECKLIST SEBELUM DEPLOY

- [ ] Nama desa sudah diupdate
- [ ] Nomor WhatsApp sudah benar
- [ ] Email sudah diupdate
- [ ] Produk sudah diupdate dengan item nyata
- [ ] Jam operasional sudah sesuai
- [ ] Test di mobile, tablet, desktop
- [ ] Test semua link berfungsi
- [ ] Test form kontak berfungsi
- [ ] Tidak ada error di console (F12)
- [ ] Screenshot/preview sudah terlihat baik

---

## 🎯 NEXT STEPS SETELAH DEPLOY

### 1. Setup Email untuk Notifikasi Kontak

Website form kontak sudah berfungsi, tapi untuk menerima email notifikasi, Anda perlu integrate backend service seperti:
- Mailgun
- SendGrid
- Formspree
- Email service lainnya

**Alternatif (Simple):**
Ubah form untuk langsung membuka WhatsApp:
```typescript
// Di /app/kontak/page.tsx
window.open('https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya')
```

### 2. Setup Analytics (Opsional)

Pantau pengunjung dengan:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

### 3. Setup Custom Domain

Connect domain Anda sendiri (opsional):
- Beli domain di: Niagahoster, Hostinger, GoDaddy, dll
- Connect ke Vercel/Netlify
- Update DNS settings

---

## 🔄 UPDATE WEBSITE SETELAH DEPLOY

Untuk update content (produk, kontak, dll):

### Jika Deploy ke Vercel + GitHub:

1. Edit file lokal Anda
2. Commit & push ke GitHub:
   ```bash
   git add .
   git commit -m "Update produk"
   git push origin main
   ```
3. Vercel otomatis deploy perubahan
4. Website terupdate dalam 1-2 menit

### Jika Deploy ke Platform Lain:

1. Build lokal:
   ```bash
   pnpm build
   ```
2. Upload folder build ke platform hosting Anda

---

## 🆘 TROUBLESHOOTING

### Error: "npm ERR! code ERESOLVE"
**Solusi:**
```bash
pnpm install --legacy-peer-deps
```

### Error: "Port 3000 already in use"
**Solusi:**
```bash
pnpm dev -p 3001  # Gunakan port 3001 sebagai ganti
```

### Website Loading Lambat
**Solusi:**
1. Clear browser cache (Ctrl+Shift+Del)
2. Cek koneksi internet
3. Restart dev server

### Form Kontak Tidak Bekerja
**Solusi:**
1. Buka F12 → Console, cek error message
2. Pastikan form field terisi semua
3. Cek apakah JavaScript enabled di browser

### Deploy Gagal di Vercel
**Solusi:**
1. Cek error message di Vercel dashboard
2. Pastikan `.env` file ada (jika diperlukan)
3. Restart deployment

---

## 📞 SUPPORT & BANTUAN

### Dokumentasi Project
- **INDEX.md** - Navigasi cepat
- **PANDUAN.md** - Panduan lengkap
- **SETUP_AWAL.md** - Setup & FAQ
- **RINGKASAN.txt** - Summary project

### Dokumentasi Framework
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Komunitas
- Stack Overflow
- Next.js Discord
- React Forum

---

## ✅ FINAL CHECKLIST

Sebelum menganggap project selesai:

- [ ] Website sudah running lokal
- [ ] Semua halaman teruji
- [ ] Mobile-responsive sudah dicek
- [ ] Data desa sudah diupdate
- [ ] Produk sudah diupdate
- [ ] Form kontak berfungsi
- [ ] Website sudah di-deploy
- [ ] Live URL sudah dibagikan ke orang lain
- [ ] Update teratur (produk, kontak, dll)

---

## 🎉 CONGRATULATIONS!

Website Desa Molopatu Anda sudah LIVE di Internet!

**Apa sekarang?**
1. Share link ke keluarga & teman
2. Update produk secara berkala
3. Monitor pengunjung
4. Gather feedback & improve

**Good luck! 🚀**

---

**Versi**: 1.0  
**Last Updated**: 30 Juni 2026  
**Status**: ✅ Production Ready

Untuk bantuan lebih lanjut, hubungi tim support atau baca file dokumentasi lengkap.
