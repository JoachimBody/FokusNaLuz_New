import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import PortfolioHighlight from './components/PortfolioHighlight'
import PortfolioPlaceholder from './components/PortfolioPlaceholder'
import PortfolioTabs from './components/PortfolioTabs'
import SkillsGrid from './components/SkillsGrid'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import TestimonialsSection from './components/TestimonialsSection'
import photo1 from './assets/DSC06950-3.webp'
import photo2 from './assets/DSC06992.webp'
import photo3 from './assets/DSC07259.webp'
import photo4 from './assets/DSC07350.webp'
import photo5 from './assets/DSC07353.webp'
import photo6 from './assets/Frieren-11.webp'
import photo7 from './assets/DSC02615-2.webp'
import photo8 from './assets/DSC02615.webp'
import photo9 from './assets/DSC02615.webp'
import photo10 from './assets/DSC02615.webp'
import photo11 from './assets/Ala_1.jpg'

const middleImages = [photo2, photo4, photo6, photo9, photo10]
const sideImages = [photo1, photo3, photo5, photo7, photo11]

type Layer = {
  src: string
  active: boolean
}

type HeroTile = {
  layerA: Layer
  layerB: Layer
}

const getRandomIndex = (length: number) => Math.floor(Math.random() * length)
const getRandomImage = (images: string[]) => images[getRandomIndex(images.length)]

// Losuje zdjęcie z puli, ale nigdy nie zwraca zdjęcia podanego w `exclude`
// (dzięki temu każda zmiana jest realnie widoczna, a nie "cichym" powtórzeniem tego samego kadru)
const getRandomImageExcluding = (images: string[], exclude?: string) => {
  const pool = exclude ? images.filter((src) => src !== exclude) : images
  const source = pool.length > 0 ? pool : images
  return source[getRandomIndex(source.length)]
}

const getTwoDistinctImages = (images: string[], excludeLeft?: string, excludeRight?: string) => {
  if (images.length < 2) {
    return [images[0], images[0]]
  }

  const left = getRandomImageExcluding(images, excludeLeft)
  // prawe zdjęcie musi różnić się zarówno od poprzedniego prawego, jak i od nowo wylosowanego lewego
  let right = getRandomImageExcluding(images, excludeRight)
  if (right === left) {
    const alt = images.filter((src) => src !== left)
    right = alt.length > 0 ? alt[getRandomIndex(alt.length)] : left
  }

  return [left, right]
}

