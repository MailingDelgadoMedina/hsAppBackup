/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      
    extend: {
      fontFamily: {

        'minako': ['Minako', 'sans-serif'], 
      },
        

      colors:{
      'hsbg': '#110038',
      'hsgreen':'#66FFA6',
      'hsorange':'#FFAE00',
      'hspink':'#E87DE8',
      'hscream':'#FFF6D1',
      'hsblue':'#000642'

    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
   
  
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
  ],
}
