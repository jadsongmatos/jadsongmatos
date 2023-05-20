import Image from "next/image";
import Link from "next/link";

export default function Contato({ contato }: { contato: any }) {
  return (
    <section
      className="col-12 shadow rounded-3 my-3 p-5 align-items-center "
      id="contato"
    >
      <h2>Contato</h2>
      <div className="d-flex align-items-center row">
        <div className="d-block col-md-6 ">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link className="text-decoration-none link-dark" href={contato.link}>
                Nome: {contato.name}
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                className="text-decoration-none link-dark"
                href={contato.map.link}
              >
                Endereço: {contato.endereco}
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                className="text-decoration-none link-dark"
                href={"tel:+55" + contato.tel}
              >
                Telefone: {contato.tel}
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                className="text-decoration-none link-dark"
                href={"mailto:" + contato.email}
              >
                Email: {contato.email}
              </Link>
            </li>
          </ul>
          <div className="d-flex py-2 flex-column d-print-none justify-content-evenly">
            <div
              id="linkedin"
              className="badge-base LI-profile-badge"
              data-locale="pt_BR"
              data-size="large"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="jadson-g-matos"
              data-version="v1"
            >
              <Link
                className="badge-base__link LI-simple-link shadow-lg w-100"
                href="https://br.linkedin.com/in/jadson-g-matos?trk=profile-badge"
              ></Link>
            </div>
            <Link
              href="/Profile.pdf"
              className="btn btn-primary my-3 col-5 mx-auto"
              type="button"
              download
            >
              Baixar curriculo
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column col-md-5 mx-auto">
          <iframe
            src={contato.map.img}
            className="w-100 mb-3 map"
            loading="lazy"
          ></iframe>
          <div className="align-self-center">
            <Image
              width="150"
              height="150"
              src={contato.qr}
              alt="qr code"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
