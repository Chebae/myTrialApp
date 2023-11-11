import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

function HandleSignOut({signout, handleShow, show, setShow}) {
console.log(handleShow)

  
    const handleClose = () => setShow(false);
    

  return (
 

 <div className='handle'>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={signout}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
 
 </div>

   
  )
}

export default HandleSignOut