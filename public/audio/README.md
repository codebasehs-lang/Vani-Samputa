# Audio Files Directory

Place your audio files (.mp3, .wav, .ogg) in this folder.

## File Naming Convention

Use clear, descriptive names without spaces:
- `bg-chapter-1.mp3` (Bhagavad Gita Chapter 1)
- `sb-canto-1-ch-1.mp3` (Srimad Bhagavatam Canto 1 Chapter 1)
- `morning-walk-2024-01-15.mp3`

## Supported Audio Formats

- MP3 (most compatible)
- WAV (larger file size, better quality)
- OGG (good compression)

## How to Reference

In `src/data/libraryData.js`, use:
```javascript
audioUrl: "/audio/your-file-name.mp3"
```

## Example

If you add a file: `public/audio/bg-chapter-1.mp3`
Reference it as: `audioUrl: "/audio/bg-chapter-1.mp3"`
