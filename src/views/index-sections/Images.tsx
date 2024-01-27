import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

//images
import heroImage1 from "./../../assets/img/hero-image-1.png"
import heroImage2 from "./../../assets/img/hero-image-2.png"
import heroImage3 from "./../../assets/img/hero-image-3.png"


// core components
function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={heroImage1}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={heroImage2}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={heroImage3}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
