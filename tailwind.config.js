// tailwind.config.js
module.exports = {
  darkMode: "class", // Utiliser la classe pour le mode sombre
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   prefix: "",
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        sm: '540px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#008080',
          hover: '#008080',
        },
        background: {
          light: '#f5f5f5',
          dark: '#282c34',
        },
        text: {
          light: '#333333',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
