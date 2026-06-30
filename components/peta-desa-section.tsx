'use client'

import { PETA_CONFIG } from '@/lib/constants'
import { MapPin } from 'lucide-react'

export function PetaDesaSection() {
  return (
    <section className="section-reveal py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-fade-up text-center mb-16">
          <div className="animate-scale-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Lokasi Desa</span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 text-4xl md:text-5xl font-bold mb-4 text-balance">
            Temukan Kami di Peta
          </h2>
          <p className="animate-fade-up animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Lokasi Desa Molopatodu yang mudah diakses dari berbagai tempat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="animate-fade-right lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-xl">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={PETA_CONFIG.embedUrl}
              className="w-full"
            />
          </div>

          {/* Info Lokasi */}
          <div className="space-y-6">
            {/* Alamat */}
            <div className="animate-fade-left hover-lift group bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 hover:border-primary/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex-shrink-0 group-hover:from-primary/40 group-hover:to-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Alamat</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {PETA_CONFIG.alamat}
                  </p>
                </div>
              </div>
            </div>

            {/* Koordinat */}
            <div className="animate-fade-left animate-delay-100 hover-lift group bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 hover:border-secondary/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-secondary/20">
              <div className="space-y-3">
                <h3 className="font-bold text-lg">Koordinat</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Latitude:</strong> {PETA_CONFIG.lat}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Longitude:</strong> {PETA_CONFIG.lng}
                  </p>
                </div>
              </div>
            </div>

            {/* Akses */}
            <div className="animate-fade-left animate-delay-200 hover-lift group bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 hover:border-accent/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/20">
              <div className="space-y-3">
                <h3 className="font-bold text-lg">Cara Mengakses</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dari kota utama: ~30 menit berkendara</li>
                  <li>• Akses jalan: Aspal berkualitas baik</li>
                  <li>• Layanan transportasi umum tersedia</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <a
              href={`https://www.google.com/maps/search/${PETA_CONFIG.nama}`}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animate-delay-300 w-full inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
