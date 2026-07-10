# How to Add an Audio Lecture

All audio data is stored in `src/data/libraryData.js` inside the `audioData` array.

---

## Step 1 — Find the Right Playlist

Each playlist object looks like this:

```js
{
  id: 3,
  playlistName: "Srimad Bhagavatam Hindi Lectures",
  category: ["Srimad Bhagavatam"],
  language: "Hindi",
  location: "Multiple locations",
  icon: "",
  audios: [ /* lectures go here */ ]
}
```

Find the playlist that matches the **language** and **category** of your lecture.

---

## Step 2 — Add the Audio Entry

Inside the matching playlist's `audios: []` array, add a new object:

```js
{
  id: 500,               // unique number — check existing IDs and use the next available one
  title: "Lecture title here",
  audioUrl: "https://direct-link-to-audio.mp3",
  duration: "1:05:30",   // format: h:mm:ss  or  m:ss
  date: "2025-01-15",    // format: YYYY-MM-DD
  location: "ISKCON Mayapur",
  language: "Hindi",
  hasTranscription: false,
  transcription: ""
},
```

> **Note:** If the audio URL is not available yet, leave `audioUrl` as `""`.  
> The lecture will still appear in the list but cannot be played until the URL is added.

---

## Step 3 — (Optional) Create a New Playlist

If the lecture belongs to a **new category or language**, add a new playlist object to the `audioData` array in `libraryData.js`:

```js
{
  id: 10,                         // unique playlist id
  playlistName: "New Playlist Name",
  category: ["Bhagvad Gita"],     // must match one of the valid category values below
  description: "Description here",
  language: "Odia",
  location: "Multiple locations",
  icon: "",
  audios: [
    // add your lecture objects here
  ]
}
```

---

## Valid Category Values

These are the categories used for filtering in the Audio Library:

| Category |
|---|
| `Bhagvad Gita` |
| `Srimad Bhagavatam` |
| `Chaitanya-Charitamrita` |
| `Chaitanya Bhagavat` |
| `Vaisnava Songs` |
| `Festival Lecture` |
| `Initiation Ceremony` |

---

## Example — Adding a Single Lecture

Open `src/data/libraryData.js`, find the playlist (e.g., `"Srimad Bhagavatam Hindi Lectures"`), and add inside its `audios` array:

```js
{
  id: 501,
  title: "श्री.भा. 01.02.06 – भक्ति का सर्वोच्च लक्ष्य",
  audioUrl: "https://audio.iskcondesiretree.com/path/to/lecture.mp3",
  duration: "0:55:10",
  date: "2025-06-01",
  location: "ISKCON Vrindavan",
  language: "Hindi",
  hasTranscription: false,
  transcription: ""
},
```

Save the file — the lecture will appear in the Audio Library automatically.
