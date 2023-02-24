import React from "react";
import { useState, useEfect } from "react";

export default function Home() {
  useEfect(() => {}, []);
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I am Aniket Tamrakar`} <span>Welcome to my Portfolio</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nemo nihil molestias, at quos repellat consectetur facilis quasi
              aliquid eum voluptas fugit explicabo dolorum facere impedit!
              Eligendi facilis porro voluptas.
            </p>
            <button className="btn-all">Let's Connect</button>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="../img/header-img.svg"
              className="header-img"
              alt="header-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
