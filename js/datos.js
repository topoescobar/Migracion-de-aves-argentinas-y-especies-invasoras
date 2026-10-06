/* =========================================================
   DATOS DE LA PRESENTACIÓN
   - ESPECIES: fichas que se abren al hacer clic (mapa o galería)
   - MAPAS: biomas, rutas, lugares, especies y pasos guiados
   Coordenadas en [latitud, longitud]. Los polígonos de biomas
   son ESQUEMÁTICOS (aproximados a mano), no límites oficiales.
   ========================================================= */

/* grupo: lon = desplazamiento longitudinal (P7)
          chaco = Chaco–Espinal–Cerrado (P8)
          invasora = especie invasora (Inv. 4)
          afectada = nativa afectada por invasoras (Inv. 4) */
const ESPECIES = {
  /* ---------- Pregunta 7: desplazamientos longitudinales ---------- */
  "muscipipra-vetula": {
    comun: "Viudita coluda", cientifico: "Muscipipra vetula", grupo: "lon",
    etiqueta: "Desplazamiento longitudinal",
    descripcion: "Tiránido gris oscuro de cola larga y ahorquillada. Vive en bordes y claros de la Selva Atlántica, donde caza insectos al vuelo desde perchas expuestas.",
    dato: "Una de las dos especies con las que Areta y Bodrati (2008, 2010) definieron el desplazamiento «longitudinal»."
  },
  "euphonia-cyanocephala": {
    comun: "Tangará cabeza celeste", cientifico: "Euphonia cyanocephala", grupo: "lon",
    etiqueta: "Desplazamiento longitudinal",
    descripcion: "Pequeño frugívoro: el macho tiene la corona celeste, el dorso azul oscuro y el vientre amarillo dorado. Se alimenta mucho de frutos de muérdagos.",
    dato: "Areta y Bodrati (2010) describieron sus movimientos longitudinales en la Selva Atlántica de Misiones."
  },
  "pitangus-sulphuratus": {
    comun: "Benteveo", cientifico: "Pitangus sulphuratus", grupo: "lon",
    etiqueta: "Longitudinal (subsp. argentinus)",
    descripcion: "Tiránido grande y ruidoso, de pecho amarillo y antifaz negro con ceja blanca. Omnívoro y muy adaptable: ciudades, bordes de bosque y orillas de agua.",
    dato: "Anillado en el Bañado de Figueroa (Santiago del Estero) y recapturado 6 años después en Santa Catarina, Brasil."
  },
  "pipraeidea-bonariensis": {
    comun: "Naranjero", cientifico: "Pipraeidea bonariensis", grupo: "lon",
    etiqueta: "Longitudinal (subsp. bonariensis)",
    descripcion: "Tráupido de arboledas, bosques abiertos y jardines. El macho tiene cabeza azul celeste, antifaz negro y pecho anaranjado. Come frutos e insectos.",
    dato: "Anillado en San Miguel de Tucumán y hallado 5 años después en Rio Grande do Sul, Brasil. (Otra subespecie, schulzei, se mueve dentro del Chaco.)"
  },
  "myiophobus-flammiceps": {
    foto: "myiophobus-fasciatus",
    comun: "Mosqueta estriada", cientifico: "Myiophobus fasciatus flammiceps", grupo: "lon",
    etiqueta: "Residente + migrante",
    descripcion: "Pequeño tiránido pardo rojizo con el pecho estriado y dos barras claras en el ala. Vive en matorrales y bordes de bosque.",
    dato: "Habita la Selva Atlántica del NE argentino y el E de Brasil: residente todo el año en el interior de San Pablo, pero invernante en la costa atlántica del NE de Brasil."
  },
  "elaenia-albiceps": {
    comun: "Fío-fío silbón", cientifico: "Elaenia albiceps", grupo: "lon",
    etiqueta: "Ambientes abiertos",
    descripcion: "Pequeño tiránido pardo oliváceo con un copete que deja ver una raya blanca. Muy común en los bosques patagónicos durante la cría; come frutos e insectos.",
    dato: "Aunque no es un ave de selva, también figura entre las ~43 especies con desplazamientos longitudinales (subsp. chilensis)."
  },
  "turdus-amaurochalinus": {
    comun: "Zorzal chalchalero", cientifico: "Turdus amaurochalinus", grupo: "lon",
    etiqueta: "Ambientes abiertos",
    descripcion: "Zorzal pardo grisáceo con la garganta estriada; el macho luce el pico amarillo en época de cría. Frecuente en bosques, parques y ciudades.",
    dato: "Otro ejemplo de ave de hábitats abiertos que realiza desplazamientos longitudinales."
  },

  /* ---------- Pregunta 8: Chaco, Espinal y Cerrado ---------- */
  "columbina-picui": {
    comun: "Torcacita común", cientifico: "Columbina picui", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Paloma pequeña gris parda; en vuelo muestra el ala blanca y negra y la cola con bordes blancos. Muy común en campos y ciudades, come semillas del suelo.",
    dato: "En otoño forma grandes bandadas en el norte argentino y va a invernar al Chaco boliviano y la Chiquitanía."
  },
  "myiophobus-auriceps": {
    foto: "myiophobus-fasciatus",
    comun: "Mosqueta estriada", cientifico: "Myiophobus fasciatus auriceps", grupo: "chaco",
    etiqueta: "Migración parcial",
    descripcion: "Pequeño tiránido pardo rojizo con el pecho estriado y dos barras claras en el ala. Vive en matorrales y bordes de bosque.",
    dato: "Migrante típico del Gran Chaco y el Cerrado: las poblaciones del sur viajan lejos; las cercanas al trópico son residentes o se mueven poco, y ambas se mezclan."
  },
  "knipolegus-striaticeps": {
    comun: "Viudita chaqueña", cientifico: "Knipolegus striaticeps", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Tiránido pequeño: el macho es gris pizarra con ojo rojo; la hembra es parda y estriada. Habita bosques y matorrales xerófilos del Chaco.",
    dato: "Migra hacia el norte, a Bolivia y Paraguay, a través del Chaco."
  },
  "xolmis-coronatus": {
    comun: "Monjita coronada", cientifico: "Xolmis coronatus", grupo: "chaco",
    etiqueta: "Atraviesa el Chaco",
    descripcion: "Monjita gris y blanca con la corona negra bordeada de blanco. Cría en estepas y arbustales del centro y sur del país (hoy se la ubica en el género Neoxolmis).",
    dato: "Cruza el Chaco Occidental en grandes grupos hacia el norte y noreste: Bolivia, Paraguay y Brasil."
  },
  "phytotoma-rutila": {
    comun: "Cortarramas", cientifico: "Phytotoma rutila", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Su pico corto y aserrado le sirve para cortar brotes, hojas y frutos. El macho tiene la frente y el pecho rojizos. Típica de bosques secos y arbustales.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "lophospingus-pusillus": {
    comun: "Soldadito común", cientifico: "Lophospingus pusillus", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Pequeño semillero gris con un copete negro eréctil y la cara rayada de blanco y negro. Anda en grupos por matorrales y bosques chaqueños.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "microspingus-torquatus": {
    comun: "Monterita de collar", cientifico: "Microspingus torquatus", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Semillero pequeño y gris, con ceja blanca, antifaz y collar negros, y el bajo vientre canela. Recorre arbustales secos en bandaditas.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "coryphistera-alaudina": {
    comun: "Crestudo / Añumbí", cientifico: "Coryphistera alaudina", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Furnárido estriado con un copete puntiagudo. Camina por el suelo en grupos y construye grandes nidos de palitos espinosos.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "furnarius-cristatus": {
    comun: "Hornero copetón", cientifico: "Furnarius cristatus", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Pariente más chico del hornero común, con un copete bien visible. También construye nidos de barro. Propio del Chaco seco.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "xolmis-salinarum": {
    comun: "Monjita salinera", cientifico: "Xolmis salinarum", grupo: "chaco",
    etiqueta: "Endémica de Argentina",
    descripcion: "Monjita blanca, gris y negra endémica de Argentina, asociada a los bordes de las Salinas Grandes y Ambargasta (hoy en el género Neoxolmis).",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },
  "spiziapteryx-circumcincta": {
    comun: "Halcóncito gris", cientifico: "Spiziapteryx circumcincta", grupo: "chaco",
    etiqueta: "Chaco · Espinal · Cerrado",
    descripcion: "Pequeño halcón gris pardo estriado, con la rabadilla blanca; único representante de su género. Caza aves, roedores e insectos en el bosque chaqueño.",
    dato: "Integra la lista de especies que se desplazan dentro de la diagonal árida (Tabla 9)."
  },

  /* ---------- Investigación 4: especies invasoras ---------- */
  "neovison-vison": {
    comun: "Visón americano", cientifico: "Neovison vison", grupo: "invasora",
    etiqueta: "Especie invasora · depredador",
    descripcion: "Mustélido semiacuático de América del Norte, introducido en Patagonia para peletería a mediados del siglo XX. Hoy está establecido en ríos y lagos de la región.",
    dato: "En 2011 un solo visón entró a una colonia de macá tobiano y mató 33 adultos en una noche."
  },
  "podiceps-gallardoi": {
    comun: "Macá tobiano", cientifico: "Podiceps gallardoi", grupo: "afectada",
    etiqueta: "Nativa afectada · En Peligro Crítico",
    descripcion: "Endémico de las lagunas de la meseta de Santa Cruz, descripto recién en 1974. Cría en lagunas altas y pasa el invierno en estuarios de la costa atlántica.",
    dato: "Población crítica de unos 750 individuos. El visón destruye adultos, nidos, huevos y pichones."
  },
  "rallus-antarcticus": {
    comun: "Gallineta chica", cientifico: "Rallus antarcticus", grupo: "afectada",
    etiqueta: "Nativa afectada",
    descripcion: "Rálido pequeño y muy difícil de ver, que vive escondido en juncales y pastizales húmedos de Patagonia.",
    dato: "Su distribución se contrajo un 80%: hoy queda en cuencas que coinciden con las zonas de menor avance del visón."
  },
  "merganetta-armata": {
    comun: "Pato de torrente", cientifico: "Merganetta armata", grupo: "afectada",
    etiqueta: "Migrante altitudinal afectado",
    descripcion: "Pato de ríos rápidos de montaña: se para sobre las rocas en plena corriente y bucea contra ella para buscar larvas de insectos.",
    dato: "Capllonch (2018) lo incluye entre los migrantes del oeste montañoso y altitudinales; el visón reduce su reproducción donde es abundante."
  },
  "sturnus-vulgaris": {
    comun: "Estornino pinto", cientifico: "Sturnus vulgaris", grupo: "invasora",
    etiqueta: "Especie invasora · competidor",
    descripcion: "Ave euroasiática de plumaje oscuro con brillo metálico y pintas claras. Introducida en Buenos Aires en 1987, hoy está muy extendida. Anida en cavidades.",
    dato: "En el Parque Pereyra Iraola se documentó que usurpa nidos ocupados y cavidades recién hechas por carpinteros."
  },
  "furnarius-rufus": {
    comun: "Hornero", cientifico: "Furnarius rufus", grupo: "afectada",
    etiqueta: "Nativa afectada",
    descripcion: "Ave nacional argentina, famosa por su nido de barro con forma de horno.",
    dato: "Afectado directamente por la competencia del estornino por los sitios de nidificación."
  },
  "colaptes-melanochloros": {
    comun: "Carpintero real", cientifico: "Colaptes melanochloros", grupo: "afectada",
    etiqueta: "Nativa afectada",
    descripcion: "Carpintero que excava sus propias cavidades en troncos, que luego aprovechan muchas otras aves.",
    dato: "El estornino ocupa las cavidades recién excavadas por carpinteros (C. melanochloros y C. campestris)."
  },
  "tachycineta-leucorrhoa": {
    comun: "Golondrina ceja blanca", cientifico: "Tachycineta leucorrhoa", grupo: "afectada",
    etiqueta: "Migratoria cavícola · a evaluar",
    descripcion: "Golondrina migratoria que nidifica en huecos de árboles, postes y otras cavidades.",
    dato: "Las golondrinas cavícolas (Tachycineta, Progne) podrían competir con el estornino: es un efecto que todavía falta evaluar."
  },
  "rattus-norvegicus": {
    comun: "Rata parda", cientifico: "Rattus norvegicus", grupo: "invasora",
    etiqueta: "Especie invasora · depredador",
    descripcion: "Llegó a las islas subantárticas con los barcos foqueros y balleneros. En Georgias del Sur depredaba huevos y pichones de aves que anidan en el suelo o en cuevas.",
    dato: "Tras el programa de erradicación de roedores más grande hasta entonces, Georgias del Sur fue declarada libre de ratas en 2018."
  },
  "anthus-antarcticus": {
    comun: "Bisbita de Georgia del Sur", cientifico: "Anthus antarcticus", grupo: "afectada",
    etiqueta: "Nativa afectada · en recuperación",
    descripcion: "Único pájaro cantor de las Georgias del Sur, endémico del archipiélago. Anida en el suelo, entre pastizales costeros.",
    dato: "Sobrevivía solo en islotes sin ratas; tras la erradicación se recupera rápidamente."
  },
  "thalassarche-melanophris": {
    comun: "Albatros ceja negra", cientifico: "Thalassarche melanophris", grupo: "afectada",
    etiqueta: "Ruta atlántica patagónica",
    descripcion: "El albatros más abundante del mundo. Cría en colonias en islas (Malvinas, Georgias del Sur) y se alimenta sobre la plataforma continental patagónica.",
    dato: "Forma parte de los desplazamientos atlánticos patagónicos (Tabla 7) junto con petreles y pingüinos."
  }
};

/* =========================================================
   MAPAS
   ========================================================= */
const MAPAS = {

  /* ---------------- P7 · LONGITUDINAL ---------------- */
  longitudinal: {
    vista: [[-33, -71], [-6, -34]],
    biomas: [
      { id: "b-yungas", nombre: "Yungas / bosques andinos", clase: "bioma-selva",
        etiqueta: [-20.5, -66.6],
        coords: [[-14.5,-69.5],[-16.5,-67.3],[-17.6,-65.0],[-19.5,-64.2],[-21.5,-64.0],[-23.5,-64.4],[-25.5,-64.9],[-27.3,-65.4],[-28.0,-65.8],[-27.4,-66.0],[-25.5,-65.6],[-23.5,-65.3],[-21.6,-64.9],[-19.5,-65.0],[-17.8,-66.2],[-16.0,-68.8],[-14.0,-70.6]] },
      { id: "b-atlantica", nombre: "Selva Atlántica / Paranaense", clase: "bioma-selva",
        etiqueta: [-17.5, -40.8],
        coords: [[-5.5,-35.2],[-8.5,-35.0],[-12.5,-37.9],[-15.5,-38.9],[-19.0,-39.6],[-22.5,-41.5],[-23.5,-45.0],[-25.3,-48.3],[-27.5,-48.5],[-29.5,-49.8],[-30.2,-51.3],[-29.5,-53.5],[-28.0,-55.5],[-26.8,-55.0],[-25.5,-54.6],[-24.0,-54.3],[-23.0,-53.0],[-22.0,-51.0],[-21.0,-48.0],[-19.5,-45.0],[-17.0,-42.0],[-13.5,-40.2],[-10.0,-37.5],[-7.0,-36.0]] }
    ],
    corredores: [
      { id: "c-selvatico", texto: "Ruta selvática este–oeste", etiqueta: [-25.6, -59.6],
        coords: [[-23.8,-64.8],[-24.6,-61.5],[-25.6,-58.5],[-26.4,-55.5],[-27.0,-52.0],[-27.2,-49.2]] }
    ],
    rutas: [
      { id: "r-pitangus", clase: "lon", puntos: [[-27.45,-63.5],[-27.3,-50.3]], curva: 0.18 },
      { id: "r-pipraeidea", clase: "lon", puntos: [[-26.82,-65.22],[-29.7,-53.3]], curva: -0.16 },
      { id: "r-flammiceps", clase: "lon-trazos", puntos: [[-25.8,-53.0],[-9.2,-36.4]], curva: 0.14 }
    ],
    lugares: [
      { id: "l-figueroa", tipo: "anillo", pos: [-27.45,-63.5], texto: "Anillado · Bañado de Figueroa", lado: "abajo" },
      { id: "l-santacatarina", tipo: "recaptura", pos: [-27.3,-50.3], texto: "Recaptura · Santa Catarina (6 años)" },
      { id: "l-tucuman", tipo: "anillo", pos: [-26.82,-65.22], texto: "Anillado · S. M. de Tucumán", lado: "izq" },
      { id: "l-rgs", tipo: "recaptura", pos: [-29.7,-53.3], texto: "Recaptura · Rio Grande do Sul (5 años)", lado: "abajo" },
      { id: "l-sanpablo", tipo: "residente", pos: [-22.2,-48.6], texto: "Residente todo el año · interior de San Pablo" },
      { id: "l-nebrasil", tipo: "invernada", pos: [-9.2,-36.4], texto: "Invernante · costa NE de Brasil", lado: "izq" }
    ],
    especies: [
      { id: "muscipipra-vetula", pos: [-24.4, -50.9] },
      { id: "euphonia-cyanocephala", pos: [-24.2, -55.8] },
      { id: "pitangus-sulphuratus", pos: [-24.6, -62.4] },
      { id: "pipraeidea-bonariensis", pos: [-31.3, -66.4] },
      { id: "myiophobus-flammiceps", pos: [-19.0, -44.3] },
      { id: "elaenia-albiceps", pos: [-22.4, -67.6] },
      { id: "turdus-amaurochalinus", pos: [-31.2, -59.6] }
    ],
    leyenda: [
      { tipo: "area", clase: "bioma-selva", texto: "Selvas (esquemático)" },
      { tipo: "corredor", texto: "Corredor selvático E–O" },
      { tipo: "linea", clase: "lon", texto: "Recuperación de anillado" },
      { tipo: "linea", clase: "lon-trazos", texto: "Desplazamiento estacional" },
      { tipo: "lugar", clase: "anillo", texto: "Sitio de anillado" },
      { tipo: "lugar", clase: "recaptura", texto: "Sitio de recaptura" },
      { tipo: "foto", clase: "lon", texto: "Especie · clic para ver ficha" }
    ],
    pasos: [
      { titulo: "Dos selvas, un corredor",
        texto: "En el trópico el continente se ensancha: los bosques andinos y la Selva Atlántica quedan conectados en sentido este–oeste.",
        resaltar: ["b-yungas","b-atlantica","c-selvatico"] },
      { titulo: "Siguen a la selva, no huyen del frío",
        texto: "Ejemplos clásicos de Areta y Bodrati: viudita coluda y tangará cabeza celeste.",
        bounds: [[-30,-60],[-21,-47]],
        resaltar: ["b-atlantica","muscipipra-vetula","euphonia-cyanocephala"] },
      { titulo: "Benteveo: 6 años después",
        texto: "Anillado en Santiago del Estero → recapturado en Santa Catarina (Brasil). Más de 1.000 km hacia el este.",
        bounds: [[-31,-66],[-23,-48]],
        resaltar: ["r-pitangus","l-figueroa","l-santacatarina","pitangus-sulphuratus"] },
      { titulo: "Naranjero: 5 años después",
        texto: "Anillado en San Miguel de Tucumán → hallado en Rio Grande do Sul.",
        bounds: [[-32,-67],[-24,-51]],
        resaltar: ["r-pipraeidea","l-tucuman","l-rgs","pipraeidea-bonariensis"] },
      { titulo: "Mosqueta estriada: una ruta, dos estrategias",
        texto: "Residente en el interior de San Pablo; invernante en la costa NE de Brasil.",
        bounds: [[-29,-57],[-7,-34]],
        resaltar: ["r-flammiceps","l-sanpablo","l-nebrasil","myiophobus-flammiceps","b-atlantica"] },
      { titulo: "No solo aves de selva",
        texto: "También lo hacen especies de ambientes abiertos: Benteveo, fío-fío silbón, zorzal chalchalero.",
        resaltar: ["pitangus-sulphuratus","elaenia-albiceps","turdus-amaurochalinus"] }
    ]
  },

  /* ---------------- P8 · CHACO, ESPINAL Y CERRADO ---------------- */
  chaco: {
    vista: [[-41, -70], [-3, -36]],
    biomas: [
      { id: "b-chaco", nombre: "Gran Chaco", clase: "bioma-chaco", etiqueta: [-21.0, -61.6],
        coords: [[-17.8,-63.6],[-18.6,-60.4],[-20.3,-58.4],[-22.8,-57.6],[-25.3,-57.7],[-27.4,-58.6],[-29.6,-59.6],[-31.2,-61.0],[-31.6,-63.5],[-30.6,-65.2],[-28.6,-65.6],[-26.2,-65.0],[-23.4,-64.2],[-20.4,-63.9]] },
      { id: "b-espinal", nombre: "Espinal", clase: "bioma-espinal", etiqueta: [-35.6, -64.6],
        coords: [[-29.6,-59.6],[-31.4,-58.2],[-33.0,-58.6],[-33.6,-60.6],[-33.8,-62.6],[-35.2,-63.4],[-37.2,-63.0],[-39.0,-62.4],[-40.2,-63.6],[-39.0,-65.8],[-36.6,-66.4],[-34.0,-66.0],[-32.2,-65.0],[-31.6,-63.5],[-31.2,-61.0]] },
      { id: "b-cerrado", nombre: "Cerrado", clase: "bioma-cerrado", etiqueta: [-13.6, -48.2],
        coords: [[-3.0,-45.0],[-5.0,-42.6],[-10.0,-43.8],[-15.0,-42.2],[-19.6,-43.4],[-23.0,-46.4],[-24.2,-50.0],[-22.2,-53.4],[-20.4,-55.8],[-17.4,-57.4],[-15.2,-59.8],[-12.2,-58.4],[-10.0,-52.4],[-7.0,-48.4]] },
      { id: "b-caatinga", nombre: "Caatinga", clase: "bioma-caatinga", etiqueta: [-8.0, -39.6],
        coords: [[-3.0,-41.0],[-3.6,-38.6],[-5.2,-36.2],[-8.0,-35.9],[-11.0,-37.6],[-14.0,-40.0],[-15.0,-42.2],[-10.0,-43.8],[-5.0,-42.6]] },
      { id: "b-pantanal", nombre: "Pantanal", clase: "bioma-pantanal", etiqueta: null,
        coords: [[-16.0,-57.5],[-16.4,-55.6],[-18.8,-55.4],[-20.8,-56.8],[-19.6,-58.0],[-17.6,-58.2]] }
    ],
    rios: [
      { id: "rio-pilcomayo", nombre: "Pilcomayo", coords: [[-20.6,-64.9],[-21.6,-63.4],[-22.4,-62.6],[-23.6,-61.0],[-24.4,-59.6],[-25.3,-57.7]] },
      { id: "rio-bermejo", nombre: "Bermejo", coords: [[-22.6,-64.4],[-23.4,-63.6],[-24.4,-62.4],[-25.4,-60.8],[-26.4,-59.4],[-26.9,-58.4]] }
    ],
    rutas: [
      { id: "r-picui", clase: "chaco", puntos: [[-27.3,-64.3],[-17.4,-61.4]], curva: 0.12 },
      { id: "r-striaticeps", clase: "chaco", puntos: [[-31.4,-65.3],[-22.2,-60.4]], curva: -0.14 },
      { id: "r-coronatus", clase: "chaco-fuerte", puntos: [[-39.0,-66.8],[-31.6,-64.4],[-25.0,-63.2]], flecha: false },
      { id: "r-coronatus", clase: "chaco-fuerte", puntos: [[-25.0,-63.2],[-18.2,-63.4]], curva: 0.05 },
      { id: "r-coronatus", clase: "chaco-fuerte", puntos: [[-25.0,-63.2],[-22.9,-58.2]], curva: -0.1 },
      { id: "r-coronatus", clase: "chaco-fuerte", puntos: [[-25.0,-63.2],[-21.4,-53.8]], curva: -0.12 },
      { id: "r-auriceps", clase: "parcial", puntos: [[-33.2,-61.0],[-15.8,-50.6]], curva: 0.1 },
      { id: "r-auriceps", clase: "parcial", puntos: [[-24.6,-59.2],[-20.6,-57.2]], curva: 0.1 }
    ],
    lugares: [
      { id: "l-chiquitania", tipo: "invernada", pos: [-17.4,-61.4], texto: "Chaco boliviano · Chiquitanía", lado: "arriba" },
      { id: "l-pantanal", tipo: "info", pos: [-18.0,-55.6], texto: "Pantanal · invernada de millones de aves", lado: "der" },
      { id: "l-bolivia", tipo: "destino", pos: [-18.2,-63.4], texto: "Bolivia", lado: "izq" },
      { id: "l-paraguay", tipo: "destino", pos: [-22.9,-58.2], texto: "Paraguay", lado: "der" },
      { id: "l-brasil", tipo: "destino", pos: [-21.4,-53.8], texto: "Brasil", lado: "der" },
      { id: "l-residentes", tipo: "residente", pos: [-13.2,-55.2], texto: "Poblaciones tropicales: residentes", lado: "izq" }
    ],
    especies: [
      { id: "columbina-picui", pos: [-28.2, -61.4] },
      { id: "knipolegus-striaticeps", pos: [-32.4, -67.4] },
      { id: "xolmis-coronatus", pos: [-38.4, -63.0] },
      { id: "myiophobus-auriceps", pos: [-34.8, -58.6] }
    ],
    leyenda: [
      { tipo: "area", clase: "bioma-chaco", texto: "Gran Chaco" },
      { tipo: "area", clase: "bioma-espinal", texto: "Espinal" },
      { tipo: "area", clase: "bioma-cerrado", texto: "Cerrado" },
      { tipo: "area", clase: "bioma-caatinga", texto: "Caatinga" },
      { tipo: "area", clase: "bioma-pantanal", texto: "Pantanal" },
      { tipo: "linea", clase: "chaco", texto: "Migración dentro de la diagonal" },
      { tipo: "linea", clase: "parcial", texto: "Migración parcial" },
      { tipo: "rio", texto: "Ríos (pulsos de inundación)" },
      { tipo: "foto", clase: "chaco", texto: "Especie · clic para ver ficha" }
    ],
    pasos: [
      { titulo: "La diagonal árida",
        texto: "Chaco + Espinal + Cerrado (+ Caatinga): unas 66 especies y subespecies se desplazan sin salir de ella.",
        resaltar: ["b-chaco","b-espinal","b-cerrado","b-caatinga"] },
      { titulo: "Ríos y Pantanal",
        texto: "Los pulsos de inundación del Pilcomayo y el Bermejo; el Pantanal funciona como sitio de invernada.",
        bounds: [[-28,-66],[-14,-53]],
        resaltar: ["rio-pilcomayo","rio-bermejo","b-pantanal","l-pantanal"] },
      { titulo: "Torcacita común",
        texto: "Grandes bandadas en otoño en el norte argentino → invernada en el Chaco boliviano y la Chiquitanía.",
        bounds: [[-30,-68],[-15,-57]],
        resaltar: ["r-picui","l-chiquitania","columbina-picui"] },
      { titulo: "Viudita chaqueña",
        texto: "Migra al norte, a Bolivia y Paraguay, a través del Chaco.",
        bounds: [[-34,-69],[-19,-56]],
        resaltar: ["r-striaticeps","knipolegus-striaticeps","b-chaco"] },
      { titulo: "Monjita coronada",
        texto: "Cruza el Chaco Occidental en grandes grupos hacia Bolivia, Paraguay y Brasil.",
        bounds: [[-41,-70],[-16,-52]],
        resaltar: ["r-coronatus","l-bolivia","l-paraguay","l-brasil","xolmis-coronatus"] },
      { titulo: "Mosqueta estriada: migración parcial",
        texto: "Las poblaciones del sur viajan lejos; las del trópico son residentes; en el medio se mezclan.",
        bounds: [[-36,-64],[-11,-46]],
        resaltar: ["r-auriceps","l-residentes","myiophobus-auriceps","b-cerrado","b-chaco"] }
    ]
  },

  /* ---------------- INVESTIGACIÓN 4 · INVASORAS ---------------- */
  invasoras: {
    vista: [[-57, -76], [-31, -34]],
    leyendaPos: "topright",
    biomas: [],
    rutas: [
      { id: "r-maca", clase: "afectada", puntos: [[-48.0,-71.4],[-50.1,-68.6]], curva: 0.3 },
      { id: "r-marina", clase: "marina", puntos: [[-42.6,-63.4],[-47.2,-62.8],[-51.0,-60.4],[-53.6,-47.0],[-54.3,-37.4]] }
    ],
    lugares: [
      { id: "l-meseta", tipo: "cria", pos: [-48.0,-71.4], texto: "Cría · lagunas de la meseta", lado: "izq" },
      { id: "l-estuarios", tipo: "invernada", pos: [-50.1,-68.6], texto: "Invernada · estuarios atlánticos", lado: "der" },
      { id: "l-pereyra", tipo: "info", pos: [-34.85,-58.1], texto: "Parque Pereyra Iraola", lado: "der" },
      { id: "l-georgias", tipo: "info", pos: [-54.3,-36.7], texto: "Georgias del Sur · libre de ratas (2018)", lado: "arriba" },
      { id: "l-malvinas", tipo: "cria", pos: [-51.7,-59.2], texto: "Colonias de aves marinas", lado: "abajo" }
    ],
    especies: [
      { id: "neovison-vison", pos: [-44.6, -70.6] },
      { id: "podiceps-gallardoi", pos: [-46.6, -68.4] },
      { id: "rallus-antarcticus", pos: [-52.4, -71.9] },
      { id: "merganetta-armata", pos: [-41.2, -71.5] },
      { id: "sturnus-vulgaris", pos: [-36.0, -58.9] },
      { id: "furnarius-rufus", pos: [-36.6, -60.4] },
      { id: "colaptes-melanochloros", pos: [-33.0, -60.6] },
      { id: "tachycineta-leucorrhoa", pos: [-32.4, -57.0] },
      { id: "thalassarche-melanophris", pos: [-47.6, -57.2] },
      { id: "anthus-antarcticus", pos: [-52.0, -38.2] },
      { id: "rattus-norvegicus", pos: [-56.0, -35.6] }
    ],
    leyenda: [
      { tipo: "foto", clase: "invasora", texto: "Especie invasora" },
      { tipo: "foto", clase: "afectada", texto: "Nativa afectada" },
      { tipo: "linea", clase: "marina", texto: "Ruta atlántica patagónica" },
      { tipo: "linea", clase: "afectada", texto: "Migración del macá tobiano" },
      { tipo: "lugar", clase: "cria", texto: "Sitio de cría / colonia" },
      { tipo: "lugar", clase: "invernada", texto: "Sitio de invernada" }
    ],
    pasos: [
      { titulo: "Depredación: el visón en Patagonia",
        texto: "Ataca colonias en los sitios de cría: en 2011 mató 33 macáes tobianos adultos en una noche.",
        bounds: [[-52,-74],[-42,-64]],
        resaltar: ["neovison-vison","podiceps-gallardoi","r-maca","l-meseta","l-estuarios"] },
      { titulo: "Más víctimas del visón",
        texto: "Gallineta chica (−80% de su área) y pato de torrente, migrante altitudinal.",
        bounds: [[-55,-76],[-39,-63]],
        resaltar: ["neovison-vison","rallus-antarcticus","merganetta-armata"] },
      { titulo: "Competencia: el estornino pinto",
        texto: "Introducido en Buenos Aires en 1987; usurpa cavidades de horneros, carpinteros y quizás golondrinas.",
        bounds: [[-38,-63],[-31,-54]],
        resaltar: ["sturnus-vulgaris","furnarius-rufus","colaptes-melanochloros","tachycineta-leucorrhoa","l-pereyra"] },
      { titulo: "Islas: la ruta atlántica patagónica",
        texto: "Albatros, petreles y pingüinos crían en islas subantárticas, donde las ratas comían huevos y pichones.",
        bounds: [[-58,-66],[-41,-33]],
        resaltar: ["r-marina","thalassarche-melanophris","l-malvinas","rattus-norvegicus","anthus-antarcticus","l-georgias"] },
      { titulo: "2018: Georgias del Sur sin ratas",
        texto: "Tras la erradicación, las poblaciones se recuperan rápido: la prueba inversa del daño.",
        bounds: [[-57.5,-44],[-51,-32]],
        resaltar: ["rattus-norvegicus","anthus-antarcticus","l-georgias"] }
    ]
  }
};
