import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation : {
				"fade-in-bottom": "fade-in-bottom 0.6s ease-out   both",
				"random-to-white": "random-to-white 1s ease-out",
				"fade-in-opacity": "fade-in-opacity 2s ease-out both",
			},
			keyframes : {
				"fade-in-bottom": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"random-to-white": {
					"0%": {
						color: `hsl(55, 90%, 45%)`
						
					},
					"100%": {
						color: "#f9fafb",
					},
				},
				"fade-in-opacity": {
					"0%": {
						opacity: "0",
					},
					to: {
						opacity: "1",
					},
				},
			}
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-stroke': (value) => ({
						'-webkit-text-stroke-width': value,
						'text-stroke-width': value,
					}),
				},
				{
					type: 'length',
					values: {
						'px': '1px',
					},
				}
			)
			matchUtilities(
				{
					'text-stroke': (value) => ({
						'-webkit-text-stroke-color': value,
						'text-stroke-color': value,
					}),
				},
				{
					type: 'color',
					values: theme('colors'),
				}
			)
		}),
	],
};
export default config;
