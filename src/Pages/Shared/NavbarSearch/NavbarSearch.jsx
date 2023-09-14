import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../Assets/css/navbar.css';

const NavbarSearch = () => {
    return (
        <Form className="d-flex align-items-center">

            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
                style={{ width: "750px" }}
            />
            <button className='location-picker'><i class="fa-solid fa-location-crosshairs"></i></button>

            <Button variant="outline-success">
                <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
        </Form>
    )
}

export default NavbarSearch