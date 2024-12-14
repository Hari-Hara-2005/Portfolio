import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Hari Haran cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    AOS.init(); // Initialize AOS when component mounts
    AOS.refresh(); // Refresh AOS
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Button with Animation */}
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up" // AOS animation
          data-aos-duration="1000"
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Resume Document with Animation */}
        <Row
          className="resume"
          data-aos="zoom-in" // Zoom-in effect for resume section
          data-aos-duration="1500"
        >
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Button with Animation */}
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up" // AOS animation
          data-aos-duration="1200"
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
