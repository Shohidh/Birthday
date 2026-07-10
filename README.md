# Sunflower Garden

A responsive birthday-surprise experience built with React and Vite. Edit all personal details in `src/config/config.js`.

## Media

The garden includes a public-domain animated sunflower from Wikimedia Commons. Configure your own freely licensed or self-owned images, GIFs, and locally hosted MP4/WebM video in `src/config/config.js`. Keep the media license and attribution with any asset you use.

## Install & run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy

**Vercel:** import this repository, keep the default Vite build settings (`npm run build`, output `dist`).

**GitHub Pages:** set the Vite `base` option to your repository name, run `npm run build`, and publish `dist` with GitHub Actions or the `gh-pages` package.
