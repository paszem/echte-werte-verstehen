"use client";

import { useEffect, useState } from "react";

const COUNT_KEY = "ew_visitor_counted_at";
const ONE_DAY = 24 * 60 * 60 * 1000;

export default function Stats() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    async function loadVisitors() {
      try {
        const lastCounted = Number(window.localStorage.getItem(COUNT_KEY) || 0);
        const shouldCount = !lastCounted || Date.now() - lastCounted > ONE_DAY;

        const response = await fetch("/.netlify/functions/visitor-stats", {
          method: shouldCount ? "POST" : "GET",
        });

        const data = await response.json();

        if (shouldCount) {
          window.localStorage.setItem(COUNT_KEY, String(Date.now()));
        }

        setVisitors(Number(data.visitors || 0));
      } catch {
        setVisitors(null);
      }
    }

    loadVisitors();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-4xl font-semibold text-[#d4af37]">
            {visitors === null ? "Live" : visitors.toLocaleString("de-CH") + "+"}
          </p>
          <p className="mt-3 text-white/55">Besucher insgesamt</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-4xl font-semibold text-[#d4af37]">CHF</p>
          <p className="mt-3 text-white/55">Rechner mit Schweizer Franken</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-4xl font-semibold text-[#d4af37]">Live</p>
          <p className="mt-3 text-white/55">Goldpreise automatisch geladen</p>
        </div>
      </div>
    </section>
  );
}