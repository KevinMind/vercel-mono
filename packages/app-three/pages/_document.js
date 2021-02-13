import NextDocument, { DocumentContext } from 'next/document';
import { css } from '../stitches.config';

/*
font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
*/

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
      const originalRenderPage = ctx.renderPage;
  
      try {
        let extractedStyles;
        ctx.renderPage = () => {
          const { styles, result } = css.getStyles(originalRenderPage);
          extractedStyles = styles;
          return result;
        };
  
        const initialProps = await NextDocument.getInitialProps(ctx);
  
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
  
              {extractedStyles?.map((content, index) => (
                <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
              ))}
            </>
          ),
        };
      } finally {
      }
    }
  }