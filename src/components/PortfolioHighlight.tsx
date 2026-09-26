import { useState } from 'react'
import photo1 from '../assets/DSC06950-3.webp'
import photo2 from '../assets/DSC06992.webp'
import photo3 from '../assets/DSC07259.webp'
import photo4 from '../assets/DSC07350.webp'
import photo5 from '../assets/DSC07353.webp'

const PortfolioHighlight = () => {
  const galleryImages = [photo1, photo2, photo3, photo4, photo5]
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length))
  const nextImage = () => setLightboxIndex((current) => (current === null ? null : (current + 1) % galleryImages.length))

  return (
    <section className="portfolio-highlight space-y-6 rounded-[2rem] border border-white/[0.12] bg-[#111113]/95 p-6 shadow-panel sm:p-8">
      <div className="highlight-copy space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Highlight</p>
        <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Opuszczony basen jako prywatna scena kontrastów
        </h2>
        <p className="text-sm leading-6 text-[#d0c9c5]">
          Sesja powstała z fascynacji kontrastem — delikatność formy ludzkiej w surowej,
          zaniedbanej architekturze. Każde popękane kafelki i zacieki opowiadały osobną historię,
          a jedno małe okno stało się źródłem dramatycznego światła.
        </p>
      </div>

      <div className="highlight-grid grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/[0.12] bg-[#0d0e10] p-5 text-sm text-[#f5f2f0]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Moja rola</p>
          <p className="mt-3 leading-6">
            Art direction, location scouting, światło i kierowanie modelem oraz postprodukcja.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-white/[0.12] bg-[#0d0e10] p-5 text-sm text-[#f5f2f0]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Proces</p>
          <p className="mt-3 leading-6">
            Trzy godziny sesji w październikowy dzień z jednym oknem jako głównym źródłem światła.
          </p>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-white/[0.12] bg-[#0d0e10] p-5 text-sm text-[#f5f2f0]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Efekty</p>
        <p className="mt-3 leading-6">
          Unikalny materiał pozwalający zdobyć nowe współprace i osiągnąć duży zasięg na Instagramie.
        </p>
      </div>

      <div className="highlight-gallery space-y-3 rounded-[1.75rem] border border-white/[0.12] bg-[#0d0e10] p-5">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d0c9c5]">Galeria</p>
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative block w-full overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0d0e10]"
        >
          <img
            src={galleryImages[0]}
            alt="Krwawa sesja — galeria"
            className="h-[26rem] w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(180deg,rgba(7,8,10,0.16)_0%,rgba(7,8,10,0.68)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(7,8,10,0.22)_0%,rgba(7,8,10,0.76)_100%)]" />
          <div className="absolute left-0 bottom-0 right-0 p-4 text-left text-sm uppercase tracking-[0.28em] text-white">
            Galeria sesji
          </div>
          <div className="absolute right-0 top-0 m-4 rounded-full border border-white/25 bg-[#07080a]/75 px-3 py-2 text-[11px] uppercase text-white">
            5 zdjęć
          </div>
        </button>
        <p className="text-sm leading-6 text-[#aaa2a0]">
          Kliknij zdjęcie, aby otworzyć galerię i zobaczyć wszystkie ujęcia.
        </p>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040506]/[0.92] px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 min-h-11 rounded-full border border-white/25 bg-[#0d0e10]/90 px-4 py-2 text-sm text-white transition hover:border-[#7ee7da]/60 hover:bg-[#171a1b]"
          >
            Zamknij
          </button>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-6 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full border border-white/25 bg-[#0d0e10]/90 px-3 py-2 text-white transition hover:border-[#7ee7da]/60 hover:bg-[#171a1b]"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-20 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full border border-white/25 bg-[#0d0e10]/90 px-3 py-2 text-white transition hover:border-[#7ee7da]/60 hover:bg-[#171a1b]"
          >
            ›
          </button>
          <div className="relative mx-auto max-h-[90vh] max-w-[90vw]">
            <img
              src={galleryImages[lightboxIndex]}
              alt={`Krwawa sesja ${lightboxIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-sm text-[#aaa2a0]">
              <span>{`${lightboxIndex + 1} / ${galleryImages.length}`}</span>
              <span className="uppercase tracking-[0.3em]">Krwawa sesja</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default PortfolioHighlight
