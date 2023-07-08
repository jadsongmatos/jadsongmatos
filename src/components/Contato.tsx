import Image from "next/image";
import Link from "next/link";

import { BsWhatsapp } from "react-icons/bs";

export default function Contato() {
  const contato = {
    endereco: "Torres - RS",
    tel: "51 99818-9117",
    email: "jadson.g-matos@outlook.com",
    name: "Jadson Goulart de Matos",
    github: "https://github.com/jadsongmatos",
    qr: "https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3AJadson+Goulart+de++Matos%0AN%3AGoulart+de++Matos%3BJadson%0ATEL%3BHOME%3BVOICE%3A(51)+93505-1715%0AEMAIL%3BHOME%3BINTERNET%3Ajadson.g-matos%40outlook.com%0AURL%3Ahttps%3A%2F%2Fjadson-g-matos.vercel.app%2F%0AADR%3A%3B%3BAvenida+Jos%C3%A9+Am%C3%A2ncio+da+rosa+1165+-+Vila+S%C3%A3o+Jo%C3%A3o%3BTorres%3B%3B95560000%3BBrasil%0AEND%3AVCARD%0A&qzone=0&margin=0&size=256x256&ecc=L",
    map: {
      link: "https://goo.gl/maps/bKEognZdazbGPyes7",
    },
  };

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
              <Link
                className="text-decoration-none link-dark"
                href={contato.github}
              >
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

              <Link href="https://wa.me/5551935051715" className="mx-3 text-decoration-none link-dark">
                <BsWhatsapp />
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
          <div className="align-self-center">
            <Image width={256} height={256} src={contato.qr} alt="qr code" />
          </div>
        </div>
      </div>
    </section>
  );
}
