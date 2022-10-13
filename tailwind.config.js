/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.html",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		container: {
			padding: "2rem",
		},
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
};
