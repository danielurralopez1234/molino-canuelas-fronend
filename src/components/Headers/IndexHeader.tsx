import { createRef, useEffect } from "react";
import { Container } from "reactstrap";
import logoMolinoCanuelas from "./../../assets/img/logoMolinoCanuelas.png";
import Typewriter from "typewriter-effect";

import header from "./../../assets/img/header.jpg";
import slim from "./../../assets/img/invision-white-slim.png";
import slim2 from "./../../assets/img/creative-tim-white-slim2.png";

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
            <img alt="..." className="n-logo" src={logoMolinoCanuelas}></img>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .pauseFor(100)
                  .deleteAll()
                  .typeString(
                    "<h3>Somos el molino más grande de Sudamérica, nos enorgullece anunciar la presencia de nuestra prestigiosa marca de harina, Adelia María, en Chile, de la mano del distribuidor oficial Los Leños.</h3>"
                  )
                  .start();
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default IndexHeader;
