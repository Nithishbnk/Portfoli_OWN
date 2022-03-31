import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import './Modal.css';

export default function ModalComponent() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div class="container">
          <div class="row col">
            <h3 class="modaltitle">Welcome to my Portfolio</h3>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <a href="https://m.facebook.com/nithish.bommireddy?ref=bookmarks" class="fa fa-facebook"></a>
      <a href="https://www.linkedin.com/in/nithish-kumar-bnk/" class="fa fa-linkedin"></a>
      <a href="https://www.instagram.com/nithu_since_1999/" class="fa fa-instagram"></a>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
