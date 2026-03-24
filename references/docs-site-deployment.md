# Docs Site Deployment (GitHub Pages)

## Goal

This project is deployed as a static Next.js site to GitHub Pages using GitHub Actions.

## Deployment Architecture

1. `next.config.ts` enables static export with `output: "export"`.
2. During CI, `actions/configure-pages@v5` provides `PAGES_BASE_PATH`.
3. The build runs with `PAGES_BASE_PATH` so links/assets are generated with the correct project-site path.
4. `next build` writes static output to `out/`.
5. `actions/upload-pages-artifact@v3` uploads `out/` as the Pages artifact.
6. `actions/deploy-pages@v4` publishes that artifact to the `github-pages` environment.

## One-Time GitHub Setup

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Source`, select `GitHub Actions`.
4. Confirm the default branch is `main` (the workflow deploy trigger uses pushes to `main`).
5. Optional automation path:
   - Add repository secret `PAGES_ADMIN_TOKEN`.
   - Use a PAT that can administer repository Pages settings (`repo` and Pages write access).
   - With this secret present, the workflow attempts to auto-enable Pages if it is disabled.

## How To View Site Changes

1. Local development view:
   - Run `npm ci` once.
   - Run `npm run dev`.
   - Open `http://localhost:3000`.
2. Production-like static export view:
   - Run `npm start`.
   - This runs a fresh static export build and serves `out/`.
   - Open the local URL printed by the server.

## How To Deploy Site Changes

1. Commit and push to `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. After the `deploy` job finishes, Pages is updated automatically.
4. Validate the deployment URL from:
   - `Actions` -> the latest deploy workflow run -> `deploy` job output.
   - `Settings` -> `Pages`.

## Notes And Guardrails

1. Keep this site static-export compatible. Avoid features that require a running Next.js server at request time.
2. `basePath` is not hardcoded. It is injected from `PAGES_BASE_PATH` in CI so the same code works for project Pages paths.
3. `images.unoptimized` is enabled for static export compatibility with GitHub Pages.
4. The workflow now runs an explicit Pages preflight check. If Pages is disabled, the build fails early with a clear setup error instead of failing later in `deploy-pages`.
