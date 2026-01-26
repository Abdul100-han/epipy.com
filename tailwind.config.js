/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#001844",
            secondary: "#A285D1",
            white: "#FFFFFF",
            transparent: 'transparent',
            current: 'currentColor',
        },
        extend: {
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-250px * 8))' },
                }
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
    corePlugins: {
        // Disable default color utilities to prevent gray/slate/neutral usage
        preflight: true,
    },
}
