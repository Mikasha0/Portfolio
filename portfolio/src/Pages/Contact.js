import React from "react";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="form-info">
      <div className="container">
        <div className="section-heading">
          <span>CONTACT US</span>
          <h2>Get In Touch</h2>
        </div>
        <div className="row g-0 justify-content-around">
          <div className="col-12 col-lg-8">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <div className="row g-4 g-md-5">
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name*"
                        name="FullName"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        name="Email"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number*"
                        name="PhoneNumber"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        name="Message"
                      />
                    </div>
                    <div className="form-button">
                      <button className="btn-all">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4">
            <div className="card">
              <div className="card-body">
                <p className="info-icon">
                  <div className="icons-container">
                    <a href="https://www.facebook.com/aniket.malla.58/">
                      <AiTwotoneMail className="circular-icon" />
                    </a>
                  </div>
                  <a href="/">anikettamrakar0@gmail.com </a>
                </p>
                <p className="info-icon">
                  <div className="icons-container">
                    <a href="https://www.facebook.com/aniket.malla.58/">
                      <FaMapMarkerAlt className="circular-icon" />
                    </a>
                  </div>
                  <a href="/">Imadol, Lalitpur </a>
                </p>
                <p className="info-icon">
                  <div className="icons-container">
                    <a href="https://www.facebook.com/aniket.malla.58/">
                      <AiFillPhone className="circular-icon" />
                    </a>
                  </div>
                  <a href="/">+977 9805674141</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
