import englishAudioData from '../data/englishAudioData.generated.json';
import React, { useState } from 'react';

import EnglishAudioDetail from './EnglishAudioDetail';
import './AudioLibrary.css';

function EnglishPlaylists({ onSelectPlaylist }) {
  return (
    <div className="audio-library-container">
      <h2 className="audio-library-title">English Audio Playlists</h2>
      <div className="playlists-list">
        {englishAudioData.map(playlist => (
          <div
            className="playlist-row"
            key={playlist.playlistName}
            onClick={() => onSelectPlaylist(playlist)}
            style={{ cursor: 'pointer' }}
          >
            <div className="playlist-row-info">
              <h3>{playlist.playlistName}</h3>
              <p className="playlist-row-meta">
                <span className="playlist-row-count">{playlist.subPlaylists.reduce((sum, sp) => sum + sp.audios.length, 0)} Lectures</span>
              </p>
            </div>
            <div className="playlist-row-actions">
              <span className="playlist-row-open" title="Open playlist">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 21H3V3"/></svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnglishSubPlaylists({ playlist, onSelectSubPlaylist, onBack }) {
  return (
    <div className="audio-library-container">
      <div className="compact-library-header has-back">
        <button onClick={onBack} className="back-button-compact">Back</button>
        <div className="header-text"><h2>{playlist.playlistName}</h2></div>
      </div>
      <div className="playlists-list">
        {playlist.subPlaylists.map(sub => (
          <div
            className="playlist-row"
            key={sub.subPlaylistName}
            onClick={() => onSelectSubPlaylist(sub)}
            style={{ cursor: 'pointer' }}
          >
            <div className="playlist-row-info">
              <h3>{sub.subPlaylistName}</h3>
              <p className="playlist-row-meta">
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



export default function EnglishAudioLibrary() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedSubPlaylist, setSelectedSubPlaylist] = useState(null);

  if (!selectedPlaylist) {
    return <EnglishPlaylists onSelectPlaylist={setSelectedPlaylist} />;
  }
  if (!selectedSubPlaylist) {
    return <EnglishSubPlaylists playlist={selectedPlaylist} onSelectSubPlaylist={setSelectedSubPlaylist} onBack={() => setSelectedPlaylist(null)} />;
  }
  return <EnglishAudioDetail subPlaylist={selectedSubPlaylist} onBack={() => setSelectedSubPlaylist(null)} />;
}
