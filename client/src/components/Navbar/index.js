import React from "react";
import "./style.css";
// import { Navbar, Nav  } from "react-bootstrap";
import { motion } from "framer-motion";
import "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";

const CustomNavbar = (props) => {
  return (
    <Navbar
      alignLinks="right"
      className="transparent z-depth-0"
      brand={
        <motion.a
          className="brand-logo"
          href="/"
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 1.2 }}
        >
          <img
            src="./../img/RH-color-logo3.png"
            width="75"
            height="75"
            alt="Ryan Hadfield Logo"
            id="rhlogo"
          />
        </motion.a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem className="navItem flow-text aboutLink" href="/">
        About
      </NavItem>
      <NavItem className="navItem flow-text portfolioLink" href="/portfolio">
        Portfolio
      </NavItem>
      <NavItem className="navItem flow-text contactLink" href="/contact">
        Contact
      </NavItem>
    </Navbar>
  );
};

export default CustomNavbar;
