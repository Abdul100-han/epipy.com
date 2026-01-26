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
                    light: '#335c85',
                    DEFAULT: '#003366',
                    dark: '#001a33',
                },
                secondary: {
                    light: '#f9a94a',
                    DEFAULT: '#F7941D',
                    dark: '#c17215',
                },
                accent: {
                    light: '#f1f5f9',
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
