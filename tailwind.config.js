/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adicione os caminhos para os seus arquivos de modelo aqui
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
      'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],      
      'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

