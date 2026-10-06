# Rutas que cruzan el continente — TP6, Grupo 4

Presentación web interactiva (HTML + CSS + JS, sin compilación) para las preguntas 7 y 8 y la pregunta de investigación 4.

## Cómo verla

Abrí `index.html` con doble clic. Necesita internet para los mapas (relieve de Esri), la librería Leaflet y las fuentes.

| Tecla | Acción |
|---|---|
| `→` / `Espacio` | Avanza. En las diapositivas con mapa, primero recorre los pasos guiados |
| `←` | Retrocede |
| `N` | Notas del orador (el texto completo del TP) |
| `F` | Pantalla completa |
| `Esc` | Cierra la ficha de una especie |

Los círculos con foto en los mapas y las tarjetas de las galerías abren la ficha de cada especie.

## Cómo publicarla

Todo es estático, así que sirve cualquier hosting gratuito:

- **Netlify Drop**: entrá a https://app.netlify.com/drop y arrastrá la carpeta `presentacion`.
- **GitHub Pages**: subí el contenido de `presentacion` a un repositorio y activá *Settings → Pages* (rama `main`, carpeta raíz).

## Estructura

```
index.html          diapositivas (el texto de cada una está acá, y sus notas en <aside class="notas">)
css/estilos.css     estilos
js/datos.js         ESPECIES (fichas) y MAPAS (rutas, lugares, biomas, pasos guiados)
js/mapas.js         dibuja los mapas con Leaflet
js/app.js           navegación, fichas, notas
js/creditos.js      autor y licencia de cada foto (generado desde img/especies/creditos.json)
img/especies/       fotos (Wikimedia Commons, licencias CC; ver créditos en la última diapositiva)
```

Para editar una ruta o mover un marcador, cambiá las coordenadas `[latitud, longitud]` en `js/datos.js`.
Los polígonos de biomas y el corredor selvático son **esquemáticos** (dibujados a mano), no límites oficiales.
