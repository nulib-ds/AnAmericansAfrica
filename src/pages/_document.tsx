import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { GoogleFontImport } from "@styles/theme/fonts";
import React from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const faviconPath = `${basePath}/images/favicon.png`;

class CanopyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleFontImport />
          <link rel="icon" type="image/x-icon" href={faviconPath} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CanopyDocument;
