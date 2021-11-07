import Head from "next/head";
import Script from "next/script";
import Contato from "../modules/Contato";
import Habilidades from "../modules/Habilidades";
import Header from "../modules/Header";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="portfolio jadson g matos" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="description" content="portfolio" />
        <meta property="og:url" content="https://jadson-g-matos.vercel.app/" />
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
        <title>Jadson G. Matos</title>
      </Head>
      <Header />
      <main className="mt-5 pt-5 container main-print" id="resumo">
        <div className="row mb-5 justify-content-between">
          <Contato />
          <Habilidades />
          <iframe id="formacao" className="pdf col-12" src="/Profile.pdf"></iframe>
        </div>
      </main>
      <div className="artstation-bkg">
        <iframe
          className="mt-5 shadow-lg artstation p-0"
          id="artes"
          src="https://jadsonmatos.artstation.com/"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
    </>
  );
}
