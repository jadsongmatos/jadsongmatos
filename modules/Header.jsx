import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  let [header, setHeader] = useState([
    {
      title: "Contato",
      link: "contato",
    },
    {
      title: "Habilidades",
      link: "projetos",
    },
    {
      title: "Formação/Experiência",
      link: "/Profile.pdf",
    },
    {
      title: "Artes",
      link: "artes",
    },
  ]);

  return (
    <header className="border-bottom shadow fixed-top bg-white d-print-none">
      <nav className="navbar container navbar-expand-sm navbar-light">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarScroll"
          >
            <ul className="navbar-nav">
              {header.map((e) => {
                return (
                  <li className="nav-item">
                    <a href={"#" + e.link} className="nav-link px-2 link-dark">
                      {e.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
