'use client'

import Image from 'next/image'

interface AvatarOfficialProps {
  nama: string
  posisi: string
  deskripsi: string
  warna: string
  inisial: string
  foto?: string
}

export function AvatarOfficial({
  nama,
  posisi,
  deskripsi,
  warna,
  inisial,
  foto,
}: AvatarOfficialProps) {
  return (
    <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
      {/* Avatar Circle */}
      <div className={`animate-float relative mb-4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${warna} p-1 shadow-lg shadow-primary/20 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300 overflow-hidden`}>
        {foto ? (
          <Image
            src={foto}
            alt={nama}
            fill
            className="object-cover rounded-full"
            priority={false}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${warna} bg-clip-text text-transparent`}>
              {inisial}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-bold text-lg md:text-xl mb-1">{nama}</h3>
      <p className="text-sm font-semibold text-primary mb-2">{posisi}</p>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        {deskripsi}
      </p>
    </div>
  )
}
