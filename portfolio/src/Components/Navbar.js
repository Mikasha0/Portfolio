import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-top py-3 ">
          <a className="navbar-brand" href="index.html">
            {/* <!-- <img className="logo" src="./img/logo.webp" alt="..." /> --> */}
            <span className="">Logo</span>
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
              {" "}
              <div className="icons-container">
                <FaFacebookF className="circular-icon" />
              </div>
              <div className="icons-container">
                <FaInstagram className="circular-icon" />
              </div>
              <div className="icons-container">
                <FaLinkedinIn className="circular-icon" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
