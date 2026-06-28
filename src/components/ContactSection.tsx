const ContactSection = () => {
  return (
    <section className="space-y-8 rounded-[2rem] border border-white/10 bg-[#090909]/95 p-6 shadow-panel sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate/60">Kontakt</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Zorganizujmy Twoją sesję. Napisz lub zadzwoń.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Chętnie odpowiem na zapytania o sesje, projekty wizerunkowe i dokumentację wydarzeń. Wybierz najszybszy sposób kontaktu.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:mikolaj.zielonka234@gmail.com"
              className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#111111]/90 p-5 transition hover:border-glow/40"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">mikolaj.zielonka234@gmail.com</p>
              </div>
              <p className="mt-4 text-sm text-slate-400">Najlepiej do szybkiej wyceny i briefu.</p>
            </a>
            <a
              href="tel:+48500293121"
              className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#111111]/90 p-5 transition hover:border-glow/40"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Telefon</p>
                <p className="mt-3 text-lg font-semibold text-white">+48 500 293 121</p>
              </div>
              <p className="mt-4 text-sm text-slate-400">Bezpośrednio, jeśli chcesz ustalić termin.</p>
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-[#111111]/95 p-6 shadow-panel">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Szybszy kontakt</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Wybierz sposób, który odpowiada Ci najbardziej.</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Formularz jest wygodny, ale jeśli zależy Ci na szybkim kontakcie, napisz lub zadzwoń bezpośrednio.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Opisz typ sesji, termin i atmosferę, którą chcesz osiągnąć. To pomaga mi przygotować konkretną odpowiedź.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            <li>• Sesje boudoir i portrety</li>
            <li>• Reportaże eventowe i koncertowe</li>
            <li>• Szybka wstępna wycena i dostępność terminów</li>
          </ul>
        </div>
      </div>

      <form
        className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-[#111111]/95 p-6 shadow-panel"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="space-y-2 text-sm text-slate/70">
            <span>Imię i nazwisko</span>
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-ink outline-none transition focus:border-glow/40 focus:ring-2 focus:ring-glow/10"
            />
          </label>
          <label className="space-y-2 text-sm text-slate/70">
            <span>Email</span>
            <input
              type="email"
              placeholder="ty@example.com"
              className="w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-ink outline-none transition focus:border-glow/40 focus:ring-2 focus:ring-glow/10"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-slate/70">
          <span>Opis projektu</span>
          <textarea
            rows={5}
            placeholder="Krótki opis, format i termin"
            className="w-full rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] px-4 py-4 text-sm text-ink outline-none transition focus:border-glow/40 focus:ring-2 focus:ring-glow/10"
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate/60">
            Dostępny na zlecenia boudoir, portretowe, eventowe oraz koncertowe.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-surface shadow-[0_20px_60px_rgba(102,255,234,0.18)] transition hover:bg-glow/90"
          >
            Wyślij wiadomość
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection
