import { useState } from 'react'
import Hero from './components/Hero'
import PortfolioHighlight from './components/PortfolioHighlight'
import PortfolioPlaceholder from './components/PortfolioPlaceholder'
import PortfolioTabs from './components/PortfolioTabs'
import VideoPortfolio from './components/VideoPortfolio'
import SkillsGrid from './components/SkillsGrid'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <main className="min-h-screen bg-surface text-ink scroll-smooth">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8">
        <nav className="sticky top-0 z-40 border-b border-white/10 bg-surface/95 py-3 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:px-6 lg:px-8">
            <span className="uppercase tracking-[0.28em] text-slate-500">Menu</span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#about" className="transition hover:text-glow">O mnie</a>
              <a href="#portfolio" className="transition hover:text-glow">Portfolio fotograficzne</a>
              <a href="#montazysta" className="transition hover:text-glow">Montaż wideo</a>
              <a href="#skills" className="transition hover:text-glow">Umiejętności</a>
              <a href="#contact" className="transition hover:text-glow">Kontakt</a>
            </div>
          </div>
        </nav>

        <header className="space-y-6">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate/60">Portfolio zawodowe</p>
              <h1 className="mt-4 text-5xl font-semibold leading-tight text-ink sm:text-6xl">
                Nazywam się Mikołaj Zielonka
              </h1>
              <p className="mt-4 max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl">
                Tworzę wysokokontrastowe sesje kobiece, koncertowe i eventowe ze szczególnym nastawieniem na kreatywne koncepcje.
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate/70">
              <p>Boudoir · Portret kobiecy · Koncert · Event</p>
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
