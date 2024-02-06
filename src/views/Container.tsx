import { useEffect } from "react";
import { IndexHeader, IndexNavbar } from '../components'
import {
  Productos,
  Download,
  Contacto
} from "./index-sections";

import "./../assets/css/whatsapp.css"
import QuienesSomos from "../components/QuienesSomos/QuienesSomos";
import TrayectoriaYCrecimiento from "../components/TrayectoriaYCrecimiento/TrayectoriaYCrecimiento";


const Container = () => {

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Productos />
          <QuienesSomos/>
          <TrayectoriaYCrecimiento/>
          <Contacto />

          <Download />
        </div>
        <a href="https://wa.me/56987587393" target="_blank" className="whatsapp-btn">
  <i className="bi bi-whatsapp"></i>
</a>
      </div>
     
    </>
  );
}

export default Container;