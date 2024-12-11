/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'sans-serif'], // Ustawia Roboto jako domyślną
			},
			transitionDelay: {
				2000: '2000ms',
			},
			scale: {
				175: '1.75',
			},
		},
	},
	plugins: [],
}
