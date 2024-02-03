interface ModalProps {
  open: boolean;
}
import { FC, useEffect, useState } from "react";
import { Button, ModalBody, Modal } from "reactstrap";

export default function ProductosModal(props: ModalProps): ReturnType<FC> {
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   const open = props.open;

  //   console.log(open, "open");
  //   console.log(modal, "modal");
  //   setModal(open);
  //   // if ( modal == false) {
  //   //   setModal(false);
  //   // }
  // }, [,props.open,modal]);

  return (
    <>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">Modal title</h4>
        </div>
        <ModalBody>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </ModalBody>
        <div className="modal-footer">
          <Button color="danger" type="button" onClick={() => setModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
