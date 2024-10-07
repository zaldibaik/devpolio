/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#030025',
        customBlue2: '#000832',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #030025 100%, #088832 100%)',
      },
      fontFamily: {
        hurricane: ['Hurricane', 'cursive'],
      },
    },
  },
  plugins: [],
}
