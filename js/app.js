(() => {
  'use strict';
  const DATA = window.TW_DATA;
  const $ = id => document.getElementById(id);
  const canvas = $('gameCanvas');
  const modalHost = $('modalHost');
  const pressed = new Set();
  let state = null;
  let raf = 0;
  let lastFrame = 0;
  let saveClock = 0;
  let moving = false;
  let nearest = null;
  let modalOpen = false;
  let modalClosable = true;
  let modalCallback = null;
  let codexTab = 'text';
  let codexId = 'gospels';
  let audioContext = null;
  let lastPrompt = '';
  let toastTimer = 0;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const stage = () => DATA.mission.stages[state.stageIndex];
  const visitedCount = () => state?.visited?.[state?.stageIndex]?.length || 0;
  const readyForChoice = () => state && state.stageIndex < 3 && visitedCount() === stage().itemIds.length;

  function toast(message) {
    let el = document.querySelector('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
    $('liveRegion').textContent = message;
  }

  function applySettings() {
    document.body.classList.toggle('reduce-motion', !!state?.settings?.reduceMotion);
    document.body.classList.toggle('high-contrast', !!state?.settings?.highContrast);
  }

  function setHome() {
    $('homeScreen').hidden = false;
    $('gameScreen').hidden = true;
    $('topCodex').disabled = true;
    $('topSave').disabled = true;
    modalHost.hidden = true;
    modalOpen = false;
    cancelAnimationFrame(raf);
    raf = 0;
    state = state || null;
    const loaded = TW_STATE.load();
    $('continueGame').hidden = !loaded.state;
    if (loaded.recovered) toast('Um backup anterior foi restaurado para continuar sua campanha.');
  }

  function newCampaign() {
    const old = TW_STATE.load().state;
    if (old && !window.confirm('Iniciar uma nova campanha? O save atual será mantido como backup automático.')) return;
    state = TW_STATE.freshState();
    applySettings();
    const saved = TW_STATE.save(state);
    if (!saved.ok) toast(`Aviso: ${saved.error}`);
    enterGame();
    showDialog('O ARQUIVO QUE SOBROU', DATA.mission.opening + '\n\nControles: use WASD ou as setas para caminhar. Aproxime-se dos pontos dourados e pressione E para examinar. No celular, use o direcional na tela.', 'ENTRAR NO ARQUIVO', () => {
      state.phase = 'explore'; saveState(); updateHUD(); canvas.focus();
    }, false);
  }

  function continueCampaign() {
    const loaded = TW_STATE.load();
    if (!loaded.state) { toast('Nenhuma campanha válida foi encontrada.'); return; }
    state = loaded.state;
    applySettings();
    enterGame();
    if (loaded.recovered) toast('Save principal inválido: backup recuperado.');
    if (state.phase === 'intro') {
      showDialog('O ARQUIVO QUE SOBROU', DATA.mission.opening + '\n\nUse WASD ou as setas para caminhar. Aproxime-se dos pontos dourados e pressione E para examinar.', 'ENTRAR NO ARQUIVO', () => { state.phase = 'explore'; saveState(); updateHUD(); }, false);
    } else if (state.phase === 'decision') showChoice();
    else if (state.phase === 'missionComplete') showComplete();
    else if (readyForChoice()) { state.phase = 'decision'; saveState(); showChoice(); }
    updateHUD();
  }

  function enterGame() {
    $('homeScreen').hidden = true;
    $('gameScreen').hidden = false;
    $('topCodex').disabled = false;
    $('topSave').disabled = false;
    $('missionAct').textContent = DATA.mission.act.toUpperCase();
    $('missionTitle').textContent = DATA.mission.title;
    $('missionLocation').textContent = DATA.mission.location.toUpperCase();
    applySettings();
    updateHUD();
    canvas.focus();
    if (!raf) { lastFrame = performance.now(); raf = requestAnimationFrame(frame); }
  }

  function saveState(showToast = false) {
    if (!state) return;
    const result = TW_STATE.save(state);
    $('saveIndicator').textContent = result.ok ? '● AUTOSAVE ATIVO' : '● SAVE INDISPONÍVEL';
    $('saveIndicator').style.color = result.ok ? '#8eaa9e' : '#d39a87';
    if (showToast) toast(result.ok ? 'Progresso salvo neste navegador.' : result.error);
  }

  function openModal(html, onClose = null, closable = true) {
    modalOpen = true;
    modalClosable = closable;
    modalCallback = onClose;
    modalHost.innerHTML = `<section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">${html}</section>`;
    modalHost.hidden = false;
    modalHost.querySelector('button:not([disabled])')?.focus();
  }

  function closeModal(force = false) {
    if (!modalOpen || (!modalClosable && !force)) return;
    modalHost.hidden = true;
    modalHost.innerHTML = '';
    modalOpen = false;
    modalClosable = true;
    const callback = modalCallback;
    modalCallback = null;
    if (callback) callback();
    if (state) canvas.focus();
  }

  function showDialog(title, body, buttonText = 'CONTINUAR', callback = null, closable = true) {
    const html = `<div class="modal-top"><span class="modal-kicker">REGISTRO DE CAMPO · MERIDIAN 2099</span>${closable ? '<button class="modal-close" data-modal-close aria-label="Fechar">×</button>' : ''}</div><h3 id="modalTitle">${esc(title)}</h3><p>${esc(body)}</p><div class="modal-actions"><button class="btn primary" id="dialogContinue">${esc(buttonText)} →</button></div>`;
    openModal(html, callback, closable);
    $('dialogContinue').addEventListener('click', () => closeModal(true));
  }

  function showChoice() {
    if (!state || state.stageIndex > 2) return;
    state.phase = 'decision';
    saveState();
    const current = stage();
    const options = current.choices.map((c, index) => `<button class="choice-option" data-choice="${index}"><strong>${esc(c.title)}</strong><span>${esc(c.description)}</span><i>${esc(c.result)}</i></button>`).join('');
    openModal(`<div class="modal-top"><span class="modal-kicker">DECISÃO ${state.stageIndex + 1} / 3 · ${esc(current.title.toUpperCase())}</span></div><h3 id="modalTitle">${esc(current.choicePrompt)}</h3><p>As evidências desta etapa foram examinadas. Escolha o procedimento de Aren. A decisão será registrada no diário e poderá influenciar informações posteriores.</p><div class="choice-grid">${options}</div>`, null, false);
    modalHost.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => choose(Number(button.dataset.choice))));
  }

  function choose(index) {
    if (!state || state.phase !== 'decision') return;
    const current = stage();
    const choice = current.choices[index];
    if (!choice) return;
    for (const [key, value] of Object.entries(choice.effects || {})) {
      if (!(key in state.stats) || !Number.isFinite(value)) continue;
      state.stats[key] = clamp(state.stats[key] + value, -30, 40);
    }
    Object.assign(state.flags, choice.flags || {});
    const decision = { stage: state.stageIndex, choiceId: choice.id, choiceTitle: choice.title, result: choice.result };
    state.decisions.push(decision);
    if (state.stageIndex === 0 && !state.unlockedCodex.includes('gospels')) state.unlockedCodex.push('gospels');
    if (state.stageIndex === 1 && !state.unlockedCodex.includes('archives')) state.unlockedCodex.push('archives');
    const finishedStage = state.stageIndex;
    modalHost.hidden = true; modalHost.innerHTML = ''; modalOpen = false; modalCallback = null;
    playTone('decision');
    if (finishedStage < 2) {
      state.stageIndex += 1;
      state.phase = 'explore';
      saveState(); updateHUD(); updateFeed(choice.result);
      const next = stage();
      showDialog(next.title.toUpperCase(), `${choice.result}\n\n${next.objective}`, 'CONTINUAR', () => { state.phase = 'explore'; saveState(); canvas.focus(); }, false);
    } else {
      state.stageIndex = 3;
      state.phase = 'missionComplete';
      saveState(); updateHUD(); updateFeed(choice.result);
      showComplete();
    }
  }

  function showComplete() {
    if (!state || state.phase !== 'missionComplete') return;
    const archive = state.flags.archivePolicy === 'integral' ? 'O original e as notas permanecem juntos.' : 'A edição de leitura foi organizada, com o caminho de volta às notas preservado.';
    const source = state.flags.sourcePolicy === 'provenance' ? 'Aren registrou autoria, data e cadeia de preservação antes de concluir.' : 'Aren ganhou velocidade de consulta, mas deixou a popularidade influenciar o peso de uma versão.';
    const purpose = state.flags.meetingPriority === 'purpose' ? 'Ele pediu que a pergunta, os limites e os critérios da missão fossem registrados.' : 'Ele confirmou a janela de partida e deixou a finalidade para a reunião.';
    openModal(`<div class="modal-top"><span class="modal-kicker">MISSÃO 01 · CONCLUÍDA</span><span class="modal-kicker">ATO I</span></div><div class="completion-mark">✧</div><h3 id="modalTitle">O arquivo não entregou uma resposta pronta.</h3><p>Aren encontrou algo mais importante para a próxima etapa: um método que não apaga as dúvidas para produzir uma certeza artificial.</p><div class="completion-summary"><b>CONSEQUÊNCIAS REGISTRADAS</b><p>${esc(archive)}<br><br>${esc(source)}<br><br>${esc(purpose)}</p></div><p>Uma mensagem do Instituto de Continuidade aguarda confirmação. O Projeto Cavalo de Troia será apresentado na missão seguinte.</p><div class="modal-actions"><button class="btn" id="completeJournal">VER DIÁRIO</button><button class="btn primary" id="completeHome">VOLTAR AO MENU</button><a class="btn ghost" href="legacy/index.html">ABRIR CAMPANHA DE 25 MISSÕES</a></div>`, null, false);
    $('completeJournal').addEventListener('click', () => showJournal(true));
    $('completeHome').addEventListener('click', () => { saveState(); setHome(); });
  }

  function updateHUD() {
    if (!state) return;
    const index = Math.min(state.stageIndex, 2);
    const current = DATA.mission.stages[index];
    $('objectiveText').textContent = state.phase === 'missionComplete' ? 'Missão concluída. Consulte o diário ou continue pela campanha narrativa.' : current.objective;
    $('stageCounter').textContent = state.phase === 'missionComplete' ? 'MISSÃO CONCLUÍDA' : `ETAPA ${index + 1} / 3`;
    const list = current.itemIds;
    const count = state.visited[index].length;
    $('evidenceCount').textContent = `${count} / ${list.length}`;
    $('evidenceList').innerHTML = list.map(id => {
      const item = DATA.mission.interactables[id];
      const done = state.visited[index].includes(id);
      return `<div class="evidence-item ${done ? 'done' : ''}"><span class="evidence-icon">${done ? '✓' : esc(item.icon)}</span><div>${esc(item.name)}<small>${done ? 'REGISTRADO' : 'NÃO EXAMINADO'}</small></div></div>`;
    }).join('');
    const setBar = (barId, valueId, value, offset = 2) => {
      $(barId).style.width = `${clamp((value + offset) / 8 * 100, 4, 100)}%`;
      $(valueId).textContent = value > 0 ? `+${value}` : `${value}`;
    };
    setBar('integrityBar', 'integrityValue', state.stats.integrity);
    setBar('communityBar', 'communityValue', state.stats.community);
    $('topCodex').disabled = false; $('topSave').disabled = false;
  }

  function updateFeed(text) {
    $('storyFeed').innerHTML = `<span class="feed-mark">✦</span><span>${esc(text)}</span>`;
  }

  function inspect(id) {
    if (!state || state.phase !== 'explore' || modalOpen) return;
    const current = stage();
    if (!current.itemIds.includes(id)) return;
    if (state.visited[state.stageIndex].includes(id)) return;
    const item = DATA.mission.interactables[id];
    state.visited[state.stageIndex].push(id);
    saveState(); updateHUD(); playTone('inspect');
    updateFeed(`Registro examinado: ${item.name}.`);
    const all = readyForChoice();
    showDialog(item.kind + ' · ' + item.name.toUpperCase(), item.body, all ? 'REVER AS EVIDÊNCIAS' : 'REGISTRAR E CONTINUAR', () => {
      if (all) { state.phase = 'decision'; saveState(); showChoice(); }
      else { state.phase = 'explore'; saveState(); canvas.focus(); }
    }, false);
  }

  function triggerInteraction() {
    if (!state || state.phase !== 'explore' || modalOpen) return;
    nearest = TW_WORLD.getNearest(state);
    if (!nearest) { toast('Aproxime-se de um ponto dourado para interagir.'); return; }
    inspect(nearest.id);
  }

  function updatePrompt() {
    if (!state || modalOpen || state.phase !== 'explore') {
      $('interactionPrompt').hidden = true; lastPrompt = ''; return;
    }
    nearest = TW_WORLD.getNearest(state);
    const label = nearest ? nearest.item.name : '';
    $('interactionPrompt').hidden = !nearest;
    if (nearest) {
      $('promptText').textContent = `EXAMINAR · ${label.toUpperCase()}`;
      if (lastPrompt !== nearest.id) { $('liveRegion').textContent = `Perto de ${label}. Pressione E para examinar.`; lastPrompt = nearest.id; }
    } else lastPrompt = '';
  }

  function movementInput() {
    let x = 0, y = 0;
    if (pressed.has('ArrowLeft') || pressed.has('a')) x -= 1;
    if (pressed.has('ArrowRight') || pressed.has('d')) x += 1;
    if (pressed.has('ArrowUp') || pressed.has('w')) y -= 1;
    if (pressed.has('ArrowDown') || pressed.has('s')) y += 1;
    return { x, y };
  }

  function movePlayer(dx, dy) {
    if (!state || state.phase !== 'explore' || modalOpen) return;
    if (!dx && !dy) return;
    const length = Math.hypot(dx, dy) || 1;
    dx /= length; dy /= length;
    const speed = 235;
    const nx = state.player.x + dx * speed / 60;
    const ny = state.player.y + dy * speed / 60;
    if (Math.abs(dx) > Math.abs(dy)) state.player.facing = dx < 0 ? 'left' : 'right';
    else state.player.facing = dy < 0 ? 'up' : 'down';
    if (TW_WORLD.canMoveTo(nx, state.player.y)) state.player.x = nx;
    if (TW_WORLD.canMoveTo(state.player.x, ny)) state.player.y = ny;
  }

  function frame(now) {
    if (!$('gameScreen').hidden && state) {
      const dt = Math.min(.04, Math.max(0, (now - lastFrame) / 1000));
      lastFrame = now;
      const input = movementInput();
      moving = !!(input.x || input.y) && state.phase === 'explore' && !modalOpen;
      if (moving) {
        const length = Math.hypot(input.x, input.y) || 1;
        const dx = input.x / length * 235 * dt;
        const dy = input.y / length * 235 * dt;
        if (Math.abs(dx) > Math.abs(dy)) state.player.facing = dx < 0 ? 'left' : 'right';
        else state.player.facing = dy < 0 ? 'up' : 'down';
        if (TW_WORLD.canMoveTo(state.player.x + dx, state.player.y)) state.player.x += dx;
        if (TW_WORLD.canMoveTo(state.player.x, state.player.y + dy)) state.player.y += dy;
        saveClock += dt;
        if (saveClock > 8) { saveState(); saveClock = 0; }
      }
      TW_WORLD.draw(canvas, state, now, TW_WORLD.getNearest(state)?.id || null);
      updatePrompt();
    }
    raf = requestAnimationFrame(frame);
  }

  function playTone(kind) {
    if (!state?.settings?.sound) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = audioContext || new AudioCtx();
      if (audioContext.state === 'suspended') audioContext.resume();
      const frequencies = kind === 'decision' ? [523.25, 659.25] : kind === 'inspect' ? [392, 523.25] : [329.63];
      frequencies.forEach((freq, i) => {
        const osc = audioContext.createOscillator(); const gain = audioContext.createGain();
        osc.type = 'sine'; osc.frequency.value = freq;
        gain.gain.setValueAtTime(.0001, audioContext.currentTime + i * .05);
        gain.gain.exponentialRampToValueAtTime(.035, audioContext.currentTime + i * .05 + .025);
        gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + i * .05 + .34);
        osc.connect(gain); gain.connect(audioContext.destination);
        osc.start(audioContext.currentTime + i * .05); osc.stop(audioContext.currentTime + i * .05 + .36);
      });
    } catch (_) { /* Audio is an optional enhancement. */ }
  }

  function showCodex() {
    const entry = DATA.mission.codex.find(e => e.id === codexId) || DATA.mission.codex[0];
    const tabs = [['text', 'Texto bíblico'], ['context', 'Contexto'], ['interpretation', 'Interpretação'], ['fiction', 'Ficção do jogo']];
    openModal(`<div class="modal-top"><span class="modal-kicker">CÓDICE · QUATRO CAMADAS DE LEITURA</span><button class="modal-close" data-modal-close aria-label="Fechar">×</button></div><h3 id="modalTitle">${esc(entry.title)}</h3><p class="modal-note">Esta entrada é uma ferramenta editorial e de contexto. Não substitui o texto bíblico nem representa consenso entre tradições cristãs.</p><div class="codex-tabs">${tabs.map(([id, label]) => `<button class="codex-tab ${codexTab === id ? 'active' : ''}" data-codex-tab="${id}">${label}</button>`).join('')}</div><div id="codexText" class="codex-copy">${esc(entry[codexTab])}</div><div class="modal-divider"></div><div class="codex-tabs">${DATA.mission.codex.map(e => `<button class="codex-tab ${e.id === codexId ? 'active' : ''}" data-codex-entry="${e.id}">${esc(e.title)}</button>`).join('')}</div><div class="modal-actions"><button class="btn" data-modal-close>FECHAR</button></div>`, null, true);
    modalHost.querySelectorAll('[data-codex-tab]').forEach(b => b.addEventListener('click', () => { codexTab = b.dataset.codexTab; showCodex(); }));
    modalHost.querySelectorAll('[data-codex-entry]').forEach(b => b.addEventListener('click', () => { codexId = b.dataset.codexEntry; codexTab = 'text'; showCodex(); }));
  }

  function showJournal(returnToComplete = false) {
    const rows = state.decisions.length ? state.decisions.map(d => `<div class="journal-row"><b>ETAPA ${d.stage + 1} · ${esc(d.choiceTitle)}</b><span>${esc(d.result)}</span></div>`).join('') : '<p>Nenhuma decisão registrada.</p>';
    openModal(`<div class="modal-top"><span class="modal-kicker">MEMÓRIA DA JORNADA</span><button class="modal-close" data-modal-close aria-label="Fechar">×</button></div><h3 id="modalTitle">Diário de Aren</h3><p>O diário registra escolhas de método e suas consequências narrativas. Ele não atribui mérito espiritual ao jogador.</p><div class="journal-list">${rows}</div><div class="modal-actions"><button class="btn" data-modal-close>FECHAR</button></div>`, () => { if (returnToComplete) showComplete(); }, true);
  }

  function showSettings() {
    openModal(`<div class="modal-top"><span class="modal-kicker">PREFERÊNCIAS DO JOGO</span><button class="modal-close" data-modal-close aria-label="Fechar">×</button></div><h3 id="modalTitle">Opções</h3><label class="field-row">Sons de interface (sintetizados)<input type="checkbox" id="settingSound" ${state.settings.sound ? 'checked' : ''}></label><label class="field-row">Reduzir movimento<input type="checkbox" id="settingMotion" ${state.settings.reduceMotion ? 'checked' : ''}></label><label class="field-row">Contraste reforçado<input type="checkbox" id="settingContrast" ${state.settings.highContrast ? 'checked' : ''}></label><p class="modal-note">O áudio é gerado localmente com Web Audio após sua ativação. Não há arquivos de áudio, conta ou conexão com servidor.</p><div class="modal-actions"><button class="btn" id="exportSave">EXPORTAR SAVE</button><label class="btn ghost" for="importSave">IMPORTAR SAVE<input id="importSave" type="file" accept="application/json,.json" hidden></label><button class="btn primary" data-modal-close>CONCLUIR</button></div>`, null, true);
    $('settingSound').addEventListener('change', e => { state.settings.sound = e.target.checked; saveState(); if (state.settings.sound) playTone('inspect'); });
    $('settingMotion').addEventListener('change', e => { state.settings.reduceMotion = e.target.checked; applySettings(); saveState(); });
    $('settingContrast').addEventListener('change', e => { state.settings.highContrast = e.target.checked; applySettings(); saveState(); });
    $('exportSave').addEventListener('click', exportSave);
    $('importSave').addEventListener('change', e => { if (e.target.files?.[0]) importSave(e.target.files[0]); });
  }

  function exportSave() {
    try {
      const text = TW_STATE.exportText(state);
      const blob = new Blob([text], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = 'the-witness-the-way-save-v3.json'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast('Save exportado em JSON.');
    } catch (error) { toast(error.message); }
  }

  async function importSave(file) {
    if (!file) return;
    try {
      const text = await file.text();
      const imported = TW_STATE.importText(text);
      state = imported; applySettings(); modalHost.hidden = true; modalOpen = false;
      updateHUD(); saveState(); toast('Save importado e validado.');
      if (state.phase === 'missionComplete') showComplete();
      else if (state.phase === 'decision') showChoice();
      else if (state.phase === 'intro') showDialog('O ARQUIVO QUE SOBROU', DATA.mission.opening, 'ENTRAR NO ARQUIVO', () => { state.phase = 'explore'; saveState(); }, false);
      else if (state.phase === 'explore' && readyForChoice()) { state.phase = 'decision'; saveState(); showChoice(); }
    } catch (error) { toast(`Importação recusada: ${error.message}`); }
  }

  function bindEvents() {
    $('newGame').addEventListener('click', newCampaign);
    $('continueGame').addEventListener('click', continueCampaign);
    $('homeCodex').addEventListener('click', () => { codexId = 'gospels'; codexTab = 'text'; showCodex(); });
    $('topCodex').addEventListener('click', showCodex);
    $('codexButton').addEventListener('click', showCodex);
    $('topSave').addEventListener('click', () => saveState(true));
    $('journalButton').addEventListener('click', showJournal);
    $('settingsButton').addEventListener('click', showSettings);
    $('menuButton').addEventListener('click', () => { saveState(); setHome(); });
    $('touchInteract').addEventListener('click', triggerInteraction);
    modalHost.addEventListener('click', e => {
      if (e.target.closest('[data-modal-close]')) { e.preventDefault(); closeModal(true); return; }
      if (e.target === modalHost && modalClosable) closeModal();
    });

    window.addEventListener('keydown', e => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
      if (key === 'Escape' && modalOpen) { if (modalClosable) closeModal(); return; }
      if ((key === 'e' || key === ' ') && !modalOpen) { e.preventDefault(); triggerInteraction(); return; }
      if (['w','a','s','d','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(key)) pressed.add(key);
    });
    window.addEventListener('keyup', e => { const key = e.key.length === 1 ? e.key.toLowerCase() : e.key; pressed.delete(key); });
    window.addEventListener('blur', () => pressed.clear());
    document.querySelectorAll('[data-move]').forEach(button => {
      const keyMap = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' };
      const key = keyMap[button.dataset.move];
      button.addEventListener('pointerdown', e => { e.preventDefault(); pressed.add(key); button.setPointerCapture?.(e.pointerId); });
      const release = e => { e.preventDefault(); pressed.delete(key); };
      button.addEventListener('pointerup', release); button.addEventListener('pointercancel', release); button.addEventListener('lostpointercapture', release);
    });
    window.addEventListener('beforeunload', () => { if (state) saveState(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && state) saveState(); });
  }

  bindEvents();
  const loaded = TW_STATE.load();
  $('continueGame').hidden = !loaded.state;
  if (loaded.error) toast('O armazenamento local não está disponível neste navegador.');
  if (loaded.recovered) toast('Backup de campanha disponível.');
  window.TW_APP = {
    get moving() { return moving; },
    get settings() { return state?.settings || { reduceMotion: false }; },
    get state() { return state ? TW_STATE.safeCopy(state) : null; },
    interact: triggerInteraction,
    start: newCampaign,
    continue: continueCampaign
  };
  window.addEventListener('pagehide', () => { if (state) saveState(); });
})();
