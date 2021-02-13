import '../styles/globals.css'

import { css } from '../stitches.config';

css.global({
  body: {
    margin: '0',
    font: "14px 'Helvetica Neue', Helvetica, Arial, sans-serif",
    lineHeight: '$2',
    background: '$gray100',
    height: '100vh'
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
