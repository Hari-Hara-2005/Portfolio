import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

AOS.init(); // Initialize AOS

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right" // AOS animation
            data-aos-duration="1000"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-left" // AOS animation
            data-aos-duration="1000"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Professional Skillset Section */}
        <h1
          className="project-heading"
          data-aos="fade-up" // AOS animation for skillset
          data-aos-duration="1200"
        >
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* Tools Section */}
        <h1
          className="project-heading"
          data-aos="fade-up" // AOS animation for tools
          data-aos-duration="1200"
        >
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* Github Section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
