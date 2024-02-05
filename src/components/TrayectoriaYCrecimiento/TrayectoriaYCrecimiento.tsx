import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
} from "reactstrap";

import texto_trayectoria_crecimiento from "./../../assets/img/texto_trayectoria_crecimiento.png";

import carrusel from "./../../assets/img/carrusel_img_traye_1.png";
import carrusel2 from "./../../assets/img/carrusel_img_traye_2.png";
import carrusel3 from "./../../assets/img/carrusel_img_traye_3.png";

import "./trayectoriaYCrecimiento.css";
import TrayectoriaYCrecimientoModal from "./Modal/TrayectoriaYCrecimientoModal";

const TrayectoriaYCrecimiento = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

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

  const stateModalFunction = () => {
    setIsVisibleModal(!isVisibleModal);
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
  ];

  return (
    <div className="page-header clear-filter" id="trayectoria-y-crecimiento">
      <Container className="principal-container">
        <Row>
          <div className="container-element">
            
            <div
              className="section"
              id="carousel"
              style={{ backgroundColor: "#fff", width: "50%" }}
            >
              <Col lg="10">
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
            <Col>
              <div>
                <div>
                  <div>
                    <img
                      src={texto_trayectoria_crecimiento}
                      className="img-fluid"
                      alt="carousel"
                    ></img>
                  </div>
                </div>
              </div>
              <Button
                color="info"
                className="mr-1"
                onClick={() => stateModalFunction()}
              >
                Ver mas
              </Button>
            </Col>

          </div>
        </Row>
      </Container>
      <TrayectoriaYCrecimientoModal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      />
    </div>
  );
};

export default TrayectoriaYCrecimiento;
