import { useEffect, useState } from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip,
} from "reactstrap";

import logoMolinoCanuelas from "./../../assets/img/logoMolinoCanuelas.png"

const IndexNavbar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("inicio")?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="navbar-brand"
            >
              <div className="content-center brand">
                <img
                  alt="..."
                  className="n-logo"
                  src={logoMolinoCanuelas}
                  style={{ maxWidth: "70px", marginBottom: "0" }}
                ></img>

              </div>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Molino Cañuelas | Chile
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem >
                <NavLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("productos")?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <p>Productos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>Quienes somos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>TRAYECTORIA Y CRECIMIENTO</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>Contacto</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
