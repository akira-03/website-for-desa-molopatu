'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const revealSelector = [
  '.section-reveal',
  '.animate-fade-up',
  '.animate-fade-down',
  '.animate-fade-left',
  '.animate-fade-right',
  '.animate-scale-in',
].join(',')

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    )

    elements.forEach((element) => {
      if (element.classList.contains('is-visible')) {
        return
      }

      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
