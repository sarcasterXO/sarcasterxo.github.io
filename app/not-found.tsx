import Link from 'next/link';

import { Button } from '@/components/ui/button';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page not found',
};

export default function NotFound() {
	return (
		<main className="flex min-h-svh flex-col items-center justify-center gap-8 px-6 py-16 text-center">
			<p className="font-mono text-sm text-muted-foreground">404</p>
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
				<p className="text-lg text-muted-foreground">The page you are looking for does not exist or has moved.</p>
			</div>
			<Button nativeButton={false} render={<Link href="/" />} size="lg">
				Back to home
			</Button>
		</main>
	);
}
