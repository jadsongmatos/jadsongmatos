import Image from "next/image";
import Link from "next/link";

export default function Habilidades() {
  const habilidades = {
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
  };
  return (
    <section
      className="col-12 shadow rounded-3 my-3 p-5 align-items-center d-print-block"
      id="projetos"
    >
      <h2 className="display-6 fw-bold mb-3">Habilidades</h2>
      <section className="row d-flex align-items-center" id="projetos">
        <a
          className="col-md-7 text-decoration-none link-dark align-items-center row"
          href="https://github.com/jadsongmatos"
        >
          <svg className="col-2" viewBox="0 0 11.49 11.21">
            <path
              fill="#1b1817"
              fill-rule="evenodd"
              d="M5.75 0a5.75 5.75 0 00-1.82 11.2c.29.05.4-.13.4-.28l-.02-.97c-1.6.34-1.93-.78-1.93-.78-.26-.66-.64-.84-.64-.84-.52-.35.04-.35.04-.35.58.05.88.6.88.6.51.88 1.35.62 1.67.47.06-.37.2-.62.37-.76-1.28-.15-2.62-.64-2.62-2.84 0-.63.22-1.14.6-1.55-.07-.14-.26-.73.05-1.52 0 0 .48-.15 1.58.6a5.5 5.5 0 012.88 0c1.1-.75 1.57-.6 1.57-.6.32.8.12 1.38.06 1.52.37.4.6.92.6 1.55 0 2.2-1.35 2.69-2.63 2.83.2.18.39.53.39 1.07v1.57c0 .16.1.34.39.28A5.75 5.75 0 005.75 0"
            />
          </svg>
          <p id="pessoais" className="col display-6">
            Veja alguns dos meus projetos no GitHub
          </p>
        </a>
        <div className="col-md-5 p-auto py-3">
          <Image
            layout="responsive"
            width="350"
            height="215"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jadsongmatos&layout=compact&langs_count=16&theme=default"
            className="img-fluid w-100 h-100"
          />
        </div>
        <div className="row">
          <h2 className="display-6 fw-bold mb-3">Projetos de destaques</h2>
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Processamento de Imagens</h5>
            <ul className="list-group list-group-flush">
              {habilidades.images.map((habilidade, index) => {
                return (
                  <Link href={habilidade.link}>
                    <a className="list-group-item">
                      <li key={index}>{habilidade.title}</li>
                    </a>
                  </Link>
                );
              })}
              <li className="list-group-item"></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Web</h5>
            <ul className="list-group list-group-flush">
              {habilidades.web.map((habilidade, index) => {
                return (
                  <Link href={habilidade.link}>
                    <a className="list-group-item">
                      <li key={index}>{habilidade.title}</li>
                    </a>
                  </Link>
                );
              })}
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
