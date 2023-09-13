import clsx from 'clsx';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import {
	SiAdobeaftereffects,
	SiAdobeillustrator,
	SiAdobelightroomclassic,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiDiscord,
	SiGit,
	SiGithub,
	SiGmail,
	SiGooglecloud,
	SiHeroku,
	SiHetzner,
	SiInstagram,
	SiJavascript,
	SiMdx,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPaypal,
	SiPorsche,
	SiPython,
	SiReact,
	SiSpotify,
	SiTailwindcss,
	SiTypescript,
	SiUbuntu,
	SiVisualstudiocode,
	SiWindows,
	SiYarn,
} from 'react-icons/si';
import { Data } from 'use-lanyard';
import { ActivityProps } from '../utils/constants';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import { useUpdatingLanyard } from '../hooks/presence';
import matrix from '../assets/images/matrix.gif';
import me from '../assets/images/me.jpg';
import { getMapURL } from '../server/google-maps';
import { getCurrentProjects } from '../server/projects';
import { getLanyard } from '../server/presence';
import { age, discordId } from '../utils/constants';
import { formatList } from '../utils/lists';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface Props {
	lanyard: {
		data: Data | null;
		presence: ActivityProps;
	};
	map: StaticImageData;
	location: string;
	currentProjects: {
		id: number;
		image: string;
		name: string;
		description: string;
		link: string;
	}[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const lanyard = await getLanyard(discordId);
	const location = lanyard.data?.kv?.location ?? process.env.DEFAULT_LOCATION ?? '';

	const map = getMapURL();

	const currentProjects = getCurrentProjects().sort((a, b) => a.id - b.id);

	return {
		props: {
			map,
			location,
			lanyard,
			currentProjects,
		},
		revalidate: 10,
	};
};

export default function Home(props: Props) {
	// const age = new Date().getFullYear() - 2001;

	const { data: lanyard, presence } = useUpdatingLanyard(discordId, props.lanyard.data);
	const icon = presence?.icon;

	let presenceIcon = null;
	if (icon?.includes('vsc')) {
		presenceIcon = SiVisualstudiocode;
	} else if (icon?.includes('spotify')) {
		presenceIcon = SiSpotify;
	} else if (icon?.includes('photoshop')) {
		presenceIcon = SiAdobephotoshop;
	} else if (icon?.includes('premierepro')) {
		presenceIcon = SiAdobepremierepro;
	} else if (icon?.includes('aftereffects')) {
		presenceIcon = SiAdobeaftereffects;
	} else if (icon?.includes('lightroom')) {
		presenceIcon = SiAdobelightroomclassic;
	} else if (icon?.includes('illustrator')) {
		presenceIcon = SiAdobeillustrator;
	} else if (icon?.includes('porsche')) {
		presenceIcon = SiPorsche;
	}

	const status = lanyard?.discord_status ?? 'offline';

	return (
		<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-20 pt-16">
			<div className="col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-pink-200 dark:border-pink-500 dark:bg-pink-500/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4 md:h-52">
				<div className="flex flex-col items-center space-y-4 px-6 py-8 md:flex-row md:space-x-4 md:space-y-0">
					<img
						src={me.src}
						placeholder="blur"
						height={96}
						width={96}
						className="h-24 w-24 rounded-full border border-pink-500 object-cover"
						alt="Photo of me"
					/>

					<div className="space-y-1">
						<h1
							className="text-center text-xl font-bold font-semibold text-green-900 dark:text-green-300 dark:text-glow-green-500/50 md:text-left"
							style={{ fontFamily: 'Fira Code, monospace', fontSize: '22px' }}
						>
							Aarya Chavan <span style={{ fontSize: '16px' }}>aka Sarcaster!</span>
							<br></br>
							<span className="tracking-wide text-white" style={{ fontSize: '12px' }}>
								he/him | {age}
							</span>
						</h1>

						<p
							className="text-center font-semibold text-green-900 dark:text-green-300 dark:text-glow-green-500/50 md:text-left"
							style={{ fontSize: '15px' }}
						>
							a self taught Graphic Designer, Video Editor & Backend Developer 🤹🏻‍♂️
						</p>
					</div>
				</div>
			</div>

			<CardHoverEffect className="col-span-2 h-full">
				<Link
					href="https://instagram.com/sarcaster.fx"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-4xl text-white',
						hoverClassName,
					)}
				>
					<span className="sr-only">Instagram</span>
					<header className="transform-gpu transition duration-500 group-hover:scale-[1.3]">
						<SiInstagram />
					</header>
				</Link>
			</CardHoverEffect>

			<CardHoverEffect className="col-span-2 h-full">
				<Link
					href="https://discord.gg/8UhrUVfNrb"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'col-span-3 flex h-52 items-center justify-center rounded-2xl text-4xl md:col-span-2',
						hoverClassName,
						{
							online: 'bg-green-400 text-green-900 dark:bg-green-600 dark:text-green-50',
							idle: 'bg-orange-400 text-orange-50 ',
							dnd: 'bg-red-500 text-red-100 dark:bg-red-600',
							offline: 'bg-blurple text-white/90',
						}[status],
					)}
				>
					<div className="-rotate-[4deg] scale-[1] space-y-1 text-center text-2xl md:scale-[1.2]">
						<header>
							<SiDiscord className="inline" /> <span style={{ fontFamily: 'BalsamiqSans' }}>{status}</span>
						</header>

						<p className="text-base" style={{ fontFamily: 'BalsamiqSans' }}>
							<span>@{lanyard ? lanyard.discord_user.username : 'sarcasterxo'}</span>
						</p>
					</div>
				</Link>
			</CardHoverEffect>

			<Time />

			<CardHoverEffect className="col-span-3 h-full md:col-span-3">
				<Link
					href="https://github.com/sarcasterXO"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<img
							src={matrix.src}
							alt="The Matrix scrolling characters effect"
							className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
						/>

						<span
							aria-hidden
							className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
						/>
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiGithub className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<span className="font- block font-bold">GitHub</span>

						<span className="block text-sm">My open source work &amp; contributions.</span>
					</span>
				</Link>
			</CardHoverEffect>

			<CardHoverEffect className="col-span-3 h-52">
				<Link
					href={presence.link}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
				>
					<span className="absolute inset-0 -z-10">
						<Image
							src={presence.image}
							className="absolute inset-0 h-full w-full bg-black object-cover object-center opacity-70 brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
							alt="Presence Image"
							width={300}
							height={300}
						/>
					</span>

					<span className="flex flex-1 flex-col justify-between p-6 text-white">
						<span className="flex justify-between">
							{presenceIcon && React.createElement(presenceIcon, { className: 'text-2xl' })}
							{/* <SiSpotify className="text-2xl" /> */}
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>

						<span>
							<h2>
								<span
									className={
										presence.id === 'driving'
											? 'mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-red-500'
											: 'mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500'
									}
									aria-hidden
								/>{' '}
								<span className="font-bold" suppressHydrationWarning>
									{presence.name}
								</span>{' '}
								{presence.state ? (
									<>
										<br />
										<span suppressHydrationWarning>{presence.state.replaceAll(';', ',')}</span>
									</>
								) : (
									''
								)}
								{presence.details ? (
									<>
										<br />
										<span suppressHydrationWarning>
											{presence.id === 'spotify'
												? presence.details
													? formatList(presence.details.split('; '), 'conjunction')
													: ''
												: presence.details}
										</span>
									</>
								) : null}
							</h2>
						</span>
					</span>
				</Link>
			</CardHoverEffect>

			<div className="group relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl">
				<Link href="https://www.google.com/maps/place/Mumbai,+Maharashtra" target="_blank" rel="noopener noreferrer">
					<Image
						src={props.map}
						className="absolute inset-0 h-full w-full bg-black object-cover object-center"
						alt="A map locating roughly where I am from"
					/>

					<div className="absolute left-1/2 top-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
						<div aria-hidden className="absolute translate-y-[14px]">
							<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
						</div>

						<img
							src={me.src}
							alt="Its me. Yo!"
							height={60}
							width={60}
							className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
						/>

						<p className="rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
							📍 {props.location}
						</p>
					</div>
				</Link>
			</div>

			<div className="col-span-3 flex items-center justify-center rounded-2xl bg-purple-800 p-6 text-purple-200 md:col-span-2">
				<div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
					<SiAdobepremierepro size={24} />
					<SiAdobephotoshop size={24} />
					<SiAdobelightroomclassic size={24} />
					<SiAdobeaftereffects size={24} />
					<SiJavascript size={24} />
					<SiNodedotjs size={24} />
					<SiTypescript size={24} />
					<SiPython size={24} />
					<SiMdx size={24} />
					<SiMongodb size={24} />
					<SiDiscord size={24} />
					<SiReact size={24} />
					<SiNextdotjs size={24} />
					<SiTailwindcss size={24} />
					<SiHeroku size={24} />
					<SiGooglecloud size={24} />
					<SiHetzner size={24} />
					<SiNpm size={24} />
					<SiYarn size={24} />
					<SiGit size={24} />
					<SiGithub size={24} />
					<SiVisualstudiocode size={24} />
					<SiWindows size={24} />
					<SiUbuntu size={24} />
				</div>
			</div>

			<div className="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 text-white dark:bg-indigo-800 md:col-span-4">
				<h2 className="text-xl font-bold" style={{ fontFamily: 'Parisienne', fontSize: '28px' }}>
					Hello world 🤡
				</h2>

				<p>
					I am a seasoned professional with nearly three years of comprehensive experience in Video Editing, Graphic
					Designing, and Backend Development. Proficient in industry-standard tools such as Premiere Pro, Photoshop, and
					JavaScript.
				</p>

				<p>
					I specialize in designing eye-catching thumbnails, videos, and developing user-friendly applications. I am
					also a supporter of the open-source community, constantly seeking opportunities to enhance my skill set and
					contribute to collaborative projects.
				</p>
			</div>

			<div className="col-span-6 space-y-4 rounded-2xl bg-yellow-600 p-6 text-black md:col-span-6">
				<h1 className="font-heading text-2xl text-black">
					My Projects
					<span className="text-yellow-200"> — I'm currently working on</span>
				</h1>

				<div className="space-y-2 pt-2">
					{props.currentProjects.map((project) => {
						return (
							<Link
								className="-mx-6 block flex items-center px-6 py-2 hover:bg-yellow-700/50"
								key={project.name.toLowerCase()}
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={project.image} alt={project.name.toLowerCase()} className="mr-4 h-12 w-12 rounded-full" />
								<div>
									<h3 className="text-lg font-bold tracking-wide">{project.name}</h3>
									<p className="line-clamp-2">{project.description}</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>

			<CardHoverEffect className="col-span-3 h-52">
				<Link
					href="https://paypal.me/sarcasterop"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'col-span-3 flex h-52 items-center justify-center rounded-2xl text-4xl md:col-span-2',
						hoverClassName,
						'bg-sky-600',
					)}
				>
					<div className="-rotate-[4deg] scale-[1] space-y-1 text-center text-white opacity-90 md:scale-[1.2]">
						<header>
							<SiPaypal className="inline" />
						</header>

						<p className="text-lg font-semibold" style={{ fontFamily: 'PressStart2P' }}>
							<span>Sponsor Me :)</span>
						</p>
					</div>
				</Link>
			</CardHoverEffect>

			<CardHoverEffect className="col-span-3 h-52">
				<Link
					href="mailto:sarcasteryt@gmail.com"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
						'bg-gmail-gradient',
					)}
				>
					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiGmail className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<header className="font-heading text-xl font-semibold tracking-wide">Contact Me!</header>

						<span className="block font-semibold">sarcasteryt@gmail.com</span>
					</span>
				</Link>
			</CardHoverEffect>
		</main>
	);
}
