
import React, { useState } from 'react';
import seminarData from '../data/seminarData';
import { MagnifyingGlass } from 'phosphor-react';
import './AudioLibrary.css';

function SeminarSubPlaylists({ onSelectSubPlaylist }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubPlaylists = seminarData.filter(sub =>
    sub.subPlaylistName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="audio-library-container">
      <h2 className="audio-library-title">Seminar Sub-Playlists</h2>
      <div className="search-container" style={{ marginBottom: '2rem' }}>
        <div className="search-bar">
          <MagnifyingGlass className="search-icon" size={20} />
          <input
            className="search-input"
            type="text"
            placeholder="Search sub-playlists by name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="playlists-list">
        {filteredSubPlaylists.length === 0 && (
          <div className="no-playlists">No sub-playlists found.</div>
        )}
        {filteredSubPlaylists.map(sub => (
          <div
            className="playlist-row"
            key={sub.subPlaylistName}
            onClick={() => onSelectSubPlaylist(sub)}
            style={{ cursor: 'pointer' }}
          >
            <div className="playlist-row-info">
              <h3>{sub.subPlaylistName}</h3>
              <p className="playlist-row-meta">
                {sub.audios[0]?.description && <span>{sub.audios[0].description}</span>}
                {sub.audios[0]?.location && (
                  <span className="playlist-row-location">{sub.audios[0].location}</span>
                )}
                <span className="playlist-row-count">{sub.audios.length} Lectures</span>
              </p>
            </div>
            <div className="playlist-row-actions">
              <span className="playlist-row-open" title="Open sub-playlist">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 21H3V3"/></svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeminarSubPlaylists;
