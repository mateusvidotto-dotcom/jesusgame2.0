(() => {
  'use strict';
  const DATA = window.GAME_DATA;
  const ROOT = document.getElementById('app');
  const SAVE_KEY = 'the-witness-the-way-save-v1';
  const EMPTY_STATS = { integrity: 0, sela: 0, mattan: 0, mara: 0, ishan: 0, community: 0 };
  const STAT_NAMES = { integrity:'Integridade do registro', sela:'Confiança de Sela', mattan:'Confiança de Mattan', mara:'Abertura de Mara', ishan:'Coragem de Ishan', community:'Coesão comunitária' };
  let state = null;
  let currentCodex = 'creation';
  let currentCodexTab = 'text';
  let noticeTimer = null;

  const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clone = obj => JSON.parse(JSON.stringify(obj));
  const clamp = (v,min=-30,max=40) => Math.max(min,Math.min(max,v));
  const statLabel = (key,value) => {
    if (key === 'integrity') return value >= 12 ? 'Bem documentada' : value >= 4 ? 'Em consolidação' : 'Com lacunas';
    if (key === 'community') return value >= 10 ? 'Rede fortalecida' : value >= 4 ? 'Em construção' : 'Frágil';
    return value >= 5 ? 'Confiança construída' : value >= 2 ? 'Aproximação' : value <= -2 ? 'Relação tensa' : 'Em desenvolvimento';
  };
  function freshState(){
    return {
      version:1, phase:'prelude', preludeIndex:0, pageIndex:0, missionIndex:0, stageIndex:0,
      activeTab:'story', pendingChoice:null, stats:clone(EMPTY_STATS), decisions:[], unlocked:['creation','project'],
      completedMissions:[], lastMissionLog:[], endingId:null, reduceMotion:false, highContrast:false,
      createdAt:new Date().toISOString(), updatedAt:new Date().toISOString()
    };
  }
  function saveGame(showNotice=false){
    if(!state) return;
    state.updatedAt = new Date().toISOString();
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
    catch(err){ console.warn('Não foi possível salvar localmente:',err); if(showNotice) showToast('Não foi possível salvar neste navegador.'); return; }
    if(showNotice) showToast('Progresso salvo neste navegador.');
  }
  function validState(parsed){
    if(!parsed || parsed.version!==1) return false;
    if(!['prelude','mission','intermission','ending'].includes(parsed.phase)) return false;
    if(!Number.isInteger(parsed.missionIndex) || parsed.missionIndex<0 || parsed.missionIndex>=DATA.missions.length) return false;
    if(!Number.isInteger(parsed.stageIndex) || parsed.stageIndex<0 || parsed.stageIndex>2) return false;
    if(!Number.isInteger(parsed.preludeIndex) || parsed.preludeIndex<0 || parsed.preludeIndex>=DATA.prelude.length) return false;
    if(!Number.isInteger(parsed.pageIndex) || parsed.pageIndex<0 || parsed.pageIndex>=DATA.prelude[parsed.preludeIndex].pages.length) return false;
    if(!Array.isArray(parsed.decisions) || !Array.isArray(parsed.completedMissions) || !Array.isArray(parsed.unlocked) || !Array.isArray(parsed.lastMissionLog)) return false;
    if(!parsed.stats || !Object.keys(EMPTY_STATS).every(k=>Number.isFinite(parsed.stats[k]))) return false;
    if(!['story','codex','journal','people','map','settings'].includes(parsed.activeTab)) return false;
    return true;
  }
  function loadGame(){
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if(!raw) return null;
      const parsed = JSON.parse(raw);
      return validState(parsed) ? parsed : null;
    } catch(err){ console.warn('Save inválido:',err); return null; }
  }
  function showToast(msg){
    let el=document.getElementById('toast');
    if(!el){ el=document.createElement('div'); el.id='toast'; el.className='toast'; document.body.appendChild(el); }
    el.textContent=msg; el.classList.add('show');
    clearTimeout(noticeTimer); noticeTimer=setTimeout(()=>el.classList.remove('show'),2400);
  }
  function applySettings(){
    document.body.classList.toggle('reduce-motion',!!state?.reduceMotion);
    document.body.classList.toggle('high-contrast',!!state?.highContrast);
  }
  function beginNew(){
    const existing=state || loadGame();
    if(existing && (existing.completedMissions?.length || existing.decisions?.length) && !confirm('Começar uma nova campanha? O progresso atual será substituído neste navegador.')) return;
    state=freshState(); currentCodex='creation'; currentCodexTab='text'; applySettings(); saveGame(); render();
  }
  function resume(){
    const s=loadGame();
    if(!s){ showToast('Nenhum progresso válido foi encontrado.'); return; }
    state=s; applySettings(); render();
  }
  function unlock(ids=[]){
    for(const id of ids){ if(!state.unlocked.includes(id)) state.unlocked.push(id); }
  }
  function addEffects(effects={}){
    for(const [key,value] of Object.entries(effects)) if(key in state.stats) state.stats[key]=clamp(state.stats[key]+Number(value||0));
  }
  function render(){
    if(!state){ renderMenu(); return; }
    applySettings();
    ROOT.innerHTML = `${renderNav()}<div id="pageContent">${renderActiveTab()}</div>`;
  }
  function renderNav(){
    const tabs=[['story','História'],['codex','Códice'],['journal','Diário'],['people','Elenco'],['map','Jornada'],['settings','Opções']];
    const completed=state.completedMissions.length;
    return `<nav class="game-nav" aria-label="Menu do jogo">
      ${tabs.map(([id,label])=>`<button class="nav-tab ${state.activeTab===id?'active':''}" data-action="tab" data-tab="${id}">${label}</button>`).join('')}
      <span style="margin-left:auto;align-self:center;color:#71808e;font-size:9px;letter-spacing:.12em">${completed.toString().padStart(2,'0')} / 25 MISSÕES</span>
    </nav>`;
  }
  function renderActiveTab(){
    switch(state.activeTab){
      case 'codex': return renderCodex();
      case 'journal': return renderJournal();
      case 'people': return renderPeople();
      case 'map': return renderMap();
      case 'settings': return renderSettings();
      default: return renderStory();
    }
  }
  function renderMenu(){
    const save=loadGame();
    ROOT.innerHTML=`<section class="hero">
      <div class="hero-copy">
        <div class="hero-kicker">Uma aventura narrativa · ficção cristã</div>
        <h1 class="hero-title">THE WITNESS<span>THE WAY</span></h1>
        <p class="subtitle">O ÚLTIMO REINO</p>
        <div class="rule"></div>
        <p class="hero-text">A criação. A ruína. O testemunho. A falsa paz. O retorno do Rei.</p>
        <p class="small-copy" style="max-width:610px;margin-top:15px">Em 2099, um historiador retorna de uma viagem ao século I e encontra um mundo que transformou a esperança em instrumento de poder. O que ele testemunhou não pode ser possuído — e o futuro não será salvo por uma máquina.</p>
        <div class="hero-actions">
          <button class="btn primary" data-action="new">${save?'Iniciar nova jornada':'Iniciar jornada'} <span>→</span></button>
          ${save?`<button class="btn" data-action="resume">Continuar campanha</button>`:''}
          <button class="btn ghost" data-action="menu-codex">Conhecer o códice</button>
        </div>
        <p class="disclaimer">Esta é uma adaptação interativa autoral da Bíblia de Desenvolvimento Narrativo V2.0. Não é uma obra oficial de igreja, não apresenta uma interpretação escatológica como consenso e não substitui a leitura dos textos bíblicos.</p>
      </div>
      <div class="hero-art starfield" aria-label="Representação abstrata de um horizonte luminoso">
        <div class="hero-quote">“O princípio não foi encontrado: foi dado.”</div>
        <div class="portal"></div><div class="horizon"></div><div class="hero-ornament">✧</div>
      </div>
    </section>
    <section class="menu-bottom">
      <div class="feature-card"><b>25 MISSÕES · 5 ATOS</b><span>Da origem do Projeto Cavalo de Troia à nova criação, com prólogo e interlúdio em 2075.</span></div>
      <div class="feature-card"><b>ESCOLHAS COM CONSEQUÊNCIAS</b><span>Decisões afetam arquivos, confiança, responsabilidade e coesão comunitária — não os acontecimentos bíblicos centrais.</span></div>
      <div class="feature-card"><b>EXPLORAÇÃO E CÓDICE</b><span>Investigue fontes, contexto, interpretações e elementos ficcionais sem confundi-los.</span></div>
    </section>`;
  }
  function renderPrelude(){
    const scene=DATA.prelude[state.preludeIndex];
    const page=state.pageIndex;
    const last=page===scene.pages.length-1;
    const finalPrelude=state.preludeIndex===DATA.prelude.length-1;
    return `<section class="cinematic starfield">
      <div class="cinema-sigil">✧</div>
      <div class="eyebrow">${esc(scene.subtitle)} · ${String(page+1).padStart(2,'0')} / ${String(scene.pages.length).padStart(2,'0')}</div>
      <h1 class="cinema-title">${esc(scene.title)}</h1>
      <div class="rule" style="width:130px;margin:22px auto"></div>
      <p class="cinema-page">${esc(scene.pages[page])}</p>
      <div class="cinema-footer">
        <span class="cinema-count">${last?(finalPrelude?'INÍCIO DA CAMPANHA':'PRÓXIMA SEQUÊNCIA'):'PROSSIGA PARA A PRÓXIMA PÁGINA'}</span>
        <button class="btn primary" data-action="prelude-next">${last?(finalPrelude?'Entrar em 2099':'Continuar'):'Continuar'} →</button>
      </div>
      <div class="ref-line">${esc(scene.refs)}</div>
    </section>`;
  }
  function renderStory(){
    if(state.phase==='prelude') return renderPrelude();
    if(state.phase==='intermission') return renderIntermission();
    if(state.phase==='ending') return renderEnding();
    if(state.phase!=='mission') state.phase='mission';
    const m=DATA.missions[state.missionIndex];
    if(!m) return renderEnding();
    const stage=m.stages[state.stageIndex];
    const done=state.completedMissions.length;
    const progress=Math.round(((state.missionIndex*3+state.stageIndex)/75)*100);
    const content=`<div class="game-layout">
      <section class="main-column">
        <div class="panel mission-card">
          <div class="meta"><span class="eyebrow">${esc(m.act)}</span><span class="pill">Missão ${String(m.n).padStart(2,'0')} / 25</span><span class="pill">${esc(m.location)}</span></div>
          <h1 class="mission-title">${esc(m.title)}</h1>
          <p class="mission-opening">${esc(m.opening)}</p>
          <div class="objective"><strong class="gold">OBJETIVO</strong><br>${esc(m.objective)}</div>
        </div>
        <div class="panel stage-card">
          <div class="stage-label"><span class="stage-number">${state.stageIndex+1}</span> Registro de campo · ${String(state.stageIndex+1).padStart(2,'0')} / 03</div>
          <h2 class="stage-title">${esc(stage.title)}</h2>
          <p class="stage-narrative">${esc(stage.narrative)}</p>
          ${state.pendingChoice?renderChoiceResult():renderChoices(stage)}
        </div>
        <div class="small-copy" style="margin:14px 3px 0">Base narrativa: ${esc(m.base)}. As falas e situações de personagens ficcionais são criação autoral; as cenas de Jesus seguem somente as referências identificadas.</div>
      </section>
      <aside class="side-column">
        <div class="panel progress-card">
          <div class="progress-top"><span>Progresso da campanha</span><b>${progress}%</b></div>
          <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div class="small-copy" style="margin-top:12px">${done} missões concluídas · 25 no total</div>
        </div>
        <div class="panel panel-pad">
          <div class="sidebar-label">Estado dos registros e vínculos</div>
          ${Object.entries(STAT_NAMES).map(([k,label])=>`<div class="side-stat"><span>${esc(label)}</span><span>${esc(statLabel(k,state.stats[k]||0))}</span></div>`).join('')}
        </div>
        <div class="panel panel-pad mission-overview">
          <div class="sidebar-label">Percurso da campanha</div>
          <div class="mission-list">${DATA.missions.map((item,i)=>`<div class="mission-link ${i<state.missionIndex?'done':i===state.missionIndex?'current':''}"><span class="num">${i<state.missionIndex?'✓':String(item.n).padStart(2,'0')}</span><b>${esc(item.title)}</b></div>`).join('')}</div>
        </div>
      </aside>
    </div>`;
    return content;
  }
  function renderChoices(stage){
    return `<div class="choice-prompt">${esc(stage.prompt)}</div><div class="choice-list">${stage.choices.map((c,i)=>`<button class="choice-button" data-action="choose" data-choice="${i}"><strong>${esc(c.text)}</strong><span>${esc(c.desc)}</span></button>`).join('')}</div>`;
  }
  function renderChoiceResult(){
    const c=state.pendingChoice;
    return `<div class="result-box"><div class="result-title">Decisão registrada · ${esc(c.text)}</div><p class="result-text">${esc(c.result)}</p><button class="btn primary" data-action="stage-next">${state.stageIndex===2?'Concluir missão':'Continuar'} →</button></div>`;
  }
  function renderIntermission(){
    const m=DATA.missions[state.missionIndex];
    const records=state.lastMissionLog||[];
    return `<section class="completion-card panel starfield">
      <div class="completion-icon">✧</div><div class="eyebrow">Missão concluída · ${String(m.n).padStart(2,'0')} / 25</div>
      <h1 class="completion-title">${esc(m.title)}</h1>
      <p class="completion-body">${esc(m.objective)} O que Aren registra — e como trata as pessoas ao redor — acompanha a jornada para além desta cena.</p>
      <div class="rule" style="max-width:130px;margin:24px auto"></div>
      <div style="max-width:620px;margin:0 auto 25px;text-align:left">
        ${records.map(r=>`<div class="journal-item" style="margin-bottom:8px"><strong>${esc(r.scene)} — ${esc(r.choice)}</strong><p>${esc(r.result)}</p></div>`).join('')}
      </div>
      <button class="btn primary" data-action="mission-next">${m.n===25?'Ver desfecho':'Próxima missão'} →</button>
    </section>`;
  }
  function determineEnding(){
    const s=state.stats;
    if(s.integrity>=17 && s.mara>=2 && s.ishan>=2) return 'open';
    if(s.ishan>=3 && s.community>=7) return 'private';
    return 'custody';
  }
  const ENDINGS={
    open:{title:'Arquivo Aberto',subtitle:'A memória volta a pertencer à comunidade',body:'Aren publica textos, fontes, contexto, incertezas e memória pessoal em categorias separadas. Mara reconhece a própria responsabilidade e ajuda a romper o monopólio documental. Ishan mantém uma cópia independente. O arquivo não se torna uma autoridade final: torna-se uma memória que pode ser examinada.',quote:'A verdade não precisa de um dono para permanecer disponível.'},
    custody:{title:'Memória sob Custódia',subtitle:'O testemunho é preservado, mas ainda tem limites',body:'Aren impede que o arquivo seja destruído, mas o Instituto ainda controla parte da divulgação. A comunidade recebe o testemunho com lacunas; Ishan mantém uma cópia independente. O caminho escolhido preserva documentos importantes, embora o acesso continue desigual.',quote:'Preservar a memória é necessário; compartilhá-la também é responsabilidade.'},
    private:{title:'Testemunho Particular',subtitle:'A memória circula em redes menores',body:'Aren rompe com a instituição e entrega o arquivo a redes comunitárias pequenas. O alcance é menor, mas a memória não é inteiramente apropriada pelo regime. Ishan ajuda a manter uma cópia independente, e a comunidade sustenta o testemunho sem depender de um único centro.',quote:'Nem toda voz alcança a praça; ainda assim, pode ser guardada e transmitida.'}
  };
  function renderEnding(){
    const id=state.endingId||determineEnding(); state.endingId=id;
    const e=ENDINGS[id];
    const social=state.stats.community>=8?'A comunidade chega ao epílogo com vínculos mais sólidos e maior capacidade de cuidar uns dos outros.':state.stats.community>=3?'A comunidade preserva algumas redes de apoio, embora ainda existam relações frágeis.':'A comunidade chega ao fim com feridas e vínculos incompletos; nem toda reparação foi possível.';
    return `<section class="completion-card panel starfield" style="max-width:940px">
      <div class="completion-icon">✧</div><div class="eyebrow">Ato V · Epílogo</div>
      <h1 class="completion-title">O Rei Retorna</h1>
      <p class="completion-body">A Segunda Vinda acontece como clímax fixo desta narrativa. Ela não é prêmio por escolhas, pontuação, habilidade ou desempenho.</p>
      <div class="ending-outcome"><strong class="gold">${esc(e.title)}</strong><br><span style="font-size:13px;color:#b8b9b5">${esc(e.subtitle)}</span><br><br>${esc(e.body)}</div>
      <div class="ending-outcome">${esc(social)}</div>
      <p class="completion-body" style="font-style:italic">“${esc(e.quote)}”</p>
      <div class="rule" style="max-width:150px;margin:28px auto"></div>
      <div class="eyebrow">A nova criação</div>
      <h2 class="section-heading" style="margin-top:12px">O ÚLTIMO REINO</h2>
      <p class="body-copy">A tela escurece. Apocalipse 21–22 permanece como horizonte de esperança, sem calendário especulativo e sem uma nova guerra. A humanidade tentou construir uma máquina para trazer o Salvador. O falso salvador construiu um império para ocupar seu lugar. E, quando o império declarou que a história terminara, o verdadeiro Rei retornou.</p>
      <div class="end-credits">FIM DA CAMPANHA · ${esc(e.title.toUpperCase())}</div>
      <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:28px"><button class="btn primary" data-action="credits">Ver jornada completa</button><button class="btn" data-action="new">Nova campanha</button><button class="btn ghost" data-action="menu">Menu principal</button></div>
    </section>`;
  }
  function renderCodex(){
    const entries=DATA.codex.filter(e=>state.unlocked.includes(e.id));
    if(!entries.find(e=>e.id===currentCodex)) currentCodex=entries[0]?.id||'creation';
    const entry=entries.find(e=>e.id===currentCodex)||entries[0];
    const tabs=[['text','Texto bíblico'],['context','Contexto'],['interpretation','Interpretação'],['fiction','Ficção do jogo']];
    const data=entry[currentCodexTab]||entry.text;
    return `<section class="content-page">
      <div class="page-head"><div class="eyebrow">Arquivo de conhecimento</div><h1 class="page-title">Códice</h1><p class="subtitle">Quatro camadas para não confundir texto, contexto, interpretação e ficção.</p></div>
      <div class="codex-grid"><div class="panel codex-list">${entries.map(e=>`<button class="codex-entry ${e.id===entry.id?'active':''}" data-action="codex-entry" data-id="${e.id}">${esc(e.title)}</button>`).join('')}${DATA.codex.filter(e=>!state.unlocked.includes(e.id)).map(e=>`<button class="codex-entry locked" disabled title="Desbloqueie ao avançar na campanha">◇ ${esc(e.title)} · bloqueado</button>`).join('')}</div>
      <article class="panel codex-content"><div class="eyebrow">Entrada do códice</div><h2 class="section-heading" style="margin-top:10px">${esc(entry.title)}</h2><div class="codex-tabs">${tabs.map(([id,label])=>`<button class="codex-tab ${currentCodexTab===id?'active':''}" data-action="codex-tab" data-tab="${id}">${label}</button>`).join('')}</div><div class="codex-text">${esc(data)}</div><div class="divider"></div><p class="small-copy">Este códice é uma ferramenta de distinção editorial. Ele não pretende substituir o estudo bíblico, a pesquisa histórica ou a consulta teológica plural.</p></article></div>
    </section>`;
  }
  function renderJournal(){
    const decisions=[...state.decisions].reverse();
    const last=decisions.length?decisions.map(d=>`<article class="journal-item"><strong>Missão ${String(d.mission).padStart(2,'0')} · ${esc(d.missionTitle)} — ${esc(d.scene)}</strong><p><b>${esc(d.choice)}</b><br>${esc(d.result)}</p></article>`).join(''):'<div class="panel panel-pad small-copy">Nenhuma decisão registrada ainda. Comece a jornada para construir seu diário.</div>';
    return `<section class="content-page"><div class="page-head"><div class="eyebrow">Memória da jornada</div><h1 class="page-title">Diário de Aren</h1><p class="subtitle">Suas decisões ficam registradas como escolhas narrativas, não como uma medida de mérito espiritual.</p></div><div class="panel panel-pad" style="margin-bottom:16px"><div class="meta"><span class="pill">${state.decisions.length} decisões</span><span class="pill">${state.completedMissions.length} missões concluídas</span></div><div class="rule"></div><div class="small-copy">${esc(Object.entries(STAT_NAMES).map(([k,v])=>`${v}: ${statLabel(k,state.stats[k])}`).join(' · '))}</div></div><div class="journal-list">${last}</div></section>`;
  }
  function renderPeople(){
    return `<section class="content-page"><div class="page-head"><div class="eyebrow">Pessoas e trajetórias</div><h1 class="page-title">Elenco</h1><p class="subtitle">Personagens ficcionais e centro bíblico da narrativa, com suas funções e limites.</p></div><div class="people-grid">${DATA.people.map(p=>`<article class="panel person-card"><div class="meta"><span class="pill">${esc(p.kind)}</span>${p.age!=='—'?`<span class="tagline">${esc(p.age)}</span>`:''}</div><h3>${esc(p.name)}</h3><div class="person-role">${esc(p.role)}</div><p>${esc(p.arc)}</p></article>`).join('')}</div></section>`;
  }
  function renderMap(){
    const acts=[
      ['Prólogo','O Princípio',0,0,'A linguagem visual da criação e os limites da metáfora.'],
      ['Ato I — A Origem e a Ruína','Missões 01–02',1,2,'Meridian, o Instituto e a partida em 2099.'],
      ['Ato II — O Caminho','Missões 03–11',3,11,'Galileia, Cafarnaum, o lago, Betânia e as estradas da Judeia.'],
      ['Ato III — A Cruz e a Manhã','Missões 12–17',12,17,'Jerusalém, a Paixão e o anúncio da ressurreição.'],
      ['Ato IV — O Império da Falsa Paz','Missões 18–23',18,23,'Meridian sob a Concórdia e a ruptura do regime.'],
      ['Ato V — O Rei Retorna','Missões 24–25',24,25,'A Segunda Vinda e a nova criação.']
    ];
    return `<section class="content-page"><div class="page-head"><div class="eyebrow">Linha do tempo</div><h1 class="page-title">Jornada</h1><p class="subtitle">Da reunião do Conselho, em 2075, ao epílogo da nova criação.</p></div><div class="panel panel-pad" style="margin-bottom:18px"><div class="eyebrow">Cronologia</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:17px">${[['2075','O Conselho'],['2086–94','Ascensão de Veyr'],['2095–98','Cooptação do projeto'],['2099','Aren parte e retorna']].map(([y,t])=>`<div><div class="gold" style="font:16px var(--display)">${y}</div><div class="small-copy">${t}</div></div>`).join('')}</div></div><div class="map-list">${acts.map(([a,t,start,end,desc],i)=>`<article class="panel map-item"><div class="map-num">0${i+1}</div><div><b>${esc(a)} · ${esc(t)}</b><small>${esc(desc)}</small></div></article>`).join('')}</div><h2 class="section-heading" style="margin:28px 0 15px">As 25 missões</h2><div class="map-list">${DATA.missions.map((m,i)=>`<div class="panel map-item ${state.completedMissions.includes(m.n)?'completed':''}"><div class="map-num">${state.completedMissions.includes(m.n)?'✓':String(m.n).padStart(2,'0')}</div><div><b>${esc(m.title)}</b><small>${esc(m.location)} · ${esc(m.act)}</small></div></div>`).join('')}</div></section>`;
  }
  function renderSettings(){
    return `<section class="content-page"><div class="page-head"><div class="eyebrow">Preferências e dados</div><h1 class="page-title">Opções</h1><p class="subtitle">O jogo salva o progresso neste navegador. Exporte uma cópia para guardar seu arquivo de campanha.</p></div><div class="settings-grid">
      <article class="panel setting-card"><h3>Reduzir animações</h3><p>Desativa transições e movimentos decorativos.</p><label class="file-label"><input type="checkbox" id="reduceMotion" ${state.reduceMotion?'checked':''}> ${state.reduceMotion?'Ativado':'Desativado'}</label></article>
      <article class="panel setting-card"><h3>Contraste reforçado</h3><p>Realça bordas e texto para facilitar a leitura.</p><label class="file-label"><input type="checkbox" id="highContrast" ${state.highContrast?'checked':''}> ${state.highContrast?'Ativado':'Desativado'}</label></article>
      <article class="panel setting-card"><h3>Exportar progresso</h3><p>Baixe um arquivo JSON com as escolhas, desbloqueios e estado atual da campanha.</p><button class="btn small" data-action="export">Exportar save ↓</button></article>
      <article class="panel setting-card"><h3>Importar progresso</h3><p>Restaure um arquivo JSON exportado anteriormente.</p><label class="file-label">Escolher arquivo<input type="file" id="importFile" accept="application/json,.json"></label></article>
      <article class="panel setting-card"><h3>Salvar agora</h3><p>Grava a campanha no armazenamento local deste navegador.</p><button class="btn small" data-action="save">Salvar progresso</button></article>
      <article class="panel setting-card"><h3>Reiniciar campanha</h3><p>Apaga o progresso local e inicia uma nova jornada desde o prólogo.</p><button class="btn small" data-action="new">Nova campanha</button></article>
    </div><div class="disclaimer">Privacidade: este protótipo não possui servidor, conta, telemetria ou sincronização. As escolhas permanecem no armazenamento local do navegador, salvo quando você exporta o arquivo.</div></section>`;
  }

  function choose(index){
    if(state.pendingChoice) return;
    const m=DATA.missions[state.missionIndex]; const stage=m.stages[state.stageIndex]; const c=stage.choices[index];
    if(!c) return;
    addEffects(c.effects); unlock(c.unlock);
    state.pendingChoice={text:c.text,result:c.result};
    const log={mission:m.n,missionTitle:m.title,scene:stage.title,choice:c.text,result:c.result};
    state.decisions.push(log); state.lastMissionLog.push(log);
    saveGame(); render();
  }
  function advanceStage(){
    if(!state.pendingChoice) return;
    state.pendingChoice=null;
    if(state.stageIndex<2){ state.stageIndex++; }
    else {
      const m=DATA.missions[state.missionIndex];
      if(!state.completedMissions.includes(m.n)) state.completedMissions.push(m.n);
      unlock(m.codex||[]);
      state.phase='intermission'; state.lastMissionLog=state.lastMissionLog.slice(-3);
    }
    saveGame(); render();
  }
  function advanceMission(){
    if(state.missionIndex>=DATA.missions.length-1){ state.phase='ending'; state.endingId=determineEnding(); }
    else { state.missionIndex++; state.stageIndex=0; state.pendingChoice=null; state.phase='mission'; state.lastMissionLog=[]; }
    state.activeTab='story'; saveGame(); render(); window.scrollTo({top:0,behavior:state.reduceMotion?'auto':'smooth'});
  }
  function advancePrelude(){
    const scene=DATA.prelude[state.preludeIndex];
    if(state.pageIndex<scene.pages.length-1) state.pageIndex++;
    else if(state.preludeIndex<DATA.prelude.length-1){ state.preludeIndex++; state.pageIndex=0; }
    else { state.phase='mission'; state.missionIndex=0; state.stageIndex=0; state.activeTab='story'; }
    saveGame(); render(); window.scrollTo({top:0,behavior:state.reduceMotion?'auto':'smooth'});
  }
  function exportSave(){
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='the-witness-the-way-save.json';a.click();URL.revokeObjectURL(a.href);showToast('Arquivo de progresso exportado.');
  }
  function importSave(file){
    const reader=new FileReader();
    reader.onload=()=>{ try{ const s=JSON.parse(reader.result); if(!validState(s)) throw new Error('Formato inválido'); state=s; saveGame(); applySettings(); render(); showToast('Progresso importado.'); }catch(e){ showToast('Arquivo inválido ou incompatível.'); } };
    reader.onerror=()=>showToast('Não foi possível ler o arquivo.'); reader.readAsText(file);
  }
  function resetToMenu(){ state=null; renderMenu(); }
  function showAllCredits(){ state.activeTab='map'; render(); }

  ROOT.addEventListener('click',e=>{
    const btn=e.target.closest('[data-action]'); if(!btn) return;
    const a=btn.dataset.action;
    if(a==='new') return beginNew();
    if(a==='resume') return resume();
    if(a==='menu') return resetToMenu();
    if(a==='menu-codex'){ state=freshState(); state.activeTab='codex'; render(); return; }
    if(a==='prelude-next') return advancePrelude();
    if(a==='choose') return choose(Number(btn.dataset.choice));
    if(a==='stage-next') return advanceStage();
    if(a==='mission-next') return advanceMission();
    if(a==='tab'){ state.activeTab=btn.dataset.tab; render(); return; }
    if(a==='codex-entry'){ currentCodex=btn.dataset.id; render(); return; }
    if(a==='codex-tab'){ currentCodexTab=btn.dataset.tab; render(); return; }
    if(a==='export') return exportSave();
    if(a==='save') return saveGame(true);
    if(a==='credits') return showAllCredits();
  });
  document.getElementById('brandHome').addEventListener('click',()=>{ if(state){ if(confirm('Voltar ao menu principal? O progresso já está salvo neste navegador.')) resetToMenu(); } else renderMenu(); });
  document.getElementById('saveButton').addEventListener('click',()=>saveGame(true));
  ROOT.addEventListener('change',e=>{
    if(e.target.id==='reduceMotion'){state.reduceMotion=e.target.checked;applySettings();saveGame();render();}
    if(e.target.id==='highContrast'){state.highContrast=e.target.checked;applySettings();saveGame();render();}
    if(e.target.id==='importFile'&&e.target.files?.[0]) importSave(e.target.files[0]);
  });

  const saved=loadGame();
  if(saved){
    // Expose a resume path without automatically moving the player into a loaded chapter.
    renderMenu();
  } else renderMenu();
})();
