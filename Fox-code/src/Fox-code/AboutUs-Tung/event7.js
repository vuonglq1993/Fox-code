import React from "react";
import "./staff.css";
import "./cauvong.css";



const Event7 = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
return(
  <section className="section-event7">
  <div className="row justify-content-center event7">
  <div className="text-center col-6 ">
    <h1>
      Contact
    </h1>
    <h2>
    Schedule a call to discuss your project
    </h2>
  </div>
  <div className="text-center col-2 ">
  <button
                className="button button1"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="30"
                  fill="currentColor"
                  className="inbutton bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </button>
              <h3>
                <strong>us</strong>
              </h3>
  </div>
  </div>
  </section>
);
}
export default Event7;
