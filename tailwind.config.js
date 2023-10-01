/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#380000',
				},
				dark: {
					DEFAULT: '#280000',
				},
			},
		},
	},
	plugins: [require('daisyui')],
};
