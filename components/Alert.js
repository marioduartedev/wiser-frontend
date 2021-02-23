import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Alert() {
  const { alert, setAlert } = useContext(AppContext);
  const close = () =>{
    setAlert({ show: false, msg: '' })
  }
  return (
    <Modal show={alert.show} onHide={close} data-testid="alerta">
      <Modal.Header closeButton>
        <Modal.Title>Login Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ alert.msg }</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
