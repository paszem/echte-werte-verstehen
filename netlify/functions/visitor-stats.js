const TOTAL_KEY = "echte-werte-visitors-total";
const DAY_SECONDS = 60 * 60 * 24;

async function redis(command) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  const response = await fetch(`${url}/${command}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Redis Fehler");
  return response.json();
}

exports.handler = async function (event) {
  try {
    const ip =
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["x-forwarded-for"] ||
      "unknown";

    const userAgent = event.headers["user-agent"] || "unknown";

    const rawKey = `echte-werte-visitor-${ip}-${userAgent}`;
    const safeKey = encodeURIComponent(rawKey);

    if (event.httpMethod === "POST") {
      const exists = await redis(`get/${safeKey}`);

      if (!exists.result) {
        await redis(`set/${safeKey}/1/EX/${DAY_SECONDS}`);
        await redis(`incr/${TOTAL_KEY}`);
      }
    }

    const total = await redis(`get/${TOTAL_KEY}`);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        visitors: Number(total.result || 0),
      }),
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        visitors: 0,
        error: error instanceof Error ? error.message : "unknown",
      }),
    };
  }
};