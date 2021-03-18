import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../contextAPI';

export default class Nab extends Component {
    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#"> React-Car Shop </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                     <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="mr-auto">
                             <Link to="/" > Products </Link>
                         </Nav>
                         <Nav>
                            <ProductConsumer>
                            {(value) => {
                                return <Link style ={{ color: 'mediumspringgreen'}} eventKey={2} to="/cart"> My Cart ({value.Cart.length})
                                </Link>
                            }}
                             
                             </ProductConsumer>
                         </Nav>
                     </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
