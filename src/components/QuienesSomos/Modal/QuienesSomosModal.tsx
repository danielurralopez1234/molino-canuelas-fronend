import { FC, useState } from "react";
import {
  ModalBody,
  Modal,
  Card,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  TabContent,
  TabPane,
} from "reactstrap";

//image
import imgClose from "./../../../assets/img/close_icon.svg";
import quienesSomosModal from "./../../../assets/img/quienes_samos_modal.png"
import "./quienesSomosModal.css";

interface IProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const QuienesSomosModal = (props: IProps): ReturnType<FC> => {
  const { isVisible, setIsVisible } = props;

  const [iconPills, setIconPills] = useState("1");

  return (
    <>
      <Modal isOpen={isVisible} toggle={() => setIsVisible(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setIsVisible(false)}
          >
            <img className="image-close" src={imgClose} />
          </button>
          {/* <br /> */}
          <img
          src={quienesSomosModal}
          />
        </div>
        <ModalBody>
          <p className="blockquote blockquote-primary blockquote-style">
             <strong className="text-font-bold">Promovemos el trabajo en equipo, brindamos soluciones a medida
            acordes a las exigencias del mercado, trabajamos con un sistema de
            gestión basado en la calidad total y mejora contínua de los procesos
            para garantizar productos y servicios de excelencia.</strong>
          </p>
          <Card>
            <CardHeader>
              <Nav className="justify-content-center" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={iconPills === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("1");
                    }}
                  >
                    Misión
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("2");
                    }}
                  >
                    Visión
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("3");
                    }}
                  >
                    Valores
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent
                className="text-center"
                activeTab={"iconPills" + iconPills}
              >
                <TabPane tabId="iconPills1">
                  <p className="blockquote blockquote-primary blockquote-style">
                    Existimos para servir y satisfacer permanentemente al
                    mercado nacional, identificando sus necesidades actuales y
                    futuras, comprometiéndonos en la mejora continua de nuestros
                    procesos orientados a la demanda de nuestros clientes.
                  </p>
                </TabPane>
                <TabPane tabId="iconPills2">
                  <p className="blockquote blockquote-primary blockquote-style">
                    Transformarnos en la mayor proveedora de servicios harinera
                    para los sectores, actuando sobre la base de nuestros
                    valores organizacionales.
                  </p>
                </TabPane>
                <TabPane tabId="iconPills3">
                  <p className="blockquote blockquote-primary blockquote-style">
                    Una Organización flexible, eficiente, descentralizada, con
                    pocos niveles jerárquicos, que promueva el trabajo en
                    equipo, la innovación, la delegación de funciones, la
                    iniciativa personal y la comunicación fluida y abierta. Se
                    ocupa de satisfacer al cliente pequeña empresa, como al
                    cliente gran empresa, sin olvidar los conceptos de servicio
                    integral a todos sin discriminaciones.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </ModalBody>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
};

export default QuienesSomosModal;
