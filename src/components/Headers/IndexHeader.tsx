/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

//images
import logo from "./../../assets/img/now-logo.png" 
import header from  "./../../assets/img/header.jpg"   
import slim from "./../../assets/img/invision-white-slim.png"
import slim2 from "./../../assets/img/creative-tim-white-slim2.png" 



function IndexHeader() {
  let pageHeader = React.createRef<any>();

  React.useEffect(() => {
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
              src={logo}
            ></img>
            <h1 className="h1-seo">Now UI Kit.</h1>
            <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
          </div>
          <h6 className="category category-absolute">
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
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
