/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgc: {

       //   '0%': { background: 'linear-gradient(to right, #F49390 , #A5F8D3)' },
       //   '30%': { background: 'linear-gradient(to right, #995FA3 , #9A98B5)' },
       //   '60%': { background: 'linear-gradient(to right, #802392 , #A0B9C6)' },
       //   '100%': { background: 'linear-gradient(to right, #F49390 , #A5F8D3)' }

          '0%': {background: 'background-position: 0% 58%'},
          '50%': {background: 'background-position: position:100% 43%'},
          '100%': {background: 'background-position: position:0% 58%'},
        }


      },

    animation: {
        'shift-color': 'bgc 20s ease infinite  alternate-reverse, background: linear-gradient(145deg, #17c89b, #bf17c8, #f545ff, #c9ff45);',

    },

    },
  },
  plugins: [],
}