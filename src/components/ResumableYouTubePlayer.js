import React, { useEffect, useRef } from 'react';

// Loads the YouTube IFrame API once and resolves when ready.
let apiPromise = null;
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === 'function') prev();
      resolve(window.YT);
    };
    document.body.appendChild(tag);
  });

  return apiPromise;
}

// YouTube player that remembers playback position in the browser (localStorage).
function ResumableYouTubePlayer({ videoId, title, className }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!videoId || !containerRef.current) return undefined;

    let cancelled = false;
    const storageKey = `vani-video-pos:${videoId}`;

    const mount = document.createElement('div');
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(mount);

    const stopSaving = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const save = () => {
      const player = playerRef.current;
      if (!player || typeof player.getCurrentTime !== 'function') return;
      try {
        localStorage.setItem(storageKey, String(player.getCurrentTime()));
      } catch (err) { /* localStorage unavailable */ }
    };

    const startSaving = () => {
      stopSaving();
      intervalRef.current = setInterval(save, 5000);
    };

    loadYouTubeAPI().then((YT) => {
      if (cancelled) return;

      playerRef.current = new YT.Player(mount, {
        videoId,
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onReady: (e) => {
            const iframe = e.target.getIframe();
            if (iframe) {
              iframe.setAttribute('title', title || 'YouTube video');
              if (className) iframe.className = className;
            }
            try {
              const saved = parseFloat(localStorage.getItem(storageKey));
              if (!isNaN(saved) && saved > 1) {
                e.target.seekTo(saved, true);
              }
            } catch (err) { /* localStorage unavailable */ }
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) {
              startSaving();
            } else if (e.data === YT.PlayerState.ENDED) {
              stopSaving();
              try { localStorage.removeItem(storageKey); } catch (err) { /* ignore */ }
            } else {
              stopSaving();
              save();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      stopSaving();
      const player = playerRef.current;
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
      playerRef.current = null;
    };
  }, [videoId, title, className]);

  return <div ref={containerRef} className="resumable-youtube-player" />;
}

export default ResumableYouTubePlayer;
