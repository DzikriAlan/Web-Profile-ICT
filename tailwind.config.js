module.exports = {
  content: ["index.html", "about.html", 'contact.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        emerald: '#059669',
        emeraldTua: '#064e3b',
        slateMuda: '#e2e8f0',
        slateParuhbaya: '#cbd5e1',
        slateTua: '#1c1917',
        neutralTua: '#171717',
        neutralMuda: '#262626',
      },
      fontFamily: {
        rubik: ['Rubik'],
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
        lato: ['Lato'],
        open: ['Open Sans'],
        domine: ['Domine'],
        cinzel: ['Cinzel Decorative']
      }
    },
  },
  plugins: [],
}
