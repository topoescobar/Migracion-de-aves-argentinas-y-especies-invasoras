/* =========================================================
   MAPAS INTERACTIVOS (Leaflet)
   crearMapa(elementoMapa, cfg, elementoPasos)
   ========================================================= */

const CRS = L.CRS.EPSG3857;
const proyectar = (ll) => CRS.latLngToPoint(L.latLng(ll), 0);
const desproyectar = (p) => CRS.pointToLatLng(p, 0);

/* Curva cuadrática entre dos puntos (en espacio proyectado) */
function curvaCuadratica(a, b, curva = 0.15, n = 48) {
  const A = proyectar(a), B = proyectar(b);
  const M = A.add(B).divideBy(2);
  const d = B.subtract(A);
  const C = L.point(M.x - d.y * curva, M.y + d.x * curva);
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    out.push(desproyectar(L.point(
      u * u * A.x + 2 * u * t * C.x + t * t * B.x,
      u * u * A.y + 2 * u * t * C.y + t * t * B.y)));
  }
  return out;
}

/* Spline Catmull-Rom por varios puntos */
function spline(puntos, n = 20) {
  const P = puntos.map(proyectar);
  const out = [];
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || P[i + 1];
    for (let j = 0; j < n; j++) {
      const t = j / n, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push(desproyectar(L.point(f(p0.x, p1.x, p2.x, p3.x), f(p0.y, p1.y, p2.y, p3.y))));
    }
  }
  out.push(desproyectar(P[P.length - 1]));
  return out;
}

function trazado(ruta) {
  return ruta.puntos.length > 2 ? spline(ruta.puntos) : curvaCuadratica(ruta.puntos[0], ruta.puntos[1], ruta.curva ?? 0.15);
}

function anguloFinal(latlngs) {
  const a = proyectar(latlngs[latlngs.length - 3]);
  const b = proyectar(latlngs[latlngs.length - 1]);
  return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
}

const ICONOS_LUGAR = {
  anillo:    '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="none" stroke-width="3.2"/></svg>',
  recaptura: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.5" fill="none" stroke-width="2"/><circle cx="10" cy="10" r="3.6"/></svg>',
  residente: '<svg viewBox="0 0 20 20"><path d="M15.5 6.5A7 7 0 1 0 17 11" fill="none" stroke-width="2.4" stroke-linecap="round"/><path d="M17.8 3.2l-.4 4.8-4.6-1.2z"/></svg>',
  invernada: '<svg viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" rx="2.5" transform="rotate(45 10 10)"/></svg>',
  cria:      '<svg viewBox="0 0 20 20"><ellipse cx="10" cy="11" rx="5.4" ry="6.6"/></svg>',
  destino:   '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="4"/></svg>',
  info:      '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/><path d="M10 9v5M10 6v.5" stroke-width="2.2" stroke-linecap="round" class="trazo-claro"/></svg>'
};

