(() => {
  'use strict';
  const W = 1600, H = 1000, VIEW_W = 960, VIEW_H = 540;
  const BLOCKERS = [
    { x: 270, y: 330, w: 210, h: 115 },
    { x: 600, y: 275, w: 170, h: 115 },
    { x: 1110, y: 330, w: 230, h: 115 },
    { x: 330, y: 730, w: 210, h: 100 },
    { x: 1030, y: 730, w: 260, h: 95 }
  ];

  function rounded(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
  }

  function drawWindowCity(ctx, time) {
    const glow = ctx.createLinearGradient(0, 80, 0, 300);
    glow.addColorStop(0, '#0a1727'); glow.addColorStop(1, '#15263a');
    ctx.fillStyle = glow; ctx.fillRect(80, 80, 1440, 205);
    ctx.fillStyle = 'rgba(80,129,166,.18)'; ctx.fillRect(80, 274, 1440, 12);
    for (let i = 0; i < 33; i++) {
      const x = 105 + i * 43;
      const height = 32 + ((i * 37) % 100);
      ctx.fillStyle = i % 4 === 0 ? '#1d3448' : '#152b3d';
      ctx.fillRect(x, 270 - height, 26 + (i % 3) * 5, height);
      for (let yy = 280 - height; yy < 260; yy += 16) {
        const lit = ((i * 13 + yy) % 5) < 2;
        if (lit) { ctx.fillStyle = `rgba(222,186,119,${.22 + .12 * Math.sin(time * .001 + i)})`; ctx.fillRect(x + 5, yy, 4, 5); }
      }
    }
    ctx.strokeStyle = 'rgba(117,169,203,.17)'; ctx.lineWidth = 2;
    for (let x = 80; x <= 1520; x += 240) { ctx.beginPath(); ctx.moveTo(x, 80); ctx.lineTo(x, 285); ctx.stroke(); }
    ctx.fillStyle = 'rgba(85,145,184,.07)'; ctx.fillRect(90, 88, 1420, 182);
    ctx.font = '12px Arial'; ctx.fillStyle = 'rgba(196,211,223,.36)';
    ctx.fillText('MERIDIAN · DISTRITO CENTRAL · 2099', 110, 112);
  }

  function drawRoom(ctx, time) {
    const floor = ctx.createLinearGradient(0, 270, 0, H);
    floor.addColorStop(0, '#182431'); floor.addColorStop(.55, '#111b26'); floor.addColorStop(1, '#0a121c');
    ctx.fillStyle = floor; ctx.fillRect(0, 0, W, H);
    drawWindowCity(ctx, time);
    // floor grid and reflection strips
    ctx.strokeStyle = 'rgba(161,181,193,.055)'; ctx.lineWidth = 1;
    for (let x = 110; x < 1510; x += 80) { ctx.beginPath(); ctx.moveTo(x, 290); ctx.lineTo(x, 900); ctx.stroke(); }
    for (let y = 320; y < 900; y += 70) { ctx.beginPath(); ctx.moveTo(90, y); ctx.lineTo(1510, y); ctx.stroke(); }
    // perimeter / walls
    ctx.fillStyle = '#273442'; ctx.fillRect(75, 70, 1450, 20);
    ctx.fillStyle = '#1e2c39'; ctx.fillRect(75, 70, 18, 820); ctx.fillRect(1507, 70, 18, 820);
    ctx.fillStyle = 'rgba(195,165,111,.15)'; ctx.fillRect(90, 290, 1420, 3);
    // ceiling lights
    for (let i = 0; i < 7; i++) {
      const x = 180 + i * 205;
      const pulse = .12 + .04 * Math.sin(time * .001 + i);
      ctx.fillStyle = `rgba(224,196,145,${pulse})`;
      ctx.fillRect(x, 110, 100, 4);
      const g = ctx.createRadialGradient(x + 50, 112, 1, x + 50, 112, 100);
      g.addColorStop(0, `rgba(218,191,142,${pulse * .55})`); g.addColorStop(1, 'rgba(218,191,142,0)');
      ctx.fillStyle = g; ctx.fillRect(x - 50, 110, 200, 150);
    }
    // central archive sign
    rounded(ctx, 640, 120, 320, 76, 10, 'rgba(8,16,26,.65)', 'rgba(202,170,112,.25)');
    ctx.font = '11px Arial'; ctx.letterSpacing = '3px'; ctx.fillStyle = '#c9ae7c'; ctx.textAlign = 'center';
    ctx.fillText('ARQUIVO CENTRAL', 800, 150);
    ctx.font = '9px Arial'; ctx.fillStyle = '#71889b'; ctx.fillText('MERIDIAN · ACESSO RESTRITO', 800, 170); ctx.textAlign = 'left';
    // library consoles / shelving
    drawRack(ctx, 120, 360, 115, 280, time);
    drawRack(ctx, 1360, 360, 110, 280, time);
    drawDesk(ctx, 270, 330, 210, 115, 'terminal');
    drawDesk(ctx, 600, 275, 170, 115, 'console');
    drawDesk(ctx, 1110, 330, 230, 115, 'cabinet');
    drawDesk(ctx, 330, 730, 210, 100, 'table');
    drawDesk(ctx, 1030, 730, 260, 95, 'table');
    // walkway illumination
    const aisle = ctx.createLinearGradient(780, 300, 810, 900);
    aisle.addColorStop(0, 'rgba(98,153,181,.07)'); aisle.addColorStop(1, 'rgba(98,153,181,0)');
    ctx.fillStyle = aisle; ctx.fillRect(650, 300, 330, 590);
    // floating motes
    if (!window.TW_APP?.settings?.reduceMotion) {
      for (let i = 0; i < 28; i++) {
        const px = (i * 173 + time * (0.006 + (i % 3) * .002)) % W;
        const py = 300 + ((i * 89 + Math.sin(time * .0006 + i) * 22) % 560);
        ctx.fillStyle = `rgba(218,194,151,${.06 + .06 * Math.sin(time * .001 + i)})`;
        ctx.beginPath(); ctx.arc(px, py, 1.2 + (i % 2), 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  function drawRack(ctx, x, y, w, h, time) {
    rounded(ctx, x, y, w, h, 8, '#111b25', '#354452');
    for (let row = 0; row < 5; row++) {
      ctx.fillStyle = '#263746'; ctx.fillRect(x + 9, y + 12 + row * 51, w - 18, 3);
      for (let col = 0; col < 5; col++) {
        const xx = x + 16 + col * 17, yy = y + 19 + row * 51;
        ctx.fillStyle = ['#43515b', '#786d58', '#364b5a', '#59616b'][((row * 7 + col) % 4)];
        rounded(ctx, xx, yy, 11, 24 + (col % 2) * 5, 2, ctx.fillStyle, 'rgba(255,255,255,.06)');
      }
    }
    ctx.fillStyle = `rgba(95,184,202,${.25 + .16 * Math.sin(time * .003 + x)})`;
    ctx.fillRect(x + 12, y + h - 17, w - 24, 3);
  }

  function drawDesk(ctx, x, y, w, h, kind) {
    ctx.fillStyle = 'rgba(0,0,0,.26)'; ctx.fillRect(x + 7, y + 9, w, h);
    rounded(ctx, x, y, w, h, 8, kind === 'cabinet' ? '#26323e' : '#303a43', '#596575');
    rounded(ctx, x + 9, y + 9, w - 18, Math.max(26, h * .44), 5, '#192734', 'rgba(190,174,146,.18)');
    if (kind === 'terminal' || kind === 'console') {
      ctx.fillStyle = 'rgba(79,164,192,.18)'; ctx.fillRect(x + 18, y + 16, w - 36, 29);
      ctx.strokeStyle = 'rgba(126,190,211,.52)'; ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(x + 24, y + 23 + i * 7); ctx.lineTo(x + w - 26 - i * 12, y + 23 + i * 7); ctx.stroke(); }
    } else if (kind === 'table') {
      ctx.fillStyle = '#b3a17e'; ctx.fillRect(x + 25, y + 18, w * .36, 16);
      ctx.fillStyle = '#d0c5aa'; ctx.fillRect(x + 32, y + 21, w * .3, 2);
      ctx.fillStyle = '#667786'; ctx.fillRect(x + w * .62, y + 19, w * .22, 22);
    } else {
      for (let i = 0; i < 4; i++) { ctx.fillStyle = ['#72818a', '#9d8d71', '#4f6374'][i % 3]; rounded(ctx, x + 22 + i * 38, y + 20, 30, 30, 3, ctx.fillStyle, 'rgba(255,255,255,.1)'); }
    }
    ctx.fillStyle = '#1b2732'; ctx.fillRect(x + 18, y + h - 8, 8, 30); ctx.fillRect(x + w - 26, y + h - 8, 8, 30);
  }

  function drawAren(ctx, x, y, now, moving, facing) {
    const phase = moving ? Math.sin(now * .017) : Math.sin(now * .002) * .12;
    const bob = moving ? Math.abs(Math.sin(now * .017)) * 2.5 : Math.sin(now * .002) * 1.1;
    ctx.save(); ctx.translate(x, y - bob);
    // shadow
    ctx.fillStyle = 'rgba(0,0,0,.38)'; ctx.beginPath(); ctx.ellipse(0, 24, 22, 9, 0, 0, Math.PI * 2); ctx.fill();
    // feet and legs
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#202b37'; ctx.lineWidth = 12;
    ctx.beginPath(); ctx.moveTo(-7, 10); ctx.lineTo(-8 + phase * 7, 27); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(7, 10); ctx.lineTo(8 - phase * 7, 27); ctx.stroke();
    ctx.strokeStyle = '#111923'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(-8 + phase * 7, 27); ctx.lineTo(-14 + phase * 7, 29); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(8 - phase * 7, 27); ctx.lineTo(14 - phase * 7, 29); ctx.stroke();
    // body and bag
    ctx.fillStyle = '#495765'; rounded(ctx, -13, -21, 27, 35, 9, '#495765', '#7b8992');
    ctx.fillStyle = '#253544'; rounded(ctx, 8, -17, 13, 29, 5, '#253544', '#64717a');
    ctx.strokeStyle = '#a78c62'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(8, -16); ctx.lineTo(-8, 10); ctx.stroke();
    // arms
    ctx.strokeStyle = '#b98769'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(-11, -12); ctx.lineTo(-17 - phase * 8, 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(11, -12); ctx.lineTo(17 + phase * 8, 4); ctx.stroke();
    // neck and head
    ctx.fillStyle = '#b98769'; rounded(ctx, -5, -31, 10, 12, 3, '#b98769');
    ctx.fillStyle = '#c79575'; ctx.beginPath(); ctx.ellipse(0, -39, 11.5, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#342a27'; ctx.beginPath(); ctx.moveTo(-12, -39); ctx.quadraticCurveTo(-13, -57, 0, -55); ctx.quadraticCurveTo(14, -56, 12, -38); ctx.lineTo(7, -45); ctx.quadraticCurveTo(-2, -50, -10, -42); ctx.closePath(); ctx.fill();
    // face direction hint
    ctx.fillStyle = '#644639';
    if (facing === 'left') { ctx.beginPath(); ctx.arc(-10, -37, 3, 0, Math.PI * 2); ctx.fill(); }
    else if (facing === 'right') { ctx.beginPath(); ctx.arc(10, -37, 3, 0, Math.PI * 2); ctx.fill(); }
    else if (facing === 'down') { ctx.fillRect(-4, -31, 8, 3); }
    else { ctx.fillRect(-3, -42, 2, 2); ctx.fillRect(2, -42, 2, 2); }
    ctx.restore();
  }

  function drawInteractable(ctx, item, screenX, screenY, isVisited, isNear, time) {
    const pulse = .5 + .5 * Math.sin(time * .004 + item.x * .01);
    ctx.save(); ctx.translate(screenX, screenY);
    if (!isVisited) {
      ctx.fillStyle = `rgba(209,175,111,${.08 + .08 * pulse})`; ctx.beginPath(); ctx.arc(0, -7, 32 + pulse * 5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = isNear ? '#f0d39a' : 'rgba(204,174,122,.62)'; ctx.lineWidth = isNear ? 2 : 1;
      ctx.beginPath(); ctx.arc(0, -7, 20 + pulse * 2, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ead4ab'; ctx.font = 'bold 17px Georgia'; ctx.textAlign = 'center'; ctx.fillText(item.icon, 0, -1);
      ctx.font = '11px Arial'; ctx.fillStyle = '#e7dfcf';
      const width = Math.min(190, Math.max(80, ctx.measureText(item.name).width + 18));
      rounded(ctx, -width / 2, 22, width, 23, 6, 'rgba(7,13,20,.86)', 'rgba(204,174,122,.35)');
      ctx.fillText(item.name, 0, 37);
    } else {
      ctx.fillStyle = 'rgba(115,167,146,.13)'; ctx.beginPath(); ctx.arc(0, -7, 23, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#8db8a2'; ctx.font = 'bold 19px Arial'; ctx.textAlign = 'center'; ctx.fillText('✓', 0, -1);
    }
    ctx.restore();
  }

  function draw(canvas, state, time, nearestId) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetWidth = Math.max(320, Math.floor(canvas.clientWidth || VIEW_W));
    const targetHeight = Math.floor(targetWidth * VIEW_H / VIEW_W);
    if (canvas.width !== Math.round(targetWidth * dpr) || canvas.height !== Math.round(targetHeight * dpr)) {
      canvas.width = Math.round(targetWidth * dpr); canvas.height = Math.round(targetHeight * dpr);
    }
    canvas.style.height = `${targetHeight}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr * targetWidth / VIEW_W, 0, 0, dpr * targetWidth / VIEW_W, 0, 0);
    const cameraX = Math.max(0, Math.min(W - VIEW_W, state.player.x - VIEW_W / 2));
    const cameraY = Math.max(0, Math.min(H - VIEW_H, state.player.y - VIEW_H / 2));
    ctx.clearRect(0, 0, VIEW_W, VIEW_H);
    ctx.save(); ctx.translate(-cameraX, -cameraY);
    drawRoom(ctx, time);
    const stageItems = window.TW_DATA.mission.stages[Math.min(state.stageIndex, 2)].itemIds;
    for (const id of stageItems) {
      const item = window.TW_DATA.mission.interactables[id];
      const visited = state.visited[state.stageIndex].includes(id);
      drawInteractable(ctx, item, item.x, item.y, visited, nearestId === id, time);
    }
    drawAren(ctx, state.player.x, state.player.y, time, window.TW_APP?.moving || false, state.player.facing);
    ctx.restore();
    // HUD vignette / location tag
    const grad = ctx.createLinearGradient(0, 0, 0, 80); grad.addColorStop(0, 'rgba(4,10,17,.72)'); grad.addColorStop(1, 'rgba(4,10,17,0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, VIEW_W, 80);
    ctx.fillStyle = '#d5bb86'; ctx.font = '11px Arial'; ctx.fillText('MERIDIAN · ARQUIVO CENTRAL', 24, 29);
    ctx.fillStyle = '#91a3b2'; ctx.font = '9px Arial'; ctx.fillText('2099 · SETOR DE PRESERVAÇÃO', 24, 47);
    const pct = state.phase === 'missionComplete' ? 100 : Math.round((state.stageIndex / 3) * 100);
    ctx.fillStyle = 'rgba(255,255,255,.13)'; ctx.fillRect(770, 26, 158, 4);
    ctx.fillStyle = '#cfad72'; ctx.fillRect(770, 26, 158 * pct / 100, 4);
    ctx.fillStyle = '#aab6c0'; ctx.font = '9px Arial'; ctx.textAlign = 'right'; ctx.fillText(`MISSÃO 01 · ${pct}%`, 928, 19); ctx.textAlign = 'left';
  }

  function getNearest(state) {
    if (!['explore', 'decision'].includes(state.phase) || state.stageIndex > 2) return null;
    const ids = window.TW_DATA.mission.stages[state.stageIndex].itemIds;
    let nearest = null, min = 78;
    for (const id of ids) {
      if (state.visited[state.stageIndex].includes(id)) continue;
      const item = window.TW_DATA.mission.interactables[id];
      const d = Math.hypot(state.player.x - item.x, state.player.y - item.y);
      if (d < min) { min = d; nearest = { id, item, distance: d }; }
    }
    return nearest;
  }

  function canMoveTo(x, y) {
    if (x < 105 || x > 1495 || y < 300 || y > 860) return false;
    for (const b of BLOCKERS) {
      if (x > b.x - 27 && x < b.x + b.w + 27 && y > b.y - 26 && y < b.y + b.h + 32) return false;
    }
    return true;
  }

  window.TW_WORLD = { draw, getNearest, canMoveTo, view: { width: VIEW_W, height: VIEW_H } };
})();
