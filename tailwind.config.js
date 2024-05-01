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
        backgroundColor: '#F6F5FC',
        primary: {
          lighter: '#E8E3FF',
          light: '#6674F4',
          main: '#5861FC',
          dark: '#3346F0',
        },
        gray: {
          900: '#222222',
          200: '#BCBCBC',
          100: '#E5E5E5',
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

