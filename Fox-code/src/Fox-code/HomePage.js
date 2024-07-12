import React from "react";
import './phancuavuong/staff.css';
import './phancuavuong/cauvong.css';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";


function Index() {
    return (

        <div className="Staffservicepage">
            <Header />
            <div className="row justify-content-center event1">
                <div className="text-center col-10">
                    <div className="mau1"></div>
                    <div className="mau2"></div>
                    <div className="mau3"></div>
                    <div className="mau4"></div>
                    <div className="mau5"></div>
                    <div className="mau6"></div>
                    <div className="mau7"></div>
                    <div className="mau8"></div>
                    <div className="mau9"></div>
                </div>
            </div>

            <Container>
                <div className="row justify-content-center event1">
                    <div className=" col-10">
                        <h1 className="text-center h1text text-2">
                            Take your complex project from
                            <strong> idea </strong>
                            to
                            <strong> launch.</strong>
                        </h1>
                        <p className="text-center event1end">
                            Without having to hire and manage a dev team.
                        </p>
                        <div className="row justify-content-center">
                            <button
                                className="button"
                                // onClick={() => scrollToSection("event8form")}
                            >
                                <span className="message">
                                    Staff augmentation
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
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
                        <p className="text-center event1end">
                            Code Labs is a full-service digital agency producing
                            award-winning work
                        </p>
                        <p className="text-center info">SERVICES</p>
                        <h1 className="text-center h1text text-2">
                            <strong>
                                Digital development and staff augmentation{" "}
                            </strong>
                            for companies with ambitious goals
                        </h1>
                        <p className="text-center event1end">
                            Build exactly what you want, without having to
                            search for IT experts
                        </p>
                        <div className="box">
                            <div className="p-2 article1">
                                <p className="info">
                                    DIGITAL PRODUCT DESIGN AND SERVICES
                                </p>
                                <h1>
                                    Your product vision, fully supported. From
                                    concept to launch.
                                </h1>
                                <hr />
                                <p>Websites and apps</p>
                                <hr />
                                <p>UI/UX</p>
                                <hr />
                                <p>Front-end and back-end development</p>
                            </div>
                            <div className="p-2 article2">
                                <p className="info">STAFF AUGMENTATION</p>
                                <h1>
                                    Hard-to-find niche specialists. At 40–60%
                                    lower rates than in the US.
                                </h1>

                                <hr />
                                <p>Deep local network</p>
                                <hr />
                                <p>Hand-picked IT staff</p>
                                <hr />
                                <p>Vetted by subject-matter experts</p>
                            </div>
                        </div>
                        <p className="text-center info">
                            DIGITAL DEVELOPMENT CASE STUDIES
                        </p>
                        <h1 className="text-center h1text text-2">
                            “Code Labs’ ability to understand our mission and
                            the complexity of our requirements was
                            <strong> outstanding</strong>”
                        </h1>
                        <div className="box">
                            <div className="p-2 dialog">
                                <h1>Staff Augmentation</h1>
                                <p>
                                    Work with Colombia-based talent. Even
                                    hard-to-find niche specialists. At 40–60%
                                    lower rates than in the US.
                                </p>
                            </div>
                            <div className="p-2 dialog">
                                <h1>Digital Services</h1>
                                <p>Turn your product idea into reality,with guided support at all stages. From conception to launch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Index;
