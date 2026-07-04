const topics = [
  {
    title: "Warum Gold?",
    eyebrow: "Sachwert",
    text: "Gold wird seit langer Zeit als Wertspeicher geschätzt. Es ist ein realer Sachwert und kann nicht einfach beliebig gedruckt oder vermehrt werden.",
  },
  {
    title: "Was ist Kaufkraft?",
    eyebrow: "Einfach erklärt",
    text: "Zehn Franken bleiben zehn Franken. Entscheidend ist aber, was du dir in einigen Jahren damit noch leisten kannst. Genau darum geht es bei Kaufkraft.",
  },
  {
    title: "Was bedeutet Inflation?",
    eyebrow: "Preise & Geldwert",
    text: "Wenn Preise über längere Zeit steigen, kann der gleiche Geldbetrag weniger kaufen als früher. Viele Menschen beschäftigen sich deshalb mit echten Werten.",
  },
  {
    title: "Warum halten Zentralbanken Gold?",
    eyebrow: "Vertrauen",
    text: "Auch Zentralbanken halten Goldreserven. Das zeigt, dass Gold weltweit weiterhin als wichtiger Wert- und Vertrauensanker betrachtet wird.",
  },
  {
    title: "Gold vs. Papiergeld",
    eyebrow: "Unterschied verstehen",
    text: "Geld ist praktisch im Alltag. Gold ist kein Ersatz für Geld, sondern wird von vielen als langfristiger Wert betrachtet, weil es physisch vorhanden und begrenzt ist.",
  },
  {
    title: "Woher kommen die Vorteile?",
    eyebrow: "Geschäftsmodell",
    text: "Die Vorteile entstehen nicht aus dem Nichts. Sie basieren auf dem Geschäftsmodell und der Wertschöpfung innerhalb der Lieferkette. Ein Teil davon wird an Kunden weitergegeben.",
  },
];

export default function GoldKnowledge() {
  return (
    <section id="wissen" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Wissen in 2 Minuten
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Warum Gold
              <br />
              interessant ist.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/60">
              Bevor man über Modelle spricht, sollte man zuerst verstehen, warum
              sich Menschen überhaupt mit Gold, Kaufkraft und echten Werten
              beschäftigen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-7 transition hover:border-[#d4af37]/45 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  {topic.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {topic.title}
                </h3>
                <p className="mt-4 leading-7 text-white/55">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
