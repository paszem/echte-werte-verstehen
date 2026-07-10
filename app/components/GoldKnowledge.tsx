"use client";

import { useEffect, useState } from "react";

type Topic = {
  title: string;
  eyebrow: string;
  text: string;
  detail: string;
};

const topics: Topic[] = [
  {
    title: "Warum Gold?",
    eyebrow: "Sachwert",
    text: "Gold ist ein physischer Sachwert und kann nicht beliebig vermehrt werden.",
    detail:
      "Gold wird seit langer Zeit als Wertspeicher geschätzt. Es ist physisch vorhanden, weltweit bekannt und nur begrenzt verfügbar. Viele Menschen betrachten Gold deshalb als langfristige Ergänzung zu Geld auf dem Konto.",
  },
  {
    title: "Kaufkraft",
    eyebrow: "Einfach erklärt",
    text: "Entscheidend ist nicht nur, wie viel Geld du hast, sondern was du dir später damit leisten kannst.",
    detail:
      "Kaufkraft beschreibt, wie viele Waren und Dienstleistungen du für dein Geld erhältst. Der Geldbetrag kann gleich bleiben, während die Preise steigen. Wenn ein Einkauf heute 100 CHF kostet und später teurer wird, reichen dieselben 100 CHF möglicherweise nicht mehr aus.",
  },
  {
    title: "Inflation",
    eyebrow: "Preise & Geldwert",
    text: "Steigen Preise über längere Zeit, kann derselbe Geldbetrag weniger kaufen als früher.",
    detail:
      "Inflation bedeutet vereinfacht, dass viele Produkte und Dienstleistungen mit der Zeit teurer werden. Dadurch verliert Geld einen Teil seiner Kaufkraft. Genau deshalb beschäftigen sich viele Menschen mit Werterhalt und realen Sachwerten.",
  },
  {
    title: "Zentralbanken",
    eyebrow: "Weltweite Bedeutung",
    text: "Viele Zentralbanken halten Goldreserven als Teil ihrer Währungsreserven.",
    detail:
      "Zentralbanken halten Gold als langfristige Reserve. Das zeigt, dass Gold weltweit weiterhin eine bedeutende Rolle spielt und auch von grossen Institutionen als Wert- und Vertrauensanker betrachtet wird.",
  },
  {
    title: "Gold und Geld",
    eyebrow: "Der Unterschied",
    text: "Geld ist wichtig für den Alltag. Gold wird häufig als langfristige Ergänzung betrachtet.",
    detail:
      "Geld eignet sich für Zahlungen, Rücklagen und den täglichen Gebrauch. Gold ist kein Ersatz dafür. Es wird von vielen Menschen ergänzend genutzt, weil es physisch vorhanden und begrenzt ist und langfristig dem Werterhalt dienen kann.",
  },
];

export default function GoldKnowledge() {
  const [active, setActive] = useState<Topic | null>(null);

  useEffect(() => {
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  return (
    <section
      id="wissen"
      className="border-y border-white/10 bg-white/[0.025]"
    >
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
              Ein kurzer Überblick über Gold, Kaufkraft und Inflation – einfach
              und verständlich erklärt.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <button
                key={topic.title}
                type="button"
                onClick={() => setActive(topic)}
                className="group rounded-3xl border border-white/10 bg-black/30 p-7 text-left transition hover:border-[#d4af37]/45 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  {topic.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {topic.title}
                </h3>

                <p className="mt-4 leading-7 text-white/55">{topic.text}</p>

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
            className="relative max-w-xl rounded-[2rem] border border-[#d4af37]/25 bg-[#101010] p-8 shadow-[0_45px_140px_rgba(0,0,0,0.85)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fenster schliessen"
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
          </div>
        </div>
      )}
    </section>
  );
}