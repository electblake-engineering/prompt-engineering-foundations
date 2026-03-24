# Prompt Engineering Foundations

A Next.js documentation site covering prompt engineering fundamentals, built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This site is configured for static export and deployment to GitHub Pages:

```bash
npm run build
```

The static output will be in the `./out` directory.

## Deployment

The site is automatically deployed to GitHub Pages via the GitHub Actions workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Project Structure

- `src/app/` — Next.js App Router pages
- `src/components/` — React components including the sidebar navigation
- `src/components/ui/` — shadcn/ui components (badge, button, card, navigation-menu, separator)
- `src/lib/utils.ts` — Utility functions
