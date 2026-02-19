import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, YoutubeLogo, CalendarBlank, Clock, PlayCircle } from 'phosphor-react';
import { videoData } from '../data/libraryData';
import './VideoPlaylist.css';

function VideoPlaylist() {
  const { playlistId } = useParams();
  const playlist = videoData.find(p => p.id === parseInt(playlistId));
  const [currentVideo, setCurrentVideo] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredVideos = playlist ? playlist.videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  if (!playlist) {
    return (
      <div className="video-playlist-container">
        <div className="error-message">
          <h2>Playlist not found</h2>
          <Link to="/video" className="back-link">
            <ArrowLeft size={16} weight="bold" /> Back to Video Library
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
    <div className="video-playlist-container compact-mode">
      <div className="compact-header">
        <Link to="/video" className="back-link-compact">
          <ArrowLeft size={18} weight="bold" />
        </Link>
        <div className="compact-title-wrapper">
          <h1>{playlist.playlistName}</h1>
          <span className="compact-video-count">{playlist.videos.length} Videos</span>
        </div>
      </div>

      <div className="youtube-layout">
        {/* Main Video Player */}
        <div className="main-video-section">
          <div className="video-player-wrapper">
            <iframe
              className="main-video-iframe"
              src={getYouTubeEmbedUrl(playlist.videos[currentVideo].youtubeUrl)}
              title={playlist.videos[currentVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="main-video-info">
            <h2>{playlist.videos[currentVideo].title}</h2>
            <div className="video-meta">
              <span><CalendarBlank size={16} /> {playlist.intro?.date || 'Date N/A'}</span>
              <span><Clock size={16} /> {playlist.videos[currentVideo].duration || 'Duration N/A'}</span>
            </div>
            {playlist.videos[currentVideo].description && (
              <p className="video-description">
                {playlist.videos[currentVideo].description}
              </p>
            )}
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="playlist-sidebar">
          <div className="playlist-sidebar-header">
            <h3>Playlist Content</h3>
            <span>{currentVideo + 1} / {playlist.videos.length}</span>
          </div>
          <div className="playlist-search">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="playlist-items">
            {filteredVideos.map((video, index) => {
              // Find original index to play correct video
              const originalIndex = playlist.videos.findIndex(v => v.id === video.id);
              return (
                <div
                  key={video.id}
                  className={`playlist-item ${originalIndex === currentVideo ? 'active' : ''}`}
                  onClick={() => handleVideoClick(originalIndex)}
                >
                  <div className="playlist-item-thumbnail-wrapper">
                    <img
                      src={getYouTubeThumbnail(video.youtubeUrl)}
                      alt={video.title}
                      className="playlist-item-thumbnail"
                    />
                    {originalIndex === currentVideo && (
                      <div className="playing-overlay">
                        <PlayCircle size={24} weight="fill" color="white" />
                      </div>
                    )}
                  </div>
                  <div className="playlist-item-content">
                    <h4>{video.title}</h4>
                    <span className="playlist-item-duration">{video.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlaylist;
