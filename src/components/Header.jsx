// rafce

import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ insideDashboard }) => {
  return (
    <>
      <Navbar style={{ zIndex: 1 }} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none fw-bolder'><i className='fa-sharp fa-solid fa-list-check'></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button className="btn btn-link text-decoration-none fw-bolder">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i> </button>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header