import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const GuestNav = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light"  >
            <Container >
                <Navbar.Brand href="/">Barir Bazar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to="/">Home</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default GuestNav