function crearMapa(el, cfg, pasosEl, abrirFicha) {
  const mapa = L.map(el, {
    zoomControl: true, scrollWheelZoom: false, keyboard: false,
    zoomSnap: 0.25, fadeAnimation: false, attributionControl: true, minZoom: 3, maxZoom: 9
  });
  mapa.fitBounds(cfg.vista, { padding: [10, 10] });

  if (window.FONDO) {
    // Fondo embebido (js/fondo.js): relieve Natural Earth + límites, funciona sin internet
    mapa.setMaxBounds(L.latLngBounds(FONDO.limites).pad(0.05));
    L.imageOverlay(FONDO.imagen, FONDO.limites, { attribution: "Relieve y límites: Natural Earth" }).addTo(mapa);
    L.geoJSON(FONDO.bordes, { interactive: false, style: { className: "borde-pais" } }).addTo(mapa);
    FONDO.paises.forEach(([nombre, pos]) => L.marker(pos, {
      interactive: false,
      icon: L.divIcon({ className: "etiqueta-pais", html: `<span>${nombre}</span>`, iconSize: null })
    }).addTo(mapa));
  } else {
    // Relieve físico (marca bien la cordillera y los ambientes)
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}", {
      maxNativeZoom: 8, maxZoom: 9,
      attribution: "Relieve: Esri, US NPS"
    }).addTo(mapa);
    // Límites y nombres de países encima
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
      maxNativeZoom: 9, maxZoom: 9, opacity: 0.75,
      attribution: "Límites y nombres: Esri"
    }).addTo(mapa);
  }

  const capas = {};               // id -> [capas Leaflet]
  const reg = (id, capa) => { (capas[id] ||= []).push(capa); return capa; };

  // --- Biomas ---
  (cfg.biomas || []).forEach(b => {
    reg(b.id, L.polygon(b.coords, { className: "bioma " + b.clase, smoothFactor: 1.5 }).addTo(mapa));
    if (b.etiqueta) reg(b.id, L.marker(b.etiqueta, {
      interactive: false,
      icon: L.divIcon({ className: "etiqueta-bioma", html: `<span>${b.nombre}</span>`, iconSize: null })
    }).addTo(mapa));
  });

  // --- Corredores (bandas anchas) ---
  (cfg.corredores || []).forEach(c => {
    reg(c.id, L.polyline(spline(c.coords), { className: "corredor", interactive: false }).addTo(mapa));
    reg(c.id, L.marker(c.etiqueta, {
      interactive: false,
      icon: L.divIcon({ className: "etiqueta-corredor", html: `<span>⟷ ${c.texto}</span>`, iconSize: null })
    }).addTo(mapa));
  });

  // --- Ríos ---
  (cfg.rios || []).forEach(r => {
    const linea = L.polyline(spline(r.coords), { className: "rio", interactive: false }).addTo(mapa);
    reg(r.id, linea);
    const medio = r.coords[Math.floor(r.coords.length / 2)];
    reg(r.id, L.marker(medio, {
      interactive: false,
      icon: L.divIcon({ className: "etiqueta-rio", html: `<span>Río ${r.nombre}</span>`, iconSize: null })
    }).addTo(mapa));
  });

  // --- Rutas migratorias (halo + trazo animado + flecha) ---
  (cfg.rutas || []).forEach(r => {
    const pts = trazado(r);
    reg(r.id, L.polyline(pts, { className: "ruta-halo " + r.clase, interactive: false }).addTo(mapa));
    reg(r.id, L.polyline(pts, { className: "ruta " + r.clase, interactive: false }).addTo(mapa));
    if (r.flecha !== false) {
      reg(r.id, L.marker(pts[pts.length - 1], {
        interactive: false,
        icon: L.divIcon({
          className: "flecha " + r.clase, iconSize: [22, 22], iconAnchor: [11, 11],
          html: `<svg viewBox="0 0 22 22" style="transform:rotate(${anguloFinal(pts)}deg)"><path d="M3 4 L20 11 L3 18 L7 11Z"/></svg>`
        })
      }).addTo(mapa));
    }
  });

  // --- Lugares señalizados ---
  (cfg.lugares || []).forEach(l => {
    reg(l.id, L.marker(l.pos, {
      interactive: false, zIndexOffset: 200,
      icon: L.divIcon({
        className: `lugar lugar--${l.tipo} lado-${l.lado || "der"}`, iconSize: [20, 20], iconAnchor: [10, 10],
        html: `${ICONOS_LUGAR[l.tipo] || ICONOS_LUGAR.info}<span class="lugar-texto">${l.texto}</span>`
      })
    }).addTo(mapa));
  });

  // --- Especies (foto circular, clic → ficha) ---
  (cfg.especies || []).forEach(e => {
    const sp = ESPECIES[e.id];
    const foto = `img/especies/${sp.foto || e.id}.jpg`;
    const m = L.marker(e.pos, {
      zIndexOffset: 500, keyboard: true, title: `${sp.comun} — ver ficha`,
      icon: L.divIcon({
        className: `marcador-especie grupo-${sp.grupo}`, iconSize: [54, 54], iconAnchor: [27, 27],
        html: `<span class="pulso"></span><img src="${foto}" alt=""><span class="nombre">${sp.comun}</span>`
      })
    }).addTo(mapa);
    m.on("click", () => abrirFicha(e.id));
    reg(e.id, m);
  });

  // --- Leyenda ---
  const leyenda = L.control({ position: cfg.leyendaPos || "bottomright" });
  leyenda.onAdd = () => {
    const div = L.DomUtil.create("div", "leyenda");
    if (window.matchMedia("(max-width: 900px)").matches) div.classList.add("plegada");
    div.innerHTML = `<button class="ley-titulo" type="button">Referencias</button>` + cfg.leyenda.map(it => {
      let simb = "";
      if (it.tipo === "area") simb = `<span class="ley-area ${it.clase}"></span>`;
      if (it.tipo === "corredor") simb = `<span class="ley-corredor"></span>`;
      if (it.tipo === "linea") simb = `<svg class="ley-linea ${it.clase}" viewBox="0 0 34 10"><line x1="2" y1="5" x2="26" y2="5"/><path d="M24 1 L33 5 L24 9Z"/></svg>`;
      if (it.tipo === "rio") simb = `<svg class="ley-rio" viewBox="0 0 34 10"><path d="M2 6 Q9 1 17 5 T32 4"/></svg>`;
      if (it.tipo === "lugar") simb = `<span class="ley-lugar lugar--${it.clase}">${ICONOS_LUGAR[it.clase]}</span>`;
      if (it.tipo === "foto") simb = `<span class="ley-foto grupo-${it.clase}"></span>`;
      return `<div class="ley-item">${simb}<span>${it.texto}</span></div>`;
    }).join("");
    div.querySelector(".ley-titulo").addEventListener("click", () => div.classList.toggle("plegada"));
    L.DomEvent.disableClickPropagation(div);
    return div;
  };
  leyenda.addTo(mapa);

  // --- Recorrido guiado ---
  const todos = Object.keys(capas);
  function aplicarResaltado(ids) {
    todos.forEach(id => {
      const activo = !ids || ids.includes(id);
      capas[id].forEach(c => {
        const nodo = c.getElement ? c.getElement() : null;
        if (!nodo) return;
        nodo.classList.toggle("atenuado", !activo);
        nodo.classList.toggle("resaltado", !!ids && activo);
      });
    });
  }

  const botones = [];
  function irAPaso(i) {
    botones.forEach((b, j) => b.classList.toggle("activo", j === i + 1)); // [0] = vista general
    if (i < 0) {
      aplicarResaltado(null);
      mapa.flyToBounds(cfg.vista, { padding: [10, 10], duration: 1.1 });
      return;
    }
    const p = cfg.pasos[i];
    aplicarResaltado(p.resaltar);
    mapa.flyToBounds(p.bounds || cfg.vista, { padding: [24, 24], duration: 1.1 });
  }

  if (pasosEl) {
    const general = document.createElement("button");
    general.className = "paso paso-general activo";
    general.innerHTML = `<span class="paso-num">◎</span><span class="paso-cuerpo"><span class="paso-titulo">Vista general</span></span>`;
    general.addEventListener("click", () => irAPaso(-1));
    pasosEl.appendChild(general);
    botones.push(general);
    cfg.pasos.forEach((p, i) => {
      const b = document.createElement("button");
      b.className = "paso";
      b.innerHTML = `<span class="paso-num">${i + 1}</span><span class="paso-cuerpo"><span class="paso-titulo">${p.titulo}</span><span class="paso-texto">${p.texto}</span></span>`;
      b.addEventListener("click", () => irAPaso(i));
      pasosEl.appendChild(b);
      botones.push(b);
    });
  }

  return {
    mapa,
    refrescar() { mapa.invalidateSize(); },
    // Avanza al siguiente paso; devuelve false si ya no quedan
    siguiente() {
      const i = botones.findIndex(b => b.classList.contains("activo")) - 1; // -1 = general
      if (i + 1 >= cfg.pasos.length) return false;
      irAPaso(i + 1); return true;
    },
    anterior() {
      const i = botones.findIndex(b => b.classList.contains("activo")) - 1;
      if (i < 0) return false;
      irAPaso(i - 1); return true;
    },
    reiniciar() { irAPaso(-1); }
  };
}
