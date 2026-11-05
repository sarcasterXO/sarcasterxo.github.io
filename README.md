# Sarcaster

The personal website of Aarya Chavan, aka Sarcaster: [sarcaster.is-a.dev](https://sarcaster.is-a.dev).

## Stack

- Next.js 16 and React 19, App Router at the repo root (no `src/`)
- Static export (`output: 'export'`) in `next.config.ts`
- TypeScript 6
- Tailwind CSS 4 and PostCSS
- shadcn (`base-rhea`) with one Button
- `motion`, `react-icons`, and `three` are installed for later use
- Oxlint and Oxfmt, via `@imranbarbhuiya/oxc-config`
- Bun

## Project structure

```
app/layout.tsx          Root layout, Inter font, metadata, viewport
app/page.tsx            Home page: bio, current work, and links
app/not-found.tsx       404 page
public/robots.txt       Served as /robots.txt
app/globals.css         Tailwind and shadcn theme tokens (light theme)
components/ui/          shadcn components
lib/utils.ts            `cn` class name helper
public/me.jpg           Avatar
public/.well-known/     Discord domain verification
```

`@/*` resolves from the repo root, so `@/components/ui/button` and `@/lib/utils` work anywhere.

## Metadata

`app/layout.tsx` sets the title template (`%s | Sarcaster`), description, author, Open Graph and Twitter tags, the site URL, and the theme color. `public/robots.txt` allows every crawler on `/`. A page only needs `export const metadata = { title: 'About' }` to get `About | Sarcaster`.

## Scripts

You need [Bun](https://bun.sh) 1.4.4. `package.json` pins it through `packageManager`.

```
bun install
bun run dev
bun run preflight
bun run build
```

`preflight` formats, generates route types with `next typegen`, typechecks with `tsc` on TypeScript 6.0.3, lints with `oxlint --fix`, then builds. `lint:check` reports lint without writing files. `format:check` does the same for formatting. `build` writes the static site to `out`; preview it with any static file server, because `next start` does not work with a static export.

GitHub Actions runs `lint:check`, `format:check`, and `typecheck` on pushes to `main` and on pull requests, using GitHub-hosted runners.

## shadcn

Add a component with:

```
bunx shadcn add dialog
```

`components.json` sets `iconLibrary` to `lucide` so the CLI stays valid. `lucide-react` is not installed. Use `react-icons` for icons. If a generated file imports `lucide-react`, replace those imports with `react-icons` and remove the package.

## Commits

The `pre-commit` hook formats staged files with Oxfmt and lints staged JavaScript and TypeScript with Oxlint. Commit messages use [Conventional Commits](https://www.conventionalcommits.org/), such as `feat: add home page` or `fix: correct the favicon`. The `commit-msg` hook rejects anything else.

## Deploy

`.github/workflows/deploy.yml` builds the site and deploys `out` to GitHub Pages on every push to `main`. The custom domain, `sarcaster.is-a.dev`, is set in the repository's Pages settings. Because the site is a static export, it cannot use API routes or anything else that needs a server.

## Author

Aarya Chavan ([sarcasterXO](https://github.com/sarcasterXO))

## License

[Apache License 2.0](LICENSE).
