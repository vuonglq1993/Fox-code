import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {


    return (
            <section>
                <Container>
                    <div id='foot' className="row justify-content-center footer">
                        
                        <div className="high py-5">
                            <Row className="py-5">
                                <Col sm={3} className="footer-font left py-5">
                                    <h1>Fox code</h1>
                                    <p>Your vision executed with ingenuity</p>
                                </Col>
                                <Col sm={6} className="footer-font mid py-5">
                                    <div className="contact-link">
                                        <span>Email</span> <br />
                                        <a href="" className="footer-font"><b>admin@gmail.com</b></a> <br />
                                    </div>
                                    <div className="contact-link">
                                        <span>Phone number</span> <br />
                                        <a href="" className="footer-font"><b>+84 090909090</b></a> <br />
                                    </div>
                                    <span>Location</span> <br />
                                    <p><b>Colombia</b></p>
                                </Col>
                                <Col sm={3} className="right py-5">
                                    <ul className="custom-list">
                                        <li><a href="/HomePage" className="footer-font">Home</a></li>
                                        <li><a href="/staff" className="footer-font">Staff Augmentation</a></li>
                                        <li><a href="/run1" className="footer-font">Portfolio</a></li>
                                        <li><a href="#" className="footer-font">About us</a></li>
                                        <li><a href="/Workwithus" className="footer-font">Work with us</a></li>
                                        <li><a href="#" className="footer-font">Vacancies</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        <div className="low">
                            <Row className="py-4">
                                <Col sm={3} className="footer-font py-5">
                                    <a href="#" className="footer-font">
                                        <b>Terms and conditions</b>
                                    </a>
                                </Col>
                                <Col sm={6} className="footer-font py-5">
                                    Code Labs. All Rights Reserved.© Copyright 2024
                                </Col>
                                <Col sm={3} className="footer-font py-5 ">
                                    <a href="#" className="footer-font">
                                        <b>Privacy policy</b>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
    );
}
export default Footer;
