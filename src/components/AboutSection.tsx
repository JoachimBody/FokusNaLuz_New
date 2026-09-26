import profileImg from '../assets/profile.jpg'

const AboutSection = () => {
  return (
    <section className="about-section space-y-10 rounded-[2rem] border border-white/[0.12] bg-[#111113]/95 p-6 shadow-panel sm:p-10 text-[#f5f2f0]">
      <div className="space-y-6">
        <div className="space-y-6">
          <p className="about-kicker text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">O mnie</p>
          <h1 className="about-title text-4xl font-bold leading-tight text-white sm:text-5xl">
            Fotograf portretowy, cosplayowy i artystycznych w Poznaniu
          </h1>
          <h2 className="about-subtitle mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Fotograf budujący opowieść o warsztacie i jakości - na luzie, jak ze znajomym.
          </h2>
        </div>
        <div className="about-grid grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="about-copy space-y-4 text-sm leading-7 text-[#d0c9c5] sm:text-base">
            <p>
              Jestem fotografem z Poznania i działam na terenie całej Wielkopolski (do innych miast w Polsce dojeżdzam
              za dodatkową opłatą). Specjalizuję się w sesjach portretowych, cosplayowych, boudoir oraz kreatywnych
              realizacjach z wyrazistym klimatem. Nie interesują mnie sztywne, pozowane ujęcia - stawiam na autentyczny
              klimat, dobry vibe i atmosferę, w której czujesz się swobodnie, a nie oceniana/y. Zero spiny, pełen profesjonalizm.
            </p>
            <p>
              Rozwijam się też w fotografii koncertowej i eventowej - dokumentuję energię sceny, grę świateł i emocje
              publiczności. Współpracuję z artystami i organizatorami wydarzeń, którzy potrzebują profesjonalnej,
              klimatycznej dokumentacji, a nie tylko standardowej fotorelacji.
            </p>
            <p>
              Fotografuję eventy razem z kołem naukowym AdVinci, a jako wolontariusz dokumentowałem juwenalia. W pracy
              liczy się dla mnie przejrzysty proces, terminowość i efekt, który realnie wzmacnia Twoją markę, social
              media albo po prostu daje Ci zdjęcia, z których jesteś dumna/y. Masz odklejony pomysł na sesję? Napisz do
              mnie - formularz kontaktowy znajdziesz na dole strony.
            </p>
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
