import processPhoto from '../assets/Ala_1.jpg'

const steps = [
  {
    title: 'Piszesz do mnie',
    description: 'Opowiedz krótko o pomyśle, rodzaju sesji i tym, na czym Ci zależy.',
  },
  {
    title: 'Ustalamy szczegóły',
    description: 'Wspólnie wybieramy koncept, miejsce i klimat. Omawiamy też przygotowanie oraz Twoje granice.',
  },
  {
    title: 'Spotykamy się na sesji',
    description: 'Prowadzę Cię na każdym etapie, więc nie musisz wiedzieć, jak pozować.',
  },
  {
    title: 'Odbierasz gotowe zdjęcia',
    description: 'Po selekcji i autorskiej obróbce przekazuję Ci gotowe fotografie w ciągu 7–21 dni, zależnie od liczby zdjęć.',
  },
]

const SessionProcessSection = () => {
  return (
    <section className="session-process grid gap-8 rounded-[2rem] border border-white/[0.12] bg-[#111113]/95 p-6 text-[#f5f2f0] shadow-panel sm:p-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Krok po kroku</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Jak przebiega sesja?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d0c9c5] sm:text-base">
          Od pierwszej wiadomości do gotowych zdjęć — przeprowadzę Cię przez cały proces.
        </p>

        <ol className="mt-7 space-y-5">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#7ee7da]/40 bg-[#7ee7da]/[0.1] text-sm font-semibold text-[#7ee7da]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#d0c9c5]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href="#contact"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#7ee7da] px-6 py-3 text-sm font-semibold text-[#090a0b] transition hover:bg-[#bde7e0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7ee7da]"
        >
          Umów sesję
        </a>
      </div>

      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[#171719] lg:max-w-none">
        <img
          src={processPhoto}
          alt="Portret z sesji fotograficznej"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default SessionProcessSection
