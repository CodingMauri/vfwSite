/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Rothwell': ["rothwell", 'sans-serif'],
        'Libel': ["libel", "sans-serif"]
      }   },
  },
  plugins: [],
}

