import { FC } from "react";
import { ModalBody, Modal } from "reactstrap";

//image
import imgClose from "./../../../assets/img/close_icon.svg";
import infoNutricional from "./../../../assets/img/info_nutri.png";
import "./productosModal.css";

interface IProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ProductosModal = (props: IProps): ReturnType<FC> => {
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
            <strong className="text-font-bold">La harina Adelia María 000</strong> se utiliza siempre en la elaboración de
            panes, ya que su alto contenido de proteínas , más fibra y hierro.
            Así posibilita la formación de gluten y se consigue un buen leudado
            sin que las piezas pierdan su forma. Es más fácil de trabajar y
            tiene buena captura del dióxido de carbono (CO2) liberado durante la
            fermentación.
            <br />
            <br />
            <strong className="text-font-bold">¿Cómo saber si la harina es de buena calidad?</strong>
            <br />
            <br />
            <strong className="text-font-bold">Una harina es considerada de buena calidad para panificación es
            cuando tiene una W 140-160, y P/L 0,5- 0,6.</strong> Para productos de horno
            fermentados, se debe utilizar harinas fuertes con una W 180-200.
            <br />
            <br />
            <img src={infoNutricional} />
          </p>
        </ModalBody>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
};

export default ProductosModal;
