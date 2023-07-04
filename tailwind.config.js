/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 원하는 색상 등록 가능
        brand: '#ff0000',
      },
    },
  },
  plugins: [],
};
