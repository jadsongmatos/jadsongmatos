import Script from "next/script";

import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";

import Header from "@/components/Header";
import Habilidades from "@/components/Habilidades";
import Contato from "@/components/Contato";

export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Header />
      <main className="mt-5 pt-5 container main-print" id="resumo">
        <div className="row mb-5 justify-content-between">
          <Contato />
          <Habilidades />
        </div>
      </main>
      <main>
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
      </main>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
