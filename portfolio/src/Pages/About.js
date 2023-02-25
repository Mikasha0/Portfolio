import React from "react";
import { GrProjects } from "react-icons/gr";
export default function About() {
  return (
    <section className="about">
      <div class="container-fluid d-flex justify-content-center py-4">
        <div class="about-us row row-cols-1 row-cols-md-4">
          <div class="col">
            <p>Languages Learned</p>
            <h2>5 +</h2>
          </div>
          <div class="col">
            <GrProjects style={{ color: "white" }} />
            <p>Completed Projects</p>
            <h2>20 +</h2>
          </div>
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Total Projects Hosted</p>
            <h2>10 +</h2>
          </div>
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Work Experience</p>
            <h2>1 yrs</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