const getInitialHeroTiles = (): HeroTile[] => {
  const [leftSrc, rightSrc] = getTwoDistinctImages(sideImages)
  const centerSrc = getRandomImage(middleImages)

  return [
    {
      layerA: { src: leftSrc, active: true },
      layerB: { src: leftSrc, active: false },
    },
    {
      layerA: { src: centerSrc, active: true },
      layerB: { src: centerSrc, active: false },
    },
    {
      layerA: { src: rightSrc, active: true },
      layerB: { src: rightSrc, active: false },
    },
  ]
}

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showName, setShowName] = useState(false)
  const [heroTiles, setHeroTiles] = useState<HeroTile[]>(getInitialHeroTiles)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Preloading wszystkich zdjęć w tle
  useEffect(() => {
    ;[...middleImages, ...sideImages].forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const nameDelay = window.setTimeout(() => setShowName(true), 500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(nameDelay)
    }
  }, [])

  // Przełączanie warstw ze zdjęciami co 5 sekund — wszystkie 3 bloki na raz, każdy inne zdjęcie niż aktualnie widoczne
  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroTiles((prevTiles) => {
        const currentLeft = prevTiles[0].layerA.active ? prevTiles[0].layerA.src : prevTiles[0].layerB.src
        const currentRight = prevTiles[2].layerA.active ? prevTiles[2].layerA.src : prevTiles[2].layerB.src
        const currentCenter = prevTiles[1].layerA.active ? prevTiles[1].layerA.src : prevTiles[1].layerB.src

        const [nextLeft, nextRight] = getTwoDistinctImages(sideImages, currentLeft, currentRight)
        const nextCenter = getRandomImageExcluding(middleImages, currentCenter)

        return prevTiles.map((tile, index) => {
          const nextSrc = index === 1 ? nextCenter : index === 0 ? nextLeft : nextRight

          if (tile.layerA.active) {
            return {
              layerA: { ...tile.layerA, active: false },
              layerB: { src: nextSrc, active: true },
            }
          } else {
            return {
              layerA: { src: nextSrc, active: true },
              layerB: { ...tile.layerB, active: false },
            }
          }
        })
      })
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-surface text-ink scroll-smooth">
      <nav className={`sticky top-0 z-40 py-0 transition-all duration-300 ${scrolled ? 'site-topbar-scrolled' : 'site-topbar'}`}>
        <div className="wrapper">
          <div className="site-menu">
            <span className="hidden uppercase tracking-[0.28em] text-slate-500 md:inline">Menu</span>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="relative z-50 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.15] bg-[#111315]/90 px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-[#f5f2f0] shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:border-[#7ee7da]/50 hover:bg-[#171a1b] md:hidden"
            >
              <span>Menu</span>
              <span className={`transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            <div className="hidden items-center gap-4 md:flex">
              <a href="#about" className="transition hover:text-glow">O mnie</a>
              <a href="/portfolio.html" className="transition hover:text-glow">Portfolio fotograficzne</a>
              <a href="#skills" className="transition hover:text-glow">Umiejętności</a>
              <a href="#contact" className="transition hover:text-glow">Kontakt</a>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div id="mobile-menu" className="absolute left-0 right-0 top-full z-50 border-y border-white/[0.12] bg-[#090a0b]/95 px-4 pb-4 pt-3 shadow-[0_18px_40px_rgba(0,0,0,0.42)] backdrop-blur-md md:hidden">
              <div className="flex flex-col gap-2 text-sm text-slate-200">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 py-2 transition hover:bg-white/[0.08] hover:text-[#7ee7da]">O mnie</a>
                <a href="/portfolio.html" onClick={() => setMobileMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 py-2 transition hover:bg-white/[0.08] hover:text-[#7ee7da]">Portfolio fotograficzne</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 py-2 transition hover:bg-white/[0.08] hover:text-[#7ee7da]">Umiejętności</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 py-2 transition hover:bg-white/[0.08] hover:text-[#7ee7da]">Kontakt</a>
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      <div className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-10 px-0 py-0 sm:px-0 lg:px-0">
        <header className="space-y-10 -mt-0">
          <div className="relative mx-auto w-full overflow-hidden border border-white/10 bg-[#090909] p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
            <div className="relative flex min-h-[72vh] items-center justify-center px-[4vw] py-4 sm:min-h-[74vh] sm:px-[5vw] sm:py-5 lg:min-h-[78vh] lg:py-6">
              <div className="hero-mobile-layout grid h-auto w-full grid-cols-3 gap-3">
                {heroTiles.map((tile, index) => {
                  const hasOverlay = index === 1

                  return (
                    <div
                      key={index}
                      className="hero-tile relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0b0b] shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                    >
                      {/* Warstwa A */}
                      <img
                        src={tile.layerA.src}
                        alt={`Hero zdjęcie ${index + 1}`}
                        decoding="async"
                        className="hero-image"
                        style={{ opacity: tile.layerA.active ? 1 : 0, zIndex: tile.layerA.active ? 2 : 1 }}
                      />

                      {/* Warstwa B */}
                      <img
                        src={tile.layerB.src}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        className="hero-image"
                        style={{ opacity: tile.layerB.active ? 1 : 0, zIndex: tile.layerB.active ? 2 : 1 }}
                      />

                      {hasOverlay ? (
                        <div className={`hero-overlay absolute inset-0 flex items-center justify-center px-4 text-center transition-opacity duration-1000 ${showName ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="hero-overlay__panel relative z-10 flex w-max max-w-[90vw] flex-col items-center justify-center gap-3 rounded-[1.8rem] border border-white/[0.16] bg-[#07080a]/60 px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-[2px]">
                            <div className="hero-overlay__glow absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_center,_rgba(126,231,218,0.14),_transparent_55%)] opacity-80" />
                            <p className="relative z-10 whitespace-nowrap text-[0.78rem] uppercase tracking-[0.42em] text-white/90 sm:text-[0.85rem]">
                              Portfolio zawodowe
                            </p>
                            <h1 className="relative z-10 text-center whitespace-nowrap text-4xl font-semibold leading-tight text-white drop-shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[3.4rem]">
                              Mikołaj Zielonka
                            </h1>
                            <p className="relative z-10 text-[0.78rem] uppercase tracking-[0.36em] text-white/90 sm:text-[0.85rem]">
                              Boudoir · Cosplay · Portret kobiecy · Event
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
            <div id="about" className="scroll-mt-28">
              <AboutSection />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
            <div id="portfolio" className="scroll-mt-28">
              <Hero />
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
          <div className="scroll-mt-28">
            <TestimonialsSection />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
          <div className="scroll-mt-28">
            <PortfolioHighlight />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
          <div className="scroll-mt-28">
            <PortfolioPlaceholder />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
          <div className="grid gap-10">
            <div id="skills" className="scroll-mt-28">
              <PortfolioTabs />
            </div>
            <div className="scroll-mt-28">
              <SkillsGrid />
            </div>
            <div id="contact" className="scroll-mt-28">
              <ContactSection />
            </div>
          </div>
        </div>

        <footer className="mx-auto w-full max-w-[72rem] px-5 py-6 text-sm text-[#aaa2a0] sm:px-6 lg:px-8 2xl:max-w-[88rem]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Zbudowane dla wyrazistego, szczerego głosu kreatywnego.</p>
            <div className="flex flex-wrap gap-4">
              <a className="transition hover:text-glow" href="https://www.instagram.com/fnl_fokusnaluz" target="_blank" rel="noreferrer">Instagram</a>
              <a className="transition hover:text-glow" href="mailto:mikolaj.zielonka234@gmail.com">Email</a>
              <button
                type="button"
                onClick={() => setShowPrivacy((value) => !value)}
                className="transition hover:text-glow"
              >
                Polityka prywatności
              </button>
            </div>
          </div>
        </footer>

        {showPrivacy ? (
          <section className="rounded-[2rem] border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-panel sm:p-8 text-sm text-slate-300">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Polityka prywatności</p>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">Dane z formularza kontaktowego</h2>
              <p className="leading-7 text-slate-300">
                Formularz kontaktowy zbiera jedynie imię i nazwisko oraz adres email. Dane są używane wyłącznie w celu odpowiedzi na Twoje zapytanie i przygotowania oferty.
              </p>
              <p className="leading-7 text-slate-300">
                Nie udostępniam przesłanych danych osobom trzecim ani nie wykorzystuję ich do innych celów marketingowych. Dane mogą być przechowywane tylko przez czas niezbędny do obsługi wiadomości.
              </p>
              <p className="leading-7 text-slate-300">
                Wysłanie wiadomości przez formularz oznacza zgodę na przetwarzanie tych danych w zakresie niezbędnym do odpowiedzi i realizacji kontaktu.
              </p>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}

export default App