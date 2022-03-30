import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Founded in 2019, Women Group is a platform for women to Learn, Share and Get Inspired from and with one and another to embrace the amazing potential of women. We’re your bestfriend to your inspiring stories and courious minds. Empowering women through gender equity to go #BeyondStandards" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
