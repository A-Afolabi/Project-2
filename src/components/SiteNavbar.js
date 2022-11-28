import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const SiteNarbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Item>
          <Link className='btn btn-grey' to="/Leagues">Find A League?</Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default SiteNarbar