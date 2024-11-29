// rafce

import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import recipeImg from '../assets/recipe.png'

const ProjectCards = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card onClick={handleShow} className='btn shadow'>
                <Card.Img height={'200px'} variant="top" src={recipeImg} />
                <Card.Body>
                    <Card.Title>Recipe App</Card.Title>
                </Card.Body>
            </Card>

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='img-fluid'style={{height:'250px'}} src={recipeImg} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h3>Recipe App</h3>
                            <h6>Languages Used : <span className='text-danger'>HTML, CSS, Tailwind CSS, React, Redux</span></h6>
                            <p style={{ textAlign: 'justify' }}> <span className="fw-bolder">Project Overview : </span> This project involves designing and implementing a Recipe Listing App using React and Redux. The app provides users with an intuitive interface to explore various recipes, search based on cuisine type, and view detailed information about individual recipes. </p>
                        </div>
                    </div>
                    <div className="mt-2 float-start">
                        <a href="https://github.com/Alanyuye10/recipie-app" target='_blank' className="btn btn-secondary me-2"> <i className="fa-brands fa-github"></i> </a>
                        <a href="https://myrecipie-app.netlify.app" target='_blank' className="btn btn-secondary"> <i className="fa-solid fa-link"></i> </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCards