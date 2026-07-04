export default function Why() {
  const cards = [
    {
      title: "Verstehen",
      text: "Einfach erklärt – ohne komplizierte Fachbegriffe.",
    },
    {
      title: "Orientierung",
      text: "Zusammenhänge erkennen und Möglichkeiten besser einordnen.",
    },
    {
      title: "Eigene Entscheidung",
      text: "In deinem Tempo informieren und dir selbst ein Bild machen.",
    },
    {
      title: "Zukunft",
      text: "Langfristig denken statt nur auf den Moment schauen.",
    },
  ];

  return (
    <section id="warum" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Warum diese Seite?
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Erst verstehen.
            <br />
            Dann entscheiden.
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-[#d4af37]" />

          <p className="mt-10 text-xl leading-9 text-white/70">
            Eine gute Entscheidung beginnt nicht mit Vertrauen.
          </p>

          <p className="mt-3 text-2xl font-semibold text-white">
            Sondern mit Verständnis.
          </p>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/60">
            Jeden Tag begegnen uns Themen, über die viele sprechen – aber nur
            wenige verständlich erklären.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Genau deshalb gibt es ECHTE WERTE: eine ruhige und einfache
            Einführung, damit du Zusammenhänge besser verstehst und dir in Ruhe
            deine eigene Meinung bilden kannst.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Die Seite bleibt bewusst übersichtlich. Wenn dich ein Thema mehr
            interessiert, kannst du es öffnen und Schritt für Schritt
            weiterlesen.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d4af37]/40 hover:bg-white/[0.055]"
              >
                <h3 className="text-xl font-semibold text-[#d4af37]">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-white/55">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
