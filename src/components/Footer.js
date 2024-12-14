import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    // GSAP animation
    gsap.from(".footer-icons .social-icons", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2, // Delays animation for each icon
    });
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright text-center text-md-start">
          <h3>Designed and Developed by Hari Haran</h3>
        </Col>
        <Col md="4" className="footer-copywright text-center">
          <h3>Copyright © {year} HH</h3>
        </Col>
        <Col md="4" className="footer-body text-center text-md-end">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Hari-Hara-2005"
                aria-label="GitHub"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hari-haran-877630311/"
                aria-label="LinkedIn"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_harihara._/"
                aria-label="Instagram"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
