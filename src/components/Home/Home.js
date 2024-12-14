import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2500, 
      offset: 100,
    });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className="home-header"
              data-aos="fade-right" 
              data-aos-delay="200" 
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Hari Haran</strong>
              </h1>

              <div
                style={{ padding: 50, textAlign: "left" }}
                data-aos="zoom-in" 
                data-aos-delay="300"
              >
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 data-aos="fade-up" data-aos-delay="500" /> 
    </section>
  );
}

export default Home;
