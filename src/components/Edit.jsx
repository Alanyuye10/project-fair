// rafce

import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import uploadImg from '../assets/uploadImg.png'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn"> <i className="fa-solid fa-edit"></i> </button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton> <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img className='img-fluid' height={'200px'} src={uploadImg} alt="" />
              </label>
              <div className="text-warning fw-bolder">*Upload Only the following file types (jpeg, jpg, png) here !</div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" placeholder='Project Title' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Project Languages' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Project Overview' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Github Link' className="form-control" />
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Project Website Link' className="form-control" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit