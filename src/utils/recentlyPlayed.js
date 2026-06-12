// Tracks recently played audio/video items in localStorage (no backend needed).

const STORAGE_KEY = 'vani-recently-played';
const MAX_ITEMS = 12;

const readStore = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStore = (items) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage unavailable, ignore
  }
};

/**
 * Record a recently played item.
 * @param {Object} item
 * @param {'audio'|'video'} item.type
 * @param {string|number} item.playlistId
 * @param {string|number} item.itemId
 * @param {string} item.title
 * @param {string} [item.playlistName]
 * @param {string} [item.thumbnail]
 * @param {string} item.to - in-app route to resume playback
 */
export const recordRecentlyPlayed = (item) => {
  if (!item || !item.type || item.itemId == null || !item.to) return;

  const entry = {
    type: item.type,
    playlistId: item.playlistId ?? null,
    itemId: item.itemId,
    title: item.title || '',
    playlistName: item.playlistName || '',
    thumbnail: item.thumbnail || '',
    to: item.to,
    playedAt: Date.now()
  };

  const isSame = (a) =>
    a.type === entry.type &&
    String(a.playlistId) === String(entry.playlistId) &&
    String(a.itemId) === String(entry.itemId);

  const existing = readStore().filter((a) => !isSame(a));
  const next = [entry, ...existing].slice(0, MAX_ITEMS);
  writeStore(next);
};

/**
 * Get recently played items, most recent first.
 * @returns {Array}
 */
export const getRecentlyPlayed = () => readStore();

export const clearRecentlyPlayed = () => writeStore([]);
