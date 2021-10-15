module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bg: "#22283A",
      secondary: "#2A3349",
      primary: {
        DEFAULT: "#3D4557",
        dark: "#323948",
      },
      green: {
        DEFAULT: "#329A68",
        dark: "#2C875B",
      },
      red: {
        DEFAULT: "#9A3232",
        dark: "#872C2C",
      },
      white: "#ffffff",
      gray: "#C4C4C4",
    },
    fontFamily: {
      'regular': ['Poppins'],
      'bold': ['Poppins-Bold'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
