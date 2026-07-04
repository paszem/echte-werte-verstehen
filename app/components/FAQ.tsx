const faqs = [
  [
    "Was ist ECHTE WERTE?",
    "ECHTE WERTE ist eine Informationsseite rund um physisches Gold, Kaufkraft und echte Sachwerte. Ziel ist nicht Druck, sondern Verständnis: Du sollst zuerst verstehen, worum es geht, und danach selbst entscheiden.",
  ],
  [
    "Worum geht es konkret?",
    "Es geht um den Kauf von physischem Feingold. Je nach Modell wird das Gold sicher verwahrt. Nach der Laufzeit kannst du es liefern lassen, abholen oder zum aktuellen Rückkaufspreis zum Verkauf anbieten.",
  ],
  [
    "Warum beschäftigen sich Menschen mit Gold?",
    "Viele Menschen sehen Gold als langfristigen Sachwert. Gold kann nicht einfach wie Papiergeld gedruckt werden und wird seit langer Zeit als Wertspeicher betrachtet.",
  ],
  [
    "Was bedeutet Kaufkraft?",
    "Der Geldbetrag bleibt gleich, aber was man dafür kaufen kann, verändert sich. Wenn Preise steigen, kann die Kaufkraft von Geld mit der Zeit sinken.",
  ],
  [
    "Woher kommen die Vorteile?",
    "Die Vorteile entstehen nicht aus dem Nichts. Sie basieren auf dem Geschäftsmodell und der Wertschöpfung innerhalb der Lieferkette. Ein Teil dieser Wertschöpfung wird an Kunden weitergegeben.",
  ],
  [
    "Ist das eine Beratung?",
    "Nein. Die Inhalte dienen der Information und ersetzen keine Finanz-, Anlage-, Steuer- oder Rechtsberatung.",
  ],
  [
    "Muss ich sofort etwas entscheiden?",
    "Nein. Nimm dir Zeit. Verstehen kommt zuerst – entscheiden kannst du später immer noch.",
  ],
  [
    "Wie erfahre ich mehr?",
    "Wenn dich ein Thema interessiert, kannst du unverbindlich Kontakt aufnehmen und deine Fragen persönlich stellen.",
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
            Antworten auf die
            <br />
            häufigsten Fragen.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Die meisten Fragen tauchen bei fast allen am Anfang auf. Deshalb
            findest du hier die wichtigsten Antworten auf einen Blick.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d4af37]/40"
            >
              <summary className="cursor-pointer list-none text-xl font-semibold text-white flex items-center justify-between">
                <span>{question}</span>
                <span className="text-[#d4af37] transition group-open:rotate-45 text-2xl">
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
