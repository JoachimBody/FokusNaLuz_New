import timelineVideo from '../assets/timeline1.mov'

const VideoPortfolio = () => {
  return (
    <section id="montazysta" className="scroll-mt-28 space-y-6 rounded-[2rem] border border-white/10 bg-[#111111]/95 p-6 shadow-panel sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio montażu wideo</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Montaż, color grading i krótkie formy dla social media
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Prezentacja wybranych projektów wideo — od reelsów po teasery i wizualne eksperymenty z AI.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="rounded-full border border-white/10 bg-[#0e0e0e]/90 px-4 py-2 text-sm text-slate-300 transition hover:border-glow/40 hover:text-white">
            Social Media / Reels
          </button>
          <button type="button" className="rounded-full border border-white/10 bg-[#0e0e0e]/90 px-4 py-2 text-sm text-slate-300 transition hover:border-glow/40 hover:text-white">
            Promosy / Materiały reklamowe
          </button>
          <button type="button" className="rounded-full border border-white/10 bg-[#0e0e0e]/90 px-4 py-2 text-sm text-slate-300 transition hover:border-glow/40 hover:text-white">
            Short Forms / AI Visuals
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-glow/30">
          <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              title="Reels marketingowy"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              loading="lazy"
              className="h-full w-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Social Media</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Reels z kampanii produktowej</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Szybki montaż w rytmie muzyki, z wyraźnym brandingiem i klarownym przekazem.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-glow/30">
          <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '9 / 16' }}>
            <video
              className="h-full w-full object-cover"
              src={timelineVideo}
              controls
              muted
              loop
              playsInline
            />
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Reels wertykalne</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Pionowy materiał</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Wideo w formacie 9:16 przygotowane z myślą o Instagram Reels i TikToku.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-glow/30">
          <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '9 / 16' }}>
            <div className="flex h-full w-full items-center justify-center bg-[#111111] text-slate-400">Placeholder vertical</div>
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Short Form</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Reels AI Visuals</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Pionowy format z generatywnymi assetami i efektem quick-cut idealnym do TikToka.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-glow/30">
          <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
            <div className="flex h-full w-full items-center justify-center bg-[#111111] text-slate-400">Placeholder promo</div>
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Promo</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Teaser eventowy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Skrócona forma wideo przeznaczona dla szybkiej komunikacji i prezentacji eventu.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-glow/30">
          <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '9 / 16' }}>
            <div className="flex h-full w-full items-center justify-center bg-[#111111] text-slate-400">Placeholder vertical</div>
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">AI Visuals</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Kampania social</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Krótki materiał wideo łączący motion design z generatywnymi efektami wizualnymi.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default VideoPortfolio
