import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  CardHeader,
  Nav,
  NavItem,
} from "reactstrap";
//images
import trianguloNosotrosEs from "./../../assets/img/triangulo_nosotros_ES.png";
import mapaChile from "./../../assets/img/mapa_chile.png";

const Images = () => {
  return (
    <>
      <div className="section section-images" style={{height:"100%",maxHeight:"100%"}} >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <h2 className="category" style={{ color: "#5996c9" }}>
                {" "}
                PRODUCTOS
              </h2>
              <Card>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + 1}
                  >
                    <TabPane tabId="iconPills1">
                      <p style={{ textAlign: "justify" }}>
                        Molino Cañuelas es una empresa regional de alimentos,
                        integrada desde las materias primas hasta el consumidor
                        final, que acompaña las tendencias globales de nutrición
                        y alimentación, brindando soluciones a partir de la
                        innovación de productos de calidad y precio accesible,
                        buscando constantemente satisfacer a todos sus clientes.
                      </p>
                      <p style={{ textAlign: "justify" }}>
                        Impulsados por nuestro sistema de gestión integral
                        focalizado en la calidad y la innovación, diseñado por
                        nuestro Presidente Aldo Navilli, desde Molino Cañuelas
                        consolidamos nuestra posición en el mercado, buscando
                        continuamente anticiparnos a las tendencias mundiales de
                        alimentación.
                      </p>
                      <p style={{ textAlign: "justify" }}>
                        Con un crecimiento sostenido, y 80 años de experiencia
                        en la industria alimenticia, nos consolidamos como un
                        grupo industrial especializado en la elaboración de
                        harinas, aceites, galletitas, panificados, pastas secas,
                        pan rallado, rebozadores y pre mezclas para pizzas,
                        ñoquis, buñuelos, bizcochuelos y alimentos congelados
                        para consumo masivo e industrial llegando con nuestros
                        productos a la mesa de los argentinos y a los 5
                        continentes.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              <br />
              <Row>
                  <img
                    alt="..."
                    src={trianguloNosotrosEs}
                  ></img>
              </Row>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                  <Nav
                    className="justify-content-center"
                    role="tablist"
                    style={{ backgroundColor: "#325595" }}
                    tabs
                  >
                    <NavItem style={{ color: "white" }}>MISIÓN</NavItem>
                  </Nav>
                </CardHeader>
                <CardBody style={{ backgroundColor: "#385fa6" }}>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + 1}
                  >
                    <TabPane tabId="iconPills1">
                      <p style={{ textAlign: "justify", color: "white",overflowWrap:"break-word" }}>
                        Producir, comercializar e industrializar materias primas
                        para elaborar y ofrecer al mercado global los productos
                        derivados; brindando un ÓPTIMO servicio y un elevado
                        nivel de CALIDAD Y PRODUCTIVIDAD constantes;
                        respondiendo EFICAZMENTE a las necesidades cambiantes de
                        nuestros clientes
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Nav
                    className="justify-content-center"
                    role="tablist"
                    style={{ backgroundColor: "#6393c0" }}
                    tabs
                  >
                    <NavItem style={{ color: "white" }}>VALORES</NavItem>
                  </Nav>
                </CardHeader>
                <CardBody style={{ backgroundColor: "#6ea4d6" }}>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + 1}
                  >
                    <TabPane tabId="iconPills1">
                      <p style={{ textAlign: "justify", color: "white" }}>
                        Creemos que la SATISFACCION DE NUESTROS CLIENTES y
                        PROVEEDORES y la de todos aquellos que consumen nuestros
                        productos y servicios, es nuestro primer pilar
                        estratégico, el motor de nuestro crecimiento y el
                        indicador central de nuestros negocios. Impulsamos un
                        modelo de gestión sostenible, innovador y participativo
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Nav
                    className="justify-content-center"
                    role="tablist"
                    style={{ backgroundColor: "#325595" }}
                    tabs
                  >
                    <NavItem style={{ color: "white" }}>
                      PRESENCIA REGIONAL
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + 1}
                  >
                    <TabPane tabId="iconPills1">
                      <img
                        alt="..."
                        src={mapaChile}
                      ></img>
                      <p style={{color:"#325595"}}><strong>ALIMENTOS CAÑUELAS CHILE S.P.A</strong></p>
                      <p style={{ textAlign: "justify" }}>
                        Desde 2013 tenemos presencia en Chile por medio de
                        Alimentos Cañuelas Chile S.P.A., atendiendo, con
                        cobertura del 100% el mercado de Alimento Animal de ese
                        país, siendo uno de los mayores importadores por vía
                        terrestre.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Images;
