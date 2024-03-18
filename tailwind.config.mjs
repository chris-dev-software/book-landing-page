/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#1B3764",
				secondary: "#FFCA42",
				degradate: "#F6F8FC",
				paragraph: "#B4C7E7"
			}
		},
		fontFamily: {
			'cardo': ['Cardo', 'serif'],
			'inter': ['Inter', 'serif']
		}
	},
	plugins: [],
}
