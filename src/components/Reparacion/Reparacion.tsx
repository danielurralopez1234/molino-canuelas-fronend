import { useEffect, useState } from "react";
import {
  // Button,
  // Card,
  // CardBody,
  // CardFooter,
  // CardTitle,
  // Form,
  // Input,
  // InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";

import "./reparacion.css";

import iconHorarioAtencion from "./../../assets/img/icon_horario_atencion.svg";
import iconTelefono from "./../../assets/img/icon_telefono.svg";
import iconMap from "./../../assets/img/icon_map.svg";
import contactoLogo from "./../../assets/img/contacto_logo.png";

const Reparacion = () => {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  // const [nombreCompleto, setNombreCompleto] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [email, setEmail] = useState("");
  // const [mensaje, setMensaje] = useState("");

  // const onCLickSendToMessage = () => {
  //   const remitente = "ventas@molinocanuelaschile.cl";
  //   const destinatario = email;
  //   const texto = mensaje;
  //   const fono = telefono;
  //   const nombre = nombreCompleto;

  //   const isFonoValida = isFono(fono);
  //   const isEmailValida = isEmail(destinatario);
  //   const isNombreValida = isNombre(nombre);
  //   const isTextoValida = isTexto(texto);

  //   let user_captcha_value = (
  //     document.getElementById("user_captcha_input") as HTMLInputElement
  //   ).value;
  //   const validaiconCaptcha = validateCaptcha(user_captcha_value);

  //   if (
  //     isFonoValida &&
  //     isEmailValida &&
  //     isNombreValida &&
  //     isTextoValida &&
  //     validaiconCaptcha
  //   ) {

  //     const url = `https://s86cyb2go1.execute-api.us-east-1.amazonaws.com/dev/sendEmail?remitente=${remitente}&destinatario=${destinatario}&texto=${texto}&fono=${fono}&nombre=${nombre}`;

  //     fetch(url)
  //       .then((response) => {
  //         if (!response.ok) {
  //           console.error("Hubo un problema al enviar el correo.");
  //         }
  //         alert("Correo enviado correctamente");
  //       })
  //       .catch((error) => {
  //         console.error("Error al enviar el correo:", error);
  //       });

  //   } else {
  //     let mensaje = "";
  //     if (isFonoValida === false) {
  //       mensaje +=
  //         "Telefono no cumple con el formato ejemplo: '56226904422 o Celular 56987587393'\n";
  //     }
  //     if (isEmailValida === false) {
  //       mensaje += "Email no cumple con el formato ejemplo: 'jose@gmail.com'\n";
  //     }
  //     if (isNombreValida === false) {
  //       mensaje +=
  //         "Nombre no cumple con el formato ejemplo: 'Juan Andres Soto Lara'\n";
  //     }
  //     if (isTextoValida === false) {
  //       mensaje +=
  //         "Mensaje no cumple con el formato ejemplo: 'Me gustaria contactarlos para ...' \n";
  //     }
  //     if (validaiconCaptcha === false) {
  //       mensaje += "'Captcha no valido' \n";
  //     }
  //     alert(mensaje);
  //   }
  // };

  // const isFono = (val: string) => {
  //   if (val.trim() !== "") {
  //     if (val.length === 11) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // const isEmail = (val: string) => {
  //   if (val.trim() !== "") {
  //     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return pattern.test(val);
  //   }
  //   return false;
  // };

  // const isNombre = (val: string) => {
  //   if (val.trim() !== "") {
  //     if (val.length > 3) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // const isTexto = (val: string) => {
  //   if (val.trim() !== "") {
  //     if (val.length > 3) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  return (
    <>
      <div
        className="section section-signup contacto-style"
        id="contacto"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          {/* <img className="img-Contacto" src={contactoLogo} /> */}
          <br />
          <br />
          <Row>
            {/* <Col> */}
              {/* <Card
                className="card-signup card-signup-style"
                data-background-color="blue"
              >
                <Form action="" className="form form-style" method="">
                  <div className="Card-Header-style text-center">
                    <CardTitle className="title-up" tag="h3">
                      Contáctanos
                    </CardTitle>
                    <div className="social-line">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="facebook"
                        href="https://www.facebook.com/profile.php?id=100090204047178&mibextid=2JQ9oc"
                        target="_blank"
                        style={{backgroundColor:"#393a60",color:"white"}}
                      >
                        <i className="fab fa-facebook-square" style={{color:"white"}}></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="whatsapp"
                        href="https://wa.me/56987587393"
                        target="_blank"
                        style={{backgroundColor:"#393a60",color:"white"}}
                      >
                        <i className="fab fa-whatsapp whatsapp-style" style={{color:"white"}}></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="youtube"
                        href="https://www.youtube.com/@MOLINOCANUELASCHILE"
                        target="_blank"
                        style={{backgroundColor:"#393a60",color:"white"}}
                      >
                        <i className="fab fa-youtube whatsapp-style" style={{color:"white"}}></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="instagram"
                        href="https://www.instagram.com/distribuidoraloslenos?igsh=MTdpamg1Mjl4YW9pcA=="
                        target="_blank"
                        style={{backgroundColor:"#393a60",color:"white"}}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                    </div>
                  </div>

                  <CardBody style={{marginTop:"5%"}}>
                    <InputGroup
                      className={
                        "no-border" + (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Nombre Completo..."
                        type="text"
                        value={nombreCompleto}
                        style={{fontWeight:"bold"}}
                        onChange={(e) => setNombreCompleto(e.target.value)}
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
                        type="number"
                        style={{fontWeight:"bold"}}
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
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
                        style={{fontWeight:"bold"}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        style={{fontWeight:"bold"}}
                        type="textarea"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <LoadCanvasTemplateNoReload />
                    <Input
                      placeholder="Escriba el Captcha."
                      type="text"
                      id="user_captcha_input"
                      style={{ backgroundColor: "#393a60",fontWeight:"bold" }}
                    ></Input>
                  </CardBody>
                  <CardFooter className="text-center card-footer-style">
                    <Button
                      className="btn-neutral btn-round contacto-btn-style"
                      color="info"
                      // href="#"
                      onClick={() => onCLickSendToMessage()}
                      size="lg"
                    >
                      Enviar
                    </Button>
                  </CardFooter>
                </Form>
              </Card> */}
            {/* </Col>
            <Col> */}
              <div
                className="blockquote blockquote-primary blockquote-style"
                style={{ textAlign: "center" }}
              >
                {/* <img src={iconHorarioAtencion} style={{ width: "10%" }} />
                <br />
                <strong className="text-font-bold">
                  {" "}
                  Horario de Atención:
                </strong>
                <br /> Lunes a viernes: de 08:00 a 18:00 hrs
                <br /> Sábado de 08:00 a 14:00 hrs */}
                <br />
                <br />
                <img src={iconTelefono} style={{ width: "10%" }} />
                <br />
                <strong className="text-font-bold">Teléfono:</strong>
                <br /> +56 9 8758 7393
                <br />
                <br />
                {/* <img src={iconMap} style={{ width: "10%" }} />
                <br />
                <strong className="text-font-bold">Dirección:</strong> <br /> */}
                {/* San Agustín #1350, Cúrico (
                <strong className="text-font-bold">
                  Casa matriz, Región del Maule
                </strong>
                ) */}
                {/* <div className="content-map-google">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.6511127625117!2d-71.25693452351543!3d-34.9904027780239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664571af6cf72cb%3A0xb03e3b954ba6b38e!2sSan%20Agust%C3%ADn%201350%2C%203342083%20Curic%C3%B3%2C%20Maule!5e0!3m2!1sen!2scl!4v1707160376463!5m2!1sen!2scl"
                    // width="400"
                    // height="300"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
                <br /> */}
                {/* San Juan #4705, San Joaquín (
                <strong className="text-font-bold">Región Metropolitana</strong>
                ) */}
                {/* <div className="content-map-google">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.1300491612615!2d-70.62325751198661!3d-33.4979934312745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00908a63b5b%3A0x32dfa2cb62faaa98!2sSan%20Juan%204705%2C%20San%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1707160546069!5m2!1sen!2scl"
                    // width="400"
                    // height="300"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div> */}
              </div>
            {/* </Col>*/}
          </Row> 
        </Container>
      </div>
    </>
  );
};

export default Reparacion;
