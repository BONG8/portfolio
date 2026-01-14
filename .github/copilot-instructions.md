# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js (App Router) portfolio project, bootstrapped with `create-next-app`.
- Main app code is in the `app/` directory. Shared UI and logic are in `components/`, `lib/`, and `i18n/`.
- Internationalization is handled via the `i18n/` directory and `messages/` JSON files (e.g., `en.json`, `it.json`).
- The project uses TypeScript and modern React patterns (functional components, hooks).

## Key Directories & Files
- `app/` — Main app entry, layout, and pages. Edit `app/page.tsx` for the homepage.
- `components/` — Reusable UI components. Subfolder `ui/` contains atomic UI elements (e.g., `button.tsx`, `card.tsx`).
- `lib/` — Utility functions (see `lib/utils.ts`).
- `i18n/` — Internationalization logic (see `i18n/request.ts`).
- `messages/` — Language files for translations.
- `public/` — Static assets.

## Developer Workflows
- **Start dev server:** Use `pnpm dev` (or `npm run dev`, `yarn dev`, `bun dev`).
- **Build for production:** `pnpm build`
- **Lint:** `pnpm lint` (uses ESLint, config in `eslint.config.mjs`).
- **Type checking:** `pnpm typecheck` (if script exists, otherwise use `tsc`).

## Project Conventions
- Use functional React components and hooks.
- UI components are colocated in `components/` and `components/ui/`.
- Prefer utility functions in `lib/` for shared logic.
- Internationalization: Use translation keys from `messages/` via helpers in `i18n/`.
- Theme support is handled by `theme-provider.tsx` and `theme-toggle.tsx`.

## Integration & Patterns
- No backend/server code in this repo; all data is static or fetched client-side.
- External dependencies managed via `pnpm` (see `package.json`).
- Follow Next.js routing and layout conventions (see `app/layout.tsx`).

## Examples
- To add a new UI element, create it in `components/ui/` and import where needed.
- To add a new translation, update the relevant JSON in `messages/` and use the i18n helpers.

---
For more, see `README.md` or Next.js docs. When in doubt, follow patterns in existing files.
