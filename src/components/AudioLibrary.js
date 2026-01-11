import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal } from 'phosphor-react';
import { audioData } from '../data/libraryData';
import './AudioLibrary.css';

function AudioLibrary() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = React.useRef(null);

  const categories = [
    'Bhagvad Gita',
    'Chaitanya-Charitamrita',
    'Chaitanya Bhagavat',
    'Srimad Bhagavatam',
    'Vaisnava Songs',
    'Festival Lecture',
    'Initiation Ceremony'
  ];

  const normalizeCategory = (value) =>
    String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

  const playlistMatchesCategory = (playlist, category) => {
    if (!category) return true;

    const wanted = normalizeCategory(category);
    const raw = playlist?.category;
    const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return list.some((c) => normalizeCategory(c) === wanted);
  };

  const playlistMatchesCategories = (playlist, categoriesToMatch) => {
    if (!categoriesToMatch?.length) return true;
    return categoriesToMatch.some((c) => playlistMatchesCategory(playlist, c));
  };

  const languages = [
    { name: 'Odia', icon: '🕉️', color: '#ff6b6b', displayName: 'ଓଡ଼ିଆ', image: '/icons/odia-card.jpg' },
    { name: 'Hindi', icon: '🙏', color: '#4ecdc4', displayName: 'हिंदी', image: '/icons/hindi-card.jpg' },
    { name: 'English', icon: '📖', color: '#45b7d1', displayName: 'English', image: '/icons/english-card.jpg' }
  ];

  const filteredPlaylists = selectedLanguage
    ? audioData.filter((playlist) =>
        playlist.language === selectedLanguage &&
        playlist.playlistName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        playlistMatchesCategories(playlist, selectedCategories)
      )
    : [];

  const addCategory = (category) => {
    if (!category) return;
    setSelectedCategories((prev) => (prev.includes(category) ? prev : [...prev, category]));
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  const getPlaylistCount = (language) => {
    return audioData.filter(p => p.language === language).length;
  };

  const availableCategories = React.useMemo(() => {
    return categories.filter((c) => !selectedCategories.includes(c));
  }, [categories, selectedCategories]);

  React.useEffect(() => {
    if (!categoryDropdownOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setCategoryDropdownOpen(false);
    };

    const onPointerDown = (event) => {
      const wrapper = categoryDropdownRef.current;
      if (!wrapper) return;
      if (wrapper.contains(event.target)) return;
      setCategoryDropdownOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [categoryDropdownOpen]);

  return (
    <div className="audio-library-container">
      <div className={`library-header${selectedLanguage ? ' has-back' : ''}`}>
        {selectedLanguage && (
          <button onClick={() => setSelectedLanguage(null)} className="back-to-languages">
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Languages</span>
          </button>
        )}
        <h1>{selectedLanguage ? `${selectedLanguage} Audio Lectures` : 'Audio Lectures'}</h1>
        <p>{selectedLanguage ? `Browse ${selectedLanguage} spiritual lectures with transcriptions` : 'Listen to spiritual lectures organized by language with transcriptions'}</p>
      </div>

      {!selectedLanguage ? (
        <div className="language-categories">
          {languages.map(lang => (
            <div
              key={lang.name}
              className="language-card"
              onClick={() => {
                setSelectedLanguage(lang.name);
                setSearchTerm('');
                setSelectedCategories([]);
                setCategoryDropdownOpen(false);
              }}
              style={{ 
                borderTop: `4px solid ${lang.color}`,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lang.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="playlist-count-badge">{getPlaylistCount(lang.name)}</div>
              <div className="language-card-content">
                <h2>{lang.displayName}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="search-container">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search playlists by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="category-filter">
              <div className="category-select-wrapper" ref={categoryDropdownRef}>
                <button
                  type="button"
                  className="category-select"
                  onClick={() => setCategoryDropdownOpen((prev) => !prev)}
                  aria-label="Add category filter"
                  aria-haspopup="listbox"
                  aria-expanded={categoryDropdownOpen}
                >
                  <span className="category-select-text">Add Category</span>
                  <span className="category-select-icon" aria-hidden="true">
                    <SlidersHorizontal size={18} weight="bold" />
                  </span>
                </button>

                {categoryDropdownOpen && (
                  <div className="category-dropdown" role="listbox" aria-label="Categories">
                    {availableCategories.length ? (
                      availableCategories.map((c) => (
                        <button
                          key={c}
                          type="button"
                          role="option"
                          className="category-dropdown-item"
                          onClick={() => {
                            addCategory(c);
                            setCategoryDropdownOpen(false);
                          }}
                        >
                          {c}
                        </button>
                      ))
                    ) : (
                      <div className="category-dropdown-empty">No more categories</div>
                    )}
                  </div>
                )}
              </div>

              {selectedCategories.length > 0 && (
                <div className="category-chips" aria-label="Selected categories">
                  {selectedCategories.map((c) => (
                    <span key={c} className="category-chip">
                      {c}
                      <button
                        type="button"
                        className="chip-remove"
                        onClick={() => removeCategory(c)}
                        aria-label={`Remove ${c}`}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {filteredPlaylists.length > 0 ? (
            <div className="playlists-grid">
              {filteredPlaylists.map(playlist => (
                <Link key={playlist.id} to={`/audio/${playlist.id}`} className="playlist-card-link">
                  <div className="playlist-card">
                    <div className="playlist-thumbnail">
                      <div className="thumbnail-overlay">
                        <span className="audio-count">{playlist.audios.length} Lectures</span>
                      </div>
                      {playlist.icon && playlist.icon.startsWith('/') ? (
                        <img src={playlist.icon} alt={playlist.playlistName} className="playlist-icon-img" />
                      ) : (
                        <span className="playlist-icon-emoji">{playlist.icon || '🎵'}</span>
                      )}
                    </div>
                    <div className="playlist-content">
                      <h3>{playlist.playlistName}</h3>
                      <p className="playlist-description">{playlist.description}</p>
                      {playlist.location && (
                        <p className="playlist-location">
                          📍 {playlist.location}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-playlists">
              <p>No audio playlists available in {selectedLanguage} yet.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AudioLibrary;
