# Copilot Instructions

Follow `AGENTS.md` first.

## Repo Context

- Framework: Next.js 16 App Router.
- Output mode: static export (`output: "export"`).
- Hosting: GitHub Pages via GitHub Actions.
- Base path: injected in CI through `PAGES_BASE_PATH`.

## Implementation Rules

- Read relevant docs from `node_modules/next/dist/docs/` before major Next.js changes.
- Keep all pages static-export compatible.
- Do not use `next start` patterns for runtime hosting in this repo.
- Use:
  - `npm run dev` for development
  - `npm run build` to produce `out/`
  - `npm start` to preview exported static output
