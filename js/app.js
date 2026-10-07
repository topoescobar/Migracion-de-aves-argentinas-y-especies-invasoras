/* =========================================================
   PRESENTACIÓN: navegación, fichas, notas y mapas
   ========================================================= */

const diapos = [...document.querySelectorAll(".diapo")];
const contador = document.getElementById("contador");
const progreso = document.getElementById("progreso");
const panelNotas = document.getElementById("panel-notas");
const notasContenido = document.getElementById("notas-contenido");
const ficha = document.getElementById("ficha");
const mapas = {};   // nombre -> controlador (se crean al mostrarse la diapo)
let actual = 0;

/* ---------- Fichas de especies ---------- */
function abrirFicha(id) {
  const sp = ESPECIES[id];
  if (!sp) return;
  const archivo = sp.foto || id;
  const cred = CREDITOS[archivo];
  document.getElementById("ficha-foto").src = `img/especies/${archivo}.jpg`;
  document.getElementById("ficha-foto").alt = sp.comun;
  document.getElementById("ficha-credito").innerHTML = cred
    ? `Foto: ${cred.autor} · <a href="${cred.fuente}" target="_blank" rel="noopener">${cred.licencia}</a>` : "";
  document.getElementById("ficha-etiqueta").textContent = sp.etiqueta;
  document.getElementById("ficha-comun").textContent = sp.comun;
  document.getElementById("ficha-cientifico").textContent = sp.cientifico;
  document.getElementById("ficha-descripcion").textContent = sp.descripcion;
  document.getElementById("ficha-dato").textContent = sp.dato;
  ficha.className = "grupo-" + sp.grupo;
  ficha.showModal();
  mostrarCantos(id);
}
ficha.querySelector(".cerrar").addEventListener("click", () => ficha.close());

/* ---------- Cantos (xeno-canto, en línea): suena el primero al abrir ---------- */
const canto = new Audio();
const fichaCantos = document.getElementById("ficha-cantos");
let botonActivo = null;

function mostrarCantos(id) {
  const lista = CANTOS[id] || [];
  fichaCantos.innerHTML = "";
  fichaCantos.hidden = !lista.length;
  botonActivo = null;
  lista.forEach((c, i) => {
    const fila = document.createElement("div");
    fila.className = "canto";
    fila.innerHTML = `<button class="canto-btn" aria-label="Reproducir ${c.tipo}">▶</button>
      <span class="canto-tipo">${c.tipo}</span>
      <span class="canto-fuente"><a href="https://xeno-canto.org/${c.xc}" target="_blank" rel="noopener">XC${c.xc} ↗</a>
        · ${c.autor} · <a href="${c.licenciaUrl}" target="_blank" rel="noopener">${c.licencia}</a></span>`;
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => alternarCanto(btn, c.audio));
    fichaCantos.appendChild(fila);
    if (i === 0) alternarCanto(btn, c.audio);
  });
}

function alternarCanto(btn, audio) {
  if (btn === botonActivo) { canto.paused ? canto.play().catch(() => {}) : canto.pause(); return; }
  if (botonActivo) botonActivo.classList.remove("activo");
  botonActivo = btn;
  btn.classList.add("activo");
  canto.src = audio;
  canto.play().catch(() => {});
}

function iconoCanto() {
  fichaCantos.querySelectorAll(".canto-btn").forEach(b => {
    const sonando = b === botonActivo && !canto.paused;
    b.textContent = sonando ? "❚❚" : "▶";
    b.ariaLabel = (sonando ? "Pausar " : "Reproducir ") + b.nextElementSibling.textContent;
  });
}
canto.addEventListener("play", iconoCanto);
canto.addEventListener("pause", iconoCanto);
canto.addEventListener("ended", () => { canto.currentTime = 0; iconoCanto(); });
ficha.addEventListener("close", () => { canto.pause(); canto.removeAttribute("src"); botonActivo = null; });
ficha.addEventListener("click", e => { if (e.target === ficha) ficha.close(); }); // clic fuera

document.querySelectorAll("[data-ficha]").forEach(b =>
  b.addEventListener("click", () => abrirFicha(b.dataset.ficha)));

/* ---------- Galerías ---------- */
document.querySelectorAll(".galeria").forEach(g => {
  g.dataset.especies.split(",").forEach(id => {
    const sp = ESPECIES[id];
    const b = document.createElement("button");
    b.className = `tarjeta grupo-${sp.grupo}`;
    b.innerHTML = `<img src="img/especies/${sp.foto || id}.jpg" alt="">
      <span class="tarjeta-texto"><strong>${sp.comun}</strong><em>${sp.cientifico}</em></span>`;
    b.addEventListener("click", () => abrirFicha(id));
    g.appendChild(b);
  });
});

