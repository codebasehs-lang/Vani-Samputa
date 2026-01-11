import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { videoData } from '../data/libraryData';
import './VideoPlaylist.css';

function VideoPlaylist() {
  const { playlistId } = useParams();
  const playlist = videoData.find(p => p.id === parseInt(playlistId));
  const [currentVideo, setCurrentVideo] = useState(0);

  if (!playlist) {
    return (
      <div className="video-playlist-container">
        <div className="error-message">
          <h2>Playlist not found</h2>
          <Link to="/video" className="back-link">← Back to Video Library</Link>
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
    const videoId = getYouTubeVideoId(rawUrl) || 'dQw4w9WgXcQ';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getYouTubeThumbnail = (rawUrl) => {
    const videoId = getYouTubeVideoId(rawUrl) || 'dQw4w9WgXcQ';
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="video-playlist-container">
      <Link to="/video" className="back-link">← Back to Video Library</Link>
      
      <div className="playlist-header">
        <div className="playlist-icon">▶️</div>
        <div>
          <h1>{playlist.playlistName}</h1>
          <p>{playlist.description}</p>
          <span className="video-count-badge">{playlist.videos.length} Videos</span>
        </div>
      </div>

      <div className="youtube-layout">
        {/* Main Video Player */}
        <div className="main-video-section">
          <div className="video-player-wrapper">
            <iframe
              width="100%"
              height="500"
              src={getYouTubeEmbedUrl(playlist.videos[currentVideo].youtubeUrl)}
              title={playlist.videos[currentVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="main-video-iframe"
            ></iframe>
          </div>
          <div className="main-video-info">
            <h2>{playlist.videos[currentVideo].title}</h2>
            <div className="video-meta">
              <span>⏱️ {playlist.videos[currentVideo].duration}</span>
            </div>
            <p className="video-description">{playlist.videos[currentVideo].description}</p>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="playlist-sidebar">
          <div className="playlist-sidebar-header">
            <h3>{playlist.playlistName}</h3>
            <span>{currentVideo + 1} / {playlist.videos.length}</span>
          </div>
          <div className="playlist-items">
            {playlist.videos.map((video, index) => (
              <div
                key={video.id}
                className={`playlist-item ${index === currentVideo ? 'active' : ''}`}
                onClick={() => handleVideoClick(index)}
              >
                <img 
                  src={getYouTubeThumbnail(video.youtubeUrl)} 
                  alt={video.title}
                  className="playlist-item-thumbnail"
                />
                <div className="playlist-item-content">
                  <h4>{video.title}</h4>
                  <span className="playlist-item-duration">⏱️ {video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlaylist;
