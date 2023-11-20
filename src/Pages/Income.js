import React, { useState } from 'react'
import HandleSignOut from '../Components/Modal'
import TableDisplay from '../Components/Table'
import UpdateModal from '../Components/UpdateModal'
import { Button, FormControl, Modal } from 'react-bootstrap'

function Income() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow}>Add income</button>
      <UpdateModal show = {show} handleClose = {handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Income</Modal.Title>
        </Modal.Header>
      
            <select name="" id="">
                <option value="">One</option>
                <option value="">Two</option>
                <option value="">Three</option>
            </select>
            <FormControl type="text" placeholder='Item amount'/>
            <FormControl type="text" placeholder='Item name'/>
            <FormControl type="text" placeholder='Item quantity'/>
            <FormControl type="date" />

        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add income
          </Button>
        </Modal.Footer>
      </UpdateModal>
      
    
      <TableDisplay/>
    </>
  )
}

export default Income