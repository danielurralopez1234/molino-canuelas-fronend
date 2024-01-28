import { createRef, useEffect } from "react";
import { Container } from "reactstrap";
// import logo from "./../../assets/img/now-logo.png"
import logoMolinoCanuelas from "./../../assets/img/logoMolinoCanuelas.png"
import header from "./../../assets/img/header.jpg"
import slim from "./../../assets/img/invision-white-slim.png"
import slim2 from "./../../assets/img/creative-tim-white-slim2.png"




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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + header + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={logoMolinoCanuelas}
            ></img>
            <h3>Somos el molino más grande de Sudamérica, nos enorgullece anunciar la presencia de nuestra prestigiosa marca de harina, Adelia María, en Chile, de la mano del distribuidor oficial Los Leños</h3>
          </div>
          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={slim}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={slim2}
              ></img>
            </a>
            .
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
