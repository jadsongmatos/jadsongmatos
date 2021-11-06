import Head from "next/head";
import Script from "next/script";
import Contato from "../modules/Contato";
import Habilidades from "../modules/Habilidades";
import Header from "../modules/Header";


export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="portfolio jadson g matos" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
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
        </div>
      </main>
      <iframe
        className="my-5 shadow-lg w-100 artstation"
        id="artes"
        src="https://jadsonmatos.artstation.com/"
      ></iframe>
      <footer className="container py-3 text-muted">
        <p>Obrigador pelo seu tempo 🙂</p>
      </footer>
      
      <Script
    src="https://platform.linkedin.com/badges/js/profile.js"
    async
    defer
    type="text/javascript"
  />
    </div>
  );
}
