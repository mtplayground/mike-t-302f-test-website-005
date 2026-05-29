# mike-t-302f-test-website-005

Vite, React, and TypeScript landing page for the "Agent Team for Founders" offer. The app is a static client bundle with content centralized in `src/content/siteContent.ts` and CTA links configured through `VITE_CTA_URL`.

## Requirements

- Node.js 20 or newer
- npm

## Configuration

Copy the example env file for local work:

```bash
cp .env.example .env.local
```

Set `VITE_CTA_URL` to the absolute destination for all CTA links:

```bash
VITE_CTA_URL=https://example.com/waitlist
```

This is public build-time configuration. Vite embeds the value into the browser bundle when `npm run build` runs, so rebuild after changing it.

## Development

Install dependencies:

```bash
npm ci
```

Run the dev server on `0.0.0.0:8080`:

```bash
npm run dev
```

Useful checks:

```bash
npm test
npm run test:e2e
npm run lint
npm run format:check
```

The E2E suite uses Playwright Chromium. If the browser is not installed in the local Playwright cache, run:

```bash
npx playwright install chromium
```

## Production Build

Build the static site:

```bash
npm run build
```

The production output is written to `dist/`:

- `dist/index.html`
- `dist/assets/` with hashed CSS, JavaScript, and image assets

Preview the built output locally on `0.0.0.0:8080`:

```bash
npm run preview
```

## Self-Hosted Static Deploy

Deploy the contents of `dist/` to any static web server or object storage host. Do not deploy source files, `node_modules/`, `.env.local`, `.gh_token`, or other local files.

For a traditional web server, point the document root at the built `dist/` directory. A minimal nginx server block looks like this:

```nginx
server {
  listen 8080;
  server_name _;

  root /var/www/mike-t-302f-test-website-005/dist;
  index index.html;

  location /assets/ {
    try_files $uri =404;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Use a short or no-cache policy for `index.html` so rebuilt asset hashes are picked up quickly. The app uses in-page hash anchors and does not require server-side rendering.
