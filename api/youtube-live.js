function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return json(res, 405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = String(req.query?.channelId || '').trim();
  const channelHandle = String(req.query?.channelHandle || '').trim().replace(/^@+/, '');

  if (!apiKey) {
    return json(res, 500, {
      error: 'Missing YOUTUBE_API_KEY on server'
    });
  }

  if (!channelId && !channelHandle) {
    return json(res, 400, {
      error: 'Missing channelId or channelHandle query param'
    });
  }

  try {
    let resolvedChannelId = channelId;

    if (!resolvedChannelId && channelHandle) {
      const channelQs = new URLSearchParams({
        part: 'snippet',
        q: `@${channelHandle}`,
        type: 'channel',
        maxResults: '1',
        key: apiKey
      });

      const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?${channelQs.toString()}`);
      if (!channelResponse.ok) {
        const text = await channelResponse.text().catch(() => '');
        return json(res, channelResponse.status, {
          error: 'YouTube channel lookup failed',
          details: text
        });
      }

      const channelPayload = await channelResponse.json();
      resolvedChannelId = channelPayload?.items?.[0]?.id?.channelId || null;
    }

    if (!resolvedChannelId) {
      return json(res, 404, {
        error: 'Could not resolve YouTube channel'
      });
    }

    const qs = new URLSearchParams({
      part: 'snippet',
      channelId: resolvedChannelId,
      eventType: 'live',
      type: 'video',
      maxResults: '1',
      key: apiKey
    });

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${qs.toString()}`);
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      return json(res, response.status, {
        error: 'YouTube API request failed',
        details: text
      });
    }

    const payload = await response.json();
    const item = payload?.items?.[0];
    const videoId = item?.id?.videoId || null;

    return json(res, 200, {
      isLive: Boolean(videoId),
      channelId: resolvedChannelId,
      videoId,
      title: item?.snippet?.title || null,
      publishedAt: item?.snippet?.publishedAt || null,
      url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null,
      embedUrl: videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null
    });
  } catch {
    return json(res, 500, {
      error: 'Unexpected error while checking live stream'
    });
  }
};
