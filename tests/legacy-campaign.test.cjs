const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const window = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'legacy/campaign-data.js'), 'utf8'), { window });
const data = window.GAME_DATA;

test('campanha preservada contém 25 missões, cinco atos e 75 etapas', () => {
  assert.equal(data.missions.length, 25);
  assert.equal(new Set(data.missions.map(m => m.act)).size, 5);
  assert.equal(data.missions.reduce((n, m) => n + m.stages.length, 0), 75);
});

test('cada missão tem três etapas com pelo menos duas escolhas completas', () => {
  for (const mission of data.missions) {
    assert.equal(mission.stages.length, 3, `Missão ${mission.n}: etapas`);
    for (const stage of mission.stages) {
      assert.ok(stage.title && stage.narrative && stage.prompt);
      assert.ok(stage.choices.length >= 2);
      for (const choice of stage.choices) {
        assert.ok(choice.text && choice.desc && choice.result);
        assert.ok(choice.effects && typeof choice.effects === 'object');
      }
    }
  }
});

test('identificadores das missões são únicos e sequenciais', () => {
  assert.deepEqual(Array.from(data.missions, m => m.n), Array.from({ length: 25 }, (_, i) => i + 1));
});
