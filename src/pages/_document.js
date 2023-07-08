import Document, { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../../next-i18next.config";

class MyDocument extends Document {
  render() {
    const currentLocale =
      typeof this.props.__NEXT_DATA__.query.locale === "string"
        ? this.props.__NEXT_DATA__.query.locale
        : i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta name="description" content="portfolio jadson g matos" />
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta name="description" content="portfolio" />
          <meta
            property="og:url"
            content="https://jadson-g-matos.vercel.app/"
          />
          <meta property="og:site_name" content="Jadson G. Matos" />
          <meta property="og:title" content="portfolio" />
          <meta property="og:image" content="/favicon.ico" />
          <meta property="og:description" content="portfolio" />
          <meta property="og:type" content="website" />
          <meta name="twitter:site_name" content="Jadson G. Matos" />
          <meta name="twitter:title" content="portfolio" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="portfolio" />
          <meta name="twitter:image" content="/favicon.ico" />
          <meta name="image" content="/favicon.ico" />
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
