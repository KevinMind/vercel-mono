import { createStyled } from '@stitches/react';

const generateScale = (count) => new Array(count).fill(null).reduce((acm, key, index) => ({
  ...acm,
  [`$${index + 1}`]: `${5 * (index + 1)}px`
}), {});

console.log({ size: generateScale(10) });

export const { styled, css } = createStyled({
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (config) => (value) => ({
      borderRadius: value,
    }),
  },
  prefix: '',
  tokens: {
    colors: {
      $white: '#fff',
      $gray100: '#f5f5f5',
      $gray500: 'hsl(206,10%,76%)',
      $blue500: 'hsl(206,100%,50%)',
      $purple500: 'hsl(252,78%,60%)',
      $green500: 'hsl(148,60%,60%)',
      $red500: 'hsl(352,100%,62%)',
      $red200: 'rgba(175, 47, 47, 0.15)',
    },
    space: generateScale(10),
    fontSizes: {
      $1: '12px',
      $2: '13px',
      $3: '15px',
      $4: '24px',
      $10: '100px'
    },
    fonts: {
      $untitled: 'Untitled Sans, apple-system, sans-serif',
      $mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: generateScale(10),
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      $default: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
      $inner: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
      $outline: 'rgba(66, 153, 225, 0.6) 0px 0px 0px 3px'
    },
    zIndices: {},
    transitions: {},
  },
  breakpoints: {},
  utils: {},
});