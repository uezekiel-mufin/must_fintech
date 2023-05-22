/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'pretendard': ['Pretendard-Regular', 'Pretendard-Bold', 'Pretendard-Italic', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
