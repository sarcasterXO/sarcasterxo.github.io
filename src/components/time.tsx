import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { daysUntilNextBirthday, INTimeFormatter } from '../utils/constants';

function Night({ time }: { time: Date }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		const ctx = canvas.getContext('2d');

		if (!ctx) {
			return;
		}

		for (let i = 0; i < 50; i++) {
			ctx.fillStyle = 'white';
			ctx.beginPath();
			ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
			ctx.fill();
		}
	}, [canvasRef]);

	return (
		<div
			className={clsx('relative flex items-center justify-center overflow-hidden rounded-2xl', 'bg-sky-900 text-white')}
		>
			<canvas
				ref={canvasRef}
				aria-hidden
				className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden rounded-2xl opacity-40"
			/>

			<div className="z-10 text-center">
				<h2 className={clsx('text-center text-xl font-bold', 'dark:text-glow-gray-500')}>
					{INTimeFormatter(time, false)}
				</h2>

				<p className={clsx('text-s font-light', 'text-glow-sky-900 dark:text-glow-sky-500')}>in India</p>
			</div>
		</div>
	);
}

function Day({ time }: { time: Date }) {
	return (
		<div className="opacity-85 relative flex overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF] first-letter:w-full">
			<div className="flex w-full items-center justify-center">
				<div className="flex items-baseline space-x-1 md:space-x-2">
					<div className="flex flex-col">
						<div className={clsx('text-center text-xl font-bold', 'text-yellow-200 dark:text-yellow-200')}>
							{INTimeFormatter(time, false)}
						</div>
						<p className={clsx('text-s text-center font-medium', 'text-black dark:text-black dark:text-glow-sky-500')}>
							in India
						</p>
					</div>
				</div>
			</div>

			<motion.div
				aria-hidden
				animate={{
					scale: [1, 1.1, 1.2, 1],
				}}
				transition={{
					duration: 4,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className="pointer-events-none absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4"
			>
				<motion.div>
					<div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
						<div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
							<motion.div
								initial={false}
								animate={{ scale: [1, 0.8, 1.1, 1, 1, 1, 2] }}
								transition={{
									duration: 4,
									ease: 'easeInOut',
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								className="relative h-5 w-5 rounded-tl-full bg-yellow-200"
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export function Time() {
	const [time, setTime] = useState(() => new Date());
	const [isHovered, setIsHovered] = useState(false);

	const isBirthday = new Date().getDate() === 27 && new Date().getMonth() + 1 === 11;
	console.log(new Date().getDate());
	const birthdayText = isHovered ? (
		<p className="font-semibold">
			<span className="text-base tracking-wider">27/11/2001</span>
		</p>
	) : isBirthday ? (
		<p className="font-heading text-sm">
			It's my
			<br />
			<span className="font-sans text-base font-bold tracking-wide">BIRTHDAY!!</span>
		</p>
	) : (
		<p className="font-heading text-xs">
			<span className="font-sans text-xl font-bold tracking-wide">{daysUntilNextBirthday}</span> days
			<br />
			until birthday
		</p>
	);

	const isNight = time.getHours() >= 19 || time.getHours() <= 6;

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="col-span-3 grid grid-cols-1 gap-6 md:col-span-1">
			{isNight ? <Night time={time} /> : <Day time={time} />}

			<div
				className={`flex items-center justify-center rounded-2xl bg-indigo-100 text-fuchsia-200 dark:bg-[#23224c] dark:text-fuchsia-300 ${
					isHovered ? 'hovered' : ''
				}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="text-center">{birthdayText}</div>
			</div>
		</div>
	);
}
