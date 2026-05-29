# mike-t-302f-test-website-005

## Current State

mike-t-302f-test-website-005 is a Vite, React, and TypeScript single-page landing page for an "Agent Team for Founders" offer. The page is built and merged through the FAQ section, with shared content data, reusable UI primitives, Tailwind design tokens, and a configured lint/format workflow.

## What It Does

- Presents a landing page with a sticky navigation bar, CTA, footer, and smooth in-page anchor navigation.
- Renders a hero section with the headline "Agent Team for Founders", supporting SDLC/code-ownership copy, a generated workflow visual, and a CTA wired to `VITE_CTA_URL`.
- Shows the SDLC flow as Plan, Build, Deploy, and Operate.
- Displays feature/value-prop cards for full-SDLC execution, GitHub-native workflow, production readiness, and code ownership.
- Displays founder benefit cards and a FAQ accordion covering ownership, security, and what "you just talk" means.

## Key Features

- TypeScript-first React setup with Vite build, dev, and preview scripts.
- Tailwind CSS 4 integration through the Vite plugin, with CSS-first brand, spacing, typography, radius, and shadow tokens.
- Centralized editable content in `src/content/siteContent.ts`, typed by `src/types/content.ts`.
- Reusable UI primitives: `Button`, `Section`, `Card`, and `AccordionItem`.
- ESLint and Prettier scripts for linting and formatting.
- Build-time public env configuration via `.env.example` and `src/config/env.ts`.

## Architecture

- `src/main.tsx` validates the root element and mounts React in `StrictMode`.
- `src/App.tsx` composes the landing page sections inside `AppShell`.
- `src/components/layout/` contains the shell, header/nav, and footer.
- `src/components/sections/` contains the page sections: Hero, How It Works, Features, Benefits, and FAQ.
- `src/components/ui/` contains reusable Tailwind-styled primitives.
- `src/assets/hero-workflow.webp` is the project-local hero image asset.
- `src/index.css` defines Tailwind imports, theme tokens, global base styles, and smooth-scroll behavior.

## Conventions

- Keep section copy in `siteContent`; components should remain data-driven.
- Use `VITE_CTA_URL` for CTA destinations; document local values in `.env.example` and keep real `.env` files uncommitted.
- Keep future sections/components aligned with the existing `Section` and `Card` layout patterns.
- Do not commit generated build output, installed dependencies, secrets, or local progress files.
