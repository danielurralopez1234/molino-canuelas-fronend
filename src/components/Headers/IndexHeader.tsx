import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";


import logoTextoColores from "./../../assets/img/logo_texto_colores.png";
import carrusel from "./../../assets/img/carrusel.jpg";
import carrusel2 from "./../../assets/img/carrusel2.jpg";
import carrusel3 from "./../../assets/img/carrusel3.jpg";
import carruselfinal from "./../../assets/img/carruselfinal.jpg";

import './indexHeades.css'


const IndexHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    setActiveIndex(newIndex);
  };

  const items = [
    {
      src: carrusel,
    },
    {
      src: carrusel2,
    },
    {
      src: carrusel3,
    },
    {
      src: carruselfinal,
    },
  ];

  return (
    <div className="page-header clear-filter" id="inicio">
      <Container className="principal-container">
        <Row>
          <div className="container-element">
            <Col>
              <div>
                <div>
                  <div>
                    <img
                      src={logoTextoColores}
                      className="img-fluid" alt="carousel">
                    </img>
                  </div>
                </div>
                <p style={{ color: 'black' }}>
                  Somos el molino más grande de Sudamérica, nos enorgullece
                  anunciar la presencia de nuestra prestigiosa marca de
                  harina, Adelia María, en Chile, de la mano del distribuidor
                  oficial Los Leños.
                </p>
              </div>
            </Col>
            <div
              className="section"
              id="carousel"
              style={{ backgroundColor: "#fff", width: '50%' }}
            >
              <Col lg="10"  >
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem key={item.src}>
                        <img src={item.src} />
                      </CarouselItem>
                    );
                  })}
                </Carousel>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </div >
  );
};

export default IndexHeader;
