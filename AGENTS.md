<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Grounding

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS.
- Deployment target: GitHub Pages static hosting.
- This repo uses static export (`output: "export"`), not a running Next.js server.
- `basePath` is provided in CI through `PAGES_BASE_PATH` (from `actions/configure-pages`).

## Working Rules

- Before coding, check relevant docs under `node_modules/next/dist/docs/`.
- Keep pages static-export compatible (no runtime server-only features).
- For local development use `npm run dev`.
- For production-like preview use `npm start` (builds + serves `out/`).
- Deployment workflow lives at `.github/workflows/deploy.yml`.
- Deployment docs live at `references/docs-site-deployment.md`.
