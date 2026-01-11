import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cryingSchoolVideoData } from '../data/libraryData';
import './VideoLibrary.css';

function CryingSchoolLibrary() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryToAdd, setCategoryToAdd] = useState('');

  const categories = [
    'Bhagvad Gita',
    'Bhakti-rasamrta-sindhu',
    'Tattva',
    'Guru Seva',
    'Anugatya',
    'Vaisnava Seva',
    'Krishna Conciousness',
    'Chaitanya-Charitamrita',
    'Srimad Bhagavatam',
    'Vaisnava Songs',
    'Festival Lecture',
    'Initiation',
    'Initiation Ceremony',
    'Other'
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

  const getYouTubeThumbnailUrl = (rawUrl) => {
    const videoId = getYouTubeVideoId(rawUrl);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const languages = [
    {
      name: 'Odia',
      icon: '🕉️',
      color: '#ff6b6b',
      displayName: 'ଓଡ଼ିଆ',
      image: '/icons/ssggs1.jpg'
    },
    {
      name: 'Hindi',
      icon: '🙏',
      color: '#4ecdc4',
      displayName: 'हिंदी',
      image: '/icons/ssggs2.jpg'
    },
    {
      name: 'English',
      icon: '📖',
      color: '#45b7d1',
      displayName: 'English',
      image: '/icons/ssggs3.jpg'
    }
  ];

  const filteredPlaylists = selectedLanguage
    ? cryingSchoolVideoData.filter((playlist) =>
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
    return cryingSchoolVideoData.filter((p) => p.language === language).length;
  };

  return (
    <div className="video-library-container">
      <div className="library-header">
        {selectedLanguage && (
          <button onClick={() => setSelectedLanguage(null)} className="back-to-languages">
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Languages</span>
          </button>
        )}
        <h1>{selectedLanguage ? `${selectedLanguage} Videos` : 'Crying School Videos'}</h1>
        <p>
          {selectedLanguage
            ? `Watch ${selectedLanguage} Crying School playlists`
            : (
                <>
                  Watch Crying School playlists organized by language given by{' '}
                  <span className="crying-school-guru">Śrī Śrīmad Gaurā Govinda Svāmī Mahārāja</span>
                </>
              )}
        </p>
      </div>

      {!selectedLanguage ? (
        <div className="language-categories">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="language-card"
              onClick={() => {
                setSelectedLanguage(lang.name);
                setSearchTerm('');
                setSelectedCategories([]);
                setCategoryToAdd('');
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
                <button className="clear-search" onClick={() => setSearchTerm('')} aria-label="Clear search">
                  ✕
                </button>
              )}
            </div>

            <div className="category-filter">
              <select
                className="category-select"
                value={categoryToAdd}
                onChange={(e) => {
                  const next = e.target.value;
                  addCategory(next);
                  setCategoryToAdd('');
                }}
                aria-label="Add category filter"
              >
                <option value="">Add Category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

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
              {filteredPlaylists.map((playlist) => {
                const playlistThumbnail =
                  getYouTubeThumbnailUrl(playlist.videos?.[0]?.youtubeUrl) || playlist.thumbnail;

                return (
                  <Link
                    key={playlist.id}
                    to={`/crying-school/${playlist.id}`}
                    className="playlist-card-link"
                  >
                    <div className="playlist-card">
                      <div className="playlist-thumbnail">
                        {playlistThumbnail ? (
                          <img
                            src={playlistThumbnail}
                            alt={playlist.playlistName}
                            className="playlist-thumbnail-img"
                          />
                        ) : playlist.icon && playlist.icon.startsWith('/') ? (
                          <img
                            src={playlist.icon}
                            alt={playlist.playlistName}
                            className="playlist-icon-img"
                          />
                        ) : (
                          <span className="playlist-icon-emoji">{playlist.icon || '▶️'}</span>
                        )}

                        <div className="thumbnail-overlay">
                          <span className="video-count">{playlist.videos.length} Videos</span>
                        </div>
                      </div>
                      <div className="playlist-content">
                        <h3>{playlist.playlistName}</h3>
                        <p className="playlist-description">{playlist.description}</p>
                        {playlist.location && <p className="playlist-location">📍 {playlist.location}</p>}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="no-playlists">
              <p>No playlists available in {selectedLanguage} yet.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CryingSchoolLibrary;
