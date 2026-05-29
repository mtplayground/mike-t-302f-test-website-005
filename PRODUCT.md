# mike-t-302f-test-website-005

## Current State

mike-t-302f-test-website-005 is a newly initialized Vite, React, and TypeScript web application. The app currently renders an intentionally empty page and exists as a clean foundation for future frontend work.

## What It Does

- Boots a React application through Vite.
- Mounts the app at `#root` using React `StrictMode`.
- Renders no visible UI yet.

## Key Features

- TypeScript-first React setup.
- Vite development, build, and preview workflow.
- Production build command runs TypeScript project checks before bundling.
- Development and preview servers listen on `0.0.0.0:8080`.

## Architecture

- `index.html` provides the Vite HTML entry point.
- `src/main.tsx` validates the root element and mounts React.
- `src/App.tsx` is the top-level application component.
- `src/index.css` contains the initial global reset/base styles.
- `vite.config.ts` configures Vite with the React plugin and server settings.
- TypeScript configuration is split across root, app, and Vite/node config files.

## Conventions

- Keep the initial app shell minimal until product behavior is defined.
- Add feature code under `src/` and introduce shared types only when there is a real cross-module contract.
- Do not commit generated build output or installed dependencies.
