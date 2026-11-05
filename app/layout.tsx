import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const name = 'Sarcaster';
const description =
	'Aarya Chavan, aka Sarcaster: a self-taught full stack developer, graphic designer, and video editor.';

export const metadata: Metadata = {
	applicationName: name,
	authors: [{ name: 'Aarya Chavan', url: 'https://sarcaster.is-a.dev' }],
	creator: 'Aarya Chavan',
	description,
	openGraph: {
		description,
		locale: 'en_US',
		siteName: name,
		title: name,
		type: 'website',
	},
	title: {
		default: name,
		template: `%s | ${name}`,
	},
	twitter: {
		card: 'summary',
		creator: '@sarcasterXO',
		description,
		title: name,
	},
	keywords: [
		'Aarya Chavan',
		'Sarcaster',
		'portfolio',
		'full stack developer',
		'graphic designer',
		'video editor',
		'Mumbai',
	],
	metadataBase: new URL('https://sarcaster.is-a.dev'),
};

export const viewport: Viewport = {
	colorScheme: 'light',
	themeColor: '#e5ecf3',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={cn('font-sans', inter.variable)} lang="en">
			<body>{children}</body>
		</html>
	);
}
