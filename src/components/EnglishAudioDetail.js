import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, PauseCircle, Clock, CalendarBlank, FileText } from 'phosphor-react';
import './AudioDetail.css';

function EnglishAudioDetail({ subPlaylist, onBack }) {
  const [currentAudio, setCurrentAudio] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAudios = subPlaylist.audios.filter(audio =>
    audio.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="audio-detail-container compact-mode">
      <div className="compact-header">
        <button onClick={onBack} className="back-link-compact">
          <ArrowLeft size={18} weight="bold" />
        </button>
        <div className="compact-title-wrapper">
          <h1>{subPlaylist.subPlaylistName}</h1>
          <span className="compact-audio-count">{subPlaylist.audios.length} Lectures</span>
        </div>
      </div>

      <div className="audio-layout">
        {/* Main Audio Player Section */}
        <div className="main-audio-section">
          <div className="audio-player-wrapper">
            <audio controls className="main-audio-player" key={currentAudio}>
              <source src={filteredAudios[currentAudio]?.link} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="main-audio-info">
            <h2>{filteredAudios[currentAudio]?.Title}</h2>
            <div className="audio-meta">
              <span><CalendarBlank size={16} /> {filteredAudios[currentAudio]?.Date || 'Date N/A'}</span>
              <span><Clock size={16} /> {filteredAudios[currentAudio]?.['audio duration'] || 'Duration N/A'}</span>
            </div>
          </div>

          {/* Transcription Section */}
          <div className="transcription-section">
            <h3>
              <FileText size={20} style={{ marginBottom: -3, marginRight: 8 }} />
              Transcription
            </h3>
            <div className="no-transcription">
              Transcription not available for this lecture yet.
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="playlist-sidebar">
          <div className="playlist-sidebar-header">
            <h3>In this sub-playlist</h3>
            <span>{currentAudio + 1} / {filteredAudios.length}</span>
          </div>
          <div className="playlist-search">
            <input
              type="text"
              placeholder="Search tracks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="playlist-items">
            {filteredAudios.map((audio, index) => (
              <div
                key={audio.Title}
                className={`playlist-item ${index === currentAudio ? 'active' : ''}`}
                onClick={() => setCurrentAudio(index)}
              >
                <div className="playlist-item-status">
                  {index === currentAudio ? (
                    <PauseCircle size={24} weight="fill" color="var(--primary)" />
                  ) : (
                    <PlayCircle size={24} weight="light" />
                  )}
                </div>
                <div className="playlist-item-content">
                  <h4>{audio.Title}</h4>
                  <div className="playlist-item-meta">
                    <span className="playlist-item-duration">{audio['audio duration'] || '00:00'}</span>
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

export default EnglishAudioDetail;
