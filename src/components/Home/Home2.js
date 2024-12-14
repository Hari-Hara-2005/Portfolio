import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/Hari-Hara-2005",
      icon: <AiFillGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/hari-haran-877630311/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/_harihara._/",
      icon: <AiFillInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row data-aos="fade-right">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, and Go. </b>
              </i>
              <br />
              <br />
              My field of interests are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>{" "}
              and exploring areas related to{" "}
              <i>
                <b className="purple">iOS App Development</b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and modern JavaScript
              libraries and frameworks like
              <i>
                <b className="purple"> React.js and Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" data-aos="flip-left">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                loading="lazy"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1 data-aos="zoom-in">FIND ME ON</h1>
            <p data-aos="zoom-out">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul
              className="home-about-social-links"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {socialLinks.map((link, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
