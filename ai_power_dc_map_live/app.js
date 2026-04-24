// ═══════════════════════════════════════════════════
// AI Power DC Map — Application Logic v2.0
// Rebuilt: combines v1.0 + v1.1 best features
// Added: region filter, color consistency, logo fix
// ═══════════════════════════════════════════════════

(function () {
  'use strict';

  let map, tileLayer;
  let markers = [];
  let activeFilters = {
    categories: new Set(Object.keys(COMPANY_CATEGORIES)),
    statuses:   new Set(Object.keys(STATUS_CONFIG)),
    regions:    new Set(['all']),
    search:     ''
  };
  let activeTab = 'list';
  let tableSort = { column: 'capacity', asc: false };

  const REGION_CONFIG = {
    'all':           { label: 'Global' },
    'north-america': { label: 'North America' },
    'europe':        { label: 'Europe' },
    'asia-pacific':  { label: 'Asia Pacific' },
    'middle-east':   { label: 'Middle East' },
    'africa':        { label: 'Africa' },
    'south-america': { label: 'South America' }
  };

  // ── Boot ─────────────────────────────────────────
  function init() {
    initTheme();
    initMap();
    initCategoryFilters();
    initStatusFilters();
    initRegionFilters();
    initSearch();
    initTabs();
    renderMarkers();
    renderSidebar();
    renderTimeline();
    renderStats();
    renderHeaderStats();
    renderLegend();
    initTable();
    renderTable();
  }

  // ── Theme ─────────────────────────────────────────
  function initTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      toggle.disabled = true;
      toggle.title = 'Dark theme locked';
      toggle.style.cssText = 'opacity:0.4;cursor:not-allowed';
    }
  }

  // ── Map ───────────────────────────────────────────
  function initMap() {
    map = L.map('map', {
      center: [28, 10], zoom: 2.3, minZoom: 2, maxZoom: 14,
      zoomControl: true, scrollWheelZoom: true, worldCopyJump: true
    });
    tileLayer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>', maxZoom: 18 }
    );
    tileLayer.addTo(map);
  }

  // ── Category Filters ─────────────────────────────
  function initCategoryFilters() {
    const el = document.getElementById('categoryFilters');
    if (!el) return;
    Object.entries(COMPANY_CATEGORIES).forEach(([key, cat]) => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip active';
      btn.innerHTML = '<span class="chip-dot" style="background:' + cat.color + '"></span>' + cat.label;
      btn.addEventListener('click', () => {
        if (activeFilters.categories.has(key)) { activeFilters.categories.delete(key); btn.classList.remove('active'); }
        else { activeFilters.categories.add(key); btn.classList.add('active'); }
        applyFilters();
      });
      el.appendChild(btn);
    });
  }

  // ── Status Filters ────────────────────────────────
  function initStatusFilters() {
    const el = document.getElementById('statusFilters');
    if (!el) return;
    Object.entries(STATUS_CONFIG).forEach(([key, st]) => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip active';
      btn.innerHTML = '<span class="chip-dot" style="background:' + st.color + '"></span>' + st.label;
      btn.addEventListener('click', () => {
        if (activeFilters.statuses.has(key)) { activeFilters.statuses.delete(key); btn.classList.remove('active'); }
        else { activeFilters.statuses.add(key); btn.classList.add('active'); }
        applyFilters();
      });
      el.appendChild(btn);
    });
  }

  // ── Region Filters ────────────────────────────────
  function initRegionFilters() {
    const el = document.getElementById('regionFilters');
    if (!el) return;
    Object.entries(REGION_CONFIG).forEach(([key, cfg]) => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip' + (key === 'all' ? ' active' : '');
      btn.dataset.region = key;
      btn.textContent = cfg.label;
      btn.addEventListener('click', () => {
        if (key === 'all') {
          activeFilters.regions = new Set(['all']);
          el.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('active', b.dataset.region === 'all'));
        } else {
          activeFilters.regions.delete('all');
          if (activeFilters.regions.has(key)) activeFilters.regions.delete(key);
          else activeFilters.regions.add(key);
          if (activeFilters.regions.size === 0) activeFilters.regions.add('all');
          el.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('active', activeFilters.regions.has(b.dataset.region)));
        }
        applyFilters();
      });
      el.appendChild(btn);
    });
  }

  // ── Search ────────────────────────────────────────
  function initSearch() {
    const inp = document.getElementById('searchInput');
    if (!inp) return;
    inp.addEventListener('input', e => { activeFilters.search = e.target.value.toLowerCase(); applyFilters(); });
  }

  // ── Tabs ──────────────────────────────────────────
  function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        renderSidebar();
      });
    });
  }

  // ── Filter Core ───────────────────────────────────
  function dcKey(dc) {
    if (dc.id) return dc.id;
    return (dc.project || dc.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function getFilteredDCs() {
    return DATA_CENTERS.filter(dc => {
      if (!activeFilters.categories.has(dc.category)) return false;
      if (!activeFilters.statuses.has(dc.status)) return false;
      if (!activeFilters.regions.has('all') && !activeFilters.regions.has(dc.region)) return false;
      if (activeFilters.search) {
        const txt = (dc.project || dc.name || '') + ' ' + dc.company + ' ' + dc.location + ' ' + (dc.description || '');
        if (!txt.toLowerCase().includes(activeFilters.search)) return false;
      }
      return true;
    });
  }

  function applyFilters() {
    renderMarkers();
    renderSidebar();
    renderStats();
    renderTable();
  }

  // ── Markers ───────────────────────────────────────
  function renderMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    getFilteredDCs().forEach(dc => {
      const cc = COMPANY_CATEGORIES[dc.category]?.color || '#999';
      const sz = markerSize(dc.powerMW);
      const icon = L.divIcon({
        className: '',
        html: '<div class="custom-marker ' + (dc.status === 'operational' ? 'pulse' : '') + '" style="width:' + sz + 'px;height:' + sz + 'px;background:' + cc + '33;border-color:' + cc + ';color:' + cc + '"></div>',
        iconSize: [sz, sz], iconAnchor: [sz/2, sz/2]
      });
      const m = L.marker([dc.lat, dc.lng], { icon });
      m.bindPopup(buildPopup(dc, cc), { maxWidth: 340, minWidth: 280, closeButton: true });
      m.addTo(map);
      markers.push(m);
    });
    const cnt = document.getElementById('dcCount');
    if (cnt) cnt.textContent = getFilteredDCs().length;
  }

  function markerSize(mw) {
    if (!mw) return 10;
    if (mw >= 2000) return 28; if (mw >= 1000) return 22;
    if (mw >= 500) return 18;  if (mw >= 100)  return 14;
    return 10;
  }

  function buildPopup(dc, cc) {
    const sc  = STATUS_CONFIG[dc.status] || { label: dc.status, color: '#999', icon: 'o' };
    const cat = COMPANY_CATEGORIES[dc.category]?.label || dc.category;
    const pw  = fmtPower(dc);
    const fl  = flag(dc.location);
    const loc = (fl ? fl + ' ' : '') + dc.location;
    const dt  = dc.onlineDate ? fmtDate(dc.onlineDate) : (dc.statusLabel || 'TBD');
    return '<div class="popup-inner">' +
      '<div class="popup-category" style="color:' + cc + '">' + cat + '</div>' +
      '<div class="popup-name">' + (dc.project || dc.name || '') + '</div>' +
      '<div class="popup-company">' + dc.company + ' &mdash; <span class="popup-location">' + loc + '</span></div>' +
      '<div class="popup-meta">' +
        '<div class="popup-meta-item"><span class="popup-meta-label">Power</span><span class="popup-meta-value" style="color:' + cc + '">' + pw + '</span></div>' +
        '<div class="popup-meta-item"><span class="popup-meta-label">Status</span><span class="popup-status" style="color:' + sc.color + ';background:' + sc.color + '18">' + sc.icon + ' ' + sc.label + '</span></div>' +
        '<div class="popup-meta-item"><span class="popup-meta-label">' + (dc.status === 'operational' ? 'Online' : 'Expected') + '</span><span class="popup-meta-value">' + dt + '</span></div>' +
        '<div class="popup-meta-item"><span class="popup-meta-label">GPU</span><span class="popup-meta-value">' + (dc.gpuModel || 'N/A') + '</span></div>' +
        (dc.investment ? '<div class="popup-meta-item"><span class="popup-meta-label">Investment</span><span class="popup-meta-value">' + dc.investment + '</span></div>' : '') +
        (dc.size ? '<div class="popup-meta-item"><span class="popup-meta-label">Size</span><span class="popup-meta-value">' + dc.size + '</span></div>' : '') +
      '</div>' +
      (dc.partner ? '<div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--space-2)"><strong>Partner:</strong> ' + dc.partner + '</div>' : '') +
      '<div class="popup-desc">' + (dc.description || '') + '</div>' +
      (dc.source ? '<div style="font-size:var(--text-xs);margin-top:var(--space-2)"><a href="' + dc.source + '" target="_blank" rel="noopener" style="color:' + cc + '">Source &#8599;</a></div>' : '') +
      '</div>';
  }

  // ── Sidebar ───────────────────────────────────────
  function renderSidebar() {
    const el = document.getElementById('sidebarContent');
    if (!el) return;
    if (activeTab === 'semis') {
      el.innerHTML = SEMICONDUCTOR_COMPANIES.map(s =>
        '<div class="semi-card"><div class="semi-card-header"><span class="semi-card-name">' + s.name + '</span><span class="semi-card-ticker">' + s.ticker + '</span></div><div class="semi-card-role">' + s.role + '</div></div>'
      ).join('');
      return;
    }
    const list = getFilteredDCs().sort((a, b) => (b.powerMW || 0) - (a.powerMW || 0));
    el.innerHTML = list.map(dc => {
      const cc = COMPANY_CATEGORIES[dc.category]?.color || '#999';
      const sc = STATUS_CONFIG[dc.status] || { label: dc.status, color: '#999', icon: 'o' };
      const fl = flag(dc.location);
      return '<div class="dc-card" data-dc-id="' + dcKey(dc) + '">' +
        '<div class="dc-card-header"><div>' +
        '<div class="dc-card-name"><span class="dc-card-cat" style="background:' + cc + '"></span>' + (dc.project || dc.name || '') + '</div>' +
        '<div class="dc-card-company">' + dc.company + '</div></div>' +
        '<div class="dc-card-power" style="color:' + cc + '">' + fmtPower(dc) + '</div></div>' +
        '<div class="dc-card-meta"><span class="dc-card-status" style="color:' + sc.color + '">' + sc.icon + ' ' + sc.label + '</span>' +
        '<span class="dc-card-location">' + (fl ? fl + ' ' : '') + dc.location + '</span></div></div>';
    }).join('');
    el.querySelectorAll('.dc-card').forEach(card => {
      card.addEventListener('click', () => {
        const dc = DATA_CENTERS.find(d => dcKey(d) === card.dataset.dcId);
        if (!dc) return;
        map.flyTo([dc.lat, dc.lng], 8, { duration: 1 });
        const idx = getFilteredDCs().findIndex(d => dcKey(d) === card.dataset.dcId);
        if (markers[idx]) markers[idx].openPopup();
      });
    });
  }

  // ── Timeline ──────────────────────────────────────
  function renderTimeline() {
    const track = document.getElementById('timelineTrack');
    if (!track || !window.TIMELINE_EVENTS || !TIMELINE_EVENTS.length) return;
    const evts  = [...TIMELINE_EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
    const t0    = new Date('2025-01-01'), t1 = new Date('2026-09-01');
    const span  = (t1 - t0) / 864e5;
    const W = 2800, pad = 60, lineY = 260;
    track.style.minWidth = W + 'px'; track.style.height = '340px';
    const line = track.querySelector('.timeline-line');
    if (line) line.style.cssText = 'position:absolute;top:' + lineY + 'px;bottom:auto;left:' + pad + 'px;right:' + pad + 'px;';
    let cur = new Date(t0);
    while (cur <= t1) {
      const x = pad + ((cur - t0) / 864e5 / span) * (W - 2*pad);
      const lbl = document.createElement('div');
      lbl.style.cssText = 'position:absolute;top:' + (lineY+16) + 'px;left:' + x + 'px;font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.06em;transform:translateX(-50%);white-space:nowrap;';
      lbl.textContent = cur.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      track.appendChild(lbl);
      const tick = document.createElement('div');
      tick.style.cssText = 'position:absolute;top:' + (lineY-4) + 'px;left:' + x + 'px;width:1px;height:10px;background:var(--border-light);transform:translateX(-50%);';
      track.appendChild(tick);
      cur.setMonth(cur.getMonth() + 1);
    }
    const pos = [];
    evts.forEach(evt => {
      const d = new Date(evt.date);
      if (d < t0 || d > t1) return;
      const x = pad + ((d - t0) / 864e5 / span) * (W - 2*pad);
      const hs = [40, 80, 120, 160, 200, 230];
      let bh = hs[0], bg = 0;
      for (const h of hs) {
        let mg = Infinity;
        pos.filter(p => Math.abs(p.x - x) < 130).forEach(p => mg = Math.min(mg, Math.abs(p.h - h)));
        if (mg > bg) { bg = mg; bh = h; }
      }
      pos.push({ x, h: bh });
      const cc = COMPANY_CATEGORIES[evt.category]?.color || '#3b82f6';
      const ms = evt.impact === 'high' ? 16 : 12;
      const el = document.createElement('div');
      el.style.cssText = 'position:absolute;left:' + (x-60) + 'px;top:0;width:120px;height:100%;';
      el.innerHTML =
        '<div class="tl-dot" style="position:absolute;top:' + (lineY-ms/2) + 'px;left:' + (60-ms/2) + 'px;width:' + ms + 'px;height:' + ms + 'px;border-radius:50%;border:2px solid ' + cc + ';background:' + cc + '33;cursor:pointer;z-index:10;transition:all 200ms"></div>' +
        '<div style="position:absolute;top:' + (lineY-bh) + 'px;left:60px;width:1px;height:' + bh + 'px;background:' + cc + '44;transform:translateX(-50%)"></div>' +
        '<div style="position:absolute;top:' + (lineY-bh-3) + 'px;left:57px;width:6px;height:6px;border-radius:50%;background:' + cc + '"></div>' +
        '<div style="position:absolute;top:' + (lineY-bh-22) + 'px;left:68px;font-size:10px;font-weight:600;color:' + cc + ';white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis">' + evt.title + '</div>' +
        '<div class="tl-bubble" style="position:absolute;top:' + (lineY-bh-30) + 'px;left:60px;transform:translateX(-50%) translateY(-100%);width:280px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:var(--space-3);box-shadow:var(--shadow-lg);opacity:0;pointer-events:none;transition:opacity 200ms;z-index:100;font-size:11px">' +
          '<div style="font-weight:600;color:var(--text-faint);margin-bottom:4px">' + d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) + '</div>' +
          '<div style="font-weight:700;font-size:13px;margin-bottom:4px;color:' + cc + '">' + evt.title + '</div>' +
          '<div style="color:var(--text-muted);line-height:1.4;margin-bottom:6px">' + (evt.description || '') + '</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:3px">' + (evt.companies || []).map(c => '<span style="font-size:10px;padding:1px 6px;border-radius:999px;background:var(--accent-glow);color:var(--accent)">' + c + '</span>').join('') + '</div>' +
        '</div>';
      const dot = el.querySelector('.tl-dot'), bubble = el.querySelector('.tl-bubble');
      el.addEventListener('mouseenter', () => { bubble.style.opacity = '1'; bubble.style.pointerEvents = 'auto'; dot.style.transform = 'scale(1.5)'; dot.style.boxShadow = '0 0 10px ' + cc; });
      el.addEventListener('mouseleave', () => { bubble.style.opacity = '0'; bubble.style.pointerEvents = 'none'; dot.style.transform = ''; dot.style.boxShadow = 'none'; });
      track.appendChild(el);
    });
  }

  // ── Stats ─────────────────────────────────────────
  function renderStats() {
    const f  = getFilteredDCs();
    const tgw = f.reduce((s, d) => s + (d.powerGW || 0), 0);
    const ogw = f.filter(d => d.status === 'operational').reduce((s, d) => s + (d.powerGW || 0), 0);
    const cgw = f.filter(d => d.status === 'construction').reduce((s, d) => s + (d.powerGW || 0), 0);
    setText('statTotalGW',     tgw.toFixed(1) + ' GW');
    setText('statOperational', ogw.toFixed(1) + ' GW');
    setText('statConstruction',cgw.toFixed(1) + ' GW');
    setText('statSites',       f.length);
  }

  function renderHeaderStats() {
    const el = document.getElementById('headerStats');
    if (!el) return;
    const tgw = DATA_CENTERS.reduce((s, d) => s + (d.powerGW || 0), 0);
    const online = DATA_CENTERS.filter(d => d.status === 'operational').length;
    el.innerHTML =
      '<div class="header-stat"><span class="header-stat-value">' + tgw.toFixed(1) + '</span><span class="header-stat-label">Total GW</span></div>' +
      '<div class="header-stat"><span class="header-stat-value">' + DATA_CENTERS.length + '</span><span class="header-stat-label">Sites</span></div>' +
      '<div class="header-stat"><span class="header-stat-value">' + online + '</span><span class="header-stat-label">Online</span></div>';
  }

  function renderLegend() {
    const el = document.getElementById('mapLegend');
    if (!el) return;
    let h = '<div class="legend-title">Categories</div>';
    Object.values(COMPANY_CATEGORIES).forEach(c => { h += '<div class="legend-item"><div class="legend-dot" style="background:' + c.color + '"></div>' + c.label + '</div>'; });
    h += '<div class="legend-title" style="margin-top:8px">Status</div>';
    Object.values(STATUS_CONFIG).forEach(s => { h += '<div class="legend-item"><div class="legend-dot" style="background:' + s.color + '"></div>' + s.label + '</div>'; });
    el.innerHTML = h;
  }

  // ── Table ─────────────────────────────────────────
  function initTable() {
    document.querySelectorAll('#data-table th[data-sort]').forEach(th => {
      th.style.cursor = 'pointer';
      th.addEventListener('click', () => {
        const col = th.dataset.sort;
        tableSort.asc = tableSort.column === col ? !tableSort.asc : true;
        tableSort.column = col;
        renderTable();
      });
    });
  }

  function renderTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    const rows = [...getFilteredDCs()];
    rows.sort((a, b) => {
      let av, bv;
      const col = tableSort.column;
      if (col === 'project')    { av = a.project || a.name || ''; bv = b.project || b.name || ''; }
      else if (col === 'company')   { av = a.company || '';   bv = b.company || ''; }
      else if (col === 'location')  { av = a.location || '';  bv = b.location || ''; }
      else if (col === 'capacity')  { av = a.powerMW || 0;    bv = b.powerMW || 0; }
      else if (col === 'status')    { av = a.status || '';    bv = b.status || ''; }
      else if (col === 'investment'){ av = pi(a.investment);  bv = pi(b.investment); }
      if (typeof av === 'number') return tableSort.asc ? av - bv : bv - av;
      return tableSort.asc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
    tbody.innerHTML = rows.map(dc => {
      const sc = STATUS_CONFIG[dc.status] || { label: dc.status, color: '#999', icon: 'o' };
      const cc = COMPANY_CATEGORIES[dc.category]?.color || '#999';
      const fl = flag(dc.location);
      const nm = dc.project || dc.name || '';
      const nc = dc.source ? '<a href="' + dc.source + '" target="_blank" rel="noopener" style="color:' + cc + ';text-decoration:none">' + nm + '</a>' : nm;
      return '<tr data-dc-id="' + dcKey(dc) + '" style="cursor:pointer">' +
        '<td><span class="table-cat-dot" style="background:' + cc + '"></span>' + nc + '</td>' +
        '<td>' + (dc.company || '') + '</td>' +
        '<td>' + (fl ? fl + ' ' : '') + (dc.location || '') + '</td>' +
        '<td>' + (dc.investment || '&mdash;') + '</td>' +
        '<td>' + fmtPower(dc) + '</td>' +
        '<td><span class="table-status" style="color:' + sc.color + '">' + sc.icon + ' ' + sc.label + '</span></td></tr>';
    }).join('');
    document.querySelectorAll('#data-table th[data-sort]').forEach(th => {
      th.classList.remove('sort-asc', 'sort-desc');
      if (th.dataset.sort === tableSort.column) th.classList.add(tableSort.asc ? 'sort-asc' : 'sort-desc');
    });
    tbody.querySelectorAll('tr[data-dc-id]').forEach(row => {
      row.addEventListener('click', () => {
        const dc = DATA_CENTERS.find(d => dcKey(d) === row.dataset.dcId);
        if (dc) { map.flyTo([dc.lat, dc.lng], 8, { duration: 1 }); document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      });
    });
  }

  // ── Helpers ───────────────────────────────────────
  function fmtPower(dc) {
    if (dc.powerGW && dc.powerGW >= 1) return dc.powerGW.toFixed(1) + ' GW';
    if (dc.powerMW) return dc.powerMW + ' MW';
    return 'N/A';
  }
  function setText(id, v) { const e = document.getElementById(id); if (e) e.textContent = v; }
  function fmtDate(s) { if (!s) return 'TBD'; return new Date(s + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); }
  function pi(s) {
    if (!s) return 0;
    const m = String(s).match(/([\d.]+)\s*(B|M|T)?/i);
    return m ? parseFloat(m[1]) * ({ b:1e9, m:1e6, t:1e12 }[(m[2]||'').toLowerCase()] || 1) : 0;
  }
  function flag(location) {
    const c = (location || '').split(',').map(s => s.trim()).pop();
    const iso = ISO[c]; if (!iso) return '';
    return iso.toUpperCase().replace(/./g, ch => String.fromCodePoint(127397 + ch.charCodeAt(0)));
  }
  const ISO = { USA:'US', UK:'GB', China:'CN', France:'FR', Finland:'FI', Norway:'NO', Iceland:'IS',
    Israel:'IL', 'Saudi Arabia':'SA', 'South Korea':'KR', Japan:'JP', Germany:'DE', Sweden:'SE',
    Denmark:'DK', Spain:'ES', Italy:'IT', Canada:'CA', India:'IN', Singapore:'SG', UAE:'AE',
    Brazil:'BR', Australia:'AU', Indonesia:'ID', Vietnam:'VN', Thailand:'TH', Portugal:'PT',
    Kazakhstan:'KZ', Netherlands:'NL', Mexico:'MX', Chile:'CL', Malaysia:'MY', Poland:'PL',
    Ireland:'IE', Switzerland:'CH', 'New Zealand':'NZ' };

  document.addEventListener('DOMContentLoaded', init);
})();
