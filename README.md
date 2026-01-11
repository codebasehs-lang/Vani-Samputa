# Audio-Visual Library

A React-based web application for organizing and accessing audio lectures with transcriptions and video playlists. Similar to Prabhupad Vani website, this library provides easy access to spiritual lectures organized by category with searchable transcriptions and YouTube video integration.

## Features

### 🎵 Audio Library
- Browse audio lectures organized by categories (Bhagavad Gita, Srimad Bhagavatam, Morning Walks, etc.)
- Filter by category and transcription availability
- View detailed lecture information with audio player
- Read transcriptions alongside audio lectures
- Responsive design for mobile and desktop

### 📹 Video Library
- Organized playlists for different lecture series
- YouTube video integration with embedded player
- Playlist-wise organization of lectures
- Direct links to watch on YouTube
- Video count and duration information

### 🎨 User Interface
- Clean, modern design with gradient themes
- Responsive layout for all devices
- Easy navigation between sections
- Search and filter capabilities
- Smooth animations and transitions

## Project Structure

```
cryingschool-audioVisual-library/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js              # Landing page
│   │   ├── Home.css
│   │   ├── AudioLibrary.js      # Audio lectures list
│   │   ├── AudioLibrary.css
│   │   ├── AudioDetail.js       # Individual audio with transcription
│   │   ├── AudioDetail.css
│   │   ├── VideoLibrary.js      # Video playlists overview
│   │   ├── VideoLibrary.css
│   │   ├── VideoPlaylist.js     # Individual playlist with videos
│   │   └── VideoPlaylist.css
│   ├── data/
│   │   └── libraryData.js       # Sample audio and video data
│   ├── App.js                   # Main app component with routing
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Make sure you have Node.js installed on your system
2. Navigate to the project directory:
   ```bash
   cd "c:\Users\1042571\OneDrive - Blue Yonder\Documents\React Practice\cryingschool-audioVisual-library"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Usage

### Adding Audio Lectures

Edit `src/data/libraryData.js` and add new entries to the `audioData` array:

```javascript
{
  id: 6,
  title: "Your Lecture Title",
  category: "Category Name",
  date: "2024-01-01",
  duration: "45:30",
  audioUrl: "/audio/your-audio-file.mp3",
  hasTranscription: true,
  transcription: "Your transcription text here..."
}
```

### Adding Video Playlists

Edit `src/data/libraryData.js` and add new playlists to the `videoData` array:

```javascript
{
  id: 4,
  playlistName: "Your Playlist Name",
  description: "Playlist description",
  thumbnail: "thumbnail-url",
  videos: [
    {
      id: 401,
      title: "Video Title",
      youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      duration: "45:30",
      description: "Video description"
    }
  ]
}
```

## Features in Detail

### Audio Section
- **Category Filtering**: Filter lectures by Bhagavad Gita, Srimad Bhagavatam, Morning Walks, etc.
- **Transcription Filter**: Filter to show only lectures with transcriptions
- **Audio Player**: Built-in HTML5 audio player for listening
- **Transcription View**: Full text transcription displayed alongside audio

### Video Section
- **Playlist Organization**: Videos grouped into themed playlists
- **YouTube Integration**: Embedded YouTube player for seamless viewing
- **External Links**: Direct links to watch on YouTube
- **Sequential Viewing**: Videos numbered for easy progression

## Customization

### Changing Colors
Edit the CSS files to change the color scheme. The main gradient colors are:
- Primary: `#667eea`
- Secondary: `#764ba2`

### Adding More Categories
Update the category filters in `AudioLibrary.js` to add more categories. The categories are automatically generated from the data.

### Modifying Layout
Each component has its own CSS file for easy customization of layout and styling.

## Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.20.0** - Client-side routing
- **HTML5 Audio** - Audio playback
- **YouTube Embed API** - Video playback
- **CSS3** - Styling and animations

## Android App (Capacitor)

To package this web app as an Android app (without rewriting it), see [ANDROID_APP_SETUP.md](ANDROID_APP_SETUP.md).

## Future Enhancements

- Search functionality across all content
- User authentication and favorites
- Download transcriptions as PDF
- Audio playback speed control
- Dark mode toggle
- Advanced search with filters
- Comments and discussions
- Bookmarking system

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is created for educational purposes.

## Contact

For questions or suggestions, please open an issue in the repository.

---

**Note**: This is a demo application. Replace the sample audio URLs and YouTube video IDs with actual content for production use.