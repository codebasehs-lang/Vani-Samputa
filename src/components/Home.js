import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MusicNotes, PlayCircle, Notebook } from 'phosphor-react';
import { audioData, videoData, cryingSchoolVideoData } from '../data/libraryData';
import './Home.css';

const DAILY_QUOTES = [
  {
    language: 'English',
    title: 'Daily Quote',
    text: 'With loving devotion, one can serve the Guru and Krishna (seva). When this deep love and affection is present, bhajan is performed; otherwise, whatever else one does is simply activity (karma).',
  },
  {
    language: 'हिंदी',
    title: 'आज का उद्धरण',
    text: 'ममता से गुरु- कृष्ण की सेवा होती हैं; ममता से भजन होता है, नहीं तो वह कर्म हो जाता है।',
  },
  {
    language: 'ଓଡ଼ିଆ',
    title: 'ଆଜିର ଉଦ୍ଧୃତି',
    text: 'ମମତାରେ ଗୁରୁ, କୃଷ୍ଣଙ୍କର ସେବା ହୁଏ, ମମତା ଭାବ ଥିଲେ ଭଜନ ହୁଏ ଅନ୍ୟଥା ଯାହା କିଛି କରିବା ସେସବୁ କର୍ମ।',
  },
  {
    language: 'বাংলা',
    title: 'আজকের উক্তি',
    text: 'ভক্তি ও প্রেম দিয়ে গুরু ও কৃষ্ণের সেবা করা যায়। যখন এই গভীর প্রেম ও স্নেহ থাকে, তখন ভজন হয়; অন্যথায় যা কিছু করা হয় তা শুধু কর্ম।',
  },
];

