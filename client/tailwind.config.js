/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'Mulish': ['Mulish', 'sans-serif'],
            }
        }
    },
    plugins: [require("daisyui")],
}
