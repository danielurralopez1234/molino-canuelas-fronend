import { createRef, useEffect } from "react";
import { Container } from "reactstrap";
import logoChile from "./../../assets/img/logoChile.png";
import { gsap } from "gsap";
import SplitType from "split-type";

import header from "./../../assets/img/header.jpg";

const IndexHeader = () => {
  let pageHeader = createRef<any>();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  useEffect(() => {
    const ourText = new SplitType("div.our-text", { types: "chars" });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" id="inicio">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + header + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={logoChile}
              style={{ maxWidth: "100%" }}
            ></img>
            <div className="our-text" style={{ textAlign: "center" }}>
              <h3>
                Somos el molino más grande de Sudamérica, nos <br />
                enorgullece anunciar la presencia de nuestra <br />
                prestigiosa marca de harina, Adelia María, en Chile, <br />
                de la mano del distribuidor oficial Los Leños.
              </h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default IndexHeader;
