import { FiArrowUpRight } from 'react-icons/fi';

import { Button } from '@/components/ui/button';

const resources = [
	{ href: 'https://nextjs.org/learn', label: 'Learn' },
	{ href: 'https://vercel.com/templates?framework=next.js', label: 'Templates' },
	{ href: 'https://nextjs.org', label: 'nextjs.org' },
] as const;

export default function Page() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-16 px-6 py-16 text-center">
			<main className="flex w-full max-w-xl flex-col items-center gap-8">
				<p className="text-sm font-medium tracking-tight">next.js-template</p>
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						Get started by editing{' '}
						<code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">app/page.tsx</code>.
					</h1>
					<p className="text-lg text-muted-foreground">Save and see your changes instantly.</p>
					<a
						className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
						href="https://github.com/sarcasterXO/next.js-template"
						rel="noreferrer"
						target="_blank"
					>
						github.com/sarcasterXO/next.js-template
					</a>
				</div>
				<div className="flex flex-col items-center gap-3 sm:flex-row">
					<Button
						nativeButton={false}
						render={<a href="https://vercel.com/new" rel="noreferrer" target="_blank" />}
						size="lg"
					>
						Deploy Now
					</Button>
					<Button
						nativeButton={false}
						render={<a href="https://nextjs.org/docs" rel="noreferrer" target="_blank" />}
						size="lg"
						variant="outline"
					>
						Documentation
					</Button>
				</div>
			</main>
			<footer className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
				{resources.map((item) => (
					<a
						className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
						href={item.href}
						key={item.href}
						rel="noreferrer"
						target="_blank"
					>
						{item.label}
						<FiArrowUpRight aria-hidden="true" />
					</a>
				))}
			</footer>
		</div>
	);
}
