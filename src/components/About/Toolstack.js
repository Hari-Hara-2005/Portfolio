import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function Toolstack() {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <SiMacos />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <SiVisualstudiocode />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <SiPostman />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <i className="devicon-axios-plain"></i>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
