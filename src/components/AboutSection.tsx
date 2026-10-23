import profileImg from '../assets/profile.jpg'

const AboutSection = () => {
  return (
    <section className="about-section space-y-10 rounded-[2rem] border border-white/[0.12] bg-[#111113]/95 p-6 shadow-panel sm:p-10 text-[#f5f2f0]">
      <div className="space-y-6">
        <div className="space-y-6">
          <p className="about-kicker text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">O mnie</p>
          <h1 className="about-title text-4xl font-bold leading-tight text-white sm:text-5xl">
            Fotograf portretowy, cosplayowy i artystyczny w Poznaniu
          </h1>
          <h2 className="about-subtitle mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Sesje, na których czujesz się swobodnie i pewnie.
          </h2>
        </div>
        <div className="about-grid grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="about-copy space-y-4 text-sm leading-7 text-[#d0c9c5] sm:text-base">
            <p>
              Jestem Mikołaj, fotograf z Poznania. Tworzę sesje portretowe, boudoir, cosplayowe i kreatywne w Poznaniu
              oraz całej Wielkopolsce. Nie musisz umieć pozować - pomogę Ci przejść przez sesję bez presji i sztywnego
              pozowania.
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-white">Spokojna atmosfera.</strong> Przed sesją ustalamy koncept i Twoje granice,
                a w trakcie prowadzę Cię krok po kroku.
              </li>
              <li>
                <strong className="text-white">Jasny przebieg współpracy.</strong> Wiesz, jak przygotować się do sesji
                i czego spodziewać się na każdym etapie.
              </li>
              <li>
                <strong className="text-white">Zdjęcia dopasowane do Ciebie.</strong> Dbam o klimat i autorską obróbkę,
                żeby efekt pasował do Twojego pomysłu.
              </li>
            </ul>
            <p>
              Poza sesjami fotografuję też koncerty i wydarzenia, m.in. we współpracy z kołem naukowym AdVinci.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#7ee7da] px-6 py-3 text-sm font-semibold text-[#090a0b] transition hover:bg-[#bde7e0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7ee7da]"
              >
                Umów sesję
              </a>
              <a
                href="/portfolio.html"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.2] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7ee7da]/[0.5] hover:text-[#7ee7da] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7ee7da]"
              >
                Zobacz portfolio
              </a>
            </div>
          </div>
          <div className="about-media relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[#171719] p-6">
            <img
              src={profileImg}
              alt="Mikołaj Zielonka"
              className="h-full w-full rounded-[1.5rem] object-cover object-center grayscale transition duration-300 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
