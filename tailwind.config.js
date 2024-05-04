/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        modal: '#F6F5FC',
        primary: {
          lighter: '#E8E3FF',
          light: '#6674F4',
          main: '#5861FC',
          dark: '#3346F0',
        },
        danger: {
          light: '#F97171',
          main: '#FC5050',
          dark: '#F63131',
        },
        success: {
          main: '#51CA73',
        },
      }
    },
  },
  plugins: [],
}

