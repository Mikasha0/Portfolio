import React from "react";
import { Horse, Heart, Cube } from "phosphor-react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand" href="/">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Projects
              </a>
            </li>
            <div className="social-icons">
              <Horse />
              <Heart color="#AE2983" weight="fill" size={32} />
              <Cube color="teal" weight="duotone" />
            </div>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
