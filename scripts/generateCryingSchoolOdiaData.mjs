import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const inputPath = path.join(repoRoot, 'resources', 'ssggsodia.txt');
const outputPath = path.join(repoRoot, 'src', 'data', 'cryingSchoolVideoData.odia.generated.js');

const readLines = () => {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }
  const raw = fs.readFileSync(inputPath, 'utf8');
  return raw
    .split(/\r\n|\n|\r/)
    .map((l) => l.trim())
    .filter(Boolean);
};

const normalizeTitle = (title) => String(title || '').replace(/\s+/g, ' ').trim();

const parseDate = (raw) => {
  const s = String(raw || '').trim();

  // Supports M/D/YYYY and M-D-YYYY (also with zero padding)
  const m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (!m) return null;

  const mm = String(m[1]).padStart(2, '0');
  const dd = String(m[2]).padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}`;
};

const parseLine = (line) => {
  const cols = line.split('\t').map((c) => c.trim());
  if (cols.length < 4) return null;

  const dateRaw = cols[0] || '';
  const title = normalizeTitle(cols[1] || '');
  const language = (cols[2] || '').trim();

  const youtubeUrl = (cols.at(-1) || '').trim();
  const duration = (cols.at(-2) || '').trim();
  const location = cols.slice(4, -2).join(' ').replace(/\s+/g, ' ').trim();

  if (!title || !youtubeUrl) return null;

  return {
    dateRaw,
    date: parseDate(dateRaw),
    title,
    language,
    location,
    duration: duration || 'N/A',
    youtubeUrl,
  };
};

const getGroup = (title) => {
  const t = normalizeTitle(title).toLowerCase();

  const has = (re) => re.test(t);

  // Brahmachari-specific grouping (Odia + English spellings)
  if (has(/ବ୍ରହ୍ମଚାର|brahmachar/)) {
    return {
      key: 'brahmacharis-life-odia',
      playlistName: 'BRAHMACHARIS LIFE (Odia)',
      categories: ['Other'],
    };
  }

  // Bhagavad-gita
  if (has(/ଭଗବଦ\s*ଗୀତା|bhagavad\s*gita|\bgita\b/)) {
    return {
      key: 'gita-odia',
      playlistName: 'Bhagavad-gītā (Odia)',
      categories: ['Bhagvad Gita'],
    };
  }

  // Srimad Bhagavatam
  if (has(/ଶ୍ରୀମଦ\s*ଭାଗବତ|ଭାଗବତମ|bhagavatam|bhāgavatam/)) {
    return {
      key: 'bhagavatam-odia',
      playlistName: 'Śrīmad Bhāgavatam (Odia)',
      categories: ['Srimad Bhagavatam'],
    };
  }

  // Holy Name & chanting
  if (has(/ହରେ\s*କୃଷ୍ଣ|ହରି\s*ନାମ|ହରିନାମ|ନାମ\s*ଜପ|\bchant\b|ଜପ|କୀର୍ତ୍ତନ|ସଙ୍କୀର୍ତ୍ତନ|ମହାମନ୍ତ୍ର|ମନ୍ତ୍ର/)) {
    return {
      key: 'holy-name-odia',
      playlistName: 'Holy Name & Chanting (Odia)',
      categories: ['Krishna Conciousness'],
    };
  }

  // Guru-tattva
  if (has(/ଗୁରୁ|ଗୁରୁଦେବ|ଶିଷ୍ୟ|ଦୀକ୍ଷା|ସନ୍ନ୍ୟାସ|ପ୍ରଭୁପାଦ|ଆଚାର୍ଯ୍ୟ|\bguru\b|prabhupad/)) {
    return {
      key: 'guru-odia',
      playlistName: 'Guru-tattva & Guru-sevā (Odia)',
      categories: ['Guru Seva', 'Tattva'],
    };
  }

  // Vaisnava conduct
  if (has(/ବୈଷ୍ଣବ|ସାଧୁ|ସଙ୍ଗ|ସଂଗ|ଅପରାଧ|aparadh|aparādha|vaishnava|vaisnava/)) {
    return {
      key: 'vaisnava-sanga-odia',
      playlistName: 'Sādhu-saṅga & Vaiṣṇava Conduct (Odia)',
      categories: ['Vaisnava Seva'],
    };
  }

  // Grihastha / sense control / relationships
  if (has(/ଗୃହସ୍ଥ|ସ୍ତ୍ରୀ|ନାରୀ|ପୁରୁଷ|କାମ|ମୈଥୁନ|ବିବାହ|lust|sex/)) {
    return {
      key: 'sense-control-odia',
      playlistName: 'Sense Control & Gṛhastha Life (Odia)',
      categories: ['Tattva', 'Other'],
    };
  }

  // Festivals / pastimes / appearances
  if (has(/ଜଗନ୍ନାଥ|ପୁରୀ|ରଥ|ସ୍ନାନ|ଜନ୍ମାଷ୍ଟମୀ|ଗୌର|ମହାପ୍ରଭୁ|ନିତ୍ୟାନନ୍ଦ|ଲୀଳା|ଆବିର୍ଭାବ|festival|pastime|ratha\s*yatra|snana\s*yatra/)) {
    return {
      key: 'pastimes-festivals-odia',
      playlistName: 'Festivals & Pastimes (Odia)',
      categories: ['Festival Lecture'],
    };
  }

  // Special events (anniversaries / ceremonies / programs)
  if (has(/anniversary|inauguration|smriti|bhavan|jantaribol|ନାଟକ|ବାର୍ଷିକ|ଅନୁଷ୍ଠାନ|ସନ୍ନ୍ୟାସ\s*anniversary/)) {
    return {
      key: 'special-events-odia',
      playlistName: 'Special Events & Glorifications (Odia)',
      categories: ['Festival Lecture'],
    };
  }

  // Maya / material existence
  if (has(/ମାୟା|ସଂସାର|ଭୋଗ|ଦୁଃଖ|ଭୟ|ଶୋକ|ମୋହ|ବଦ୍ଧ|ମୁକ୍ତ|ବନ୍ଧନ|ନରକ|material|suffering/)) {
    return {
      key: 'maya-odia',
      playlistName: 'Māyā & Material Existence (Odia)',
      categories: ['Tattva'],
    };
  }

  return {
    key: 'other-odia',
    playlistName: 'Other Teachings (Odia)',
    categories: ['Other'],
  };
};

const getMaxEnglishPlaylistId = () => {
  const englishPath = path.join(repoRoot, 'src', 'data', 'cryingSchoolVideoData.generated.js');
  if (!fs.existsSync(englishPath)) return 0;

  const raw = fs.readFileSync(englishPath, 'utf8');
  const marker = 'export const cryingSchoolVideoData';
  const markerIndex = raw.indexOf(marker);
  if (markerIndex === -1) return 0;

  const start = raw.indexOf('[', markerIndex);
  const end = raw.lastIndexOf('];');
  if (start === -1 || end === -1 || end <= start) return 0;

  const jsonText = raw.slice(start, end + 1);

  try {
    const data = JSON.parse(jsonText);
    const ids = data.map((p) => Number(p?.id)).filter((n) => Number.isFinite(n));
    return ids.length ? Math.max(...ids) : 0;
  } catch {
    return 0;
  }
};

const buildPlaylists = (entries) => {
  const grouped = new Map();

  for (const entry of entries) {
    const group = getGroup(entry.title);
    if (!grouped.has(group.key)) {
      grouped.set(group.key, {
        key: group.key,
        playlistName: group.playlistName,
        category: group.categories,
        language: 'Odia',
        location: 'YouTube',
        icon: '▶️',
        videos: [],
      });
    }
    grouped.get(group.key).videos.push(entry);
  }

  const playlists = Array.from(grouped.values());

  // Stable ordering: bigger playlists first, then name.
  playlists.sort((a, b) => {
    const d = b.videos.length - a.videos.length;
    if (d !== 0) return d;
    return a.playlistName.localeCompare(b.playlistName);
  });

  const basePlaylistId = getMaxEnglishPlaylistId() + 1;
  let playlistId = basePlaylistId;

  for (const p of playlists) {
    const dates = p.videos.map((v) => v.date).filter(Boolean).sort();
    const start = dates[0]?.slice(0, 4);
    const end = dates.at(-1)?.slice(0, 4);

    p.id = playlistId++;
    p.description = `Odia • ${p.videos.length} lectures${start && end ? ` • ${start}–${end}` : ''}`;

    p.videos = p.videos.map((v, idx) => {
      const parts = [];
      if (v.dateRaw) parts.push(v.dateRaw);
      if (v.location) parts.push(v.location);
      return {
        id: 100 + idx + 1,
        title: v.title,
        youtubeUrl: v.youtubeUrl,
        duration: v.duration,
        description: parts.join(' • '),
      };
    });
  }

  return playlists;
};

const writeOutput = (playlists) => {
  const header = `// AUTO-GENERATED FILE\n// Generated by scripts/generateCryingSchoolOdiaData.mjs\n// Source: resources/ssggsodia.txt\n\n`;
  const body = `export const cryingSchoolVideoDataOdia = ${JSON.stringify(playlists, null, 2)};\n`;
  fs.writeFileSync(outputPath, header + body, 'utf8');
};

const main = () => {
  const lines = readLines();
  const parsed = lines
    .map(parseLine)
    .filter(Boolean)
    .filter((r) => String(r.language).toLowerCase() === 'odia');

  const playlists = buildPlaylists(parsed);
  writeOutput(playlists);

  // eslint-disable-next-line no-console
  console.log(`Generated ${outputPath}`);
  // eslint-disable-next-line no-console
  console.log(`Playlists: ${playlists.length}, Videos: ${parsed.length}`);
};

main();
