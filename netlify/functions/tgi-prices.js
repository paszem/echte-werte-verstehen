const TGI_URL = "https://www.tgi.li/produkte/";
const FX_URL = "https://api.frankfurter.app/latest?from=EUR&to=CHF";

function parseEuro(value) {
  return Number(value.replace(/\./g, "").replace(",", "."));
}

function cleanText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractPrices(html) {
  const text = cleanText(html);
  const prices = {};
  const regex = /\|\s*(\d+)\s*Gramm\s*-\s*7%\s*([\d.]+,\d{2})\s*€/g;

  let match;

  while ((match = regex.exec(text)) !== null) {
    prices[match[1]] = parseEuro(match[2]);
  }

  return prices;
}

exports.handler = async function () {
  try {
    const [tgiResponse, fxResponse] = await Promise.all([
      fetch(TGI_URL, {
        headers: {
          "user-agent": "Mozilla/5.0 echte-werte-verstehen.ch",
        },
      }),
      fetch(FX_URL),
    ]);

    if (!tgiResponse.ok || !fxResponse.ok) {
      throw new Error("Live-Daten konnten nicht geladen werden.");
    }

    const html = await tgiResponse.text();
    const fx = await fxResponse.json();

    const pricesEur = extractPrices(html);
    const eurToChf = fx.rates.CHF;

    if (!eurToChf || Object.keys(pricesEur).length < 7) {
      throw new Error("TGI-Preise konnten nicht vollständig gelesen werden.");
    }

    const pricesChf = Object.fromEntries(
      Object.entries(pricesEur).map(([grams, price]) => [
        grams,
        Number((price * eurToChf).toFixed(2)),
      ])
    );

    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, max-age=1800",
      },
      body: JSON.stringify({
        pricesChf,
        eurToChf,
        updatedAt: new Date().toISOString(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};