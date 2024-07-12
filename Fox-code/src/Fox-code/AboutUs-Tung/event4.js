import React from "react";
import "./staff.css";

function Event4() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
    <div className="row justify-content-center event4">
    <div className="text-center col-3 ">
      <h1>
      Jacobo Schuster
      </h1>
      <h4>
      Partner / CEO
      </h4>
      <br></br>
      <h4>
      16+ years of industry experience. BA in Media and Sociology, MA in Digital Advertising.
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Simplify and strive for excellence</li>
        <li>Never overpromise and always exceed expectations</li>
        <li>People-first approach to company, processes and end products</li>
      </ul>
    </div>
    <div className="text-center col-3 ">
    <h1>
    Julián Patiño
      </h1>
      <h4>
      Partner / CTO
      </h4>
      <br></br>
      <h4>
      18+ years of industry experience, MA in Intelligent Systems and Artificial Intelligence.
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Passion for continuous learning and its practical application</li>
        <li>Collaborative, results-oriented approach to all projects</li>
      </ul>
    </div>
    <div className="text-center col-3 ">
    <h1>
    Miguel Torres
      </h1>
      <h4>
      Mobile development team leader
      </h4>
      <br></br>
      <h4>
      15+ years of experience in platform development. Degree in Systems Engineering.
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Creating an environment of respect and trust</li>
        <li>Responsible approach to projects</li>
      </ul>
    </div>
  </div>
  <div className="row justify-content-center event4">
    <div className="text-center col-3 ">
      <h1>
      Andrés Cruz
      </h1>
      <h4>
      Back End and Web Development team leader
      </h4>
      <br></br>
      <h4>
      15+ years of industry experience. Degree in Systems Engineering.
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Objectives-oriented, dynamic approach to projects</li>
        <li>Collaborative approach to conception, design, implementation and maintenance of solutions</li>
      </ul>
    </div>
    <div className="text-center col-3 ">
    <h1>
    Marc Robinson
      </h1>
      <h4>
      Lead UX / UI designer
      </h4>
      <br></br>
      <h4>
      10+ years of industry experience. MA in Visual Arts.
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Staying on top of current trends and latest knowledge</li>
        <li>Staying on top of current trends and latest knowledge Blending research, empathy and design thinking to create intuitive and visually appealing interfaces</li>
        <li>Blending research, empathy and design thinking to create intuitive and visually appealing interfaces</li>
      </ul>
    </div>
    <div className="text-center col-3 ">
    <h1>
    Daniel Arévalo
      </h1>
      <h4>
      Director of Engineering at the open hub Davivienda/Leo Burnett
      </h4>
      <br></br>
      <h4>
      With over a decade of expertise in tailor-made software solutions for the marketing realm, our Director of Software Engineering leads innovation, driving excellence in the industry
      </h4>
      <br></br>
      <h5>
        Values
      </h5>
      <ul>
        <li>Technological innovation</li>
        <li>Strategic Collaboration</li>
        <li>Delivery Excellence</li>
      </ul>
    </div>
  </div>
  <div className="row justify-content-center event4">
              <button
                className="button button1"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">Reach out</span>
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
              <button
                className="button button2"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">Our vacancies</span>
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
            </div>
  </section>
  );
}
export default Event4;