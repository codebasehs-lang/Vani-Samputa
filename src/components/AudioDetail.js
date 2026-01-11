import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { audioData } from '../data/libraryData';
import './AudioDetail.css';

function AudioDetail() {
  const { id } = useParams();
  const playlist = audioData.find(p => p.id === parseInt(id));
  const [currentAudio, setCurrentAudio] = useState(0);

  if (!playlist) {
    return (
      <div className="audio-detail-container">
        <div className="error-message">
          <h2>Playlist not found</h2>
          <Link to="/audio" className="back-link">← Back to Audio Library</Link>
        </div>
      </div>
    );
  }

  const handleAudioClick = (index) => {
    setCurrentAudio(index);
  };

  return (
    <div className="audio-detail-container">
      <Link to="/audio" className="back-link">← Back to Audio Library</Link>
      
      <div className="playlist-header">
        <div className="playlist-icon">🎵</div>
        <div>
          <h1>{playlist.playlistName}</h1>
          <p>{playlist.description}</p>
          <span className="audio-count-badge">{playlist.audios.length} Lectures</span>
        </div>
      </div>

      <div className="audio-layout">
        {/* Main Audio Player Section */}
        <div className="main-audio-section">
          <div className="audio-player-wrapper">
            <audio controls className="main-audio-player" key={currentAudio}>
              <source src={playlist.audios[currentAudio].audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="main-audio-info">
            <h2>{playlist.audios[currentAudio].title}</h2>
            <div className="audio-meta">
              <span>⏱️ {playlist.audios[currentAudio].duration}</span>
              {playlist.audios[currentAudio].date && (
                <span>📅 {playlist.audios[currentAudio].date}</span>
              )}
              {playlist.audios[currentAudio].hasTranscription && (
                <span className="transcription-badge">📝 Has Transcription</span>
              )}
            </div>
          </div>

          {/* Transcription Section */}
          {playlist.audios[currentAudio].hasTranscription && playlist.audios[currentAudio].transcription ? (
            <div className="transcription-section">
              <h3>Transcription</h3>
              <div className="transcription-content">
                {playlist.audios[currentAudio].transcription.split('\\n').map((paragraph, index) => (
                  paragraph.trim() && <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-transcription">
              <p>Transcription is not available for this lecture yet.</p>
            </div>
          )}
        </div>

        {/* Playlist Sidebar */}
        <div className="playlist-sidebar">
          <div className="playlist-sidebar-header">
            <h3>{playlist.playlistName}</h3>
            <span>{currentAudio + 1} / {playlist.audios.length}</span>
          </div>
          <div className="playlist-items">
            {playlist.audios.map((audio, index) => (
              <div
                key={audio.id}
                className={`playlist-item ${index === currentAudio ? 'active' : ''}`}
                onClick={() => handleAudioClick(index)}
              >
                <div className="playlist-item-icon">🎵</div>
                <div className="playlist-item-content">
                  <h4>{audio.title}</h4>
                  <div className="playlist-item-meta">
                    <span className="playlist-item-duration">⏱️ {audio.duration}</span>
                    {audio.hasTranscription && (
                      <span className="transcription-indicator">📝</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioDetail;
