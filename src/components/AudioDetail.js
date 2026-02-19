import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MusicNotes, ArrowLeft, PlayCircle, PauseCircle, Clock, CalendarBlank, FileText } from 'phosphor-react';
import { audioData } from '../data/libraryData';
import './AudioDetail.css';

function AudioDetail() {
  const { id } = useParams();
  const playlist = audioData.find(p => p.id === parseInt(id));
  const [currentAudio, setCurrentAudio] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAudios = playlist ? playlist.audios.filter(audio =>
    audio.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  if (!playlist) {
    return (
      <div className="audio-detail-container">
        <div className="error-message">
          <h2>Playlist not found</h2>
          <Link to="/audio" className="back-link">
            <ArrowLeft size={16} weight="bold" /> Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-detail-container compact-mode">
      <div className="compact-header">
        <Link to="/audio" className="back-link-compact">
          <ArrowLeft size={18} weight="bold" />
        </Link>
        <div className="compact-title-wrapper">
          <h1>{playlist.playlistName}</h1>
          <span className="compact-audio-count">{playlist.audios.length} Lectures</span>
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
              <span><CalendarBlank size={16} /> {playlist.intro?.date || 'Date N/A'}</span>
              <span><Clock size={16} /> {playlist.audios[currentAudio].duration || 'Duration N/A'}</span>
            </div>
          </div>

          {/* Transcription Section */}
          <div className="transcription-section">
            <h3>
              <FileText size={20} style={{ marginBottom: -3, marginRight: 8 }} />
              Transcription
            </h3>
            {playlist.audios[currentAudio].hasTranscription ? (
              <div className="transcription-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/* Placeholder text as real transcription would be fetched */}
              </div>
            ) : (
              <div className="no-transcription">
                Transcription not available for this lecture yet.
              </div>
            )}
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="playlist-sidebar">
          <div className="playlist-sidebar-header">
            <h3>In this playlist</h3>
            <span>{currentAudio + 1} / {playlist.audios.length}</span>
          </div>
          <div className="playlist-search">
            <input
              type="text"
              placeholder="Search tracks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="playlist-items">
            {filteredAudios.map((audio, index) => {
              // Find original index to play correct audio
              const originalIndex = playlist.audios.findIndex(a => a.id === audio.id);
              return (
                <div
                  key={audio.id}
                  className={`playlist-item ${originalIndex === currentAudio ? 'active' : ''}`}
                  onClick={() => setCurrentAudio(originalIndex)}
                >
                  <div className="playlist-item-status">
                    {originalIndex === currentAudio ? (
                      <PauseCircle size={24} weight="fill" color="var(--primary)" />
                    ) : (
                      <PlayCircle size={24} weight="light" />
                    )}
                  </div>
                  <div className="playlist-item-content">
                    <h4>{audio.title}</h4>
                    <div className="playlist-item-meta">
                      <span className="playlist-item-duration">{audio.duration || '00:00'}</span>
                    </div>
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

export default AudioDetail;
