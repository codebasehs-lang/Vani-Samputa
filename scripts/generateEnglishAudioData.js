// Usage: node scripts/generateEnglishAudioData.js english_lectures.csv
// Output: englishAudioData.generated.json

const fs = require('fs');
const path = require('path');


function normalize(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function detectSeries(titles) {
  // Find common prefixes of at least 2 lectures
  const prefixMap = {};
  titles.forEach(title => {
    const words = title.split(/[-–:]/)[0].trim();
    if (!prefixMap[words]) prefixMap[words] = 0;
    prefixMap[words]++;
  });
  // Only keep prefixes that occur more than once
  return Object.fromEntries(Object.entries(prefixMap).filter(([k, v]) => v > 1));
}

function groupLectures(records) {
  // Group by Playlist Category
  const playlists = {};
  records.forEach(rec => {
    const playlist = rec['Playlist Category'] || 'Others';
    if (!playlists[playlist]) playlists[playlist] = [];
    playlists[playlist].push(rec);
  });

  // For each playlist, group by detected sub-playlist (series by title prefix)
  const result = [];
  for (const [playlist, lectures] of Object.entries(playlists)) {
    const titles = lectures.map(l => l.Title);
    const seriesPrefixes = detectSeries(titles);
    const subPlaylists = {};
    lectures.forEach(l => {
      let found = false;
      for (const prefix of Object.keys(seriesPrefixes)) {
        if (l.Title.startsWith(prefix)) {
          if (!subPlaylists[prefix]) subPlaylists[prefix] = [];
          subPlaylists[prefix].push(l);
          found = true;
          break;
        }
      }
      if (!found) {
        if (!subPlaylists['Others']) subPlaylists['Others'] = [];
        subPlaylists['Others'].push(l);
      }
    });
    result.push({
      playlistName: playlist,
      subPlaylists: Object.entries(subPlaylists).map(([subPlaylistName, audios]) => ({
        subPlaylistName,
        audios
      }))
    });
  }
  return result;
}

function main() {
  const xlsxFile = process.argv[2];
  if (!xlsxFile) {
    console.error('Usage: node scripts/generateEnglishAudioData.js <xlsxfile>');
    process.exit(1);
  }
  const XLSX = require('xlsx');
  const workbook = XLSX.readFile(xlsxFile);
  const sheetName = workbook.SheetNames[0];
  const records = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
  // console.log('Parsed records:', records);
  const grouped = groupLectures(records);
  const outFile = path.join(path.dirname(xlsxFile), 'englishAudioData.generated.json');
  fs.writeFileSync(outFile, JSON.stringify(grouped, null, 2), 'utf8');
  console.log('Generated:', outFile);
}

main();
