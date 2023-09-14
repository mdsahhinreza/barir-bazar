import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import '../../../Assets/css/navbar.css';

const GuestNav = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar navbar-expand-lg"  >
                <Container >
                    <Navbar.Brand href="/" className='fw-bolder'>Barir Bazar</Navbar.Brand>
                    <Nav className="justify-content-center" activeKey="/home">
                        <NavbarSearch></NavbarSearch>
                        <div className='ps-2 navbar-button-div'>
                            <button className='navbar-shopping-btn me-2'><i className="fa-solid fa-cart-shopping"></i></button>
                            <button className='navbar-user-btn'>
                                <i className="fa-solid fa-user-gear"></i>
                            </button>
                        </div>
                    </Nav>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar >
            <Navbar expand="lg" className="navbar navbar-expand-lg bg-dark navbar-dark"  >
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0 text-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link mx-md-3' to="/"><i className="fa-solid fa-house"></i> Home</Link>
                            <Link className='nav-link mx-md-3' to="/"><i className="fa-solid fa-burger"></i> Food</Link>
                            <Link className='nav-link mx-md-3' to="/"><i className="fa-solid fa-bag-shopping"></i> Grocery</Link>
                            <Link className='nav-link mx-md-3' to="/"><i className="fa-solid fa-stethoscope"></i> Pharmacy</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>

    )
}

export default GuestNav