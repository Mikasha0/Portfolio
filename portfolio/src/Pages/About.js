import React from "react";
import { GoTasklist } from "react-icons/go";
import { BiBarChartAlt } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { TfiRocket } from "react-icons/tfi";

export default function About() {
  return (
    <section className="about">
      <div class="container-fluid d-flex justify-content-center">
        <div class="about-us row row-cols-1 row-cols-md-4">
          <div class="col">
            <AiFillSetting className="about-icons spin" />
            <p>Languages Learned</p>
            <h2>5 +</h2>
          </div>
          <div class="col">
            <GoTasklist className="about-icons" />
            <p>Completed Projects</p>
            <h2>20 +</h2>
          </div>
          <div class="col">
            <TfiRocket className="about-icons bounce" />
            <p>Total Projects Hosted</p>
            <h2>10 +</h2>
          </div>
          <div class="col">
            <BiBarChartAlt className="about-icons" />
            <p> Work Experience</p>
            <h2>1 yrs</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
