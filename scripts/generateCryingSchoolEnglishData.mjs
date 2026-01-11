import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const inputPath = path.join(repoRoot, 'resources', 'ssggsenglish.txt');
const outputPath = path.join(repoRoot, 'src', 'data', 'cryingSchoolVideoData.generated.js');

const parseDate = (raw) => {
  const s = String(raw || '').trim();
  // Expected M/D/YYYY or MM/DD/YYYY
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const mm = String(m[1]).padStart(2, '0');
  const dd = String(m[2]).padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}`;
};

const normalizeTitle = (title) => String(title || '').replace(/\s+/g, ' ').trim();

const getGroup = (title) => {
  const t = normalizeTitle(title).toLowerCase();

  const has = (re) => re.test(t);

  if (has(/50th\s+sannyas\s+anniversary|sannyas\s+anniversary|holy\s+appearance\s+day|tribute\s+to|inauguration|immortal\s+legacy|smriti\s+bhavan|glorification\s+of|anniversary/i)) {
    return {
      key: 'special-events',
      playlistName: 'Special Events & Glorifications',
      categories: ['Festival Lecture'],
    };
  }

  if (has(/\buk\b|1990/)) {
    return {
      key: 'uk-1990',
      playlistName: 'UK Lectures (1990)',
      categories: ['Tattva', 'Other'],
    };
  }

  if (has(/q&a|questions/)) {
    return {
      key: 'qna',
      playlistName: 'Q&A / Questions',
      categories: ['Other'],
    };
  }

  if (has(/bhāgavatam|bhagavatam|śrīmad\s+bhāgavatam|srimad\s+bhagavatam/)) {
    return {
      key: 'bhagavatam',
      playlistName: 'Śrīmad Bhāgavatam (English)',
      categories: ['Srimad Bhagavatam'],
    };
  }

  if (has(/\bgita\b|bhagavad\s+gita|bhagvad\s+gita/)) {
    return {
      key: 'gita',
      playlistName: 'Bhagavad-gītā (English)',
      categories: ['Bhagvad Gita'],
    };
  }

  if (has(/initiation/)) {
    return {
      key: 'initiation',
      playlistName: 'Initiation & Commitments',
      categories: ['Initiation', 'Initiation Ceremony'],
    };
  }

  if (has(/jagannath|snana\s+yatra|ratha\s+yatra|rama\b|siva\b|navadvipa|nimai|lila|pastime|vraja\b|vrindavan/)) {
    return {
      key: 'pastimes-festivals',
      playlistName: 'Festivals & Pastimes',
      categories: ['Festival Lecture'],
    };
  }

  if (has(/guru|gurudev|disciple|sannyas|prabhupada/)) {
    return {
      key: 'guru',
      playlistName: 'Guru-tattva & Guru-sevā',
      categories: ['Guru Seva', 'Tattva'],
    };
  }

  if (has(/holy\s*name|chant|nāma|nama|kirtan|japa/)) {
    return {
      key: 'holy-name',
      playlistName: 'Holy Name & Chanting',
      categories: ['Krishna Conciousness'],
    };
  }

  if (has(/sadhu|sanga|vaisnava|vaishnava|aparadh|apradha|offender|offense/)) {
    return {
      key: 'vaisnava-sanga',
      playlistName: 'Sādhu-saṅga & Vaiṣṇava Conduct',
      categories: ['Vaisnava Seva'],
    };
  }

  if (has(/lust|women|wife|grihastha|sex/)) {
    return {
      key: 'sense-control',
      playlistName: 'Sense Control & Gṛhastha Life',
      categories: ['Tattva', 'Other'],
    };
  }

  if (has(/maya|material|miseries|suffering|anxiety|bondage|demoniac|hell|enjoyment|reflect(ion)?|destiny/)) {
    return {
      key: 'maya',
      playlistName: 'Māyā & Material Existence',
      categories: ['Tattva'],
    };
  }

  if (has(/radharani|balaram|krishna|gauranga|prema|bhakti|vaikuntha|mercy|surrender/)) {
    return {
      key: 'krishna-bhakti',
      playlistName: 'Kṛṣṇa-tattva & Bhakti',
      categories: ['Krishna Conciousness', 'Tattva'],
    };
  }

  return {
    key: 'other',
    playlistName: 'Other Teachings (English)',
    categories: ['Other'],
  };
};

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

const parseLine = (line) => {
  const cols = line.split('\t');
  if (cols.length < 4) return null;

  const dateRaw = cols[0]?.trim();
  const title = normalizeTitle(cols[1]);
  const language = (cols[2] || '').trim();

  // URL is last column, duration is second last.
  const youtubeUrl = (cols.at(-1) || '').trim();
  const duration = (cols.at(-2) || '').trim();

  // Location can be anywhere between col4 and duration
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

const buildPlaylists = (entries) => {
  const grouped = new Map();

  for (const entry of entries) {
    const group = getGroup(entry.title);
    if (!grouped.has(group.key)) {
      grouped.set(group.key, {
        key: group.key,
        playlistName: group.playlistName,
        category: group.categories,
        language: 'English',
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

  // Finalize IDs and transform videos.
  let playlistId = 1;
  for (const p of playlists) {
    const dates = p.videos.map((v) => v.date).filter(Boolean).sort();
    const start = dates[0]?.slice(0, 4);
    const end = dates.at(-1)?.slice(0, 4);

    p.id = playlistId++;
    p.description = `English • ${p.videos.length} lectures${start && end ? ` • ${start}–${end}` : ''}`;

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
  const header = `// AUTO-GENERATED FILE\n// Generated by scripts/generateCryingSchoolEnglishData.mjs\n// Source: resources/ssggsenglish.txt\n\n`;
  const body = `export const cryingSchoolVideoData = ${JSON.stringify(playlists, null, 2)};\n`;
  fs.writeFileSync(outputPath, header + body, 'utf8');
};

const main = () => {
  const lines = readLines();
  const parsed = lines
    .map(parseLine)
    .filter(Boolean)
    .filter((r) => String(r.language).toLowerCase() === 'english');

  const playlists = buildPlaylists(parsed);
  writeOutput(playlists);

  // eslint-disable-next-line no-console
  console.log(`Generated ${outputPath}`);
  // eslint-disable-next-line no-console
  console.log(`Playlists: ${playlists.length}, Videos: ${parsed.length}`);
};

main();
