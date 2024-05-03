// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./{src,app}/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
			title: ['var(--font-title)', ...defaultTheme.fontFamily.serif],
			heading: ['BalsamiqSans'],
		},
		extend: {
			colors: {
				blurple: '#5865F2',
				behanceBlue: '#053EFF',
				paypalBlue: '#00457C',
			},
			backgroundImage: {
				'gmail-gradient': 'linear-gradient(to left, #dd4b39, #d14836, #c94634, #c04432, #b94230)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		{
			handler: (tw) => {
				tw.matchComponents(
					{
						'bg-grid': (value) => ({
							backgroundSize: '90px 90px',
							backgroundImage: `
								linear-gradient(to right, ${value} 1px, transparent 1px),
								linear-gradient(to bottom, ${value} 1px, transparent 1px)
							`,
						}),
					},
					{
						values: flattenColorPalette(tw.theme('colors')),
						type: 'color',
					},
				);

				tw.matchUtilities(
					{
						'text-glow': (value) => ({
							'text-shadow': `0 0 10px ${value}, 0 0 150px ${value}`,
						}),
						glow: (value) => ({
							filter: `drop-shadow(0px 0px 7px ${value})`,
						}),
					},
					{
						values: flattenColorPalette(tw.theme('colors')),
						type: 'color',
					},
				);
			},
		},
	],
};
