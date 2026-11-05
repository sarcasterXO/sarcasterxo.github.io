import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa6';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { SiBehance, SiDiscord, SiGithub, SiPaypal, SiX } from 'react-icons/si';

import { Button } from '@/components/ui/button';

const work = [
	{
		description: 'A Discord game bot with more than 23M users.',
		href: 'https://sofi.gg',
		name: 'Sofi',
		role: 'Founding Engineer',
	},
	{
		description: 'Eye-catching thumbnails and edited content for YouTubers and social media influencers.',
		href: 'https://www.behance.net/sarcasterxo',
		name: 'Freelance',
		role: 'Graphic Designer and Video Editor',
	},
	{
		description: 'A multifunctional Discord bot with more than 400K users.',
		href: 'https://discord.com/oauth2/authorize?client_id=788799817908092978&permissions=8589934591&scope=bot%20applications.commands',
		name: 'Cohzie',
		role: 'Owner',
	},
] as const;

const links = [
	{ href: 'https://github.com/sarcasterXO', icon: SiGithub, label: 'GitHub' },
	{ href: 'https://x.com/sarcasterXO', icon: SiX, label: 'X' },
	{ href: 'https://www.linkedin.com/in/sarcasterxo/', icon: FaLinkedin, label: 'LinkedIn' },
	{ href: 'https://www.behance.net/sarcasterxo', icon: SiBehance, label: 'Behance' },
	{ href: 'https://discord.gg/8UhrUVfNrb', icon: SiDiscord, label: 'Discord' },
	{ href: 'https://paypal.me/sarcasterop', icon: SiPaypal, label: 'Sponsor me' },
] as const;

export default function Page() {
	return (
		<main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-14 px-6 py-16">
			<header className="flex flex-col gap-6">
				<Image alt="Sarcaster's avatar" className="size-24 rounded-full" height={96} src="/me.jpg" width={96} />
				<div className="flex flex-col gap-3">
					<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Aarya Chavan</h1>
					<p className="text-lg text-muted-foreground">
						aka Sarcaster. A self-taught full stack developer, graphic designer, and video editor in Mumbai, India.
					</p>
				</div>
			</header>
			<section className="flex flex-col gap-4 leading-relaxed">
				<p>
					I build user-friendly, scalable, and cool stuff with JavaScript and the MERN stack. I also make graphics in
					Adobe Photoshop and edit videos in Adobe Premiere Pro.
				</p>
				<p className="text-muted-foreground">
					When I&apos;m not working, I&apos;m geeking out over cars and tech, going for a drive, watching anime or
					movies, or learning something new.
				</p>
			</section>
			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold tracking-tight">What I&apos;m working on</h2>
				<ul className="flex flex-col divide-y divide-border">
					{work.map((item) => (
						<li key={item.name}>
							<a
								className="group flex items-start justify-between gap-6 py-4"
								href={item.href}
								rel="noreferrer"
								target="_blank"
							>
								<span className="flex flex-col gap-1">
									<span className="font-medium group-hover:underline group-hover:underline-offset-4">
										{item.name}, {item.role}
									</span>
									<span className="text-sm text-muted-foreground">{item.description}</span>
								</span>
								<FiArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-muted-foreground" />
							</a>
						</li>
					))}
				</ul>
			</section>
			<footer className="flex flex-col gap-6">
				<div className="flex flex-col items-start gap-4">
					<h2 className="text-xl font-semibold tracking-tight">Let&apos;s team up and create something together</h2>
					<Button nativeButton={false} render={<a href="mailto:sarcasteryt@gmail.com" />} size="lg">
						<FiMail aria-hidden="true" />
						sarcasteryt@gmail.com
					</Button>
				</div>
				<ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
					{links.map((item) => (
						<li key={item.href}>
							<a
								className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
								href={item.href}
								rel="noreferrer"
								target="_blank"
							>
								<item.icon aria-hidden="true" />
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</footer>
		</main>
	);
}
