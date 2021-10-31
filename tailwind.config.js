module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        iris: "'Irish Grover', cursive",
        lobster: "'Lobster', cursive",
        perament: "'Permanent Marker', cursive",
        qahiri: "'Qahiri', sans-serif",
        spartan: "'Spartan', sans-serif",
      },


    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
