const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] p-6 sm:p-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(102,255,234,0.08),transparent_35%),linear-gradient(180deg,rgba(255,95,109,0.05),transparent_30%)] opacity-90"
        aria-hidden="true"
      />
      <div className="relative space-y-6">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-200">
            fotograf sesyjny i koncertowy
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Sesje kobiece, odważne koncepty i dokumentacja koncertowa.
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white sm:text-base" style={{ color: '#ffffff' }}>
            Tworzę sesje boudoir, portrety i fotografie eventowe, które łączą estetykę z atmosferą oraz silnym
            przekazem wizualnym. Przedstawiam praktykę, styl i gotowość do pracy na scenie.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.38em] text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Boudoir</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Portret</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Koncert</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
