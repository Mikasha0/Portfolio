import React from "react";
import { useEffect } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export default function Navbar() {
  useEffect(() => {
    let navEl = document.querySelector(".fixed-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navEl.classList.add("navbar-scrolled");
      } else if (window.scrollY < 50) {
        navEl.classList.remove("navbar-scrolled");
      }
    });
  });
  return (
    <header className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-top py-3 ">
          <a className="navbar-brand" href="index.html">
            <span className="logo">
              <VscAzure />
              niket
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-lg-4 ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  SKILLS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  PROJECTS
                </a>
              </li>
            </ul>
            <div className="social-links">
              <div className="icons-container">
                <a href="https://www.facebook.com/aniket.malla.58/">
                  <FaFacebookF className="circular-icon" />
                </a>
              </div>
              <div className="icons-container">
                <a href="https://github.com/Mikasha0">
                  <FaGithub className="circular-icon" />
                </a>
              </div>
              <div className="icons-container">
                <a href="https://www.linkedin.com/in/aniket-tamrakar-07857a212/">
                  <FaLinkedinIn className="circular-icon" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
