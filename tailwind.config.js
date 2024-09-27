/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adicione os caminhos para os seus arquivos de modelo aqui
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#002be7",
      },
      fontFamily: {
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
      }, //font-family
      backgroundImage: {
        desktopImgHeader:
          "url('https://beam-images.warnermediacdn.com/2024-07/grid-br-dsk_0.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=2530')",
        tabletImgHeader:
          "url('https://beam-images.warnermediacdn.com/2024-07/grid-br-mob_0.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=1024')",
        mobileImgHeader:
          "url('https://beam-images.warnermediacdn.com/2024-07/grid-br-mob_0.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=575')",
      }, //backgroundimage
    }, //extend
    screens: {
      xs: "240px",
      sm: "575px",
      //md: "768px",
      lg: "1024px",
      xl: "2024px",
    }, //screen57
  }, //theme
  plugins: [],
};
