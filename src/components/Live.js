import React from 'react';
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
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="live-container">
      <div className="library-header">
        <p>Watch the current live / latest lecture stream</p>
      </div>

      <div className="live-player-card">
        {embedUrl ? (
          <div className="live-player-frame" aria-label="Live video player">
            <iframe
              src={embedUrl}
              title={title}
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
