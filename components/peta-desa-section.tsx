'use client'

import { PETA_CONFIG } from '@/lib/constants'
import { Compass, MapPin, Navigation } from 'lucide-react'

export function PetaDesaSection() {
  return (
    <section className="section-reveal px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-up mb-16 text-center">
          <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              Lokasi Desa
            </span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 mb-4 text-4xl font-bold text-balance md:text-5xl">
            Temukan Kami di Peta
          </h2>
          <p className="animate-fade-up animate-delay-200 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lokasi Desa Molopatodu yang mudah diakses dari berbagai tempat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="animate-fade-right overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-xl shadow-primary/10 lg:col-span-2">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={PETA_CONFIG.embedUrl}
              className="w-full rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="animate-fade-left hover-lift group rounded-2xl border border-primary/25 bg-gradient-to-br from-white to-primary/5 p-6 shadow-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/15">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/30 p-3 transition-colors group-hover:from-primary/30 group-hover:to-secondary/40">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold">Alamat</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {PETA_CONFIG.alamat}
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-left animate-delay-100 hover-lift group rounded-2xl border border-secondary/50 bg-gradient-to-br from-white to-secondary/20 p-6 shadow-sm hover:border-secondary/80 hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-secondary/40 to-primary/15 p-3">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Koordinat</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Latitude:</strong>{' '}
                    {PETA_CONFIG.lat}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Longitude:</strong>{' '}
                    {PETA_CONFIG.lng}
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-left animate-delay-200 hover-lift group rounded-2xl border border-accent/20 bg-gradient-to-br from-white to-accent/5 p-6 shadow-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/15">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 p-3">
                  <Navigation className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">Cara Mengakses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>- Dari kota utama: sekitar 30 menit berkendara</li>
                    <li>- Akses jalan: aspal berkualitas baik</li>
                    <li>- Layanan transportasi umum tersedia</li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/${PETA_CONFIG.nama}`}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animate-delay-300 inline-block w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-center font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-primary/30"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
