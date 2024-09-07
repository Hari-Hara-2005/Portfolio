import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import photo from "../../Assets/Projects/photo.png";
import agency from "../../Assets/Projects/agency.png";
import travel from "../../Assets/Projects/travel.png";
import booking from "../../Assets/Projects/booking.png";
import maha from "../../Assets/Projects/maha.png";
import smart from "../../Assets/Projects/smart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Your Booking Expert"
              description="
Our Travel Booking Platform offers an easy way to book travel tickets and arrange trips. Built with React, Tailwind CSS, and Firebase, it provides real-time booking options for flights, buses, and trains. Features include live updates, custom itineraries, and secure payments, all within a user-friendly interface that works seamlessly across devices."
              ghLink="https://github.com/Hari-Hara-2005/your-booking-expert"
              demoLink="https://your-booking-expert-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart}
              isBlog={false}
              title="Smart DryFryits"
              description="
Our Dry Fruit Website lets users easily add items to their cart. Built with React, Material UI, and Redux, it redirects users to WhatsApp via the WhatsApp API for sharing order details directly, making the checkout process quick and simple."
              ghLink="https://github.com/Hari-Hara-2005/smartdryfruit"
              demoLink="https://github.com/Hari-Hara-2005/smartdryfruit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maha}
              isBlog={false}
              title="HandMade Things"
              description="Our Handmade Things Website lets users explore and select products with ease. Built with React and Material UI, it integrates with WhatsApp API for a simple, interactive way to finalize and share their selections."
              ghLink="https://github.com/Hari-Hara-2005/HandCraft_1"
              demoLink="https://hand-craft-delta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="Photography"
              description="Our Photography Website showcases stunning visuals with a sleek, modern design. Built using HTML, CSS, JavaScript, and Tailwind CSS, it provides an engaging, responsive experience for browsing and enjoying photographs."
              ghLink="https://github.com/Hari-Hara-2005/Photography"
              demoLink="https://photography-two-plum.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Trippy"
              description="
Our Travel Website offers a clean and engaging interface for exploring travel options. Built with React and Tailwind CSS, this static site provides a responsive design, ensuring a smooth user experience on all devices."
              ghLink="https://github.com/Hari-Hara-2005/Travel"
              demoLink="https://travel-indol-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agency}
              isBlog={false}
              title="Agency"
              description="
Our Agency Website features a professional, visually appealing design crafted with React and Tailwind CSS. This static site delivers a responsive and user-friendly experience, showcasing services and portfolios effectively across all devices."
              ghLink="https://github.com/Hari-Hara-2005/Agency"
              demoLink="https://hari-hara-007.neocities.org/Agency%20Website/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
