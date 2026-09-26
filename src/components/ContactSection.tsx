const ContactSection = () => {
  return (
    <section className="contact-section space-y-8 rounded-[2rem] border border-white/[0.12] bg-[#0d0e10]/95 p-6 shadow-panel sm:p-8">
      <div className="contact-layout grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">Kontakt</p>
          <h2 className="contact-title mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Zorganizujmy Twoją sesję. Napisz lub zadzwoń.
          </h2>
          <p className="contact-copy mt-4 max-w-2xl text-sm leading-7 text-[#d0c9c5]">
            Chętnie odpowiem na zapytania o sesje, projekty wizerunkowe i dokumentację wydarzeń. Wybierz najszybszy sposób kontaktu.
          </p>

          <div className="contact-contacts mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:mikolaj.zielonka234@gmail.com"
              className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/[0.12] bg-[#111113] p-5 transition hover:border-[#7ee7da]/[0.45] hover:bg-[#15191a]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">mikolaj.zielonka234@gmail.com</p>
              </div>
              <p className="mt-4 text-sm text-[#aaa2a0]">Najlepiej do szybkiej wyceny i briefu.</p>
            </a>
            <a
              href="tel:+48500293121"
              className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/[0.12] bg-[#111113] p-5 transition hover:border-[#7ee7da]/[0.45] hover:bg-[#15191a]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Telefon</p>
                <p className="mt-3 text-lg font-semibold text-white">+48 500 293 121</p>
              </div>
              <p className="mt-4 text-sm text-[#aaa2a0]">Bezpośrednio, jeśli chcesz ustalić termin.</p>
            </a>
          </div>
        </div>

        <div className="contact-card rounded-[1.75rem] border border-white/[0.12] bg-[#111113] p-6 shadow-panel">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Szybszy kontakt</p>
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
        className="contact-form grid gap-4 rounded-[1.75rem] border border-white/[0.12] bg-[#111113] p-6 shadow-panel"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="contact-form-grid grid gap-4 lg:grid-cols-2">
          <label className="space-y-2 text-sm text-[#d0c9c5]">
            <span>Imię i nazwisko</span>
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full rounded-3xl border border-white/[0.14] bg-[#090a0b] px-4 py-3 text-sm text-[#f5f2f0] outline-none transition placeholder:text-[#aaa2a0] hover:border-white/25 focus:border-[#7ee7da]/[0.65] focus:ring-2 focus:ring-[#7ee7da]/20"
            />
          </label>
          <label className="space-y-2 text-sm text-[#d0c9c5]">
            <span>Email</span>
            <input
              type="email"
              placeholder="ty@example.com"
              className="w-full rounded-3xl border border-white/[0.14] bg-[#090a0b] px-4 py-3 text-sm text-[#f5f2f0] outline-none transition placeholder:text-[#aaa2a0] hover:border-white/25 focus:border-[#7ee7da]/[0.65] focus:ring-2 focus:ring-[#7ee7da]/20"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-[#d0c9c5]">
          <span>Opis projektu</span>
          <textarea
            rows={5}
            placeholder="Krótki opis, format i termin"
            className="w-full rounded-[1.25rem] border border-white/[0.14] bg-[#090a0b] px-4 py-4 text-sm text-[#f5f2f0] outline-none transition placeholder:text-[#aaa2a0] hover:border-white/25 focus:border-[#7ee7da]/[0.65] focus:ring-2 focus:ring-[#7ee7da]/20"
          />
        </label>

        <div className="contact-actions flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#aaa2a0]">
            Dostępny na zlecenia boudoir, portretowe, eventowe oraz koncertowe.
          </p>
          <button
            type="submit"
            className="contact-button inline-flex min-h-11 items-center justify-center rounded-full bg-[#7ee7da] px-6 py-3 text-sm font-semibold text-[#090a0b] shadow-[0_20px_60px_rgba(126,231,218,0.16)] transition hover:bg-[#bde7e0]"
          >
            Wyślij wiadomość
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection
