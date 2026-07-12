import profileImg from '../assets/profile.jpg'

const AboutSection = () => {
  return (
    <section className="space-y-10 rounded-[2rem] border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-panel sm:p-10 text-white" style={{ color: '#ffffff' }}>
      <div className="space-y-6">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white">O mnie</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
  Fotograf portretów, cosplayu i sesji artystycznych w Poznaniu
</h1>
<h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
  Fotograf budujący opowieść o warsztacie i jakości — na luzie, jak ze znajomym.
</h2>
</div>
<div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-4 text-sm leading-7 sm:text-base" style={{ color: '#ffffff' }}>
            <p>
              Jestem fotografem z Poznania i działam na terenie całej Wielkopolski (na inne miasta w Polsce dojeżdżam
              za dodatkową opłatą). Specjalizuję się w sesjach portretowych, cosplayowych, boudoir oraz kreatywnych
              realizacjach z wyrazistym klimatem. Nie interesują mnie sztywne, pozowane ujęcia — stawiam na autentyczny
              klimat, dobry vibe i atmosferę, w której czujesz się swobodnie, a nie oceniana/y. Zero spiny, pełen profesjonalizm.
            </p>
            <p>
              Rozwijam się też w fotografii koncertowej i eventowej — dokumentuję energię sceny, grę świateł i emocje
              publiczności. Współpracuję z artystami i organizatorami wydarzeń, którzy potrzebują profesjonalnej,
              klimatycznej dokumentacji, a nie tylko standardowej fotorelacji.
            </p>
            <p>
              Fotografuję eventy razem z kołem naukowym AdVinci, a jako wolontariusz dokumentowałem juwenalia. W pracy
              liczy się dla mnie przejrzysty proces, terminowość i efekt, który realnie wzmacnia Twoją markę, social
              media albo po prostu daje Ci zdjęcia, z których jesteś dumna/y. Masz odklejony pomysł na sesję? Napisz do
              mnie — formularz kontaktowy znajdziesz na dole strony.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111]/90 p-6">
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
