import { FC } from "react";
import { ModalBody, Modal } from "reactstrap";

//image
import imgClose from "./../../../assets/img/close_icon.svg";
import infoNutricional from "./../../../assets/img/info_nutri.png";
import productosModal from "./../../../assets/img/productos_modal.png";
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
          <img src={productosModal} />
        </div>
        <ModalBody>
          <p className="blockquote blockquote-primary blockquote-style">
            <strong className="text-font-bold">
              La harina Adelia María 000
            </strong>{" "}
            se utiliza siempre en la elaboración de panes, ya que su alto
            contenido de proteínas , más fibra y hierro. Así posibilita la
            formación de gluten y se consigue un buen leudado sin que las piezas
            pierdan su forma. Es más fácil de trabajar y tiene buena captura del
            dióxido de carbono (CO2) liberado durante la fermentación.
            <br />
            <br />
            <strong className="text-font-bold">
              ¿Cómo saber si la harina es de buena calidad?
            </strong>
            <br />
            <br />
            <strong className="text-font-bold">
              Una harina es considerada de buena calidad para panificación es
              cuando tiene una W 140-160, y P/L 0,5- 0,6.
            </strong>{" "}
            Para productos de horno fermentados, se debe utilizar harinas
            fuertes con una W 180-200.
            <br />
            <br />
            {/* <img src={infoNutricional} /> */}
            <div style={{ textAlign: "center" }}>
              <strong className="text-font-bold">
                INFORMACIÓN NUTRICIONAL
              </strong>
            </div>
            <div className="blockquote blockquote-primary blockquote-style">
              Porción: 50 g (1/2 Taza de Té) / Porciones por envase: 500
              <div className="table-responsive">
                <table className="table table-sm table-style-producto">
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Cantidad por 100 g</th>
                      <th scope="col">Cantiudad por proción</th>
                      <th scope="col">%DDR</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    <tr>
                      <th scope="row">Valor Energético (Kcal)</th>
                      <td>340</td>
                      <td>170</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">Carbohidratos (g)</th>
                      <td>71</td>
                      <td>36</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Azúcares Totales (g)</td>
                      <td>0,3</td>
                      <td>0,2</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">Proteínas (g)</th>
                      <td>10</td>
                      <td>5</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <th scope="row">Grasas Totales (g)</th>
                      <td>1,7</td>
                      <td>0,9</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">Fibra Alimentaria (g)</th>
                      <td>3</td>
                      <td>1,5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">Sodio (mg)</th>
                      <td>6</td>
                      <td>3</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th colSpan={4}>
                        ENRIQUECIMIENTO SEGÚN Art. N° 350 DEL R.S.A
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">Hierro (mg)</th>
                      <td>3,0</td>
                      <td>1,5</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th scope="row">Niacina (mg)</th>
                      <td>1,30</td>
                      <td>0,65</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">Tiamina (mg)</th>
                      <td>0,63</td>
                      <td>0,32</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <th scope="row">Ac. Fólico (mg)</th>
                      <td>220</td>
                      <td>110</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <th scope="row">Riboflavina (mg)</th>
                      <td>0,13</td>
                      <td>0,07</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            (*) Valores Diarios de Referencia con base en una dieta de 2.000
            kcal.
            <br />
            <br />
            <strong className="text-font-bold">INGREDIENTES:</strong> Harina de
            Trigo tipo 000; alfa- Amilasa (INS 1100), Ac. Ascórbico (INS 300),
            Azodicarbonamida (45 mg/kg,máximo) (INS927), Clorhidrato de
            L-Cisteína (INS 920), Núcleo Vitamínico (Sulfato Ferroso, Niacina,
            Tiamina, Ac. Fólico, Riboflavina).
            <br />{" "}
            <strong className="text-font-bold">
              CONTIENE GLUTEN (TRIGO). PUEDE CONTENER SOJA.
            </strong><br/>
            <br/>
            <strong className="text-font-bold">Humedad:</strong> 15% Máximo, Cenizas: 0,650% Máximo (Base 14% Humedad),
            Sedimentación 20 Mínimo.<br/> <strong className="text-font-bold">Consumir horneado o cocido.</strong>
          </p>
        </ModalBody>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
};

export default ProductosModal;
