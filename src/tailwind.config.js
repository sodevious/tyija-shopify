/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    path.resolve(__dirname, '**/*.{js,vue}'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      red: '#D9000F',
      yellow: '#F8D849',
      transparent: 'transparent',
      currentColor: 'currentColor'
    },
    fontFamily: {
      sans: ['NeueHaasGroteskDisp W02', 'Helvetica Neue', 'Helvetica', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['WT Kormelink SemLt', 'ui-serif', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1rem' }],
      base: ['1rem', { lineHeight: '150%' }],
      md: ['1.25rem', { lineHeight: '80%' }],
      lg: ['2rem', { lineHeight: '80%' }],
      xl: ['6rem', { lineHeight: '100%' }],
      'h5': ['0.75rem', { lineHeight: '150%' }],
      'h4': ['1rem', { lineHeight: '150%' }],
      'h3': ['2rem', { lineHeight: '120%' }],
      'h2': ['3rem', { lineHeight: '120%' }],
      'h1': ['4rem', { lineHeight: '100%' }]
    },
    lineHeight: {
      none: '1',
      90: '90%',
      100: '100%',
      120: '120%',
      150: '150%'
    },
    extend: {
      gridTemplateColumns: {
        'product': '60% 40%'
      },  
      gridTemplateRows: {
        'menu': '1fr 1fr 1fr 1fr 8rem'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      // screens: {
      //   'short': { 'raw': '(max-height: 700px) and (min-width: 768px)' },
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', `.light &`)
    }),
    plugin(function ({ addVariant }) {
      addVariant('no-js', `.no-js &`)
    }),
    plugin(function ({ addVariant }) {
      addVariant('js', `.js &`)
    }),
    plugin(function ({ addVariant }) {
      addVariant('index', `.index &`)
    }),
    plugin(function ({ addVariant }) {
      addVariant('nav-open', `.nav-open &`)
    }),  
    plugin(function ({ addVariant }) {
      addVariant('footer-open', `.footer-open &`)
    }),
    plugin(function ({ addVariant }) {
      addVariant('zoomed', `.zoomed &`)
    })
  ]
};
