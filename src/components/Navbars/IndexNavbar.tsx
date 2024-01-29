import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
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
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("inicio")?.scrollIntoView({behavior: 'smooth'});
            }}
               id="navbar-brand"
            >
              <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={logoMolinoCanuelas}
              style={{maxWidth: "70px",marginBottom:"0"}}
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
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("quienes-somos")?.scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  <p>Quienes Somos</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink
                  href=""
                >
                  <p>Productos Industriales</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>Nuestros Servicios</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>Distribución</p>
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
              <NavItem>
                <NavLink
                  href="https://wa.me/56987587393"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-whatsapp"></i>
                  <p className="d-lg-none d-xl-none">Whatsapp</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                Hablanos en Whatsapp
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/profile.php?id=100090204047178&mibextid=2JQ9oc"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                Síguenos en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/distribuidoraloslenos?igsh=MTdpamg1Mjl4YW9pcA=="
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                Síguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
