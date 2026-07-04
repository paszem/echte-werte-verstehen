"use client";

import { useMemo, useState } from "react";

type Model = "short" | "long";

const prices: Record<string, number> = {
  "1": 137.41,
  "2": 255.6,
  "5": 603,
  "10": 1193.99,
  "20": 2375.96,
  "50": 5874.12,
  "100": 11724.43,
};

function eur(value: number) {
  return (
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

export default function Calculator() {
  const [model, setModel] = useState<Model>("short");
  const [grams, setGrams] = useState("1");

  const price = prices[grams];

  const result = useMemo(() => {
    if (model === "short") {
      const advantage = price * 0.07;

      return {
        label: "Kurzfristiges Beispiel",
        description:
          "Ein Beispiel, um den direkten Preisvorteil besser einordnen zu können.",
        rows: [
          ["Preisbeispiel", eur(price)],
          ["Preisvorteil", eur(advantage)],
          ["Beispiel-Kaufpreis", eur(price - advantage)],
          ["Laufzeit", "2 Monate"],
        ],
        totalLabel: "Beispielhafter Vorteil",
        total: eur(advantage),
      };
    }

    const monthly = price * 0.02;
    const totalMonthly = monthly * 36;
    const loyalty = price * 0.36;

    return {
      label: "Langfristiges Beispiel",
      description:
        "Ein Beispiel, um den Aufbau über eine längere Laufzeit besser zu verstehen.",
      rows: [
        ["Preisbeispiel", eur(price)],
        ["Monatlicher Vorteil", eur(monthly)],
        ["36 Monate", eur(totalMonthly)],
        ["Treuerabatt", eur(loyalty)],
      ],
      totalLabel: "Beispielhafter Gesamtvorteil",
      total: eur(totalMonthly + loyalty),
    };
  }, [model, price]);

  return (
    <section id="rechner" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Rechner
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Zahlen machen es greifbar.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Der Rechner zeigt einfache Beispiele. Er soll helfen, verschiedene
            Möglichkeiten besser zu verstehen und ein Gefühl für die Zahlen zu
            bekommen.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Wichtig
            </p>
            <p className="mt-4 leading-7 text-white/55">
              Die Berechnung ist eine vereinfachte Darstellung und keine Finanz-
              oder Anlageberatung. Entscheidend sind immer die gültigen
              Produktbedingungen.
            </p>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-[#d4af37]/20 bg-white/[0.045] p-7 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setModel("short")}
              className={`rounded-3xl border p-6 text-left transition ${
                model === "short"
                  ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_50px_rgba(212,175,55,0.12)]"
                  : "border-white/10 bg-black/25 hover:border-white/20"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Kurzfristig
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Preisvorteil</h3>
              <p className="mt-3 leading-7 text-white/50">
                Direkten Vorteil als Beispiel ansehen.
              </p>
            </button>

            <button
              onClick={() => setModel("long")}
              className={`rounded-3xl border p-6 text-left transition ${
                model === "long"
                  ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_50px_rgba(212,175,55,0.12)]"
                  : "border-white/10 bg-black/25 hover:border-white/20"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Langfristig
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Aufbau verstehen</h3>
              <p className="mt-3 leading-7 text-white/50">
                Beispiel über eine längere Laufzeit ansehen.
              </p>
            </button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
                Grösse
              </label>

              <select
                value={grams}
                onChange={(event) => setGrams(event.target.value)}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none"
              >
                {Object.keys(prices).map((gram) => (
                  <option key={gram} value={gram}>
                    {gram} g
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
                Auswahl
              </p>
              <p className="mt-4 text-3xl font-semibold text-[#d4af37]">
                {grams} g
              </p>
              <p className="mt-2 text-white/50">{result.label}</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              {result.label}
            </p>
            <p className="mt-3 leading-7 text-white/55">
              {result.description}
            </p>

            <div className="mt-7 space-y-4">
              {result.rows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/10 pb-4 text-white/60"
                >
                  <span>{label}</span>
                  <strong className="text-white">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#d4af37]/30 bg-[#d4af37]/10 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              {result.totalLabel}
            </p>
            <p className="mt-4 text-5xl font-bold tracking-tight text-white">
              {result.total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
