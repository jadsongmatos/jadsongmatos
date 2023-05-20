import Head from "next/head";
import Script from "next/script";
import Contato from "../modules/Contato";
import Habilidades from "../modules/Habilidades";
import Header from "../modules/Header";

export default function Home(props: any) {
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
      <Header header={props.header} />
      <main className="mt-5 pt-5 container main-print" id="resumo">
        <div className="row mb-5 justify-content-between">
          <Contato contato={props.contato} />
          <Habilidades habilidades={props.habilidades} />
          <iframe
            id="formacao"
            className="pdf col-12"
            src="/Profile.pdf"
          ></iframe>
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

export async function getStaticProps() {
  return {
    props: {
      contato: {
        endereco: "Torres - RS - CEP: 95560-000",
        tel: "51 99818-9117",
        email: "jadson.g-matos@outlook.com",
        name: "Jadson Goulart de Matos",
        qr: "https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3AJadson+Goulart+de++Matos%0AN%3AGoulart+de++Matos%3BJadson%0ATEL%3BHOME%3BVOICE%3A(51)+93505-1715%0AEMAIL%3BHOME%3BINTERNET%3Ajadson.g-matos%40outlook.com%0AURL%3Ahttps%3A%2F%2Fjadson-g-matos.vercel.app%2F%0AADR%3A%3B%3BAvenida+Jos%C3%A9+Am%C3%A2ncio+da+rosa+1165+-+Vila+S%C3%A3o+Jo%C3%A3o%3BTorres%3B%3B95560000%3BBrasil%0AEND%3AVCARD%0A&qzone=0&margin=0&size=1000x1000&ecc=L",
        map: {
          link: "https://goo.gl/maps/bKEognZdazbGPyes7",
          img: "https://maps.google.com/maps?q=Vila%20S%C3%A3o%20Jo%C3%A3o%20Torres,%20RS,%2095560-000&t=&z=13&ie=UTF8&iwloc=&output=embed",
        },
      },
      habilidades: {
        images: [
          { title: "Gerador adesivos", link: "https://qr-card.vercel.app/" },
          {
            title: "Conversor de texto pra imagens",
            link: "https://jadsongmatos.github.io/text-to-img/",
          },
          {
            title: "Geração de QR code com imagens",
            link: "https://github.com/jadsongmatos/QR-code-Art",
          },
          {
            title: "QR code estilizador",
            link: "https://github.com/jadsongmatos/QR-code-Art",
          },
          {
            title: "Mesclar duas imagens",
            link: "https://github.com/jadsongmatos/2-imagem-to-1-imagem",
          },
        ],
        web: [
          {
            title: "Background ajustavel ao tempo",
            link: "https://background-time-lapse.vercel.app/",
          },
          {
            title: "Banco de dados xadrez",
            link: "https://oracle-chess.vercel.app/",
          },
          {
            title: "Api compressão de arquivos",
            link: "https://api-zip.vercel.app/",
          },
          {
            title: "Micro seridor arquivos",
            link: "https://github.com/jadsongmatos/upload-file",
          },
        ],
      },
      header: [
        {
          title: "Contato",
          link: "#contato",
        },
        {
          title: "Habilidades",
          link: "#projetos",
        },
        {
          title: "Formação & Experiência",
          link: "#formacao",
        },
        {
          title: "Artes",
          link: "#artes",
        },
      ],
    },
  };
}
