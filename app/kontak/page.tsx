'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi pengiriman form
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form setelah 3 detik
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="section-reveal relative overflow-hidden py-16 md:py-24 px-4">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15" />
          <div className="animate-pulse-soft absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
          <div className="animate-pulse-soft absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 translate-x-1/2" />
          
          <div className="animate-fade-up relative max-w-6xl mx-auto">
            <div className="animate-scale-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
              <Mail size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Hubungi Kami</span>
            </div>
            <h1 className="animate-fade-up animate-delay-100 text-5xl md:text-6xl font-bold mb-4 text-balance">Mari Terhubung</h1>
            <p className="animate-fade-up animate-delay-200 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Kami siap menjawab semua pertanyaan Anda tentang produk atau pemesanan. Hubungi kami melalui berbagai saluran komunikasi yang tersedia.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-reveal py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Contact Info - Phone */}
              <div className="animate-fade-up hover-lift group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-primary/20 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="mb-5 inline-block p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/40 group-hover:to-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Telepon</h3>
                  <p className="text-sm text-muted-foreground mb-2">(62) 812-3456-7890</p>
                  <p className="text-xs text-muted-foreground">Hubungi kami via WhatsApp untuk respon cepat</p>
                </div>
              </div>

              {/* Contact Info - Email */}
              <div className="animate-fade-up animate-delay-100 hover-lift group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-secondary/20 hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
                <div className="relative">
                  <div className="mb-5 inline-block p-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl group-hover:from-secondary/40 group-hover:to-secondary/20 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-2">info@molopatodu.id</p>
                  <p className="text-xs text-muted-foreground">Kami akan membalas dalam 24 jam</p>
                </div>
              </div>

              {/* Contact Info - Location */}
              <div className="animate-fade-up animate-delay-200 hover-lift group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-accent/20 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
                <div className="relative">
                  <div className="mb-5 inline-block p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl group-hover:from-accent/40 group-hover:to-accent/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lokasi</h3>
                  <p className="text-sm text-muted-foreground mb-2">Desa Molopatodu, Indonesia</p>
                  <p className="text-xs text-muted-foreground">Kunjungi kami secara langsung</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="animate-fade-right bg-gradient-to-br from-card/80 to-card/40 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-3xl font-bold mb-8">Kirim Pesan Kepada Kami</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-up">
                    <label htmlFor="name" className="block text-sm font-semibold mb-3">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-all duration-300"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div className="animate-fade-up animate-delay-100">
                    <label htmlFor="email" className="block text-sm font-semibold mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="animate-fade-up animate-delay-200">
                    <label htmlFor="phone" className="block text-sm font-semibold mb-3">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-all duration-300"
                      placeholder="(62) 812-3456-7890"
                    />
                  </div>

                  <div className="animate-fade-up animate-delay-300">
                    <label htmlFor="message" className="block text-sm font-semibold mb-3">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-all duration-300 resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="animate-fade-up animate-delay-400 w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
                  >
                    Kirim Pesan Sekarang
                  </button>

                  {submitted && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 text-green-700 px-5 py-4 rounded-xl text-sm font-medium animate-pulse">
                      ✓ Pesan berhasil dikirim! Terima kasih telah menghubungi kami.
                    </div>
                  )}
                </form>
              </div>

              {/* Info Jam Operasional & Cara Memesan */}
              <div className="space-y-6">
                {/* Operating Hours */}
                <div className="animate-fade-left bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-4">Jam Operasional</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Senin - Jumat:</strong> 08:00 - 17:00
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Sabtu:</strong> 08:00 - 14:00
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Minggu:</strong> Libur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to Order */}
                <div className="animate-fade-left animate-delay-100 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8">
                  <h3 className="font-bold text-lg mb-5">Cara Memesan Produk</h3>
                  <ol className="space-y-4">
                    <li className="animate-fade-up flex gap-4">
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </span>
                      <span className="text-sm text-muted-foreground pt-1">Pilih produk yang Anda inginkan dari halaman Produk</span>
                    </li>
                    <li className="animate-fade-up animate-delay-100 flex gap-4">
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </span>
                      <span className="text-sm text-muted-foreground pt-1">Hubungi kami melalui WhatsApp atau form kontak untuk memperjelas pesanan</span>
                    </li>
                    <li className="animate-fade-up animate-delay-200 flex gap-4">
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </span>
                      <span className="text-sm text-muted-foreground pt-1">Konfirmasi pesanan dan lakukan pembayaran sesuai instruksi</span>
                    </li>
                    <li className="animate-fade-up animate-delay-300 flex gap-4">
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        4
                      </span>
                      <span className="text-sm text-muted-foreground pt-1">Produk akan dikirim ke alamat Anda dalam waktu yang disepakati</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
