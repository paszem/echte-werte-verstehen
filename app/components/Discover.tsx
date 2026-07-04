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
    title: "Vorteile verstehen",
    eyebrow: "Woher kommt das?",
    text: "Warum entstehen Vorteile und weshalb sollte man den Ablauf genau verstehen?",
    detail:
      "Vorteile entstehen nicht einfach aus dem Nichts. Sie basieren auf dem Geschäftsmodell und der Wertschöpfung innerhalb der Lieferkette. Ein Teil davon kann an Kunden weitergegeben werden. Wichtig ist, immer das gewählte Modell, die Laufzeit und die Bedingungen zu verstehen.",
  },
  {
    title: "Physisches Gold",
    eyebrow: "Was kaufe ich?",
    text: "Es geht nicht um Zahlen auf einem Bildschirm, sondern um echtes Feingold.",
    detail:
      "Im Mittelpunkt steht physisches Feingold. Je nach gewähltem Modell wird es bis zum Ende der Laufzeit sicher verwahrt. Danach entscheidest du, ob du es liefern lassen, abholen oder zum aktuellen Rückkaufspreis zum Verkauf anbieten möchtest.",
  },
  {
    title: "Kaufkraft & Werte",
    eyebrow: "Langfristig denken",
    text: "Warum viele Menschen nicht nur Geld sparen, sondern echte Werte verstehen möchten.",
    detail:
      "Geld auf dem Konto bleibt zwar derselbe Betrag. Entscheidend ist aber, was man sich später noch dafür leisten kann. Deshalb beschäftigen sich viele Menschen mit Sachwerten wie Gold, um das Thema Kaufkraft langfristig besser zu verstehen.",
  },
  {
    title: "Inflation einfach erklärt",
    eyebrow: "Alltag",
    text: "Warum Dinge teurer werden können und was das mit deinem Geld macht.",
    detail:
      "Inflation bedeutet vereinfacht: Viele Preise steigen über längere Zeit. Dadurch kann derselbe Geldbetrag weniger kaufen als früher. Genau deshalb ist Kaufkraft ein wichtiges Thema, wenn man langfristig denkt.",
  },
  {
    title: "Am Ende der Laufzeit",
    eyebrow: "Flexibilität",
    text: "Liefern lassen, abholen oder zum Rückkauf anbieten – du entscheidest den nächsten Schritt.",
    detail:
      "Nach Ablauf der Laufzeit gibt es je nach Modell verschiedene Möglichkeiten. Du kannst dein physisches Gold liefern lassen, es persönlich abholen oder es zum aktuellen Rückkaufspreis zum Verkauf anbieten. So versteht man den Ablauf bis zum Schluss.",
  },
  {
    title: "Persönlich fragen",
    eyebrow: "Direkt klären",
    text: "Wenn etwas unklar ist, lässt es sich oft persönlich schneller erklären.",
    detail:
      "Bei Fragen zum Ablauf, Dashboard, Ein- und Auszahlungen, Lieferungen oder Registrierung kannst du dich persönlich melden. Ich teile gerne meine eigenen Erfahrungen.",
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
              Öffne nur,
              <br />
              was dich interessiert.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/60">
              Die wichtigsten Themen bleiben bewusst übersichtlich. Wenn dich
              etwas mehr interessiert, kannst du es öffnen und in Ruhe lesen.
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
                Diese Informationen dienen zur Orientierung. Eine Entscheidung
                sollte immer in Ruhe und auf Basis der gültigen Bedingungen
                getroffen werden.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
