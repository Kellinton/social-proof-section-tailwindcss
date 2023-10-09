/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'roxo': ['hsl(300, 43%, 22%)'],
        'rosa': ['hsl(333, 80%, 67%)'],
        'cinza': ['hsl(303, 10%, 53%)'],
        'branco1': ['hsl(300, 24%, 96%)'],
        'branco2': ['hsl(0, 0%, 100%)']     
      },
    },
  },
  plugins: [],
}

