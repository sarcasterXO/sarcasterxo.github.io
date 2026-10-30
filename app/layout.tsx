import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	description: 'A Next.js 16 starter with TypeScript, Bun, Tailwind CSS, shadcn, Motion, react-icons, and three.js.',
	title: 'next.js-template',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={cn('font-sans', inter.variable)} lang="en">
			<body>{children}</body>
		</html>
	);
}
