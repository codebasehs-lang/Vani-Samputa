import React, { useEffect, useMemo, useState } from 'react';
import liveConfig from '../config/liveConfig.json';
import './Live.css';

const getYouTubeVideoId = (rawUrl) => {
  if (!rawUrl) return null;

  try {
    const url = new URL(rawUrl);

    if (url.hostname === 'youtu.be') {
      const id = url.pathname.replace('/', '');
      return id || null;
    }

    if (url.searchParams.has('v')) return url.searchParams.get('v');

    const pathMatch = url.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/);
    if (pathMatch?.[2]) return pathMatch[2];
  } catch {
    // ignore
  }

  const fallback = String(rawUrl).match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&/]|$)/);
  return fallback?.[1] || null;
};

const getEmbedUrl = (rawUrl) => {
  if (!rawUrl) return null;

  const videoId = getYouTubeVideoId(rawUrl);
  if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;

  return rawUrl;
};

function Live() {
  const title = liveConfig?.title || 'Live';
  const url = (liveConfig?.url || '').trim();
  const description = (liveConfig?.description || '').trim();
  const autoFetchLive = liveConfig?.autoFetchLive !== false;
  const channelId = String(liveConfig?.channelId || '').trim();
  const channelHandle = String(liveConfig?.channelHandle || '').trim().replace(/^@+/, '');
  const hasLiveLookupTarget = Boolean(channelId || channelHandle);

  const [autoLive, setAutoLive] = useState({
    loading: autoFetchLive && hasLiveLookupTarget,
    error: '',
    isLive: false,
    title: '',
    embedUrl: null,
    watchUrl: null
  });

  useEffect(() => {
    let cancelled = false;
    let timerId = null;

    const checkLive = async () => {
      if (!autoFetchLive || !hasLiveLookupTarget) {
        setAutoLive((prev) => ({
          ...prev,
          loading: false
        }));
        return;
      }

      try {
        setAutoLive((prev) => ({ ...prev, loading: true, error: '' }));

        const params = new URLSearchParams();
        if (channelId) params.set('channelId', channelId);
        if (channelHandle) params.set('channelHandle', channelHandle);

        const response = await fetch(`/api/youtube-live?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch live status');
        }

        const payload = await response.json();
        if (cancelled) return;

        setAutoLive({
          loading: false,
          error: '',
          isLive: Boolean(payload?.isLive && payload?.embedUrl),
          title: payload?.title || '',
          embedUrl: payload?.embedUrl || null,
          watchUrl: payload?.url || null
        });
      } catch {
        if (cancelled) return;

        setAutoLive((prev) => ({
          ...prev,
          loading: false,
          error: 'Automatic live check unavailable right now'
        }));
      }
    };

    checkLive();

    if (autoFetchLive && hasLiveLookupTarget) {
      timerId = setInterval(checkLive, 60000);
    }

    return () => {
      cancelled = true;
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [autoFetchLive, channelHandle, channelId, hasLiveLookupTarget]);

  const manualEmbedUrl = getEmbedUrl(url);
  const effectiveEmbedUrl = useMemo(() => {
    if (autoLive.isLive && autoLive.embedUrl) return autoLive.embedUrl;
    return manualEmbedUrl;
  }, [autoLive.embedUrl, autoLive.isLive, manualEmbedUrl]);

  const liveHeading = autoLive.isLive && autoLive.title ? autoLive.title : title;

  return (
    <div className="live-container">
      <div className="library-header">
        <p>Watch the current live / latest lecture stream</p>
      </div>

      <div className="live-player-card">
        {effectiveEmbedUrl ? (
          <div className="live-player-frame" aria-label="Live video player">
            <iframe
              src={effectiveEmbedUrl}
              title={liveHeading}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : (
          <div className="live-empty-state">
            <h2>No live URL configured yet</h2>
            <p>
              Set <span className="inline-code">url</span> in <span className="inline-code">src/config/liveConfig.json</span>
              to a YouTube (or embed) link.
            </p>
          </div>
        )}

        {autoFetchLive && hasLiveLookupTarget && (
          <div className="live-description">
            <h2>Live status</h2>
            {autoLive.loading ? (
              <p>Checking channel for active live stream...</p>
            ) : autoLive.isLive ? (
              <p>
                Live stream detected from YouTube channel.
                {autoLive.watchUrl ? (
                  <>
                    {' '}
                    <a href={autoLive.watchUrl} target="_blank" rel="noreferrer">
                      Open on YouTube
                    </a>
                    .
                  </>
                ) : null}
              </p>
            ) : (
              <p>
                No active live stream right now. Showing the configured fallback URL instead.
                {autoLive.error ? ` (${autoLive.error})` : ''}
              </p>
            )}
          </div>
        )}

        {description && (
          <div className="live-description">
            <h2>About this lecture</h2>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Live;
