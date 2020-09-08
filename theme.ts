import { theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

const customTheme = merge(theme, {
  colors: {
    primary: {
      50: '#ffecdc',
      100: '#ffcaaf',
      200: '#ffa77e',
      300: '#ff864c',
      400: '#ff631a',
      500: '#e64a00',
      600: '#b43800',
      700: '#812800',
      800: '#4f1700',
      900: '#210400',
    },
    secondary: {
      50: '#def1ff',
      100: '#afd3ff',
      200: '#7db6ff',
      300: '#4b99ff',
      400: '#1a7cff',
      500: '#0063e6',
      600: '#004db4',
      700: '#003782',
      800: '#002151',
      900: '#000b21',
    },
  },
  breakpoints: ['640px', '1024px'],

  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    heading:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
    'display-1': 'var(--display-1)',
    'display-2': '3.4rem',
    'display-3': '3.0rem',
    'display-4': '2.6rem',
    'body-1': 'var(--body-1)',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
})

export default customTheme
