export default function Principle() {
  const points = [
    {
      number: "01",
      title: "Grundprinzip",
      text: "Es geht darum, physische Werte verständlich zu erklären und verschiedene Möglichkeiten Schritt für Schritt einzuordnen.",
    },
    {
      number: "02",
      title: "Möglichkeiten",
      text: "Je nach Ziel können unterschiedliche Wege interessant sein. Wichtig ist, zuerst den Ablauf und die Bedingungen zu verstehen.",
    },
    {
      number: "03",
      title: "Eigene Entscheidung",
      text: "Erst wenn du das Prinzip verstanden hast, kannst du entscheiden, ob das Thema für dich überhaupt interessant ist.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="rounded-[2.8rem] border border-[#d4af37]/20 bg-white/[0.035] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Worum geht es eigentlich?
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Erst das Prinzip.
              <br />
              Dann die Zahlen.
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/60">
              Diese Webseite erklärt Schritt für Schritt das Grundprinzip. Ziel
              ist nicht, dich zu überzeugen, sondern dir verständlich zu zeigen,
              wie physische Werte als Sachwert funktionieren können und welche
              Möglichkeiten es dabei gibt.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Wenn du das Prinzip verstanden hast, machen auch Beispiele,
              Rechner und weitere Informationen viel mehr Sinn.
            </p>
          </div>

          <div className="grid gap-5">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  {point.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{point.title}</h3>
                <p className="mt-3 leading-7 text-white/55">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
