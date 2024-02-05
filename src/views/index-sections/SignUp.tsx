import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import bg11 from "./../../assets/img/carrusel_img_traye_3.png";

const SignUp = () => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  return (
    <>
      <div
        className="section section-signup"
        id="contacto"
        style={{
          // backgroundImage: "url(" + bg11 + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Contáctanos
                    </CardTitle>
                    <div className="social-line">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="facebook"
                        href="https://www.facebook.com/profile.php?id=100090204047178&mibextid=2JQ9oc"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="whatsapp"
                        href="https://wa.me/56987587393"
                        target="_blank"
                        size="lg"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="instagram"
                        href="https://www.instagram.com/distribuidoraloslenos?igsh=MTdpamg1Mjl4YW9pcA=="
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Nombre Completo..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Telefono..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Mensaje..."
                        type="textarea"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Enviar
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
            <Col>
              <p
                className="blockquote blockquote-primary blockquote-style"
                style={{ textAlign: "left" }}
              >
                <strong>Horario de Atención:</strong>
                <br /> Lunes a viernes: de 08:00 a 18:00 hrs
                <br /> Sábado de 08:00 a 14:00 hrs
                <br />
                <br />
                <div>
                  Dirección: <br />
                  San Agustín #1350, Cúrico (Casa matriz, Región del Maule)
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.6511127625117!2d-71.25693452351543!3d-34.9904027780239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664571af6cf72cb%3A0xb03e3b954ba6b38e!2sSan%20Agust%C3%ADn%201350%2C%203342083%20Curic%C3%B3%2C%20Maule!5e0!3m2!1sen!2scl!4v1707160376463!5m2!1sen!2scl"
                    width="400"
                    height="300"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                  <br />
                  San Juan #4705, San Joaquín (Región Metropolitana
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.1300491612615!2d-70.62325751198661!3d-33.4979934312745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00908a63b5b%3A0x32dfa2cb62faaa98!2sSan%20Juan%204705%2C%20San%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1707160546069!5m2!1sen!2scl"
                    width="400"
                    height="300"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
