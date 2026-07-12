import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import PortfolioHighlight from './components/PortfolioHighlight'
import PortfolioPlaceholder from './components/PortfolioPlaceholder'
import PortfolioTabs from './components/PortfolioTabs'
import VideoPortfolio from './components/VideoPortfolio'
import SkillsGrid from './components/SkillsGrid'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import photo1 from './assets/DSC06950-3.jpg'
import photo2 from './assets/DSC06992.jpg'
import photo3 from './assets/DSC07259.jpg'
import photo4 from './assets/DSC07350.jpg'
import photo5 from './assets/DSC07353.jpg'

const heroImages = [photo1, photo2, photo3, photo4, photo5]

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showName, setShowName] = useState(false)

  // Crossfade implementation using two image layers
  const transitionDuration = 1000
  const currentIndexRef = useRef(0)
  const fadeTimeoutRef = useRef<number | null>(null)
  const [showFront, setShowFront] = useState(true)
  const showFrontRef = useRef(true)
  const [frontSrc, setFrontSrc] = useState(heroImages[0])
  const [backSrc, setBackSrc] = useState(heroImages.length > 1 ? heroImages[1] : heroImages[0])

  useEffect(() => {
    const imageInterval = window.setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % heroImages.length
      // preload next image to avoid any render gap
      const preImg = new Image()
      preImg.src = heroImages[nextIndex]
      const startFade = () => {
        // update only the currently hidden layer's src, then toggle visibility
        if (showFrontRef.current) {
          setBackSrc(heroImages[nextIndex])
        } else {
          setFrontSrc(heroImages[nextIndex])
        }

        // toggle visible layer and keep ref in sync
        setShowFront((prev) => {
          const next = !prev
          showFrontRef.current = next
          return next
        })

        if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current)
        fadeTimeoutRef.current = window.setTimeout(() => {
          // update current index after transition; do not overwrite the visible element's src
          currentIndexRef.current = nextIndex
        }, transitionDuration)
      }

      if (preImg.complete) {
        startFade()
      } else {
        preImg.onload = startFade
        preImg.onerror = () => {
          // on error, still attempt the fade after a short delay
          window.setTimeout(startFade, 200)
        }
      }
    }, 6000)

    const nameDelay = window.setTimeout(() => setShowName(true), 500)

    return () => {
      window.clearInterval(imageInterval)
      window.clearTimeout(nameDelay)
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen bg-surface text-ink scroll-smooth">
      <nav className="sticky top-0 z-40 site-topbar py-0">
        <div className="wrapper">
          <div className="site-menu">
            <span className="uppercase tracking-[0.28em] text-slate-500">Menu</span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#about" className="transition hover:text-glow">O mnie</a>
              <a href="#portfolio" className="transition hover:text-glow">Portfolio fotograficzne</a>
              <a href="#montazysta" className="transition hover:text-glow">Montaż wideo</a>
              <a href="#skills" className="transition hover:text-glow">Umiejętności</a>
              <a href="#contact" className="transition hover:text-glow">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8">
        <header className="space-y-6 -mt-10">
          <div className="relative mx-auto w-full max-w-[95vw] overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] p-0">
            <div className="absolute inset-0">
              <img
                src={frontSrc}
                alt="Tło portfolio"
                decoding="async"
                style={{ willChange: 'opacity' }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${showFront ? 'opacity-100' : 'opacity-0'}`}
              />
              <img
                src={backSrc}
                alt="Tło portfolio"
                decoding="async"
                style={{ willChange: 'opacity' }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${showFront ? 'opacity-0' : 'opacity-100'}`}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative flex min-h-[90vh] items-center justify-center text-center p-6 sm:p-10">
              <div className={`mx-auto w-[95%] max-w-7xl transition-all duration-1000 ease-out ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Portfolio zawodowe</p>
                <h1 className="mt-4 whitespace-nowrap text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  Mikołaj Zielonka
                </h1>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-200">
                  Boudoir · Cosplay · Portret kobiecy · Event
                </p>
              </div>
            </div>
          </div>
          <div id="about" className="scroll-mt-28">
            <AboutSection />
          </div>
          <div id="portfolio" className="scroll-mt-28">
            <Hero />
          </div>
        </header>

        <div className="scroll-mt-28">
          <PortfolioHighlight />
        </div>

        <div className="scroll-mt-28">
          <PortfolioPlaceholder />
        </div>

        <div className="scroll-mt-28">
          <VideoPortfolio />
        </div>

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

        <footer className="border-t border-white/10 py-6 text-sm text-slate/60">
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
