/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'genos': ['Genos', 'sans-serif']
      },
      colors: {
        'orange': '#FCB711',
        'lightorange': 'rgba(246, 182, 11, 0.10)',
        'gray': '#313131',
        'offwhite': '#FEEDD0',
      },
      fontSize: {
        'headingsmall': '42px',
        'headingbig': '80px',
        'headingbottom': '124px',
      },
      lineHeight: {
        'height': '78px',
      },
      backgroundImage: {
        'radialgradient': 'radial-gradient(40.85% 34.85% at 50% 50%, rgba(252, 183, 17, 0.47) 0%, rgba(252, 183, 17, 0.19) 100%);',
        'whobg' : 'url(./images/who-bg.png)',
        'offwhite': '#FEEDD0',
      },
      // backgroundImage:{ 'URL()'}
    },
  },
  plugins: [],
}

