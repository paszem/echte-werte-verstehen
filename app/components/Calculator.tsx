"use client";

import { useEffect, useMemo, useState } from "react";

type Model = "discount" | "monthly";

type PriceResponse = {
  pricesChf: Record<string, number>;
  eurToChf: number;
  updatedAt: string;
};

const fallbackPricesChf: Record<string, number> = {
  "1": 130.67,
  "2": 243.02,
  "5": 573.62,
  "10": 1135.43,
  "20": 2259.37,
  "50": 5586.89,
  "100": 11151.1,
};

function chf(value: number) {
  return (
    value.toLocaleString("de-CH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " CHF"
  );
}

export default function Calculator() {
  const [model, setModel] = useState<Model>("discount");
  const [grams, setGrams] = useState("1");
  const [prices, setPrices] = useState(fallbackPricesChf);
  const [isLive, setIsLive] = useState(false);
  const [eurToChf, setEurToChf] = useState<number | null>(null);

  useEffect(() => {
    async function loadPrices() {
      try {
        const response = await fetch("/.netlify/functions/tgi-prices");
        if (!response.ok) throw new Error("Keine Live-Daten");

        const data = (await response.json()) as PriceResponse;
        setPrices(data.pricesChf);
        setEurToChf(data.eurToChf);
        setIsLive(true);
      } catch {
        setIsLive(false);
      }
    }

    loadPrices();
  }, []);

  const price = prices[grams];

  const result = useMemo(() => {
    if (model === "discount") {
      const advantage = price * 0.07;

      return {
        label: "7 %-Modell",
        description: "Beispiel mit direktem Preisvorteil.",
        rows: [
          ["Grundpreis", chf(price)],
          ["7 % Preisvorteil", chf(advantage)],
          ["Beispiel-Kaufpreis", chf(price - advantage)],
          ["Laufzeit", "Kurzfristiges Modell"],
        ],
        totalLabel: "Direkter Vorteil im Beispiel",
        total: chf(advantage),
      };
    }

    const monthly = price * 0.02;
    const totalMonthly = monthly * 36;
    const loyalty = price * 0.36;

    return {
      label: "2 %-Modell",
      description: "Beispiel mit monatlichen Vorteilen auf Basis des Grundpreises.",
      rows: [
        ["Grundpreis", chf(price)],
        ["2 % pro Monat", chf(monthly)],
        ["36 Monate gesamt", chf(totalMonthly)],
        ["Treuerabatt", chf(loyalty)],
      ],
      totalLabel: "Gesamtvorteil im Beispiel",
      total: chf(totalMonthly + loyalty),
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
            Modelle einfach vergleichen.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Wähle eine Grösse und ein Modell. Die Werte werden in Schweizer
            Franken angezeigt.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              {isLive ? "Live-Daten aktiv" : "Hinweis"}
            </p>

            <p className="mt-4 leading-7 text-white/55">
              Die Berechnung ist eine vereinfachte Darstellung und keine Finanz-
              oder Anlageberatung. Entscheidend sind immer die gültigen
              Produktbedingungen.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/40">
              {isLive && eurToChf
                ? `TGI-Grundpreise automatisch geladen · 1 EUR = ${eurToChf.toFixed(
                    4
                  )} CHF`
                : "Falls Live-Daten kurz nicht erreichbar sind, werden Beispielwerte angezeigt."}
            </p>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-[#d4af37]/20 bg-white/[0.045] p-7 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setModel("discount")}
              className={`rounded-3xl border p-6 text-left transition ${
                model === "discount"
                  ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_50px_rgba(212,175,55,0.12)]"
                  : "border-white/10 bg-black/25 hover:border-white/20"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                7 %-Modell
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Direkter Vorteil</h3>
              <p className="mt-3 leading-7 text-white/50">
                Beispiel mit sofortigem Preisvorteil.
              </p>
            </button>

            <button
              onClick={() => setModel("monthly")}
              className={`rounded-3xl border p-6 text-left transition ${
                model === "monthly"
                  ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_50px_rgba(212,175,55,0.12)]"
                  : "border-white/10 bg-black/25 hover:border-white/20"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                2 %-Modell
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Monatlich</h3>
              <p className="mt-3 leading-7 text-white/50">
                Beispiel mit monatlichen Vorteilen.
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
                {grams} g Gold
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