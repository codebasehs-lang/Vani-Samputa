import React, { useState } from 'react';
import { audioData, videoData } from '../data/libraryData';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('audio');
  const [showPreview, setShowPreview] = useState(false);

  // Audio playlist state
  const [audioPlaylist, setAudioPlaylist] = useState({
    id: audioData.length + 1,
    playlistName: '',
    category: [],
    description: '',
    language: 'Hindi',
    location: '',
    icon: '',
    audios: []
  });

  // Video playlist state
  const [videoPlaylist, setVideoPlaylist] = useState({
    id: videoData.length + 1,
    playlistName: '',
    category: [],
    description: '',
    language: 'Hindi',
    location: '',
    icon: '',
    thumbnail: '',
    videos: []
  });

  // Single audio entry state
  const [audioEntry, setAudioEntry] = useState({
    id: 101,
    title: '',
    audioUrl: '',
    duration: '',
    date: new Date().toISOString().split('T')[0],
    hasTranscription: false,
    transcription: ''
  });

  // Single video entry state
  const [videoEntry, setVideoEntry] = useState({
    id: 101,
    title: '',
    youtubeUrl: '',
    duration: 'N/A',
    description: ''
  });

  const addAudioToPlaylist = () => {
    if (!audioEntry.title || !audioEntry.audioUrl) {
      alert('Please fill in title and audio URL');
      return;
    }
    setAudioPlaylist({
      ...audioPlaylist,
      audios: [...audioPlaylist.audios, { ...audioEntry, id: 100 + audioPlaylist.audios.length + 1 }]
    });
    setAudioEntry({
      id: 101,
      title: '',
      audioUrl: '',
      duration: '',
      date: new Date().toISOString().split('T')[0],
      hasTranscription: false,
      transcription: ''
    });
  };

  const addVideoToPlaylist = () => {
    if (!videoEntry.title || !videoEntry.youtubeUrl) {
      alert('Please fill in title and YouTube URL');
      return;
    }
    setVideoPlaylist({
      ...videoPlaylist,
      videos: [...videoPlaylist.videos, { ...videoEntry, id: 100 + videoPlaylist.videos.length + 1 }]
    });
    setVideoEntry({
      id: 101,
      title: '',
      youtubeUrl: '',
      duration: 'N/A',
      description: ''
    });
  };

  const removeAudioFromPlaylist = (index) => {
    setAudioPlaylist({
      ...audioPlaylist,
      audios: audioPlaylist.audios.filter((_, i) => i !== index)
    });
  };

  const removeVideoFromPlaylist = (index) => {
    setVideoPlaylist({
      ...videoPlaylist,
      videos: videoPlaylist.videos.filter((_, i) => i !== index)
    });
  };

  const generateJSON = () => {
    if (activeTab === 'audio') {
      return JSON.stringify(audioPlaylist, null, 2);
    } else {
      return JSON.stringify(videoPlaylist, null, 2);
    }
  };

  // const copyToClipboard = () => {
  //   const json = generateJSON();
  //   navigator.clipboard.writeText(json);
  //   alert('JSON copied to clipboard! You can now add it to libraryData.js');
  // };

  const submitPlaylist = () => {
    const currentPlaylist = activeTab === 'audio' ? audioPlaylist : videoPlaylist;

    // Validation
    if (!currentPlaylist.playlistName) {
      alert('Please enter a playlist name');
      return;
    }
    if ((activeTab === 'audio' && audioPlaylist.audios.length === 0) ||
      (activeTab === 'video' && videoPlaylist.videos.length === 0)) {
      alert('Please add at least one item to the playlist');
      return;
    }

    // Generate JSON and download
    const json = generateJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentPlaylist.playlistName.replace(/\s+/g, '_')}_${activeTab}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert(`✅ ${activeTab === 'audio' ? 'Audio' : 'Video'} playlist downloaded successfully!\n\nNext steps:\n1. Open the downloaded JSON file\n2. Copy the contents\n3. Add it to the ${activeTab}Data array in libraryData.js`);

    // Reset form after successful submission
    resetForm();
  };

  const resetForm = () => {
    if (activeTab === 'audio') {
      setAudioPlaylist({
        id: audioData.length + 1,
        playlistName: '',
        category: [],
        description: '',
        language: 'Hindi',
        location: '',
        icon: '',
        audios: []
      });
    } else {
      setVideoPlaylist({
        id: videoData.length + 1,
        playlistName: '',
        category: [],
        description: '',
        language: 'Hindi',
        location: '',
        icon: '',
        thumbnail: '',
        videos: []
      });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>🔐 Admin Panel</h1>
        <p>Add new audio and video playlists</p>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === 'audio' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('audio')}
        >
          🎵 Audio Playlist
        </button>
        <button
          className={activeTab === 'video' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('video')}
        >
          ▶️ Video Playlist
        </button>
      </div>

      {activeTab === 'audio' ? (
        <div className="admin-content">
          {/* Audio Playlist Form */}
          <div className="form-section">
            <h2>Playlist Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Playlist Name *</label>
                <input
                  type="text"
                  value={audioPlaylist.playlistName}
                  onChange={(e) => setAudioPlaylist({ ...audioPlaylist, playlistName: e.target.value })}
                  placeholder="e.g., Sriman Mahaprabhu & Prema Bhakti"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={audioPlaylist.category.join(', ')}
                  onChange={(e) =>
                    setAudioPlaylist({
                      ...audioPlaylist,
                      category: e.target.value
                        .split(',')
                        .map((value) => value.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="e.g., Chaitanya Charitamrita, Srimad Bhagavatam"
                />
              </div>
              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={audioPlaylist.description}
                  onChange={(e) => setAudioPlaylist({ ...audioPlaylist, description: e.target.value })}
                  placeholder="Enter playlist description"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <select
                  value={audioPlaylist.language}
                  onChange={(e) => setAudioPlaylist({ ...audioPlaylist, language: e.target.value })}
                >
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Odia">Odia</option>
                </select>
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={audioPlaylist.location}
                  onChange={(e) => setAudioPlaylist({ ...audioPlaylist, location: e.target.value })}
                  placeholder="e.g., ISKCON Vrindavan"
                />
              </div>
              <div className="form-group">
                <label>Icon URL</label>
                <input
                  type="text"
                  value={audioPlaylist.icon}
                  onChange={(e) => setAudioPlaylist({ ...audioPlaylist, icon: e.target.value })}
                  placeholder="/icons/image.jpg"
                />
              </div>
            </div>
          </div>

          {/* Add Audio Entry */}
          <div className="form-section">
            <h2>Add Audio Lecture</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={audioEntry.title}
                  onChange={(e) => setAudioEntry({ ...audioEntry, title: e.target.value })}
                  placeholder="e.g., Day 1"
                />
              </div>
              <div className="form-group">
                <label>Audio URL * (Cloudinary)</label>
                <input
                  type="text"
                  value={audioEntry.audioUrl}
                  onChange={(e) => setAudioEntry({ ...audioEntry, audioUrl: e.target.value })}
                  placeholder="https://res.cloudinary.com/..."
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  value={audioEntry.duration}
                  onChange={(e) => setAudioEntry({ ...audioEntry, duration: e.target.value })}
                  placeholder="1:51:50"
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={audioEntry.date}
                  onChange={(e) => setAudioEntry({ ...audioEntry, date: e.target.value })}
                />
              </div>
              <div className="form-group full-width">
                <label>
                  <input
                    type="checkbox"
                    checked={audioEntry.hasTranscription}
                    onChange={(e) => setAudioEntry({ ...audioEntry, hasTranscription: e.target.checked })}
                  />
                  {' '}Has Transcription
                </label>
              </div>
              {audioEntry.hasTranscription && (
                <div className="form-group full-width">
                  <label>Transcription</label>
                  <textarea
                    value={audioEntry.transcription}
                    onChange={(e) => setAudioEntry({ ...audioEntry, transcription: e.target.value })}
                    placeholder="Enter transcription text"
                    rows="5"
                  />
                </div>
              )}
            </div>
            <button className="add-button" onClick={addAudioToPlaylist}>
              ➕ Add Audio to Playlist
            </button>
          </div>

          {/* Audio List */}
          {audioPlaylist.audios.length > 0 && (
            <div className="form-section">
              <h2>Audios in Playlist ({audioPlaylist.audios.length})</h2>
              <div className="items-list">
                {audioPlaylist.audios.map((audio, index) => (
                  <div key={index} className="item-card">
                    <div className="item-info">
                      <strong>{audio.title}</strong>
                      <small>{audio.duration}</small>
                    </div>
                    <button className="remove-button" onClick={() => removeAudioFromPlaylist(index)}>
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="admin-content">
          {/* Video Playlist Form */}
          <div className="form-section">
            <h2>Playlist Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Playlist Name *</label>
                <input
                  type="text"
                  value={videoPlaylist.playlistName}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, playlistName: e.target.value })}
                  placeholder="e.g., Stages of Bhakti"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={videoPlaylist.category.join(', ')}
                  onChange={(e) =>
                    setVideoPlaylist({
                      ...videoPlaylist,
                      category: e.target.value
                        .split(',')
                        .map((value) => value.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="e.g., Bhakti-rasamrta-sindhu, Chaitanya Charitamrita"
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <select
                  value={videoPlaylist.language}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, language: e.target.value })}
                >
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Odia">Odia</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={videoPlaylist.description}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, description: e.target.value })}
                  placeholder="Enter playlist description"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={videoPlaylist.location}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, location: e.target.value })}
                  placeholder="e.g., ISKCON Vrindavan"
                />
              </div>
              <div className="form-group">
                <label>Icon URL</label>
                <input
                  type="text"
                  value={videoPlaylist.icon}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, icon: e.target.value })}
                  placeholder="/icons/image.jpg"
                />
              </div>
              <div className="form-group">
                <label>Thumbnail URL</label>
                <input
                  type="text"
                  value={videoPlaylist.thumbnail}
                  onChange={(e) => setVideoPlaylist({ ...videoPlaylist, thumbnail: e.target.value })}
                  placeholder="YouTube thumbnail URL"
                />
              </div>
            </div>
          </div>

          {/* Add Video Entry */}
          <div className="form-section">
            <h2>Add Video</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={videoEntry.title}
                  onChange={(e) => setVideoEntry({ ...videoEntry, title: e.target.value })}
                  placeholder="e.g., Part 1"
                />
              </div>
              <div className="form-group">
                <label>YouTube URL *</label>
                <input
                  type="text"
                  value={videoEntry.youtubeUrl}
                  onChange={(e) => setVideoEntry({ ...videoEntry, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  value={videoEntry.duration}
                  onChange={(e) => setVideoEntry({ ...videoEntry, duration: e.target.value })}
                  placeholder="1:52:28 or N/A"
                />
              </div>
              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={videoEntry.description}
                  onChange={(e) => setVideoEntry({ ...videoEntry, description: e.target.value })}
                  placeholder="Enter video description"
                  rows="3"
                />
              </div>
            </div>
            <button className="add-button" onClick={addVideoToPlaylist}>
              ➕ Add Video to Playlist
            </button>
          </div>

          {/* Video List */}
          {videoPlaylist.videos.length > 0 && (
            <div className="form-section">
              <h2>Videos in Playlist ({videoPlaylist.videos.length})</h2>
              <div className="items-list">
                {videoPlaylist.videos.map((video, index) => (
                  <div key={index} className="item-card">
                    <div className="item-info">
                      <strong>{video.title}</strong>
                      <small>{video.duration}</small>
                    </div>
                    <button className="remove-button" onClick={() => removeVideoFromPlaylist(index)}>
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="admin-actions">
        <button className="action-button preview-button" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? '👁️ Hide Preview' : '👁️ Show JSON Preview'}
        </button>
        <button className="action-button submit-button" onClick={submitPlaylist}>
          📥 Submit & Download
        </button>
        <button className="action-button reset-button" onClick={resetForm}>
          🔄 Reset Form
        </button>
      </div>

      {/* JSON Preview */}
      {showPreview && (
        <div className="json-preview">
          <h3>Generated JSON</h3>
          <p className="help-text">
            Copy this JSON and add it to the {activeTab === 'audio' ? 'audioData' : 'videoData'} array in src/data/libraryData.js
          </p>
          <pre>{generateJSON()}</pre>
        </div>
      )}

      {/* Instructions */}
      <div className="instructions">
        <h3>📝 Instructions</h3>
        <ol>
          <li>Fill in the playlist information</li>
          <li>Add audio/video entries one by one</li>
          <li>Click "Show JSON Preview" to see the generated code (optional)</li>
          <li>Click "Submit & Download" button to download the JSON file</li>
          <li>Open the downloaded JSON file and copy its contents</li>
          <li>Open <code>src/data/libraryData.js</code></li>
          <li>Add the copied JSON to the appropriate array (audioData or videoData)</li>
          <li>Save the file and refresh your app</li>
        </ol>
      </div>
    </div>
  );
}

export default Admin;
