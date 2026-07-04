const KEY = "echte-werte:visitors";

async function redis(command, key) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  const response = await fetch(`${url}/${command}/${key}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Redis Fehler");
  }

  return response.json();
}

exports.handler = async function (event) {
  try {
    if (event.httpMethod === "POST") {
      const data = await redis("incr", KEY);

      return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ visitors: Number(data.result || 0) }),
      };
    }

    const data = await redis("get", KEY);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ visitors: Number(data.result || 0) }),
    };
  } catch {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ visitors: 0 }),
    };
  }
};