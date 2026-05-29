# mike-t-302f-test-website-005

## Current State

mike-t-302f-test-website-005 is a Vite, React, and TypeScript single-page landing page for an "Agent Team for Founders" offer. The landing page is complete through hero, SDLC flow, features, founder benefits, FAQ, and footer CTA sections, with responsive/accessibility polish, unit tests, Playwright E2E coverage, and self-hosted static deploy guidance.

## What It Does

- Presents a static landing page with sticky navigation, smooth in-page anchors, repeated CTA links, and a footer.
- Renders the headline "Agent Team for Founders" with SDLC/code-ownership positioning and a project-local workflow image.
- Shows the software delivery flow as Plan, Build, Deploy, and Operate.
- Displays feature/value-prop cards for full-SDLC execution, GitHub-native workflow, production readiness, and code ownership.
- Displays founder benefit cards and a FAQ accordion covering ownership, security, and what "you just talk" means.
- Routes all CTA links through the public build-time `VITE_CTA_URL` value.

## Key Features

- TypeScript-first React setup with Vite dev, build, preview, and static output in `dist/`.
- Tailwind CSS 4 integration through the Vite plugin with CSS-first brand, spacing, typography, radius, and shadow tokens.
- Centralized editable content in `src/content/siteContent.ts`, typed by `src/types/content.ts`.
- Reusable UI primitives: `Button`, `Section`, `Card`, and `AccordionItem`.
- Responsive layouts, semantic landmarks, accessible focus states, image alt text, and WCAG-conscious color choices.
- Vitest + React Testing Library unit tests for UI primitives, content rendering, and CTA URL wiring.
- Playwright E2E test for page load, section rendering, anchor navigation, and configured CTA links.
- README and `.env.example` document local setup, checks, production build, preview, and self-hosted static serving.

## Architecture

- `src/main.tsx` validates the root element and mounts React in `StrictMode`.
- `src/App.tsx` resolves app env and composes the landing page inside `AppShell`.
- `src/config/env.ts` validates `VITE_CTA_URL` as a required absolute URL.
- `src/components/layout/` contains the shell, header/nav, and footer CTA layout.
- `src/components/sections/` contains Hero, How It Works, Features, Benefits, and FAQ sections.
- `src/components/ui/` contains shared Tailwind-styled primitives.
- `src/assets/hero-workflow.webp` is the project-local hero image asset.
- `src/index.css` defines Tailwind imports, theme tokens, global base styles, and smooth-scroll behavior.
- `tests/e2e/` contains Playwright browser coverage; unit tests live beside the relevant React modules.

## Conventions

- Keep product copy in `siteContent`; components should stay data-driven.
- Use `VITE_CTA_URL` for CTA destinations; keep real `.env.local` values uncommitted.
- Treat `dist/`, `node_modules/`, Playwright reports, tokens, and local progress files as generated or local-only.
- Prefer semantic HTML, real links/buttons, visible focus states, and accessible role/name queries in tests.
- Use `npm test`, `npm run test:e2e`, `npm run lint`, `npm run format:check`, and `npm run build` as the primary validation commands.
