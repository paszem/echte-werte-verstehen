export default function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-6 py-28">
      <div className="rounded-[2.8rem] border border-[#d4af37]/20 bg-[#d4af37]/10 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Nächster Schritt
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold leading-tight md:text-6xl">
          Noch Fragen?
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-8 text-white/60">
          Wenn nach dem Lesen noch etwas unklar ist, kannst du dich jederzeit
          unverbindlich bei mir melden.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-black/25 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Aus eigener Erfahrung
          </p>

          <p className="mt-5 leading-8 text-white/60">
            Ich habe mich selbst bewusst für diesen Weg entschieden und nutze
            dieses Produkt persönlich. Gerne teile ich meine Erfahrungen zum
            Ablauf, Dashboard, Lieferungen, Gutscheinen, der Registrierung sowie
            Ein- und Auszahlungen. Mein Ziel ist es, das Thema einfach und
            verständlich zu erklären, damit du dir in Ruhe deine eigene Meinung
            bilden kannst.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/41797541646"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#d4af37] px-10 py-4 font-semibold text-black transition hover:scale-105"
          >
            WhatsApp schreiben
          </a>

          <a
            href="https://my.tgi.li/de/register?sponsor=OTAwMDE2ODU"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-10 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Offizielle Registrierung
          </a>
        </div>
      </div>

      <footer className="py-12 text-center text-sm text-white/35">
        © ECHTE WERTE • Verstehen. Entscheiden. Zukunft.
      </footer>
    </section>
  );
}