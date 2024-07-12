import React from "react";
import "./component/run1.css";
import "./component/background.css";
import "./component/form.css";
import Line1 from "./component/line1";
import Line2 from "./component/line2";
import Line3 from "./component/line3";
import Line4 from "./component/line4";
import Line5 from "./component/line5";
import Form from "./component/line6";
import Header from "./components/Header";
import Footer from "./components/Footer";





function Run1() {
  return (
    <section>
      <div className="Staffservicepage">
       <Header/>
        <Line1 />
        <Line2/>
        <Line3/>
        <Line4/>
        <Line5/>
       <Form/>
       <Footer/>
      </div>
    </section>
  );
}
export default Run1;