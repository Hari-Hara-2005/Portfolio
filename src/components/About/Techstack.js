import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiSwift 
} from "react-icons/di";
import { SiTailwindcss, SiBootstrap, SiExpress } from "react-icons/si";
import { SiFirebase, SiNextdotjs } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandRedux, TbBrandThreejs } from "react-icons/tb";
import { IoLogoBitbucket } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

function Techstack() {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <i className="devicon-c-plain"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <i className="devicon-materialui-plain"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <TbBrandRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <IoLogoBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <IoLogoGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <TbBrandThreejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in" data-aos-duration="1000">
        <SiExpress />
      </Col>
    </Row>
  );
}

export default Techstack;
