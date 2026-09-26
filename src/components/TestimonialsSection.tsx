const testimonials = [
  {
    id: 1,
    platform: 'Google',
    quote: 'Profesjonalne podejście, przyjazna atmosfera i bardzo szybka dostawa zdjęć. Czułam się swobodnie od pierwszej minuty.',
    author: 'Aleksandra Turkiewicz',
    role: 'Klientka',
    initials: 'AT',
  },
  {
    id: 2,
    platform: 'Google',
    quote: 'Super fotki, świetna atmosfera i pełen profesjonalizm. Widać, że zależy mu na tym, by modelka na zdjęciach wyglądała naprawdę dobrze.',
    author: 'Jagoda Tórz',
    role: 'Klientka',
    initials: 'JT',
  },
  {
    id: 3,
    platform: 'Google',
    quote: 'To już druga sesja z tym fotografem i za każdym razem czuję, że dostaję coś więcej niż zwykłe zdjęcia — świetną komunikację i bardzo dopracowane efekty.',
    author: 'Alice',
    role: 'Klientka',
    initials: 'AL',
  },
  {
    id: 4,
    platform: 'Inne portale',
    quote: 'Bardzo cenię spokojne prowadzenie sesji, precyzyjne wskazówki i to, że każda uwaga była konstruktywna i pomocna.',
    author: 'Milena',
    role: 'Klientka',
    initials: 'ML',
  },
]

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section rounded-[2rem] border border-white/[0.12] bg-[#111113]/95 p-6 shadow-panel sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center px-0 py-0 text-sm uppercase tracking-[0.3em] text-[#aaa2a0]">
            Opinie klientów
          </span>
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Zaufanie, które widać w słowach
          </h2>
          <p className="text-sm leading-6 text-slate-300">
            Zobacz, co o współpracy i efektach sesji mówią moi klienci.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-[1.4rem] border border-white/[0.12] bg-[#0d0e10] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#7ee7da]/[0.35] hover:bg-[#15191a]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#aaa2a0]">{testimonial.role}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-1 text-sm uppercase tracking-[0.28em] text-[#d0c9c5]">
                {testimonial.platform}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-1 text-[13px] text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={`${testimonial.id}-${index}`}>★</span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-7 text-[#d0c9c5]">“{testimonial.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
