const TOTAL_KEY = "echte-werte:visitors:total";
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
    const visitorId =
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["client-ip"] ||
      event.headers["x-forwarded-for"] ||
      "unknown";

    const browser =
      event.headers["user-agent"] || "unknown";

    const uniqueKey = `echte-werte:visitor:${Buffer.from(
      visitorId + browser
    ).toString("base64")}`;

    if (event.httpMethod === "POST") {
      const exists = await redis(`get/${uniqueKey}`);

      if (!exists.result) {
        await redis(`set/${uniqueKey}/1/EX/${DAY_SECONDS}`);
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
  } catch {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ visitors: 0 }),
    };
  }
};