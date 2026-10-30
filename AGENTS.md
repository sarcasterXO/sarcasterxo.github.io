<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# next.js-template

A Next.js 16 App Router starter by [sarcasterXO](https://github.com/sarcasterXO). The public repository is [github.com/sarcasterXO/next.js-template](https://github.com/sarcasterXO/next.js-template). It is a generic template, not a deployed product: there is no database, auth, API, or static GitHub Pages export.

## Stack

- Next.js 16.4 and React 19, App Router at the repo root. No `src/` directory.
- TypeScript 6.0.3. Typecheck with `tsc` through `bun run typecheck`. Do not use `bun check`.
- Bun 1.4.4. `packageManager` is pinned. Install with `bun install`.
- Tailwind CSS 4 through `@tailwindcss/postcss`. There is no `tailwind.config`.
- shadcn style `base-rhea` on Base UI. One component exists: `components/ui/button.tsx`.
- `motion`, `react-icons`, and `three` are installed for later use. Do not add a demo just to import them.
- Oxlint and Oxfmt, both extending `@imranbarbhuiya/oxc-config`. Oxlint is type-aware.

## Layout

```
app/layout.tsx          Root layout, Inter, metadata
app/page.tsx            Starter home page
app/globals.css         Tailwind and shadcn theme tokens
app/favicon.ico         Next.js icon
components/ui/          shadcn components
components.json         shadcn CLI config
lib/utils.ts            Re-exports `cn` from the `cn` package
next.config.ts          Default Next config. No `output: 'export'`
oxlint.config.mts       Lint config
oxfmt.config.mts        Format config
tsconfig.json           `@/*` maps to the repo root. `incremental` is false
.github/workflows/      GitHub-hosted CI
.github/husky/          commit-msg and pre-commit hooks
```

`next build` writes `.next`. Do not turn incremental compilation back on. That writes `tsconfig.tsbuildinfo`.

The home page is a centered starter: edit `app/page.tsx`, then Deploy Now or Documentation. It links to the template repository. The theme is light and muted. `color-scheme` is `light`. Do not add a dark-mode toggle.

Buttons that render an `<a>` must set `nativeButton={false}`. Base UI otherwise warns that it expected a `<button>`.

## Commands

- `bun run dev` starts the app.
- `bun run preflight` formats, typechecks, lints with fixes, and builds.
- `bun run lint:check` and `bun run format:check` report without writing.
- `bun run build` then `bun run start` serves the production build.

CI on GitHub-hosted `ubuntu-latest` runs `lint:check`, `format:check`, and `typecheck` for pushes to `main` and for pull requests. There is no deploy workflow.

## Conventions

- Add shadcn components with `bunx shadcn add <name>`. `components.json` sets `iconLibrary` to `lucide` so the CLI stays valid. `lucide-react` is not installed. Use `react-icons`. If a generated file imports `lucide-react`, replace that import and remove the package.
- Oxlint sorts JSX props alphabetically. `className` comes before `lang` and before `data-slot`.
- Commit messages follow Conventional Commits. The `commit-msg` hook runs commitlint.
- The `pre-commit` hook runs lint-staged: Oxfmt on staged files, then Oxlint `--fix` on staged JavaScript and TypeScript, including `jsx` and `tsx`.
- `plans/` is historical and ignored by Oxlint and Oxfmt. Do not restyle it while changing the template.
