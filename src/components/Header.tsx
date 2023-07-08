import { Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  //TODO: shareNavigator
  const header = [
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
  ];

  return (
    <header className="border-bottom shadow fixed-top d-print-none bg-dark border-0">
      <Navbar
        collapseOnSelect
        bg="dark" data-bs-theme="dark"
        expand="md"
        className="container navbar-expand-sm "
      >
        <div className="container-fluid align-items-center">
          <Link className="navbar-brand" href="#share">
            <Image
              loading="lazy"
              src="/favicon.ico"
              alt="jadson"
              width="32"
              height="32"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <ul className="navbar-nav">
              {header.map((e: any, i: number) => {
                return (
                  <li key={i} className="nav-item">
                    <Link href={e.link} className="nav-link px-2">
                      {e.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
