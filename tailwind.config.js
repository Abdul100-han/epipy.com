/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#0a327d',
                    DEFAULT: '#001844',
                    dark: '#000c22',
                },
                secondary: {
                    light: '#c3b1e3',
                    DEFAULT: '#A285D1',
                    dark: '#8160b8',
                },
                accent: {
                    light: '#f8fafc',
                    DEFAULT: '#64748b',
                    dark: '#1e293b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
