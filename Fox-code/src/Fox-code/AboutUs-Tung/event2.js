import React from "react";
import "./staff.css";

function Event2() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section-event2 container event2">
      <div className="row justify-content-center">
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/davivienda_b51de94659.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/Samsung_4d5bd5b672.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/visa_6ebdedf591.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/wwf_c68640c6f3.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/intel_e3be4f17f5.png"></img>
        </div>
      </div>
      <div className="row justify-content-center event2">
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/cencosud_26729b610b.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/Quantiphy_c125b07484.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/publicisgroupe_6eed1ef1b2.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/leoburnette_538e76e5cb.png"></img>
        </div>
        <div className="text-center col-2"> 
        <img src="https://code-labs.s3.amazonaws.com/www.code-labs.com/uploads/digitas_1f2282ca32.png"></img>
        </div>
      </div>
      <div className="row justify-content-center">
              <button
                className="button button2"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">View more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="30"
                  fill="white"
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
export default Event2;
