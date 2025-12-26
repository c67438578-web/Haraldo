/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // Pega tudo do app
    './components/**/*.{js,ts,jsx,tsx}', // Pega tudo dos componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
