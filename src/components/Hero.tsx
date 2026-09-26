const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#0d0e10] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,231,218,0.07),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_30%)] opacity-90"
        aria-hidden="true"
      />
      <div className="relative space-y-6">
        <div className="space-y-6">
          <p className="hero-kicker inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#d0c9c5]">
            fotograf portretowy, cosplay i edytorial
          </p>
          <h1 className="hero-title max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Sesje kobiece, odważne koncepty i dokumentacja koncertowa.
          </h1>
          <p className="hero-copy max-w-2xl text-sm leading-7 text-[#d0c9c5] sm:text-base">
            Tworzę sesje boudoir, portrety i fotografie eventowe, które łączą estetykę z atmosferą oraz silnym
            przekazem wizualnym. Przedstawiam praktykę, styl i gotowość do pracy na scenie.
          </p>
          <div className="hero-badges flex flex-wrap gap-3 text-xs uppercase tracking-[0.38em] text-[#d0c9c5]">
            <span className="hero-badge rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2">Boudoir</span>
            <span className="hero-badge rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2">Portret</span>
            <span className="hero-badge rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2">Koncert</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
