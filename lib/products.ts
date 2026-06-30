export interface Product {
  id: number
  slug: string
  name: string
  price: number
  description: string
  category: string
  image: string
  details: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'minyak-kelapa-kampung',
    name: 'Minyak Kelapa Kampung',
    price: 45000,
    description:
      'Minyak kelapa murni olahan rumahan dengan aroma kelapa yang khas dan rasa alami.',
    category: 'Olahan Kelapa',
    image: 'MK',
    details: [
      'Minyak Kelapa Kampung dibuat dari kelapa pilihan yang diolah secara sederhana oleh masyarakat desa.',
      'Proses pengolahannya menjaga aroma alami kelapa, sehingga cocok digunakan untuk memasak, menumis, atau kebutuhan harian keluarga.',
      'Produk ini menjadi salah satu olahan lokal yang mencerminkan potensi perkebunan dan keterampilan warga Desa Molopatodu.',
    ],
    benefits: [
      'Aroma kelapa lebih alami',
      'Cocok untuk masakan rumah',
      'Mendukung ekonomi UMKM desa',
    ],
  },
  {
    id: 2,
    slug: 'keripik-singkong-gurih',
    name: 'Keripik Singkong Gurih',
    price: 30000,
    description:
      'Keripik singkong renyah dengan rasa gurih, cocok untuk camilan keluarga.',
    category: 'Snack',
    image: 'KS',
    details: [
      'Keripik Singkong Gurih dibuat dari singkong pilihan yang dipotong tipis dan digoreng hingga renyah.',
      'Bumbunya dibuat sederhana agar rasa singkong tetap terasa dan nyaman dinikmati kapan saja.',
    ],
    benefits: [
      'Tekstur renyah',
      'Rasa gurih ringan',
      'Praktis untuk camilan',
    ],
  },
  {
    id: 3,
    slug: 'kue-tradisional-molopatodu',
    name: 'Kue Tradisional Molopatodu',
    price: 45000,
    description:
      'Kue tradisional dengan resep lokal, lembut dan cocok untuk hidangan acara.',
    category: 'Kue',
    image: 'KT',
    details: [
      'Kue Tradisional Molopatodu dibuat dengan resep rumahan yang akrab dengan cita rasa masyarakat desa.',
      'Produk ini cocok untuk sajian keluarga, acara desa, maupun oleh-oleh sederhana.',
    ],
    benefits: [
      'Rasa khas rumahan',
      'Cocok untuk acara',
      'Dibuat oleh pelaku UMKM lokal',
    ],
  },
  {
    id: 4,
    slug: 'sambal-rumahan',
    name: 'Sambal Rumahan',
    price: 35000,
    description:
      'Sambal pedas gurih dari cabai pilihan dan bumbu alami khas dapur desa.',
    category: 'Sambal',
    image: 'SR',
    details: [
      'Sambal Rumahan dibuat dari cabai pilihan dan bumbu dapur yang diolah untuk menghasilkan rasa pedas gurih.',
      'Sambal ini cocok menjadi pelengkap nasi, lauk, gorengan, dan berbagai menu rumahan.',
    ],
    benefits: [
      'Pedas gurih',
      'Bumbu alami',
      'Cocok untuk banyak menu',
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
