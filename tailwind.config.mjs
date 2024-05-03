/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#005248",
        secondary: "#FA991C",
        variantSecondary: "#F2CA7F",
        Black: "#333333",
        Light: "#FFFFFF",
        tenueText: "#A1A1A1",
        orangeSubtitle: "#FFB85A",
        buttonText: "#46424066",
        grayBanner: "#00000029",
      },
      backgroundColor: {
        cardBackgroud: "#F9F7F7",
        buyBackground: "#FFF8F0",
        detailsBackgroud: "#B4D5D1",
        guaranteeIconsB: "#F5B546",
        orangeAcentuateIcon: "#EBA121",
      },
      backgroundImage: {
        heroMain:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/background_banner@2x.webp')",
      },
    },
  },
  plugins: [],
};
