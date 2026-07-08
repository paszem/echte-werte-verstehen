"use client";

import { useEffect, useState } from "react";

type Item = {
  title: string;
  eyebrow: string;
  text: string;
  detail: string;
};

const items: Item[] = [
  {
    title: "Kurzfristiger Preisvorteil",
    eyebrow: "2 Monate",
    text: "Beim kurzfristigen Produkt steht der direkte Preisvorteil im Mittelpunkt.",
    detail:
      "Du kaufst physisches Gold mit einem Preisvorteil. Nach der Laufzeit kannst du je nach Modell entscheiden, ob du dir das Gold liefern lässt, es persönlich abholst oder zum aktuellen Rückkaufspreis zum Verkauf anbietest. Der Rechner zeigt dir ein vereinfachtes Beispiel dazu.",
  },
  {
    title: "Langfristiger Wertaufbau",
    eyebrow: "Zukunft",
    text: "Wer langfristig denkt, kann Schritt für Schritt echte Werte aufbauen.",
    detail:
      "Ein möglicher Ansatz ist, erhaltene Vorteile nicht direkt auszugeben, sondern sie später wieder für den Kauf von physischem Gold zu nutzen. So kann der Goldbestand mit der Zeit Schritt für Schritt wachsen. Wie dieser Weg aussieht, entscheidet jeder selbst und richtet sich nach den eigenen Zielen sowie dem gewählten Modell.",
  },
  {
    title: "So funktioniert der Ablauf",
    eyebrow: "Einfach erklärt",
    text: "Gold kaufen, Produkt wählen, Laufzeit abwarten und am Ende entscheiden.",
    detail:
      "Der Ablauf besteht im Grundsatz aus wenigen Schritten: Du wählst physisches Gold, entscheidest dich für ein Produkt, lässt es je nach Produkt während der Laufzeit verwahren und entscheidest danach, wie es weitergeht.",
  },
  {
    title: "Nach der Laufzeit",
    eyebrow: "Deine Möglichkeiten",
    text: "Am Ende entscheidest du, ob Lieferung, Abholung oder Rückkauf passt.",
    detail:
      "Nach Ablauf der Laufzeit kannst du dein Gold je nach Modell liefern lassen, persönlich abholen oder zum aktuellen Rückkaufspreis zum Verkauf anbieten. So bleibt der nächste Schritt offen und richtet sich nach deiner Situation.",
  },
  {
    title: "Woher kommen die Vorteile?",
    eyebrow: "Geschäftsmodell",
    text: "Die Vorteile entstehen durch das Geschäftsmodell und die Wertschöpfung.",
    detail:
      "Die Vorteile entstehen nicht aus dem Nichts. Sie basieren auf dem Geschäftsmodell und der Wertschöpfung innerhalb der Lieferkette. Ein Teil davon kann an Kunden weitergegeben werden. Entscheidend sind immer das gewählte Produkt, die Laufzeit und die gültigen Bedingungen.",
  },
];

export default function Discover() {
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <section
      id="entdecken"
      className="border-y border-white/10 bg-white/[0.025]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Möglichkeiten entdecken
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Kurzfristig.
              <br />
              Langfristig.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/60">
              Hier findest du die wichtigsten Möglichkeiten kompakt erklärt.
              Details öffnest du nur, wenn du mehr wissen möchtest.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => setActive(item)}
                className="group rounded-3xl border border-white/10 bg-black/30 p-7 text-left transition hover:border-[#d4af37]/50 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/55">{item.text}</p>

                <p className="mt-6 text-sm font-semibold text-[#d4af37] transition group-hover:translate-x-1">
                  Mehr erfahren →
                </p>
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
            className="relative max-w-2xl rounded-[2rem] border border-[#d4af37]/25 bg-[#101010] p-8 shadow-[0_45px_140px_rgba(0,0,0,0.85)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-[#d4af37]/50 hover:text-white"
            >
              ×
            </button>

            <p className="pr-14 text-sm font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              {active.eyebrow}
            </p>

            <h3 className="mt-5 pr-14 text-4xl font-bold leading-tight text-white">
              {active.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {active.detail}
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Hinweis
              </p>
              <p className="mt-3 leading-7 text-white/55">
                Diese Informationen dienen zur Orientierung. Entscheidend sind
                immer die gültigen Bedingungen des jeweiligen Produkts.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}