# How to Add a Video Lecture

All video data is stored in `src/data/libraryData.js` inside the `videoData` array.

---

## Step 1 — Find the Right Playlist

Each playlist object looks like this:

```js
{
  id: 1,
  playlistName: "Stages of Bhakti (Shraddha-Prema)",
  category: ["Srimad Bhagavatam"],
  description: "Description of the playlist",
  language: "Hindi",
  location: "ISKCON Dwarka",
  icon: "/icons/my-icon.jpg",
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  videos: [ /* lectures go here */ ]
}
```

Find the playlist that matches the **language** and **category** of your video lecture.

---

## Step 2 — Add the Video Entry

Inside the matching playlist's `videos: []` array, add a new object:

```js
{
  id: 110,                   // unique number within this playlist
  title: "Lecture title here",
  youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  duration: "1:05:30",       // format: h:mm:ss  or  N/A if unknown
  description: "Brief description of the lecture"
},
```

### How to get the YouTube URL

1. Open the YouTube video.
2. Copy the URL from the browser address bar.  
   Example: `https://www.youtube.com/watch?v=xxKdp4pcS94`
3. Paste it as the `youtubeUrl` value.

> Supported URL formats:
> - `https://www.youtube.com/watch?v=VIDEO_ID`
> - `https://youtu.be/VIDEO_ID`
> - `https://www.youtube.com/embed/VIDEO_ID`

---

## Step 3 — (Optional) Create a New Playlist

If the video belongs to a **new series or language**, add a new playlist object to the `videoData` array in `libraryData.js`:

```js
{
  id: 20,                            // unique playlist id — check existing IDs
  playlistName: "New Series Name",
  category: ["Bhagvad Gita"],        // must match one of the valid category values below
  description: "Description here",
  language: "Odia",
  location: "ISKCON Bhubaneswar",
  icon: "",                          // optional: path to icon image or emoji
  thumbnail: "https://img.youtube.com/vi/FIRST_VIDEO_ID/maxresdefault.jpg",
  videos: [
    // add your video objects here
  ]
}
```

> **Thumbnail tip:** Use the first video's ID in the YouTube thumbnail URL:  
> `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`

---

## Valid Category Values

These are the categories used for filtering in the Video Library:

| Category |
|---|
| `Bhagvad Gita` |
| `Srimad Bhagavatam` |
| `Chaitanya-Charitamrita` |
| `Chaitanya Bhagavat` |
| `Vaisnava Songs` |
| `Festival Lecture` |
| `Initiation Ceremony` |
| `Seminar` |

---

## Full Example — Adding a New Playlist with Videos

```js
{
  id: 20,
  playlistName: "Bhagavad Gita — Chapter 2",
  category: ["Bhagvad Gita"],
  description: "In-depth lectures on Bhagavad Gita Chapter 2",
  language: "Hindi",
  location: "ISKCON Vrindavan",
  icon: "",
  thumbnail: "https://img.youtube.com/vi/ABC123XYZ/maxresdefault.jpg",
  videos: [
    {
      id: 101,
      title: "BG 2.01 — Arjuna's Distress",
      youtubeUrl: "https://www.youtube.com/watch?v=ABC123XYZ",
      duration: "1:10:00",
      description: "Lecture on verse 2.01"
    },
    {
      id: 102,
      title: "BG 2.02 — Krishna's Response",
      youtubeUrl: "https://www.youtube.com/watch?v=DEF456UVW",
      duration: "1:05:20",
      description: "Lecture on verse 2.02"
    }
  ]
}
```

Save the file — the playlist and videos will appear in the Video Library automatically.
