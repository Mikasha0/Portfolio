import React from "react";

export default function About() {
  return (
    <section className="about">
      <div class="container-fluid d-flex justify-content-center py-4">
        <div class="about-us row row-cols-1 row-cols-md-4">
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Completed Projects</p>
            <h2>100 +</h2>
          </div>
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Completed Projects</p>
            <h2>20 %</h2>
          </div>
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Completed Projects</p>
            <h2>$10M</h2>
          </div>
          <div class="col">
            <i class="bi bi-1-square"></i>
            <p>Completed Projects</p>
            <h2>2 yrs</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