function Home() {
  const navigate = useNavigate();

  const [quoteLanguage, setQuoteLanguage] = React.useState('English');
  // const [visitorStats, setVisitorStats] = React.useState({ count: 0, lastVisit: null });
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const searchWrapperRef = React.useRef(null);

  const selectedQuote = React.useMemo(() => {
    return DAILY_QUOTES.find((quote) => quote.language === quoteLanguage) || DAILY_QUOTES[0];
  }, [quoteLanguage]);

  const normalizeText = React.useCallback((value) => {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }, []);

  const searchEntries = React.useMemo(() => {
    const safeArray = (value) => (Array.isArray(value) ? value : []);

    const entries = [];

    for (const playlist of safeArray(audioData)) {
      const playlistName = String(playlist?.playlistName || '');
      const language = String(playlist?.language || '');
      entries.push({
        key: `audio-playlist-${playlist?.id}`,
        kind: 'Audio Playlist',
        title: playlistName,
        subtitle: language ? `${language}` : '',
        to: '/audio',
        haystack: normalizeText(`${playlistName} ${language}`)
      });

      for (const audio of safeArray(playlist?.audios)) {
        const title = String(audio?.title || '');
        entries.push({
          key: `audio-${audio?.id}`,
          kind: 'Audio Lecture',
          title,
          subtitle: playlistName || language ? [playlistName, language].filter(Boolean).join(' • ') : '',
          to: `/audio/${audio?.id}`,
          haystack: normalizeText(`${title} ${playlistName} ${language}`)
        });
      }
    }

    for (const playlist of safeArray(videoData)) {
      const playlistName = String(playlist?.playlistName || '');
      const language = String(playlist?.language || '');
      entries.push({
        key: `video-playlist-${playlist?.id}`,
        kind: 'Video Playlist',
        title: playlistName,
        subtitle: language ? `${language}` : '',
        to: `/video/${playlist?.id}`,
        haystack: normalizeText(`${playlistName} ${language}`)
      });

      for (const video of safeArray(playlist?.videos)) {
        const title = String(video?.title || '');
        entries.push({
          key: `video-${playlist?.id}-${video?.id}`,
          kind: 'Video Lecture',
          title,
          subtitle: playlistName || language ? [playlistName, language].filter(Boolean).join(' • ') : '',
          // No per-video route today; open the playlist page.
          to: `/video/${playlist?.id}`,
          haystack: normalizeText(`${title} ${playlistName} ${language}`)
        });
      }
    }

    return entries;
  }, [normalizeText]);

  const [searchFilter, setSearchFilter] = React.useState('all');

  const searchResults = React.useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return [];

    let filtered = searchEntries.filter((entry) => entry.haystack.includes(q));

    if (searchFilter === 'audio') {
      filtered = filtered.filter(entry => entry.kind.includes('Audio'));
    } else if (searchFilter === 'video') {
      filtered = filtered.filter(entry => entry.kind.includes('Video'));
    }

    return filtered.slice(0, 10);
  }, [normalizeText, searchEntries, searchQuery, searchFilter]);

  React.useEffect(() => {
    if (!searchOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSearchOpen(false);
      if (event.key === 'Enter' && searchResults.length) {
        event.preventDefault();
        const next = searchResults[0];
        setSearchOpen(false);
        navigate(next.to);
      }
    };

    const onPointerDown = (event) => {
      const wrapper = searchWrapperRef.current;
      if (!wrapper) return;
      if (wrapper.contains(event.target)) return;
      setSearchOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [navigate, searchOpen, searchResults]);

  const { audioLectureCount, videoLectureCount, transcriptionCount } = React.useMemo(() => {
    const safeArray = (value) => (Array.isArray(value) ? value : []);

    const audioPlaylists = safeArray(audioData);
    const videoPlaylists = safeArray(videoData);
    const cryingSchoolPlaylists = safeArray(cryingSchoolVideoData);

    const allAudios = audioPlaylists.flatMap((p) => safeArray(p?.audios));
    const allVideos = [...videoPlaylists, ...cryingSchoolPlaylists].flatMap((p) => safeArray(p?.videos));

    const isRealTranscription = (audio) => {
      if (!audio?.hasTranscription) return false;
      const text = String(audio?.transcription || '').trim();
      if (!text) return false;
      if (/^coming\s+soon\.?\.?\.?$/i.test(text)) return false;
      if (/^your\s+transcription\s+text\.?\.?\.?$/i.test(text)) return false;
      return true;
    };

    return {
      audioLectureCount: allAudios.length,
      videoLectureCount: allVideos.length,
      transcriptionCount: allAudios.filter(isRealTranscription).length
    };
  }, []);

  /*
    React.useEffect(() => {
      let cancelled = false;
  
      const increment = async () => {
        const localKey = 'vani_samputa_visits_local';
  
        try {
          const response = await fetch('/api/visits', { method: 'POST' });
          if (!response.ok) throw new Error('bad response');
          const data = await response.json();
          if (cancelled) return;
          setVisitorStats({
            count: typeof data?.count === 'number' ? data.count : Number(data?.count || 0),
            lastVisit: data?.lastVisit || null
          });
        } catch {
          // Local dev fallback (CRA doesn't run Vercel /api functions)
          try {
            const raw = window.localStorage.getItem(localKey);
            const parsed = raw ? JSON.parse(raw) : null;
            const next = {
              count: Number(parsed?.count || 0) + 1,
              lastVisit: new Date().toISOString()
            };
            window.localStorage.setItem(localKey, JSON.stringify(next));
            if (!cancelled) setVisitorStats(next);
          } catch {
            // ignore
          }
        }
      };
  
      increment();
      return () => {
        cancelled = true;
      };
    }, []);
  */

  /*
    const formatLastVisit = (isoString) => {
      if (!isoString) return '';
      const d = new Date(isoString);
      if (Number.isNaN(d.getTime())) return '';
      return d.toLocaleString();
    };
  */

  const withPlus = (value) => {
    const n = Number(value || 0);
    if (!Number.isFinite(n) || n <= 0) return '0';
    return `${n}+`;
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="guru-photo">
            <img src="/icons/hindi-card.jpg" alt="HH Haladhara Svāmī Mahārāja" />
          </div>
          <div className="hero-text">
            <h1>Welcome to Vāṇī Saṃpuṭa</h1>
            <p className="hero-subtitle">
              Access spiritual lectures with transcriptions and organized video playlists
              Lectures given by <span className="guru-name"></span>
              <span className="guru-name">HH Haladhara Svāmī Mahārāja</span>
            </p>

            <div className="home-global-search" ref={searchWrapperRef}>
              <div className="home-global-search-label">Global Search</div>
              <div className="home-search-bar-container">
                <select
                  className="home-search-filter"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  aria-label="Filter search results"
                >
                  <option value="all">All</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>
                <div className="home-global-search-inputRow">
                  <input
                    className="home-global-search-input"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchOpen(true);
                    }}
                    onFocus={() => setSearchOpen(true)}
                    placeholder="Search lectures, playlists…"
                    aria-label="Global search"
                    autoComplete="off"
                  />
                </div>
              </div>

              {searchOpen && normalizeText(searchQuery) && (
                <div className="home-global-search-dropdown" role="listbox" aria-label="Search results">
                  {searchResults.length ? (
                    searchResults.map((item) => (
                      <Link
                        key={item.key}
                        to={item.to}
                        className="home-global-search-item"
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                      >
                        <div className="home-global-search-itemTitle">{item.title}</div>
                        <div className="home-global-search-itemMeta">
                          <span className="home-global-search-itemKind">{item.kind}</span>
                          {item.subtitle ? <span className="home-global-search-itemSub">{item.subtitle}</span> : null}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="home-global-search-empty">No results</div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* <div className="guru-photo guru-photo-right">
            <img src="/icons/ssggs1.jpg" alt="Śrī Śrīmad Goura Govinda Svāmī Mahārāja" />
          </div> */}
        </div>
      </div>

      <div className="daily-quote-section" aria-label="Daily quote">
        <div className="daily-quote-card">
          <div className="daily-quote-inner">
            <div className="daily-quote-image">
              <img src="/RadhaMadhav.png" alt="Radha Madhava" />
            </div>

            <div className="daily-quote-content">
              <div className="daily-quote-header">
                <div className="daily-quote-label">Daily Quote</div>
                <div className="quote-language-tabs" role="tablist" aria-label="Quote language">
                  {['English', 'हिंदी', 'ଓଡ଼ିଆ', 'বাংলা'].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      role="tab"
                      aria-selected={quoteLanguage === lang}
                      className={quoteLanguage === lang ? 'quote-language-tab active' : 'quote-language-tab'}
                      onClick={() => setQuoteLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="daily-quote-viewport" aria-live="polite">
                <div
                  className="daily-quote-slide"
                  aria-label={`${selectedQuote.title} (${selectedQuote.language})`}
                >
                  <div className="daily-quote-meta">
                    <span className="daily-quote-title">{selectedQuote.title}</span>
                    <span className="daily-quote-language">{selectedQuote.language}</span>
                  </div>
                  <div className={`daily-quote-text ${selectedQuote.language === 'हिंदी' ? 'font-hindi' :
                    selectedQuote.language === 'ଓଡ଼ିଆ' ? 'font-odia' :
                      selectedQuote.language === 'বাংলা' ? 'font-bengali' : ''
                    }`}>“{selectedQuote.text}”</div>
                </div>
              </div>
            </div>

            <div className="daily-quote-image daily-quote-image-right">
              <img src="/icons/Gopal.jpg" alt="Jagannath" />
            </div>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <Link to="/audio" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              <MusicNotes size={34} weight="duotone" />
            </div>
            <h2>Audio Lectures</h2>
            <p>
              Browse our extensive collection of audio lectures organized by category.
              Many lectures include detailed transcriptions for easy reference and study.
            </p>
          </div>
        </Link>

        <Link to="/video" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              <PlayCircle size={34} weight="duotone" />
            </div>
            <h2>Video Playlists</h2>
            <p>
              Watch organized video playlists on various topics. All videos are linked
              to YouTube for seamless viewing experience.
            </p>
          </div>
        </Link>

        <div className="feature-card feature-card-disabled">
          <div className="feature-icon" aria-hidden="true">
            <Notebook size={34} weight="duotone" />
          </div>
          <h2>Transcriptions</h2>
          <p>
            Read along with audio lectures using our detailed transcriptions.
            Perfect for study and reference.
          </p>
          <div className="feature-link-disabled">
            Available with audio lectures
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>About This Library</h2>
        <p>
          This platform provides access to spiritual knowledge through audio and video formats.
          Our collection includes lectures on Bhagavad Gita, Srimad Bhagavatam, conversations,
          and special festival lectures given by{' '}
          <span className="guru-name">HH Haladhara Svāmī Mahārāja</span>.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{withPlus(audioLectureCount)}</div>
            <div className="stat-label">Audio Lectures</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{withPlus(videoLectureCount)}</div>
            <div className="stat-label">Video Lectures</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{withPlus(transcriptionCount)}</div>
            <div className="stat-label">Transcriptions</div>
          </div>
          {/*
          <div className="stat-item">
            <div className="stat-number">{withPlus(visitorStats.count)}</div>
            <div className="stat-label">Visitors</div>
            {visitorStats.lastVisit && (
              <div className="stat-subtext">Latest: {formatLastVisit(visitorStats.lastVisit)}</div>
            )}
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default Home;
