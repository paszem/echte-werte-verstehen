export default function Intro() {
  const options = [
    "physisches Gold kaufen",
    "je nach Modell sicher verwahren lassen",
    "nach der Laufzeit liefern lassen, abholen oder zum Rückkauf anbieten",
  ];

  return (
    <section id="worum" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Worum geht es?
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Physisches Gold.
            <br />
            Einfach erklärt.
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-[#d4af37]" />

          <p className="mt-10 text-xl leading-9 text-white/70">
            Diese Webseite soll dir zuerst verständlich zeigen, worum es beim
            Kauf von physischem Gold geht – ohne Druck, ohne Fachchinesisch und
            ohne dass du sofort etwas entscheiden musst.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <p className="text-lg leading-8 text-white/65">
            Im Mittelpunkt steht echtes Feingold. Du kannst Gold kaufen und je
            nach gewähltem Modell wird es bis zum Ende der Laufzeit sicher
            verwahrt. Während dieser Zeit gelten die jeweiligen Konditionen des
            Modells.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Nach Ablauf der Laufzeit entscheidest du selbst, wie es weitergeht.
            Du kannst das Gold liefern lassen, persönlich abholen oder es zum
            aktuellen Rückkaufspreis zum Verkauf anbieten.
          </p>

          <div className="mt-9 grid gap-4">
            {options.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d4af37] text-sm font-bold text-black">
                  {index + 1}
                </div>
                <p className="leading-7 text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
