"use client";

import { useState } from "react";

const steps = [
  {
    title: "Gold kaufen",
    text: "Du kaufst physisches Gold und wählst die gewünschte Menge.",
  },
  {
    title: "Produkt wählen",
    text: "Je nach Produkt unterscheiden sich Laufzeit, Verwahrung und Vorteile.",
  },
  {
    title: "Am Ende entscheiden",
    text: "Nach der Laufzeit kannst du das Gold liefern lassen, abholen oder zum aktuellen Rückkaufspreis zum Verkauf anbieten.",
  },
];

export default function Intro() {
  const [active, setActive] = useState<(typeof steps)[0] | null>(null);

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
            Diese Webseite zeigt kompakt, wie physisches Gold und die
            verschiedenen Produktefunktionieren.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <p className="text-lg leading-8 text-white/65">
            Du kaufst physisches Gold. Je nach Produkt unterscheiden sich
            Laufzeit und Ablauf. Nach der Laufzeit entscheidest du, wie es
            weitergeht.
          </p>

          <div className="mt-9 grid gap-4">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActive(step)}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-left transition hover:border-[#d4af37]/50"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d4af37] text-sm font-bold text-black">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-[#d4af37]">Mehr erfahren →</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 px-6 backdrop-blur-xl"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-xl rounded-[2rem] border border-[#d4af37]/25 bg-[#101010] p-8 shadow-[0_45px_140px_rgba(0,0,0,0.85)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70"
            >
              ×
            </button>

            <h3 className="pr-14 text-4xl font-bold text-white">
              {active.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {active.text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}