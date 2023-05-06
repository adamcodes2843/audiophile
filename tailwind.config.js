/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'audiocolor': {
        'w1': '#FFFFFF',
        'w2': '#FAFAFA',
        'w3': '#F1F1F1',
        'oj1': '#FBAF85',
        'oj2': '#D87D4A',
        'b1': '#101010',
        'b2': '#000000',
      },
    },
    fontSize: {
      'H1': ['56px', {
        lineHeight: '58px',
        letterSpacing: '2px',
        fontWeight: '700'
      }],
      'H2': ['40px', {
        lineHeight: '44px',
        letterSpacing: '1.5px',
        fontWeight: '700'
      }],
      'H3': ['32px', {
        lineHeight: '32px',
        letterSpacing: '1.15px',
        fontWeight: '700'
      }],
      'H4': ['28px', {
        lineHeight: '38px',
        letterSpacing: '2px',
        fontWeight: '700'
      }],
      'H5': ['24px', {
        lineHeight: '33px',
        letterSpacing: '1.7px',
        fontWeight: '700'
      }],
      'H6': ['18px', {
        lineHeight: '24px',
        letterSpacing: '1.3px',
        fontWeight: '700'
      }],
      'overline': ['14px', {
        lineHeight: '19px',
        letterSpacing: '10px',
        fontWeight: '400'
      }],
      'subtitle': ['13px', {
        lineHeight: '25px',
        letterSpacing: '1px',
        fontWeight: '700'
      }],
      'body': ['15px', {
        lineHeight: '25px',
        letterSpacing: '0em',
        fontWeight: '500'
      }],
    },
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)']
      },
    },
  },
  plugins: [],
}
