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

import logoProductos from "./../../assets/img/logoProductos.png";

import carrusel from "./../../assets/img/carrusel_image_1.png";
import carrusel2 from "./../../assets/img/carrusel_img_2.png";
import carrusel3 from "./../../assets/img/carrusel_img_3.png";

import "./productos.css";
import ProcductosModal from "./Modal/ProductosModal";

const Productos = () => {
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
  ];

  return (
    <div className="page-header clear-filter productos-style" id="productos">
      <Container className="principal-container">
        <Row>
          <div className="container-element">
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
                        <img className="zoom" src={item.src} />
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

            <Col>
              <div>
                <div>
                  <div>
                    <img
                      src={logoProductos}
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
                <strong>Ver más</strong>
              </Button>
            </Col>
          </div>
        </Row>
      </Container>
      <ProcductosModal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      />
    </div>
  );
};

export default Productos;
