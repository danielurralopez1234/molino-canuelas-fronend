import { FC } from "react";
import { ModalBody, Modal } from "reactstrap";

//image
import imgClose from "./../../../assets/img/close_icon.svg";
import mapaChileMarcas from "./../../../assets/img/mapa_chile_marcas.png";
import "./trayectoriaYCrecimientosModal.css";

interface IProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const TrayectoriaYCrecimientoModal = (props: IProps): ReturnType<FC> => {
  const { isVisible, setIsVisible } = props;

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
          <br />
        </div>
        <ModalBody>
          <p className="blockquote blockquote-primary blockquote-style">
            <strong className="text-font-bold">HOY MOLINO CAÑUELAS CHILE con su primer producto de innovación en
            HARINA ADELIA MARIA 000</strong>
            <br />
            <br />
            La compañía se consolidó en un grupo industrial que se especializa
            en la elaboración de harinas y otros productos a la mesa del
            consumidor final.
            <br />
            <br />
            <img src={mapaChileMarcas} />
          </p>
        </ModalBody>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
};

export default TrayectoriaYCrecimientoModal;
