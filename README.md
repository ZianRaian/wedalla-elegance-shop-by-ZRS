# Wedalla Event Planner

Wedalla Event Planner is a static event planning website built with Vite, React, TypeScript, Tailwind CSS, React Router, and a Supabase client scaffold.

## Local Setup

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm test
npm run build
```

## Production Build

```sh
npm run build
```

The production files are generated in `dist/`.

## cPanel Static Deployment

For first setup, install dependencies:

```sh
npm install
```

Build the static production files:

```sh
npm run build
```

Upload the contents of `dist/` to the target cPanel document root, such as
`public_html` or the document root for an addon domain.

Do not upload `src/`, `node_modules/`, package files, or the `dist/` folder
itself. Upload only the files and folders inside `dist/`.

`public/.htaccess` is copied into `dist/.htaccess` during the Vite build. This
allows Apache/cPanel to serve real files normally while routing unknown paths to
`index.html` for React Router `BrowserRouter` refreshes and direct links.

This app is safest when deployed at the domain root. Deploying under a
subdirectory requires Vite `base` config changes before building.

Backend features and contact form persistence are still not implemented.

## Backend Status

This project is currently a static Vite app. A Supabase client scaffold exists, but backend features, API routes, database tables, and contact form persistence are not implemented yet.
