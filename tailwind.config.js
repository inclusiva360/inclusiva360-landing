/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0ca958', // O verde do botão
        'brand-blue': '#2D4059',  // O azul escuro do rodapé
        'brand-yellow': '#FACC15', // O amarelo do "Saiba mais"
        'brand-blue-origin': '#01b0f1' // O amarelo do "Saiba mais"
      }
    },
  },
  plugins: [],
}