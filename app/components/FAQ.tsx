const faqs = [
  [
    "Woher kommen die Vorteile?",
    "Die Vorteile entstehen nicht aus dem Nichts. Sie basieren auf dem Geschäftsmodell und der Wertschöpfung innerhalb der Lieferkette. Ein Teil davon kann an Kunden weitergegeben werden.",
  ],
  [
    "Kann ich mir das Gold liefern lassen?",
    "Ja. Je nach gewähltem Produkt kannst du nach Ablauf der Laufzeit entscheiden, ob du dir das Gold liefern lässt, es persönlich abholst oder zum aktuellen Rückkaufspreis zum Verkauf anbietest.",
  ],
  [
    "Ist das eine Beratung?",
    "Nein. Diese Webseite dient der Information und ersetzt keine Finanz-, Anlage-, Steuer- oder Rechtsberatung.",
  ],
  [
    "Sind die Berechnungen verbindlich?",
    "Nein. Der Rechner dient als vereinfachtes Beispiel. Massgebend sind immer die aktuell gültigen Produktbedingungen.",
  ],
  [
    "Wie erfahre ich mehr?",
    "Wenn du Fragen hast oder etwas genauer verstehen möchtest, kannst du dich jederzeit unverbindlich bei mir melden.",
  ],
];

export default function FAQ() {
  return (
    <section id="fragen" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Häufige Fragen
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Noch Fragen?
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Hier findest du die wichtigsten Antworten auf einen Blick.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d4af37]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold text-white">
                <span>{question}</span>
                <span className="text-2xl text-[#d4af37] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 leading-8 text-white/60">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}