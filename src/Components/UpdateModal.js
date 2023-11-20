import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateModal({show, handleClose, children}) {

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        {children}
      </Modal>
    </>
  );
}

export default UpdateModal;