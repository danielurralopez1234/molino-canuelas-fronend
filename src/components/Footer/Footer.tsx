import {  Container, Row, Col } from "reactstrap";

const  Footer = () => {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">SITIO EN DESARROLLO</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">

            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
            </Col>
            <Col md="12">

            </Col>
          </Row>
          <br></br>
          <br></br>

        </Container>
      </div>
    </>
  );
}

export default Footer;
