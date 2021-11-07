import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  let [header, setHeader] = useState([
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
  ]);

  return (
    <header className="border-bottom shadow fixed-top d-print-none bg-dark">
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="md"
        variant="dark"
        className="container navbar-expand-sm "
      >
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="#share">
            <img
              loading="lazy"
              type="image/ico"
              src="/favicon.ico"
              alt="jadson"
              width="32"
              height="32"
              type="button"
              onclick="shareNavigator()"
            />
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <ul className="navbar-nav">
              {header.map((e) => {
                return (
                  <li className="nav-item">
                    <a href={e.link} className="nav-link px-2 link-dark">
                      {e.title}
                    </a>
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
