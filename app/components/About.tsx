import Image from "next/image";

export default function About() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 md:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-black/30">
          <Image
            src="/pascal.png"
            alt="Pascal"
            width={700}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Wer steckt hinter ECHTE WERTE?
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Warum ich diese Webseite erstellt habe.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
            Ich bin kein Finanzberater und auch kein Banker. Ich bin ein ganz
            normaler Mensch, der jeden Tag arbeiten geht – genau wie viele
            andere auch.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Wie viele andere habe ich mich gefragt, wie ich langfristig etwas
            aufbauen und mir neben meinem Beruf einen zusätzlichen finanziellen
            Spielraum schaffen kann. So bin ich auf das Thema physisches Gold
            gestossen.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Am Anfang hatte ich selbst viele Fragen. Genau deshalb habe ich
            diese Webseite erstellt: nicht um jemanden zu überzeugen, sondern
            um das Thema einfach, verständlich und ohne komplizierte
            Fachbegriffe zu erklären – so, wie ich es mir selbst am Anfang
            gewünscht hätte.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Wenn du Fragen hast oder dich etwas genauer interessiert, kannst du
            dich jederzeit unverbindlich bei mir melden. Ich teile gerne meine
            persönlichen Erfahrungen.
          </p>
        </div>
      </div>
    </section>
  );
}