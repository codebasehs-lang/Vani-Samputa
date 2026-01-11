// Vercel Serverless Function
// Persists visitor count using Vercel KV / Upstash REST API when configured.
// If KV env vars are missing, it falls back to an in-memory counter (non-persistent).

const COUNT_KEY = 'vani_samputa_visits_count';
const LAST_KEY = 'vani_samputa_visits_lastVisit';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

async function kvRequest(commandPath) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return null;
  }

  const response = await fetch(`${url}${commandPath}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`KV request failed: ${response.status} ${text}`);
  }

  return response.json();
}

let memoryState = { count: 0, lastVisit: null };

async function getState() {
  const kvGetCount = await kvRequest(`/get/${encodeURIComponent(COUNT_KEY)}`).catch(() => null);
  const kvGetLast = await kvRequest(`/get/${encodeURIComponent(LAST_KEY)}`).catch(() => null);

  if (kvGetCount && kvGetLast) {
    const count = Number(kvGetCount?.result ?? 0);
    const lastVisit = kvGetLast?.result ?? null;
    return { count, lastVisit };
  }

  return { ...memoryState };
}

async function incrementState() {
  const now = new Date().toISOString();

  const kvIncr = await kvRequest(`/incr/${encodeURIComponent(COUNT_KEY)}`).catch(() => null);
  const kvSetLast = await kvRequest(`/set/${encodeURIComponent(LAST_KEY)}/${encodeURIComponent(now)}`).catch(
    () => null
  );

  if (kvIncr && kvSetLast) {
    return { count: Number(kvIncr?.result ?? 0), lastVisit: now };
  }

  memoryState = { count: (memoryState.count || 0) + 1, lastVisit: now };
  return { ...memoryState };
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const state = await getState();
      return json(res, 200, state);
    } catch {
      return json(res, 200, { count: 0, lastVisit: null });
    }
  }

  if (req.method === 'POST') {
    try {
      const next = await incrementState();
      return json(res, 200, next);
    } catch {
      return json(res, 500, { error: 'Failed to update visits' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return json(res, 405, { error: 'Method not allowed' });
};
