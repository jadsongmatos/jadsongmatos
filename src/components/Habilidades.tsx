import Image from "next/image";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

export default function Habilidades() {
  const Projetos = [
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
  ];

  return (
    <section
      className="col-12 shadow rounded-3 my-3 p-5 align-items-center d-print-block"
      id="projetos"
    >
      <h2 className="display-6 fw-bold mb-3">Habilidades</h2>
      <section className="row d-flex align-items-center" id="projetos">
        <Link
          className="col-md-7 text-decoration-none link-dark align-items-center row"
          href="https://github.com/jadsongmatos"
        >
          <BsGithub className="col-2 h-100" />
          <p id="pessoais" className="col display-6">
            Veja alguns dos meus projetos no GitHub
          </p>
        </Link>
        <div className="col-md-5 p-auto py-3">
          <Image
            alt="Most Used Languages"
            width="350"
            height="215"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jadsongmatos&layout=compact&langs_count=16&theme=default"
            className="img-fluid w-100 h-100"
          />
        </div>
        <section className="container">
          <h2 className="display-6 fw-bold mb-3">Projetos de destaques</h2>
          <div className="list-group">
            <ul className="list-group-flush row">
              {Projetos.map((habilidade: any, index: number) => {
                return (
                  <li key={index} className="list-group-item col-md-5 mx-2">
                    <Link
                      href={habilidade.link}
                      className="text-decoration-none link-dark"
                    >
                      {habilidade.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
}