/* ---------- Créditos ---------- */
const listaCreditos = document.getElementById("lista-creditos");
const usadas = {};
Object.entries(ESPECIES).forEach(([id, sp]) => { usadas[sp.foto || id] ||= sp.cientifico; });
Object.entries(usadas).forEach(([archivo, nombre]) => {
  const c = CREDITOS[archivo];
  if (!c) return;
  const li = document.createElement("li");
  li.innerHTML = `<em>${nombre}</em>: ${c.autor} · <a href="${c.fuente}" target="_blank" rel="noopener">${c.licencia}</a>`;
  listaCreditos.appendChild(li);
});
const listaCantos = document.getElementById("lista-cantos");
Object.entries(CANTOS).forEach(([id, cantos]) => cantos.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `<em>${ESPECIES[id].cientifico}</em> (${c.tipo}): ${c.autor} · <a href="https://xeno-canto.org/${c.xc}" target="_blank" rel="noopener">XC${c.xc}</a> · <a href="${c.licenciaUrl}" target="_blank" rel="noopener">${c.licencia}</a>`;
  listaCantos.appendChild(li);
}));

/* ---------- Navegación ---------- */
function mostrar(i, { desdeHash = false } = {}) {
  i = Math.max(0, Math.min(diapos.length - 1, i));
  const dir = i >= actual ? "adelante" : "atras";
  diapos.forEach((d, j) => {
    d.classList.toggle("activa", j === i);
    d.classList.toggle("previa", j < i);
    d.setAttribute("aria-hidden", j !== i);
    d.inert = j !== i;
  });
  document.body.dataset.direccion = dir;
  actual = i;
  contador.textContent = `${i + 1} / ${diapos.length}`;
  progreso.style.width = `${(i / (diapos.length - 1)) * 100}%`;
  if (!desdeHash) history.replaceState(null, "", "#" + (i + 1));

  // Notas
  const notas = diapos[i].querySelector(".notas");
  notasContenido.innerHTML = `<p class="notas-titulo">${i + 1}. ${diapos[i].dataset.titulo || ""}</p>` + (notas ? notas.innerHTML : "<p>(sin notas)</p>");

  // Mapa (se crea la primera vez que se muestra)
  const nombre = diapos[i].dataset.mapa;
  if (nombre) {
    if (!mapas[nombre]) {
      const d = diapos[i];
      mapas[nombre] = crearMapa(d.querySelector(".mapa"), MAPAS[nombre], d.querySelector(".pasos"), abrirFicha);
    }
    setTimeout(() => mapas[nombre].refrescar(), 450);
  }

  // Animar cifras
  diapos[i].querySelectorAll("[data-contar]").forEach(animarCifra);
}

function animarCifra(el) {
  const fin = +el.dataset.contar, dur = 900;
  let t0 = null;
  const paso = t => {
    t0 ??= t;
    const k = Math.max(0, Math.min(1, (t - t0) / dur));
    el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

/* En diapos con mapa, → recorre los pasos antes de pasar de diapo */
function siguiente() {
  const m = mapas[diapos[actual].dataset.mapa];
  if (m && m.siguiente()) return;
  mostrar(actual + 1);
}
function anterior() {
  const m = mapas[diapos[actual].dataset.mapa];
  if (m && m.anterior()) return;
  mostrar(actual - 1);
}

document.getElementById("btn-siguiente").addEventListener("click", siguiente);
document.getElementById("btn-anterior").addEventListener("click", anterior);

function alternarNotas() { panelNotas.hidden = !panelNotas.hidden; }
document.getElementById("btn-notas").addEventListener("click", alternarNotas);
document.getElementById("cerrar-notas").addEventListener("click", alternarNotas);

function pantallaCompleta() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.();
}
document.getElementById("btn-pantalla").addEventListener("click", pantallaCompleta);

document.addEventListener("keydown", e => {
  if (ficha.open) return;                       // Esc la cierra solo
  if (e.target.closest("input, textarea")) return;
  switch (e.key) {
    case "ArrowRight": case "PageDown": case " ": e.preventDefault(); siguiente(); break;
    case "ArrowLeft": case "PageUp": e.preventDefault(); anterior(); break;
    case "Home": mostrar(0); break;
    case "End": mostrar(diapos.length - 1); break;
    case "n": case "N": alternarNotas(); break;
    case "f": case "F": pantallaCompleta(); break;
  }
});

/* Deslizar en pantallas táctiles (fuera de los mapas) */
let x0 = null;
document.addEventListener("touchstart", e => {
  x0 = e.target.closest(".mapa, dialog") ? null : e.touches[0].clientX;
}, { passive: true });
document.addEventListener("touchend", e => {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 60) dx < 0 ? siguiente() : anterior();
  x0 = null;
});

window.addEventListener("hashchange", () => mostrar((parseInt(location.hash.slice(1)) || 1) - 1, { desdeHash: true }));
window.addEventListener("resize", () => Object.values(mapas).forEach(m => m.refrescar()));

// Primera diapo sin transición
document.body.classList.add("sin-transicion");
mostrar((parseInt(location.hash.slice(1)) || 1) - 1, { desdeHash: true });
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove("sin-transicion")));
