import React from "react";
import "./staff.css";
import "./cauvong.css";



const Event6 = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
return(
  <section>
  <div className="row justify-content-center event6">
    <div className="text-center col-8">
      <h1 className="text-center h1text text-2">
        Work with the Code Labs team on your project
      </h1>
    </div>
  </div>
      <div className="row justify-content-center event6">
        <div className="text-center col-4 .section-event2">
        <h1>
        Staff Augmentation
      </h1>
      <br></br>
      <h4>
      Work with Colombia-based talent. Even hard-to-find niche specialists. At 40-60% lower rates than in the US.
      </h4>
      <button
                className="button button1"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">View more</span>
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
        <div className="text-center col-4 .section-event2">
        <h1>
        Digital Services
      </h1>
      <br></br>
      <h4>
      Turn your product idea into reality,with guided support at all stages. From conception to launch.
      </h4>
      <button
                className="button button1"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">View more</span>
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
      </div>
    </section>
);
}
export default Event6;
