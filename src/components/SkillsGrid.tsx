const toolGroups = [
  {
    title: 'Adobe Photoshop',
    description: 'Retusz, kompozycja i finalna kontrola obrazu',
    skills: [
      'Retusz twarzy i skóry',
      'Maskowanie i praca na warstwach',
      'Korekta kolorów i tonacji',
      'Dodawanie efektów świetlnych',
      'Przygotowanie do druku i online',
    ],
  },
  {
    title: 'Adobe Lightroom',
    description: 'Selekcja zdjęć, szybka korekcja i stylizacja',
    skills: [
      'Korekta ekspozycji i balansu bieli',
      'Wybór najlepszych ujęć',
      'Organizacja katalogu zdjęć',
      'Retusz lokalny i korekty detali',
      'Spójny grading sesji',
    ],
  },
  {
    title: 'DaVinci Resolve',
    description: 'Montaż, kolor grading i finalne przygotowanie wideo',
    skills: [
      'Color grading i dopasowanie moodu',
      'Montaż wielościeżkowy i dynamiczne cięcia',
      'Praca w panelu Fairlight i sound design',
      'Eksport do formatów social media',
      'Fusion dla lekkich efektów motion',
    ],
  },
]

const SkillsGrid = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-6 shadow-panel sm:p-8">
        <div className="mb-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate/60">Umiejętności i narzędzia</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Moje narzędzia i konkretne umiejętności w każdym z nich.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate/70 sm:text-right">
            Pokazuję programy, z których korzystam na co dzień, oraz zakres pracy, który realizuję w każdym z nich.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {toolGroups.map((tool) => (
            <div key={tool.title} className="rounded-[1.75rem] border border-white/10 bg-[#111111]/90 p-6">
              <h3 className="text-lg font-semibold text-ink">{tool.title}</h3>
              <p className="mt-2 text-sm text-slate/400">{tool.description}</p>
              <div className="mt-5 space-y-3 text-sm text-slate/70">
                {tool.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 rounded-3xl border border-white/5 bg-white/3 px-4 py-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-glow/10 text-[0.8rem] font-semibold text-glow">›</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsGrid
