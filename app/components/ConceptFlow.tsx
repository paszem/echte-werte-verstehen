const steps = [
  {
    title: "Gold kaufen",
    text: "Du entscheidest dich für physisches Feingold und wählst die gewünschte Menge sowie das passende Modell.",
  },
  {
    title: "Modell wählen",
    text: "Je nach Modell unterscheiden sich Laufzeit, Verwahrung und die jeweiligen Vorteile. Deshalb wird alles Schritt für Schritt erklärt.",
  },
  {
    title: "Sicher verwahren",
    text: "Während der Laufzeit wird das Gold je nach Modell sicher verwahrt. Du siehst die wichtigen Informationen im jeweiligen Ablauf.",
  },
  {
    title: "Am Ende entscheiden",
    text: "Nach Ablauf kannst du das Gold liefern lassen, abholen oder zum aktuellen Rückkaufspreis zum Verkauf anbieten.",
  },
];

export default function ConceptFlow() {
  return (
    <section id="ablauf" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            So funktioniert das Konzept
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Vom Kauf
            <br />
            bis zur Entscheidung.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Der Ablauf soll einfach verständlich sein: zuerst Gold verstehen,
            dann Modell verstehen und erst danach in Ruhe entscheiden.
          </p>
        </div>

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d4af37]/40"
            >
              <div className="flex gap-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d4af37] font-bold text-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-8 text-white/60">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
