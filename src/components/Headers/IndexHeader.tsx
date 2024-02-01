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
import logoChile from "./../../assets/img/logoChile.png";
import carrusel from "./../../assets/img/carrusel.jpg";
import carrusel2 from "./../../assets/img/carrusel2.jpg";
import carrusel3 from "./../../assets/img/carrusel3.jpg";
import carruselfinal from "./../../assets/img/carruselfinal.jpg";

// import { gsap } from "gsap";
// import SplitType from "split-type";

// import header from "./../../assets/img/header.jpg";

const IndexHeader = () => {
  //let pageHeader = createRef<any>();
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
    <>
      <div className="page-header clear-filter" filter-color="blue" id="inicio">
        <Container style={{maxWidth:"80%"}}>
          <Row>
            <Col>
              <img
                alt="..."
                className="n-logo"
                src={logoChile}
                style={{ maxWidth: "100%" }}
              ></img>
              <div
                className="our-text"
                style={{ textAlign: "center", color: "#192E82" }}
              >
                <h4>
                  <strong>
                    Somos el molino más grande de Sudamérica, nos enorgullece
                    anunciar la presencia de nuestra prestigiosa marca de
                    harina, Adelia María, en Chile, de la mano del distribuidor
                    oficial Los Leños.
                  </strong>
                </h4>
              </div>
            </Col>
            <Col>
              <div
                className="section"
                id="carousel"
                style={{ backgroundColor: "#f4d092" }}
              >
                <Col lg="8" md="12" style={{ maxWidth: "100%" }}>
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
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img src={item.src} />
                          <div className="carousel-caption d-none d-md-block"></div>
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="carousel-control-prev"
                      data-slide="prev"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                    </a>
                    <a
                      className="carousel-control-next"
                      data-slide="next"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                    </a>
                  </Carousel>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
        <div id="productos"></div>
      </div>
      
    </>
  );
};

export default IndexHeader;
