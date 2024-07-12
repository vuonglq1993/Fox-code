import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

// import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
    
    return (
        <section>
            <Navbar variant="dark" expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">C/</Navbar.Brand>
                    <Navbar.Toggle className="navButton" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#aboutUs">About us</Nav.Link>
                            <Nav.Link href="#workWithUs">Work with us</Nav.Link>
                        </Nav>
                        <div className="row justify-content-center">
                            <button
                                className="button "
                                // onClick={() => scrollToSection("event8form")}
                            >
                                <span className="message text-center">Contact us</span>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;
