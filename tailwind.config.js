/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':'#FFFFFF',
        'gray-light':'#C3C3C3',
        'gray-dark':'#7E7E7E',
        'black':'#1D1D1D',
        'green-dark':'#2D5C43',
        'indigo-dark':'#393158',
        'vertdigo':'#2A5259',
        'yellowgray':'#706947'
      },
      backgroundColor:{
        'white':'#FFFFFF',
        'gray-light':'#C3C3C3',
        'gray-dark':'#7E7E7E',
        'black':'#1D1D1D',
        'green-dark':'#2D5C43',
        'purple-dark':'#393158',
        'ocean':'#2A5259',
        'olive':'#706947',
        'blackopacity23':'#00000023',
        'blackopacity15':'#00000015',
        'grayopacity40':'#E5E5E540',
        'grayopacity50':'#E5E5E550',

      },
      fontFamily:{
        jetbrainsmono : ['JetBrainsMono', 'sans-serif'],
        archivo : ['Archivo', 'sans-serif'],
        chillax : ['Chillax', 'serif'],
        chillaxBold : ['ChillaxBold'],
        chillaxsemibold : ['ChillaxSemiBold']
      },
      gap:{
        '4.5':'18px',
        '6.5':'26px',
        '10.5':'42px',
      },
      translate:{
        'double-full':'200%'
      },
      backgroundImage:{
        'hero':"url('/src/assets/images/jordan-mens-jacket.svg')"
      },
      borderRadius:{
        '32':'32px',
        '50':'50px',
        '52':'52px'
      },
      fontSize:{
        '10':'10px',
        '42':'42px'
      },
      height:{
        '45':'45px',
        '72':'72px',
        '76':'76px',
        '470':'470px',
        '500':'500px',
        '460':'460px'
      },
      width:{
        '10':'10%',
        '30':'30%',
        '45':'45px',
        '47':'47%',
        '50':'50px',
        '53':'53px',
        '66':'66px',
        '72':'72px',
        '158':'158px',
        '35':'35%',
        '60':'60%',
        '81':'374px'
      },
      padding:{
        '5.5':'22px',
        '76':'76px',
        '150':'150px'
      }
    },
  },
  plugins: [],
}

