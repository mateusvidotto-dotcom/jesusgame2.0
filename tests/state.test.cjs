const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const store = new Map();
const localStorage = {
  getItem: key => store.has(key) ? store.get(key) : null,
  setItem: (key, value) => store.set(key, String(value)),
  removeItem: key => store.delete(key),
  clear: () => store.clear()
};
const window = { matchMedia: () => ({ matches: false }) };
const context = vm.createContext({ window, localStorage, Date, JSON, Math, Number, String, Array, Object, Set, Map });
vm.runInContext(fs.readFileSync(path.join(root, 'data/mission-01.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(root, 'js/state.js'), 'utf8'), context);
const api = window.TW_STATE;
const data = window.TW_DATA;

function completeStage(state, index, choiceId) {
  state.visited[index] = [...data.mission.stages[index].itemIds];
  state.phase = 'decision';
  state.decisions.push({ stage: index, choiceId, choiceTitle: `Escolha ${index + 1}`, result: 'Registro de teste.' });
  if (index === 0) { state.flags.archivePolicy = choiceId === 'preserve' ? 'integral' : 'organized'; state.unlockedCodex.push('gospels'); }
  if (index === 1) { state.flags.sourcePolicy = choiceId === 'provenance' ? 'provenance' : 'majority'; state.unlockedCodex.push('archives'); }
  if (index === 2) state.flags.meetingPriority = choiceId === 'missionQuestion' ? 'purpose' : 'logistics';
  if (index < 2) {
    state.stageIndex = index + 1;
    state.phase = 'explore';
  } else {
    state.stageIndex = 3;
    state.phase = 'missionComplete';
  }
}

test('Missão 01 tem três etapas, seis decisões e referências de interação válidas', () => {
  assert.equal(data.mission.stages.length, 3);
  assert.equal(data.mission.stages.reduce((n, s) => n + s.choices.length, 0), 6);
  for (const s of data.mission.stages) {
    assert.equal(s.choices.length, 2);
    for (const id of s.itemIds) assert.ok(data.mission.interactables[id], `interação ausente: ${id}`);
  }
});

test('estado inicial é válido e valores inválidos são recusados', () => {
  const s = api.freshState();
  assert.equal(api.validateState(s), true);
  const badPhase = structuredClone(s); badPhase.phase = 'cutscene';
  assert.equal(api.validateState(badPhase), false);
  const badPos = structuredClone(s); badPos.player.x = 99999;
  assert.equal(api.validateState(badPos), false);
  const badStats = structuredClone(s); badStats.stats.integrity = 'high';
  assert.equal(api.validateState(badStats), false);
});

test('progressão impede escolha antes de examinar todos os itens', () => {
  const s = api.freshState();
  s.phase = 'decision';
  assert.equal(api.validateState(s), false);
  s.visited[0] = [...data.mission.stages[0].itemIds];
  assert.equal(api.validateState(s), true);
});

test('as três etapas chegam a um estado final válido', () => {
  const s = api.freshState(); s.phase = 'explore';
  completeStage(s, 0, 'preserve');
  assert.equal(api.validateState(s), true);
  completeStage(s, 1, 'provenance');
  assert.equal(api.validateState(s), true);
  completeStage(s, 2, 'missionQuestion');
  assert.equal(api.validateState(s), true);
  assert.equal(s.stageIndex, 3);
  assert.equal(s.phase, 'missionComplete');
});

test('save grava estado válido e recuperação restaura o backup', () => {
  localStorage.clear();
  const first = api.freshState(); first.phase = 'explore';
  assert.equal(api.save(first).ok, true);
  const second = structuredClone(first); second.stats.integrity = 2;
  assert.equal(api.save(second).ok, true);
  localStorage.setItem(api.KEY, '{corrompido');
  const loaded = api.load();
  assert.equal(loaded.recovered, true);
  assert.equal(loaded.state.stats.integrity, 0);
});

test('importação rejeita JSON ou estrutura inválida sem substituir o save', () => {
  localStorage.clear();
  const first = api.freshState();
  api.save(first);
  assert.throws(() => api.importText('{bad json'), /JSON válido/);
  const invalid = structuredClone(first); invalid.stageIndex = 99;
  assert.throws(() => api.importText(JSON.stringify(invalid)), /incompatível/);
  assert.equal(api.load().state.stageIndex, 0);
});
