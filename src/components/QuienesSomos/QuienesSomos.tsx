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

import quienessomos_texto from "./../../assets/img/quienessomos_texto.png";

import carrusel from "./../../assets/img/carrusel_img_quienes_1.png";
import carrusel2 from "./../../assets/img/carrusel_img_quienes_2.png";
import carrusel3 from "./../../assets/img/carrusel_img_quienes_3.png";
import carruselfinal from "./../../assets/img/carrusel_img_quienes.png";

import "./quienesSomos.css";
import QuienesSomosModal from "./Modal/QuienesSomosModal";

const QuienesSomos = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
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
    {
      src: carruselfinal,
    },
  ];

  return (
    <div
      className="page-header clear-filter quines-somos-style"
      id="quienes-somos"
    >
      <Container className="principal-container">
        <Row>
          <div className="container-element">
            <Col>
              <div>
                <div>
                  <div>
                    <img
                      src={quienessomos_texto}
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
            <div
              className="section section-style"
              id="carousel"
              style={{ backgroundColor: "white", width: "50%" }}
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
                      <CarouselItem
                        key={item.src}
                        onExiting={onExiting}
                        onExited={onExited}
                      >
                        <img src={item.src} />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="bi bi-chevron-compact-left icon-style"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="bi bi-chevron-right icon-style"></i>
                  </a>
                </Carousel>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
      <QuienesSomosModal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      />
    </div>
  );
};

export default QuienesSomos;
