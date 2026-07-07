export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(212,175,55,0.30),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(255,255,255,0.07),transparent_28%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050505] to-black" />

      <div className="absolute right-[-180px] top-20 h-[620px] w-[620px] rounded-full border border-[#d4af37]/10" />
      <div className="absolute right-[-80px] top-36 h-[420px] w-[420px] rounded-full border border-[#d4af37]/20" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-[#d4af37]">
            Physisches Gold einfach erklärt.
          </p>

          <h1 className="text-7xl font-bold leading-none tracking-[0.06em] md:text-9xl">
            ECHTE
            <br />
            <span className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.12)]">
              WERTE
            </span>
          </h1>

          <p className="mt-7 text-lg tracking-[0.18em] text-[#d4af37]/80">
            Einfach. Verständlich. Ehrlich.
          </p>

          <p className="mt-10 max-w-2xl text-2xl font-light leading-10 text-white/75">
            <span className="font-medium text-white">
              Verstehe die Grundlagen und entdecke verschiedene Möglichkeiten.
            </span>
            <br />
            Kompakt erklärt, damit du dir in Ruhe ein eigenes Bild machen kannst.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-[#d4af37] px-10 py-4 font-semibold text-black shadow-[0_0_70px_rgba(212,175,55,0.30)] transition hover:scale-105 hover:shadow-[0_0_95px_rgba(212,175,55,0.42)]"
              href="#worum"
            >
              Mehr erfahren
            </a>

            <a
              className="rounded-full border border-white/15 px-10 py-4 font-semibold text-white/85 transition hover:border-[#d4af37]/70 hover:bg-white/5"
              href="#rechner"
            >
              Rechner öffnen
            </a>
          </div>
        </div>

        <div className="rounded-[2.8rem] border border-[#d4af37]/20 bg-white/[0.055] p-8 shadow-[0_45px_140px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Auf einen Blick
          </p>

          <div className="mt-10 space-y-6">
            {[
              ["01", "Grundlagen", "Warum Gold für viele Menschen ein Thema ist."],
              ["02", "Rechner", "Kurzfristige und langfristige Beispiele in CHF."],
              ["03", "Persönlich", "Bei Fragen kannst du dich direkt melden."],
            ].map(([n, title, text]) => (
              <div key={title} className="border-t border-white/10 pt-6">
                <p className="text-[#d4af37]">{n}</p>
                <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}