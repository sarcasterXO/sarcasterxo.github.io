import '../assets/styles/globals.css';
import '../assets/styles/scrollbar.css';

import type { AppProps } from 'next/app';
import { Nanum_Myeongjo } from 'next/font/google';
import font from 'next/font/local';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Footer from './footer';
import { getMetaData } from '../utils/constants';

const title = Nanum_Myeongjo({
	subsets: ['latin'],
	weight: '400',
	fallback: ['serif'],
});

const body = font({
	src: '../fonts/roobert-variable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
	const { title: embedTitle, description, image, color, url } = getMetaData();
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-title: ${title.style.fontFamily};
						--font-body: ${body.style.fontFamily};
					}
				`}
			</style>

			<Head>
				<title>Sarcaster</title>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta property="og:title" content={embedTitle} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={description} />
				<meta property="og:color" content={color} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={image} />
			</Head>
			<Component {...pageProps} />
			<Footer />
			<Toaster />
		</>
	);
}
