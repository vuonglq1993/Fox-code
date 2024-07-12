import React from "react";
// import "./staff.css";
import "./phancuavuong/cauvong.css";
import Event1 from "./phancuavuong/event1";
import Event2 from "./phancuavuong/event2";
import Event3 from "./phancuavuong/event3";
import Event4 from "./phancuavuong/event4";
import Event6 from "./phancuavuong/event6";
import Event7 from "./phancuavuong/event7";
import Form from "./phancuavuong/event8";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Header from "./Header";
function Staff() {
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
export default Staff;
