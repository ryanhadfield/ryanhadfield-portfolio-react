import React from "react";
// import "materialize-css";
import "./style.css";
// import { Navbar, NavItem, Icon } from "react-materialize";
import {
    Navbar,
    Nav
} from "react-bootstrap";

const CustomNavbar = (props) => {
    return (
        <Navbar className="nav" bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="./../img/RH-color-logo.png"
                    width="50"
                    height="50"
                    alt="Ryan Hadfield Logo"
                // class="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default CustomNavbar;
