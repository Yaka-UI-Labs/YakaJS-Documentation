/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/docs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        yaka: {
          darkest: '#1E1C16',
          dark: '#2C2B20',
          darker: '#3A3830',
          medium: '#4A4840',
          'medium-light': '#5A5850',
          light: '#B5B6AE',
          lighter: '#D0D2CA',
          lightest: '#F0F2EA',
          accent: '#C8B888',
          'accent-dark': '#A89868',
        },
      },
    },
  },
  plugins: [],
}
