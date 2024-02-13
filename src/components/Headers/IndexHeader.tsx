import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// images
import logoTextoColores from "./../../assets/img/logo_texto_colores.png";
import logoChileBandera from "./../../assets/img/logoChile_bandera.png";
import carrusel from "./../../assets/img/carrusel.jpg";
import carrusel2 from "./../../assets/img/carrusel2.jpg";
import carrusel3 from "./../../assets/img/carrusel3.jpg";
import carruselfinal from "./../../assets/img/carruselfinal.jpg";

import "./indexHeades.css";

const IndexHeader = () => {
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
    <div className="page-header clear-filter clear-filter-style" id="inicio">
      <Container className="principal-container">
        <Row>
          <div className="container-element">
            <Col>
              <div>
                <div>
                  <div>
                    <img
                      src={logoTextoColores}
                      className="img-fluid"
                      alt="carousel"
                    ></img>
                    <img
                      src={logoChileBandera}
                      style={{ marginTop: "-64px" }}
                      className="img-fluid"
                      alt="carousel"
                    ></img>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default IndexHeader;
