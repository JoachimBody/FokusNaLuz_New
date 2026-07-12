import { useState } from 'react'
import photo1 from '../assets/session2/DSC02888.jpg'
import photo2 from '../assets/session2/DSC02888-2.jpg'
import photo3 from '../assets/session2/DSC02893.jpg'
import photo4 from '../assets/session2/DSC02881.jpg'
import photo5 from '../assets/session2/DSC02820.jpg'
import photo6 from '../assets/session2/DSC02820-2.jpg'
import photo7 from '../assets/session2/DSC02826.jpg'
import photo8 from '../assets/session2/DSC02834.jpg'
import photo9 from '../assets/session2/DSC02736.jpg'
import photo10 from '../assets/session2/DSC02762.jpg'
import photo11 from '../assets/session2/DSC02767.jpg'
import photo12 from '../assets/session2/DSC02770.jpg'
import photo13 from '../assets/session2/DSC02791.jpg'

const PortfolioPlaceholder = () => {
  const galleryImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13]
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length))
  const nextImage = () => setLightboxIndex((current) => (current === null ? null : (current + 1) % galleryImages.length))

  return (
    <section className="space-y-6 rounded-[2rem] border border-white/10 bg-[#111111]/95 p-6 shadow-panel sm:p-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Nowa sesja</p>
        <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Sesja inspirowana Frieren w naturalnym parku
        </h2>
        <p className="text-sm leading-7 text-slate-300">
          Sesja narodziła się z fascynacji melancholią i ponadczasowym nastrojem <span className="italic">Frieren</span>. Chciałem uchwycić eteryczność elfiej czarodziejki, zestawiając jej klasyczny design z organiczną architekturą natury. Kluczem było oddanie kinowego, nostalgicznego klimatu i złapanie idealnego momentu, w którym światło opowiada historię.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-5 text-sm text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-slate/60">Moja rola</p>
          <p className="mt-3 leading-6 text-slate-300">
            Art direction, wybór idealnego punktu w przestrzeni parku (location scouting), praca z cosplayerem nad naturalnym pozowaniem oraz filmowy color grading w postprodukcji.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-5 text-sm text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-slate/60">Proces</p>
          <p className="mt-3 leading-6 text-slate-300">
            Szybka, intensywna godzinna sesja zrealizowana w Parku Wilsona w Poznaniu. Wykorzystałem wyłącznie naturalne oświetlenie podczas trwania złotej godziny (golden hour). Niskie, ciepłe słońce przedzierające się przez zieleń pozwoliło stworzyć miękką, magiczną aurę idealnie pasującą do charakteru postaci.
          </p>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-5 text-sm text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-slate/60">Efekty</p>
        <p className="mt-3 leading-6 text-slate-300">
          Kompaktowy, ale niezwykle spójny materiał o malarskim klimacie, który wygenerował świetne zasięgi na Instagramie i przyciągnął uwagę społeczności cosplayowej, otwierając drzwi do kolejnych kreatywnych współprac.
        </p>
      </div>

      <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-[#0a0a0a]/80 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Galeria sesji</p>
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] w-full max-w-full"
        >
          <img
            src={photo1}
            alt="Placeholder sesji"
            className="h-[26rem] w-full min-w-full object-cover object-[50%_35%] transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-0 bottom-0 right-0 p-4 text-left text-sm uppercase tracking-[0.28em] text-white">
            Galeria sesji
          </div>
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-glow/20 bg-gradient-to-r from-[#161616] via-[#111111] to-[#0f172a] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_45px_rgba(0,0,0,0.35)]">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Pełne portfolio</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Zobacz całość moich realizacji fotograficznych i wideo w jednej, uporządkowanej galerii.
          </p>
        </div>
        <a
          href="/portfolio.html"
          className="inline-flex items-center justify-center rounded-full border border-glow/30 bg-gradient-to-r from-[#66ffea]/20 to-[#8b5cf6]/20 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(102,255,234,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-glow/50 hover:bg-gradient-to-r hover:from-[#66ffea]/30 hover:to-[#8b5cf6]/30"
        >
          Otwórz pełne portfolio
        </a>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Zamknij
          </button>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-white/10"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-20 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-white/10"
          >
            ›
          </button>
          <div className="relative mx-auto max-h-[90vh] max-w-[90vw]">
            <img
              src={galleryImages[lightboxIndex]}
              alt={`Sesja ${lightboxIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-sm text-slate/400">
              <span>{`${lightboxIndex + 1} / ${galleryImages.length}`}</span>
              <span className="uppercase tracking-[0.3em]">Galeria sesji</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default PortfolioPlaceholder
