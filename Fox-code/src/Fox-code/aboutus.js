import React from "react";
// import "./staff.css";
import "./AboutUs-Tung/cauvong.css";
import Event1 from "./AboutUs-Tung/event1";
import Event2 from "./AboutUs-Tung/event2";
import Event3 from "./AboutUs-Tung/event3";
import Event4 from "./AboutUs-Tung/event4";
import Event6 from "./AboutUs-Tung/event6";
import Event7 from "./AboutUs-Tung/event7";
import Form from "./AboutUs-Tung/event8";
import Header from "./components/Header";
import Footer from "./components/Footer";
function AboutUs() {
  return (
    <section>
      <div className="Staffservicepage">
        <Header />
        <Event1 />
        <Event2 />
        <Event3 />
        <Event4 />
        <Event6 />
        <Event7 />
        <Form />
        <Footer />
      </div>
    </section>
  );
}
export default AboutUs;
