(() => {
  'use strict';
  const KEY = 'tw-the-way-v3-campaign';
  const BACKUP_KEY = `${KEY}.backup`;
  const STATS = ['integrity', 'mara', 'ishan', 'community'];
  const FLAG_KEYS = ['archivePolicy', 'sourcePolicy', 'meetingPriority'];
  const ITEM_IDS = ['lucas', 'publicArchive', 'elenaBox', 'sourceMetadata', 'popularVersion', 'instituteMessage'];
  const STAGE_CHOICES = [['preserve', 'organize'], ['provenance', 'majority'], ['missionQuestion', 'departureWindow']];
  const CHOICE_IDS = new Set(STAGE_CHOICES.flat());
  const STAGE_ITEMS = [
    ['lucas', 'publicArchive', 'elenaBox'],
    ['sourceMetadata', 'popularVersion'],
    ['instituteMessage']
  ];

  function freshState() {
    return {
      schemaVersion: 1,
      gameVersion: '3.0.0',
      phase: 'intro',
      stageIndex: 0,
      player: { x: 230, y: 760, facing: 'up' },
      visited: { 0: [], 1: [], 2: [] },
      decisions: [],
      flags: { archivePolicy: null, sourcePolicy: null, meetingPriority: null },
      stats: { integrity: 0, mara: 0, ishan: 0, community: 0 },
      unlockedCodex: [],
      settings: { sound: false, reduceMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false, highContrast: false },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  function isDate(value) {
    return typeof value === 'string' && !Number.isNaN(Date.parse(value));
  }

  function validateState(s) {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false;
    if (s.schemaVersion !== 1 || s.gameVersion !== '3.0.0') return false;
    if (!['intro', 'explore', 'decision', 'missionComplete'].includes(s.phase)) return false;
    if (!Number.isInteger(s.stageIndex) || s.stageIndex < 0 || s.stageIndex > 3) return false;
    if (s.phase === 'missionComplete' && s.stageIndex !== 3) return false;
    if (s.phase !== 'missionComplete' && s.stageIndex > 2) return false;
    if (!s.player || !Number.isFinite(s.player.x) || !Number.isFinite(s.player.y)) return false;
    if (s.player.x < 80 || s.player.x > 1520 || s.player.y < 100 || s.player.y > 900) return false;
    if (!['up', 'down', 'left', 'right'].includes(s.player.facing)) return false;
    if (!s.visited || typeof s.visited !== 'object') return false;
    for (let i = 0; i < 3; i++) {
      const list = s.visited[i];
      if (!Array.isArray(list) || list.length > STAGE_ITEMS[i].length) return false;
      if (!list.every(id => STAGE_ITEMS[i].includes(id)) || new Set(list).size !== list.length) return false;
    }
    if (!Array.isArray(s.decisions) || s.decisions.length > 3) return false;
    if (!s.decisions.every((d, i) => d && d.stage === i && STAGE_CHOICES[i].includes(d.choiceId) && typeof d.choiceTitle === 'string' && d.choiceTitle.length > 0 && typeof d.result === 'string' && d.result.length > 0)) return false;
    if (s.phase === 'intro' && (s.stageIndex !== 0 || s.decisions.length !== 0)) return false;
    if (s.phase !== 'missionComplete' && s.decisions.length !== s.stageIndex) return false;
    for (let i = 0; i < s.stageIndex; i++) if (s.visited[i].length !== STAGE_ITEMS[i].length) return false;
    for (let i = s.stageIndex + 1; i < 3; i++) if (s.visited[i].length !== 0) return false;
    if (s.stageIndex >= 1 && !['integral', 'organized'].includes(s.flags.archivePolicy)) return false;
    if (s.stageIndex >= 2 && !['provenance', 'majority'].includes(s.flags.sourcePolicy)) return false;
    if (s.phase === 'missionComplete' && !['purpose', 'logistics'].includes(s.flags.meetingPriority)) return false;
    if (s.stageIndex >= 1 && !s.unlockedCodex.includes('gospels')) return false;
    if (s.stageIndex >= 2 && !s.unlockedCodex.includes('archives')) return false;
    if (!s.flags || !FLAG_KEYS.every(k => s.flags[k] === null || typeof s.flags[k] === 'string')) return false;
    if (!['integral', 'organized', null].includes(s.flags.archivePolicy)) return false;
    if (!['provenance', 'majority', null].includes(s.flags.sourcePolicy)) return false;
    if (!['purpose', 'logistics', null].includes(s.flags.meetingPriority)) return false;
    if (!s.stats || !STATS.every(k => Number.isInteger(s.stats[k]) && s.stats[k] >= -30 && s.stats[k] <= 40)) return false;
    if (!Array.isArray(s.unlockedCodex) || s.unlockedCodex.length > 20 || !s.unlockedCodex.every(id => ['gospels', 'archives'].includes(id))) return false;
    if (!s.settings || typeof s.settings.sound !== 'boolean' || typeof s.settings.reduceMotion !== 'boolean' || typeof s.settings.highContrast !== 'boolean') return false;
    if (!isDate(s.createdAt) || !isDate(s.updatedAt)) return false;
    if (s.phase === 'decision' && s.visited[s.stageIndex].length !== STAGE_ITEMS[s.stageIndex].length) return false;
    if (s.phase === 'missionComplete' && s.decisions.length !== 3) return false;
    return true;
  }

  function safeCopy(s) { return JSON.parse(JSON.stringify(s)); }

  function save(state) {
    if (!validateState(state)) throw new Error('O estado atual não passou pela validação. O save não foi gravado.');
    state.updatedAt = new Date().toISOString();
    const raw = JSON.stringify(state);
    try {
      const previous = localStorage.getItem(KEY);
      if (previous) localStorage.setItem(BACKUP_KEY, previous);
      localStorage.setItem(KEY, raw);
      return { ok: true, savedAt: state.updatedAt };
    } catch (error) {
      return { ok: false, error: error?.message || 'Falha de armazenamento local.' };
    }
  }

  function tryParse(raw) {
    if (!raw || raw.length > 250_000) return null;
    try {
      const value = JSON.parse(raw);
      return validateState(value) ? value : null;
    } catch (_) { return null; }
  }

  function load() {
    try {
      const currentRaw = localStorage.getItem(KEY);
      const current = tryParse(currentRaw);
      if (current) return { state: current, recovered: false };
      const backupRaw = localStorage.getItem(BACKUP_KEY);
      const backup = tryParse(backupRaw);
      if (backup) {
        try { localStorage.setItem(KEY, JSON.stringify(backup)); } catch (_) { /* Recovery is still available in memory. */ }
        return { state: backup, recovered: true };
      }
      return { state: null, recovered: false };
    } catch (error) {
      return { state: null, recovered: false, error: error?.message || 'Armazenamento indisponível.' };
    }
  }

  function importText(text) {
    if (typeof text !== 'string' || text.length > 250_000) throw new Error('Arquivo muito grande ou inválido.');
    let parsed;
    try { parsed = JSON.parse(text); } catch (_) { throw new Error('O arquivo não contém JSON válido.'); }
    if (!validateState(parsed)) throw new Error('Estrutura de save incompatível ou corrompida.');
    const result = save(parsed);
    if (!result.ok) throw new Error(result.error);
    return safeCopy(parsed);
  }

  function exportText(state) {
    if (!validateState(state)) throw new Error('Não há um estado válido para exportar.');
    return JSON.stringify(state, null, 2);
  }

  window.TW_STATE = { freshState, validateState, save, load, importText, exportText, safeCopy, KEY };
})();
