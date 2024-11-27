// rafce

import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCards = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card onClick={handleShow} className='btn shadow'>
                <Card.Img height={'200px'} variant="top" src="https://studentprojectguide.com/wp-content/uploads/2019/12/student-projetc.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCards