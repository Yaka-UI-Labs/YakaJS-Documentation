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
        // Oatmeal Palette - Main colors
        oatmeal: {
          black: '#0B0A08',       // Primary background
          card: '#141311',        // Secondary/Cards
          white: '#E7E5E4',       // Action/Button
          stone: '#A8A29E',       // Body/Meta text
          olive: '#2B2922',       // Accents/Borders
        },
        // Keep yaka as aliases for backward compatibility
        yaka: {
          darkest: '#0B0A08',     // = oatmeal-black
          dark: '#141311',        // = oatmeal-card
          darker: '#2B2922',      // = oatmeal-olive
          medium: '#A8A29E',      // = oatmeal-stone
          'medium-light': '#A8A29E',
          light: '#E7E5E4',       // = oatmeal-white
          lighter: '#E7E5E4',
          lightest: '#FFFFFF',    // Pure white
          accent: '#E7E5E4',      // = oatmeal-white
          'accent-dark': '#A8A29E',
        },
      },
    },
  },
  plugins: [],
}
