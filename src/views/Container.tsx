import { useEffect } from "react";
import { IndexHeader, IndexNavbar, DarkFooter } from '../components'
import {
  Images,
  BasicElements,
  Navbars,
  Tabs,
  PaginationSection,
  Notifications,
  Typography,
  Javascript,
  NucleoIcons,
  CarouselSection,
  CompleteExamples,
  SignUp,
  Examples,
  Download
} from "./index-sections";


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
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <PaginationSection />
          <Notifications />
          <Typography />
          <Javascript />
          <CarouselSection />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Container;