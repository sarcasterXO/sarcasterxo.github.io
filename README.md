# next.js-template

A Next.js 16 App Router starter for a new project: TypeScript, Bun, Tailwind CSS, and shadcn are already wired, with Motion, react-icons, and three.js installed for animation, icons, and 3D. Oxlint and Oxfmt handle lint and format, so the first commit can be application code.

## Stack

- Next.js 16 and React 19
- TypeScript 6
- Tailwind CSS 4 and PostCSS
- shadcn (`base-rhea`) with one Button
- `motion`, `react-icons`, and `three` are installed for later use
- Oxlint and Oxfmt, via `@imranbarbhuiya/oxc-config`
- Bun

## Scripts

```
bun install
bun run dev
bun run preflight
bun run build
bun run start
```

`preflight` formats, generates route types with `next typegen`, typechecks with `tsc` on TypeScript 6.0.3, lints with `oxlint --fix`, then builds. `lint:check` reports lint without writing files. `format:check` does the same for formatting. `start` serves the production build.

GitHub Actions runs `lint:check`, `format:check`, and `typecheck` on pushes to `main` and on pull requests, using GitHub-hosted runners. Pull requests also check that commit messages follow Conventional Commits.

## shadcn

Add a component with:

```
bunx shadcn add dialog
```

`components.json` sets `iconLibrary` to `lucide` so the CLI stays valid. `lucide-react` is not installed. Use `react-icons` for icons. If a generated file imports `lucide-react`, replace those imports with `react-icons` and remove the package.

## Contributing

Open an [issue](https://github.com/sarcasterXO/next.js-template/issues) or a [pull request](https://github.com/sarcasterXO/next.js-template/pulls).

1. Fork the repository and create a branch.
2. Run `bun install`, then `bun run dev`.
3. Run `bun run preflight` before opening a pull request.

The `pre-commit` hook formats staged files with Oxfmt and lints staged JavaScript and TypeScript with Oxlint. Commit messages use [Conventional Commits](https://www.conventionalcommits.org/), such as `feat: add home page` or `fix: correct the favicon`. The `commit-msg` hook rejects anything else. Pull requests check the same rule.

## Author

[sarcasterXO](https://github.com/sarcasterXO)

## License

[Apache License 2.0](LICENSE).
