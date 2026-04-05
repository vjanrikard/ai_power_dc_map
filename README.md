# AI Power DC Map

Interactive map and timeline tracking AI data centers worldwide, with filtering by company category and project status.

## Tech stack

- HTML/CSS/JavaScript (vanilla)
- Leaflet for map rendering
- Node.js static server (`server.js`)

## Quick start

1. Install Node.js 18+.
2. From this folder, run:

```bash
node server.js
```

3. Open `http://localhost:5000`.

## Files

- `index.html`: main UI layout.
- `style.css`: visual design and responsive styles.
- `data.js`: map points, categories, statuses, timeline events.
- `app.js`: rendering logic, filters, timeline interactions.
- `server.js`: local static file server.

## Recent fixes

- Theme now defaults correctly (`light`/`dark`) and persists in local storage.
- Map tiles now switch correctly between light and dark basemaps.
- Server path handling now blocks traversal attempts and ignores query strings when resolving files.
