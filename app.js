// ═══════════════════════════════════════
// AI Power DC Map — Application Logic
// ═══════════════════════════════════════

(function() {
  'use strict';

  // State
  let map;
  let tileLayer;
  let markers = [];
  let activeFilters = {
    categories: new Set(Object.keys(COMPANY_CATEGORIES)),
    statuses: new Set(Object.keys(STATUS_CONFIG)),
    search: ''
  };
  let activeTab = 'list';

  // ─── Init ───
  function init() {
    initTheme();
    initMap();
    initFilters();
    initSearch();
    initTabs();
    renderMarkers();
    renderSidebar();
    renderTimeline();
    renderStats();
    renderHeaderStats();
    renderLegend();
  }

  // ─── Theme Toggle ───
  function initTheme() {
    const toggle = document.querySelector('[data-theme-toggle]');
    const root = document.documentElement;
    const theme = 'dark';
    root.setAttribute('data-theme', theme);
    setMapTiles(theme);

    if (toggle) {
      updateThemeIcon(toggle, theme);
      toggle.disabled = true;
      toggle.title = 'Dark theme is locked for this build';
      toggle.style.opacity = '0.45';
      toggle.style.cursor = 'not-allowed';
    }
  }

  function updateThemeIcon(toggle, theme) {
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }

  function setMapTiles(theme) {
    if (!map) return;

    if (tileLayer) {
      map.removeLayer(tileLayer);
    }

    const tileUrl = theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    tileLayer = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 18
    });

    tileLayer.addTo(map);
  }

  // ─── Map ───
  function initMap() {
    map = L.map('map', {
      center: [30, 0],
      zoom: 2.5,
      minZoom: 2,
      maxZoom: 14,
      zoomControl: true,
      scrollWheelZoom: true,
      worldCopyJump: true,
    });

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setMapTiles(currentTheme);
  }

  // ─── Filters ───
  function initFilters() {
    const catContainer = document.getElementById('categoryFilters');
    Object.entries(COMPANY_CATEGORIES).forEach(([key, cat]) => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip active';
      chip.dataset.category = key;
      chip.innerHTML = `<span class="chip-dot" style="background:${cat.color}"></span>${cat.label}`;
      chip.addEventListener('click', () => toggleCategoryFilter(key, chip));
      catContainer.appendChild(chip);
    });

    const statusContainer = document.getElementById('statusFilters');
    Object.entries(STATUS_CONFIG).forEach(([key, st]) => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip active';
      chip.dataset.status = key;
      chip.innerHTML = `<span class="chip-dot" style="background:${st.color}"></span>${st.label}`;
      chip.addEventListener('click', () => toggleStatusFilter(key, chip));
      statusContainer.appendChild(chip);
    });
  }

  function toggleCategoryFilter(key, chip) {
    if (activeFilters.categories.has(key)) {
      activeFilters.categories.delete(key);
      chip.classList.remove('active');
    } else {
      activeFilters.categories.add(key);
      chip.classList.add('active');
    }
    applyFilters();
  }

  function toggleStatusFilter(key, chip) {
    if (activeFilters.statuses.has(key)) {
      activeFilters.statuses.delete(key);
      chip.classList.remove('active');
    } else {
      activeFilters.statuses.add(key);
      chip.classList.add('active');
    }
    applyFilters();
  }

  function initSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
      activeFilters.search = e.target.value.toLowerCase();
      applyFilters();
    });
  }

  function getFilteredDCs() {
    return DATA_CENTERS.filter(dc => {
      if (!activeFilters.categories.has(dc.category)) return false;
      if (!activeFilters.statuses.has(dc.status)) return false;
      if (activeFilters.search) {
        const q = activeFilters.search;
        const searchable = `${dc.name} ${dc.company} ${dc.location} ${dc.description}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }

  function applyFilters() {
    renderMarkers();
    renderSidebar();
    renderStats();
  }

  // ─── Tabs ───
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

  // ─── Map Markers ───
  function renderMarkers() {
    // Clear existing
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const filtered = getFilteredDCs();

    filtered.forEach(dc => {
      const catColor = COMPANY_CATEGORIES[dc.category]?.color || '#999';
      const statusColor = STATUS_CONFIG[dc.status]?.color || '#999';
      const size = getMarkerSize(dc.powerMW);

      const icon = L.divIcon({
        className: '',
        html: `<div class="custom-marker ${dc.status === 'operational' ? 'pulse' : ''}" style="
          width:${size}px; height:${size}px;
          background: ${catColor}33;
          border-color: ${catColor};
          color: ${catColor};
        "></div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size/2],
      });

      const marker = L.marker([dc.lat, dc.lng], { icon });
      marker.bindPopup(createPopupContent(dc, catColor), {
        maxWidth: 340,
        minWidth: 280,
        closeButton: true,
        className: 'custom-popup'
      });

      marker.addTo(map);
      markers.push(marker);
    });

    document.getElementById('dcCount').textContent = filtered.length;
  }

  function getMarkerSize(powerMW) {
    if (powerMW >= 2000) return 28;
    if (powerMW >= 1000) return 22;
    if (powerMW >= 500) return 18;
    if (powerMW >= 100) return 14;
    return 10;
  }

  function createPopupContent(dc, catColor) {
    const statusCfg = STATUS_CONFIG[dc.status];
    const catLabel = COMPANY_CATEGORIES[dc.category]?.label || dc.category;
    const powerDisplay = dc.powerGW >= 1 ? `${dc.powerGW.toFixed(1)} GW` : `${dc.powerMW} MW`;
    const dateStr = dc.onlineDate ? formatDate(dc.onlineDate) : 'TBD';
    const flag = getCountryFlag(dc.location);
    const locationLabel = `${flag ? `${flag} ` : ''}${dc.location}`;

    return `<div class="popup-inner">
      <div class="popup-category" style="color:${catColor}">${catLabel}</div>
      <div class="popup-name">${dc.name}</div>
      <div class="popup-company">${dc.company} — <span class="popup-location">${locationLabel}</span></div>
      <div class="popup-meta">
        <div class="popup-meta-item">
          <span class="popup-meta-label">Power</span>
          <span class="popup-meta-value" style="color:${catColor}">${powerDisplay}</span>
        </div>
        <div class="popup-meta-item">
          <span class="popup-meta-label">Status</span>
          <span class="popup-status" style="color:${statusCfg.color}; background:${statusCfg.color}15;">
            ${statusCfg.icon} ${statusCfg.label}
          </span>
        </div>
        <div class="popup-meta-item">
          <span class="popup-meta-label">${dc.status === 'operational' ? 'Online Since' : 'Expected'}</span>
          <span class="popup-meta-value">${dateStr}</span>
        </div>
        <div class="popup-meta-item">
          <span class="popup-meta-label">Chips</span>
          <span class="popup-meta-value">${dc.chips || 'N/A'}</span>
        </div>
      </div>
      ${dc.partner ? `<div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--space-2)"><strong>Partners:</strong> ${dc.partner}</div>` : ''}
      <div class="popup-desc">${dc.description}</div>
    </div>`;
  }

  // ─── Sidebar ───
  function renderSidebar() {
    const container = document.getElementById('sidebarContent');

    if (activeTab === 'semis') {
      container.innerHTML = SEMICONDUCTOR_COMPANIES.map(s => `
        <div class="semi-card">
          <div class="semi-card-header">
            <span class="semi-card-name">${s.name}</span>
            <span class="semi-card-ticker">${s.ticker}</span>
          </div>
          <div class="semi-card-role">${s.role}</div>
        </div>
      `).join('');
      return;
    }

    const filtered = getFilteredDCs().sort((a, b) => b.powerMW - a.powerMW);

    container.innerHTML = filtered.map(dc => {
      const catColor = COMPANY_CATEGORIES[dc.category]?.color || '#999';
      const statusCfg = STATUS_CONFIG[dc.status];
      const powerDisplay = dc.powerGW >= 1 ? `${dc.powerGW.toFixed(1)} GW` : `${dc.powerMW} MW`;
      const flag = getCountryFlag(dc.location);
      const locationLabel = `${flag ? `${flag} ` : ''}${dc.location}`;

      return `<div class="dc-card" data-dc-id="${dc.id}">
        <div class="dc-card-header">
          <div>
            <div class="dc-card-name"><span class="dc-card-cat" style="background:${catColor}"></span>${dc.name}</div>
            <div class="dc-card-company">${dc.company}</div>
          </div>
          <div class="dc-card-power">${powerDisplay}</div>
        </div>
        <div class="dc-card-meta">
          <span class="dc-card-status" style="color:${statusCfg.color}">${statusCfg.icon} ${statusCfg.label}</span>
          <span class="dc-card-location">${locationLabel}</span>
        </div>
      </div>`;
    }).join('');

    // Click to fly to marker
    container.querySelectorAll('.dc-card').forEach(card => {
      card.addEventListener('click', () => {
        const dcId = card.dataset.dcId;
        const dc = DATA_CENTERS.find(d => d.id === dcId);
        if (dc) {
          map.flyTo([dc.lat, dc.lng], 8, { duration: 1 });
          const markerIdx = getFilteredDCs().findIndex(d => d.id === dcId);
          if (markers[markerIdx]) {
            markers[markerIdx].openPopup();
          }
        }
      });
    });
  }

  // ─── Timeline ───
  function renderTimeline() {
    const track = document.getElementById('timelineTrack');
    const events = TIMELINE_EVENTS.sort((a, b) => new Date(a.date) - new Date(b.date));

    const startDate = new Date('2025-01-01');
    const endDate = new Date('2026-06-01');
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const trackWidth = 2800;
    const padding = 60;
    const lineY = 260; // Y position of the timeline line from top

    // Update track width
    track.style.minWidth = trackWidth + 'px';
    track.style.height = '340px';

    // Remove default timeline-line, we'll position it ourselves
    const existingLine = track.querySelector('.timeline-line');
    if (existingLine) {
      existingLine.style.position = 'absolute';
      existingLine.style.top = lineY + 'px';
      existingLine.style.bottom = 'auto';
      existingLine.style.left = padding + 'px';
      existingLine.style.right = padding + 'px';
    }

    // Month labels
    const months = [];
    let current = new Date(startDate);
    while (current <= endDate) {
      months.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
    }

    months.forEach(month => {
      const dayOffset = (month - startDate) / (1000 * 60 * 60 * 24);
      const x = padding + (dayOffset / totalDays) * (trackWidth - 2 * padding);
      const label = document.createElement('div');
      label.style.cssText = `position:absolute;top:${lineY + 16}px;left:${x}px;font-size:var(--text-xs);color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;transform:translateX(-50%);white-space:nowrap;`;
      label.textContent = month.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      track.appendChild(label);

      // Tick mark
      const tick = document.createElement('div');
      tick.style.cssText = `position:absolute;top:${lineY - 4}px;left:${x}px;width:1px;height:10px;background:var(--border-light);transform:translateX(-50%);`;
      track.appendChild(tick);
    });

    // Events - stagger vertical positions to avoid overlap
    const positions = [];
    events.forEach((evt, i) => {
      const evtDate = new Date(evt.date);
      if (evtDate < startDate || evtDate > endDate) return;

      const dayOffset = (evtDate - startDate) / (1000 * 60 * 60 * 24);
      const x = padding + (dayOffset / totalDays) * (trackWidth - 2 * padding);

      // Stagger heights to minimize overlap
      const stemHeights = [40, 75, 110, 145, 180, 210];
      let bestHeight = stemHeights[0];
      let bestGap = 0;
      for (const h of stemHeights) {
        let minGap = Infinity;
        for (const p of positions) {
          if (Math.abs(p.x - x) < 140) {
            const gap = Math.abs(p.h - h);
            if (gap < minGap) minGap = gap;
          }
        }
        if (minGap > bestGap) {
          bestGap = minGap;
          bestHeight = h;
        }
      }
      positions.push({ x, h: bestHeight });

      const catColor = getCategoryColor(evt.category);
      const markerSize = evt.impact === 'high' ? 16 : 12;

      // Event wrapper - needs width for hover detection
      const eventEl = document.createElement('div');
      eventEl.className = 'timeline-event';
      eventEl.style.cssText = `position:absolute;left:${x - 60}px;top:0;width:120px;height:100%;`;

      // Marker dot on the line
      const marker = document.createElement('div');
      marker.style.cssText = `
        position:absolute;
        top:${lineY - markerSize/2}px;
        left:${60 - markerSize/2}px;
        width:${markerSize}px;
        height:${markerSize}px;
        border-radius:50%;
        border:2px solid ${catColor};
        background:${catColor}33;
        cursor:pointer;
        transition:all 200ms ease;
        z-index:10;
      `;
      marker.addEventListener('mouseenter', () => {
        marker.style.transform = 'scale(1.5)';
        marker.style.boxShadow = `0 0 12px ${catColor}`;
        marker.style.zIndex = '20';
      });
      marker.addEventListener('mouseleave', () => {
        marker.style.transform = 'scale(1)';
        marker.style.boxShadow = 'none';
        marker.style.zIndex = '10';
      });
      eventEl.appendChild(marker);

      // Stem line going up
      const stem = document.createElement('div');
      stem.style.cssText = `
        position:absolute;
        top:${lineY - bestHeight}px;
        left:60px;
        width:1px;
        height:${bestHeight}px;
        background:${catColor}44;
        transform:translateX(-50%);
      `;
      eventEl.appendChild(stem);

      // Small dot at top of stem
      const topDot = document.createElement('div');
      topDot.style.cssText = `
        position:absolute;
        top:${lineY - bestHeight - 3}px;
        left:57px;
        width:6px;
        height:6px;
        border-radius:50%;
        background:${catColor};
      `;
      eventEl.appendChild(topDot);

      // Mini label at top of stem
      const miniLabel = document.createElement('div');
      miniLabel.style.cssText = `
        position:absolute;
        top:${lineY - bestHeight - 22}px;
        left:68px;
        font-size:10px;
        font-weight:600;
        color:${catColor};
        white-space:nowrap;
        max-width:120px;
        overflow:hidden;
        text-overflow:ellipsis;
      `;
      miniLabel.textContent = evt.title;
      eventEl.appendChild(miniLabel);

      // Bubble (on hover)
      const bubble = document.createElement('div');
      bubble.className = 'timeline-bubble';
      bubble.style.cssText = `
        position:absolute;
        top:${lineY - bestHeight - 30}px;
        left:60px;
        transform:translateX(-50%) translateY(-100%);
        width:280px;
        background:var(--bg-card);
        border:1px solid var(--border);
        border-radius:var(--radius-lg);
        padding:var(--space-3);
        box-shadow:var(--shadow-lg);
        opacity:0;
        pointer-events:none;
        transition:opacity 200ms ease;
        z-index:100;
        font-size:var(--text-xs);
      `;

      const dateStr = evtDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      bubble.innerHTML = `
        <div class="bubble-date">${dateStr}</div>
        <div class="bubble-title" style="color:${catColor}">${evt.title}</div>
        <div class="bubble-desc">${evt.description}</div>
        <div class="bubble-companies">${evt.companies.map(c => `<span class="bubble-company-tag">${c}</span>`).join('')}</div>
      `;
      eventEl.appendChild(bubble);

      // Show/hide bubble on hover
      eventEl.addEventListener('mouseenter', () => { bubble.style.opacity = '1'; bubble.style.pointerEvents = 'auto'; });
      eventEl.addEventListener('mouseleave', () => { bubble.style.opacity = '0'; bubble.style.pointerEvents = 'none'; });

      track.appendChild(eventEl);
    });
  }

  function getCategoryColor(category) {
    return COMPANY_CATEGORIES[category]?.color || '#3b82f6';
  }

  // ─── Stats ───
  function renderStats() {
    const filtered = getFilteredDCs();
    const totalGW = filtered.reduce((sum, dc) => sum + dc.powerGW, 0);
    const operationalGW = filtered.filter(dc => dc.status === 'operational').reduce((sum, dc) => sum + dc.powerGW, 0);
    const constructionGW = filtered.filter(dc => dc.status === 'construction').reduce((sum, dc) => sum + dc.powerGW, 0);

    animateNumber('statTotalGW', totalGW, 'GW');
    animateNumber('statOperational', operationalGW, 'GW');
    animateNumber('statConstruction', constructionGW, 'GW');
    document.getElementById('statSites').textContent = filtered.length;
  }

  function animateNumber(id, target, suffix) {
    const el = document.getElementById(id);
    const formatted = target >= 10 ? target.toFixed(0) : target.toFixed(1);
    el.textContent = `${formatted} ${suffix}`;
  }

  function renderHeaderStats() {
    const totalGW = DATA_CENTERS.reduce((sum, dc) => sum + dc.powerGW, 0);
    const operational = DATA_CENTERS.filter(dc => dc.status === 'operational').length;
    const container = document.getElementById('headerStats');
    container.innerHTML = `
      <div class="header-stat">
        <span class="header-stat-value">${totalGW.toFixed(1)}</span>
        <span class="header-stat-label">Total GW</span>
      </div>
      <div class="header-stat">
        <span class="header-stat-value">${DATA_CENTERS.length}</span>
        <span class="header-stat-label">Sites</span>
      </div>
      <div class="header-stat">
        <span class="header-stat-value">${operational}</span>
        <span class="header-stat-label">Online</span>
      </div>
    `;
  }

  function renderLegend() {
    const legend = document.getElementById('mapLegend');
    let html = '<div class="legend-title">Categories</div>';
    Object.entries(COMPANY_CATEGORIES).forEach(([key, cat]) => {
      html += `<div class="legend-item"><div class="legend-dot" style="background:${cat.color}"></div>${cat.label}</div>`;
    });
    html += '<div class="legend-title" style="margin-top:8px">Status</div>';
    Object.entries(STATUS_CONFIG).forEach(([key, st]) => {
      html += `<div class="legend-item"><div class="legend-dot" style="background:${st.color}"></div>${st.label}</div>`;
    });
    html += `<div class="legend-size-row">
      <div class="legend-size-dot" style="width:10px;height:10px"></div>
      <div class="legend-size-dot" style="width:16px;height:16px"></div>
      <div class="legend-size-dot" style="width:24px;height:24px"></div>
      <span class="legend-size-label">&lt;100 MW → 1 GW → 2+ GW</span>
    </div>`;
    legend.innerHTML = html;
  }

  // ─── Helpers ───
  function formatDate(dateStr) {
    const d = new Date(dateStr + '-01');
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  function getCountryFlag(location) {
    const country = getCountryFromLocation(location);
    const isoCode = COUNTRY_TO_ISO[country];
    return isoCode ? isoToFlag(isoCode) : '';
  }

  function getCountryFromLocation(location) {
    const trimmed = (location || '').trim();
    if (!trimmed) return '';

    if (/multiple\s+us\s+locations/i.test(trimmed)) return 'USA';

    const parts = trimmed.split(',').map((part) => part.trim()).filter(Boolean);
    const lastPart = parts[parts.length - 1];

    if (/^US$/i.test(lastPart)) return 'USA';
    if (/^UK$/i.test(lastPart)) return 'UK';

    return lastPart;
  }

  function isoToFlag(isoCode) {
    return isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
  }

  const COUNTRY_TO_ISO = {
    USA: 'US',
    UK: 'GB',
    China: 'CN',
    France: 'FR',
    Finland: 'FI',
    Norway: 'NO',
    Iceland: 'IS',
    Israel: 'IL',
    'Saudi Arabia': 'SA',
    'South Korea': 'KR',
    Japan: 'JP',
    Germany: 'DE',
    Sweden: 'SE',
    Denmark: 'DK',
    Spain: 'ES',
    Italy: 'IT',
    Canada: 'CA',
    India: 'IN',
    Singapore: 'SG',
    UAE: 'AE'
  };

  // ─── Start ───
  document.addEventListener('DOMContentLoaded', init);
})();
