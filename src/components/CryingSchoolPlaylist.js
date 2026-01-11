import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cryingSchoolVideoData } from '../data/libraryData';
import './VideoPlaylist.css';

function CryingSchoolPlaylist() {
  const { playlistId } = useParams();
  const playlist = cryingSchoolVideoData.find((p) => p.id === parseInt(playlistId));
  const [currentVideo, setCurrentVideo] = useState(0);

  if (!playlist) {
    return (
      <div className="video-playlist-container">
        <div className="error-message">
          <h2>Playlist not found</h2>
          <Link to="/crying-school" className="back-link">
            ← Back to Crying School Videos
          </Link>
        </div>
      </div>
    );
  }

  const getYouTubeVideoId = (rawUrl) => {
    if (!rawUrl) return null;

    try {
      const url = new URL(rawUrl);

      if (url.hostname === 'youtu.be') {
        const id = url.pathname.replace('/', '');
        return id || null;
      }

      if (url.searchParams.has('v')) return url.searchParams.get('v');

      const pathMatch = url.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
      if (pathMatch?.[2]) return pathMatch[2];
    } catch {
      // ignore
    }

    const fallback = String(rawUrl).match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&/]|$)/);
    return fallback?.[1] || null;
  };

  const getYouTubeEmbedUrl = (rawUrl) => {
    const videoId = getYouTubeVideoId(rawUrl);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getYouTubeThumbnail = (rawUrl) => {
    const videoId = getYouTubeVideoId(rawUrl);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
  };

  const videos = Array.isArray(playlist.videos) ? playlist.videos : [];
  const activeVideo = videos[currentVideo];
  const activeEmbedUrl = activeVideo ? getYouTubeEmbedUrl(activeVideo.youtubeUrl) : null;

  return (
    <div className="video-playlist-container">
      <Link to="/crying-school" className="back-link">
        ← Back to Crying School Videos
      </Link>

      <div className="playlist-header">
        <div className="playlist-icon">▶️</div>
        <div>
          <h1>{playlist.playlistName}</h1>
          <p>{playlist.description}</p>
          <span className="video-count-badge">{videos.length} Videos</span>
        </div>
      </div>

      {videos.length === 0 ? (
        <div className="error-message">
          <h2>No videos in this playlist yet</h2>
          <p>Add videos under this playlist in src/data/libraryData.js</p>
        </div>
      ) : (
        <div className="youtube-layout">
          <div className="main-video-section">
            <div className="video-player-wrapper">
              {activeEmbedUrl ? (
                <iframe
                  width="100%"
                  height="500"
                  src={activeEmbedUrl}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="main-video-iframe"
                ></iframe>
              ) : (
                <div className="error-message">
                  <h2>Invalid video URL</h2>
                  <p>Please check the YouTube URL for this video.</p>
                </div>
              )}
            </div>
            <div className="main-video-info">
              <h2>{activeVideo.title}</h2>
              <div className="video-meta">
                <span>⏱️ {activeVideo.duration}</span>
              </div>
              <p className="video-description">{activeVideo.description}</p>
            </div>
          </div>

          <div className="playlist-sidebar">
            <div className="playlist-sidebar-header">
              <h3>{playlist.playlistName}</h3>
              <span>
                {currentVideo + 1} / {videos.length}
              </span>
            </div>
            <div className="playlist-items">
              {videos.map((video, index) => {
                const thumb = getYouTubeThumbnail(video.youtubeUrl);

                return (
                  <div
                    key={video.id}
                    className={`playlist-item ${index === currentVideo ? 'active' : ''}`}
                    onClick={() => handleVideoClick(index)}
                  >
                    {thumb ? (
                      <img src={thumb} alt={video.title} className="playlist-item-thumbnail" />
                    ) : (
                      <div className="playlist-item-thumbnail" />
                    )}
                    <div className="playlist-item-content">
                      <h4>{video.title}</h4>
                      <span className="playlist-item-duration">⏱️ {video.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CryingSchoolPlaylist;
