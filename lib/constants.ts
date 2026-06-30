/**
 * Konfigurasi Data Desa Molopatodu
 * Edit file ini untuk mengubah informasi desa di seluruh website
 */

export const DESA_CONFIG = {
  // Informasi Dasar Desa
  nama: 'Desa Molopatodu',
  deskripsi: 'Desa yang dikenal dengan produk olahan pangan berkualitas tinggi',
  lokasi: 'Desa Molopatodu, Kecamatan Bongomeme, Kabupaten Gorontalo',
  
  // Tentang Desa
  tentang: {
    visi: 'Menjadi desa yang maju, mandiri, dan sejahtera melalui pertanian berkelanjutan dan ekonomi lokal yang kuat.',
    misi: [
      'Meningkatkan produktivitas pertanian dan UMKM lokal',
      'Memberdayakan masyarakat melalui pelatihan dan edukasi',
      'Menjaga kelestarian lingkungan dan sumber daya alam',
      'Membangun infrastruktur desa yang modern dan berkelanjutan'
    ],
    sejarah: 'Desa Molopatodu telah berkembang menjadi pusat produksi olahan pangan lokal berkualitas tinggi. Dengan komitmen terhadap kualitas dan keberlanjutan, kami terus mendorong pertumbuhan ekonomi desa melalui dukungan UMKM dan inovasi produk.'
  },
  
  // Kontak
  kontak: {
    telepon: '(62) 812-3456-7890',
    email: 'info@molopatodu.id',
    whatsapp: '6281234567890', // tanpa simbol +
  },
  
  // Jam Operasional
  jamOperasional: {
    senin_jumat: '08:00 - 17:00',
    sabtu: '08:00 - 14:00',
    minggu: 'Libur',
  },
  
  // Social Media (opsional untuk diperluas)
  sosialMedia: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
  },
  
  // Branding
  logo: 'M', // Inisial untuk logo
  warnaPrimary: '#0f766e', // Hijau teal untuk identitas desa
}

// Struktur Aparat Desa
export const APARAT_DESA = [
  {
    id: 1,
    nama: '----',
    posisi: 'Kepala Desa',
    deskripsi: 'Pemimpin desa dengan visi membawa Molopatodu maju',
    warna: 'from-primary to-accent',
    inisial: 'BS',
    foto: ''
  },
  {
    id: 2,
    nama: '----',
    posisi: '----',
    deskripsi: 'Mengelola administrasi dan dokumentasi desa',
    warna: 'from-secondary to-primary',
    inisial: 'SN',
    foto: ''
  },
  {
    id: 3,
    nama: '----',
    posisi: '----',
    deskripsi: 'Mengurus keuangan dan aset desa',
    warna: 'from-accent to-secondary',
    inisial: 'AW',
    foto: ''
  },
  {
    id: 4,
    nama: '----',
    posisi: '----',
    deskripsi: 'Mengkoordinir program pembangunan desa',
    warna: 'from-primary to-secondary',
    inisial: 'RS',
    foto: ''
  }
]

// Peta Google Maps Desa Molopatodu
export const PETA_CONFIG = {
  lat: 0.6650,
  lng: 122.8450,
  zoom: 15,
  nama: 'Desa Molopatodu',
  kecamatan: 'Kecamatan Bongomeme',
  kabupaten: 'Kabupaten Gorontalo',
  alamat: 'Desa Molopatodu, Kecamatan Bongomeme, Kabupaten Gorontalo',
  mapsQuery: 'Desa Molopatodu, Kecamatan Bongomeme, Kabupaten Gorontalo',
  embedUrl:
    'https://maps.google.com/maps?q=Desa%20Molopatodu%2C%20Kecamatan%20Bongomeme%2C%20Kabupaten%20Gorontalo&hl=id&z=15&output=embed',
}

// Export untuk kemudahan akses individual
export const KONTAK = DESA_CONFIG.kontak
export const JAM_OPERASIONAL = DESA_CONFIG.jamOperasional
