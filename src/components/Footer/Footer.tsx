import {  Container, Row, Col } from "reactstrap";
import "./footer.css"

//imager
import logoChileBandera from "./../../assets/img/logoChile_bandera.png"

const  Footer = () => {
  return (
    <>
      <div
        className="section section-download footer-style"
        data-background-color="black"
        id="download-section"
      >
        
        <Container>
          
          <Row className="justify-content-md-center">
            
            <Col className="text-center" lg="8" md="12">
           
            <div
                className="blockquote blockquote-primary blockquote-style"
                style={{ textAlign: "center" }}
              >
                 <img
              style={{height:"28%"}}
              src={logoChileBandera}
              />
                <br />
                <strong className="text-font-bold">
                  {" "}
                  Email:
                </strong>
                <br /> ventas@molinocanuelaschile.cl
                <br />
                <br />
                <strong className="text-font-bold">Teléfono:</strong>
                <br /> +56 9 8758 7393
                <br />
                <br />
                <strong className="text-font-bold">Dirección:</strong> <br />
                San Agustín #1350, Cúrico (
                <strong className="text-font-bold">
                  Casa matriz, Región del Maule
                </strong>
                )
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default Footer;
