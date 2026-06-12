import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, PlayCircle, PauseCircle, Clock, CalendarBlank, FileText, ArrowCounterClockwise, ArrowClockwise } from 'phosphor-react';
import { recordRecentlyPlayed } from '../utils/recentlyPlayed';
import './AudioDetail.css';

function EnglishAudioDetail({ subPlaylist, onBack, initialAudioSno }) {
  const [, setSearchParams] = useSearchParams();
  const initialIndex = React.useMemo(() => {
    if (initialAudioSno == null) return 0;
    const idx = subPlaylist.audios.findIndex(a => String(a['Sno.']) === String(initialAudioSno));
    return idx >= 0 ? idx : 0;
  }, [subPlaylist, initialAudioSno]);
  const [currentAudio, setCurrentAudio] = useState(initialIndex);
  const [searchQuery, setSearchQuery] = useState('');
  const [seekTime, setSeekTime] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  React.useEffect(() => {
    setCurrentAudio(initialIndex);
  }, [initialIndex]);

  const filteredAudios = subPlaylist.audios.filter(audio =>
    audio.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  React.useEffect(() => {
    const audio = filteredAudios[currentAudio];
    if (!audio) return;
    // Reflect the selected lecture in the URL (e.g. /audio?lang=english&sno=2)
    setSearchParams({ lang: 'english', sno: String(audio['Sno.']) }, { replace: true });
    recordRecentlyPlayed({
      type: 'audio',
      playlistId: 'english',
      itemId: audio['Sno.'],
      title: audio.Title,
      playlistName: subPlaylist.subPlaylistName,
      thumbnail: '',
      to: `/audio?lang=english&sno=${audio['Sno.']}`
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAudio, subPlaylist]);



  const skip = (seconds) => {
    const player = audioRef.current;
    if (!player) return;
    const target = player.currentTime + seconds;
    const max = isNaN(player.duration) ? target : player.duration;
    player.currentTime = Math.min(Math.max(0, target), max);
  };

  const parseTimeToSeconds = (value) => {
    const parts = value.trim().split(':').map(Number);
    if (parts.some(isNaN)) return null;
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 1) return parts[0];
    return null;
  };

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '0:00';
    const total = Math.floor(secs);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
    return `${h > 0 ? h + ':' : ''}${mm}:${String(s).padStart(2, '0')}`;
  };

  const handleSeekToTime = (e) => {
    e.preventDefault();
    const player = audioRef.current;
    if (!player || !seekTime.trim()) return;
    const seconds = parseTimeToSeconds(seekTime);
    if (seconds === null || seconds < 0) return;
    const max = isNaN(player.duration) ? seconds : player.duration;
    player.currentTime = Math.min(seconds, max);
    player.play();
  };

  // Remember playback position in the browser (no DB needed)
  const getStorageKey = () => {
    const src = filteredAudios[currentAudio]?.link;
    return src ? `vani-audio-pos:${src}` : null;
  };

  const lastSavedRef = useRef(0);

  const handleLoadedMetadata = () => {
    const player = audioRef.current;
    if (!player) return;
    setDuration(player.duration || 0);
    const key = getStorageKey();
    if (!key) return;
    try {
      const saved = parseFloat(localStorage.getItem(key));
      if (!isNaN(saved) && saved > 1 && saved < player.duration - 1) {
        player.currentTime = saved;
      }
    } catch (err) { /* localStorage unavailable */ }
  };

  const handleTimeUpdate = () => {
    const player = audioRef.current;
    if (!player) return;
    setCurrentTime(player.currentTime || 0);
    const key = getStorageKey();
    if (!key) return;
    if (Math.abs(player.currentTime - lastSavedRef.current) < 5) return;
    lastSavedRef.current = player.currentTime;
    try {
      localStorage.setItem(key, String(player.currentTime));
    } catch (err) { /* localStorage unavailable */ }
  };

  const handleEnded = () => {
    const key = getStorageKey();
    if (!key) return;
    try { localStorage.removeItem(key); } catch (err) { /* ignore */ }
  };

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
            <button type="button" className="seek-btn seek-btn-side" onClick={() => skip(-10)} title="Rewind 10 seconds">
              <ArrowCounterClockwise size={20} weight="bold" />
              <span>10s</span>
            </button>
            <audio
              ref={audioRef}
              controls
              className="main-audio-player"
              key={currentAudio}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            >
              <source src={filteredAudios[currentAudio]?.link} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button type="button" className="seek-btn seek-btn-side" onClick={() => skip(10)} title="Forward 10 seconds">
              <span>10s</span>
              <ArrowClockwise size={20} weight="bold" />
            </button>
            <div className="audio-time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="audio-controls">
            <form className="seek-form" onSubmit={handleSeekToTime}>
              <input
                type="text"
                className="seek-input"
                placeholder="hh:mm:ss"
                value={seekTime}
                onChange={(e) => setSeekTime(e.target.value)}
              />
              <button type="submit" className="seek-go-btn">Go</button>
            </form>
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
