# tasks.sh — PWA

Terminal-styled task manager with a Routines timeline synced to IST. Installable
as a home-screen / desktop app, works offline after first load.

## Files

- `index.html` — app shell, PWA meta tags, loads React + Babel from CDN
- `app.jsx` — the actual app (plain JSX, no build step needed)
- `manifest.json` — name, icons, standalone display mode
- `sw.js` — service worker (offline caching)
- `icons/` — app icons (192/512, maskable variants, apple touch icon, favicons)

## Run it locally

PWAs require a real server (not `file://`) for the service worker + install
prompt to work. Pick one:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed `http://localhost:...` URL in Chrome/Edge/Safari.

## Install it

- **Desktop Chrome/Edge**: address bar shows an install icon → click it, or
  menu → "Install tasks.sh".
- **Android Chrome**: menu → "Add to Home screen".
- **iOS Safari**: Share button → "Add to Home Screen" (uses `apple-touch-icon.png`).

## Deploy it for real

Any static host works since there's no backend:

- **GitHub Pages**: push this folder to a repo, enable Pages on the branch.
- **Netlify / Vercel**: drag-and-drop the folder into their dashboard.

HTTPS is required for the service worker and install prompt everywhere except
`localhost`.

## Data

Tasks and routines persist in the browser's `localStorage` — no account,
no server, no sync between devices.

## Editing

`app.jsx` is loaded straight into the browser via Babel Standalone, so you can
edit it directly and refresh — no `npm install` or build step required.
