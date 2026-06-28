import profileImg from '../assets/profile.jpg'

const AboutSection = () => {
  return (
    <section className="space-y-10 rounded-[2rem] border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-panel sm:p-10 text-white" style={{ color: '#ffffff' }}>
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white">O mnie</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Fotograf budujący opowieść o warsztacie i jakości.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-4 text-sm leading-7 sm:text-base" style={{ color: '#ffffff' }}>
            <p>
              Specjalizuję się w fotografii sesyjnej w Polsce: boudoir, portrety kobiece oraz kreatywne realizacje z wyrazistym
              klimatem. Moje sesje służą budowaniu silnego wizerunku i wyrazistej estetyki.
            </p>
            <p>
              Ostatnio rozwijam również fotografię koncertową i reportażową, dokumentując atmosferę sceny, grę świateł
              oraz emocje publiczności. Pracuję dla artystów i wydarzeń, które potrzebują profesjonalnej dokumentacji.
            </p>
            <p>
              Współpracuję z kołem AdVinci przy zdjęciach eventowych, a jako wolontariusz fotografowałem juwenalia.
              Stawiam na przejrzysty proces, terminowość i efekty, które wzmacniają markę, komunikację oraz social media.
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
