import React from "react";
import Event1 from "./event1";

function Footer() {
    const scrollToSection = (sectionId) => {
        document
            .getElementById(sectionId)
            .scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section>
            <div className="Staffservicepage">
                <Event1 />
            </div>
        </section>
    );
}
export default Footer;
