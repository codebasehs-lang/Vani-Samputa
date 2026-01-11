import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import './App.css';
import Home from './components/Home';
import AudioLibrary from './components/AudioLibrary';
import VideoLibrary from './components/VideoLibrary';
import AudioDetail from './components/AudioDetail';
import VideoPlaylist from './components/VideoPlaylist';
import Admin from './components/Admin';
import Live from './components/Live';
import CryingSchoolLibrary from './components/CryingSchoolLibrary';
import CryingSchoolPlaylist from './components/CryingSchoolPlaylist';
import About from './components/About';
import liveConfig from './config/liveConfig.json';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const hasLiveUrl = Boolean((liveConfig?.url || '').trim());

  const Router = Capacitor.isNativePlatform() ? HashRouter : BrowserRouter;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <Link to="/" className="header-branding">
              <div className="logo-circle">
                <img src="/logo.png" alt="Vāṇī Saṃpuṭa Logo" className="site-logo" />
              </div>
              <div className="brand-text">
                <h1>Vāṇī Saṃpuṭa</h1>
                <div className="header-subtitle">
                  <div>HH Haladhara Svāmī Mahārāja</div>
                </div>
              </div>
            </Link>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span className={mobileMenuOpen ? "hamburger open" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <nav className={mobileMenuOpen ? "main-nav mobile-open" : "main-nav"}>
              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                About
              </NavLink>
              <NavLink
                to="/audio"
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Audio Lectures
              </NavLink>
              <NavLink
                to="/video"
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Video Lectures
              </NavLink>
              {/* <Link to="/crying-school" onClick={closeMobileMenu}>Crying School Videos</Link> */}
              <NavLink
                to="/live"
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <span className="nav-label">
                  Live
                  {hasLiveUrl && <span className="live-indicator-dot" aria-hidden="true" />}
                </span>
              </NavLink>
            </nav>

            <div
              className={mobileMenuOpen ? 'nav-overlay open' : 'nav-overlay'}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
          </div>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/audio" element={<AudioLibrary />} />
            <Route path="/audio/:id" element={<AudioDetail />} />
            <Route path="/video" element={<VideoLibrary />} />
            <Route path="/video/:playlistId" element={<VideoPlaylist />} />
            <Route path="/crying-school" element={<CryingSchoolLibrary />} />
            <Route path="/crying-school/:playlistId" element={<CryingSchoolPlaylist />} />
            <Route path="/live" element={<Live />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; 2026 Vāṇī Saṃpuṭa. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
