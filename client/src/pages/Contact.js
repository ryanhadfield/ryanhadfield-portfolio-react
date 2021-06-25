import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import "./contactStyle.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


function Contact() {
    return (
        <Container className="container my-5 py-5">
            <div className="row center-align portfolioRow">
        <div className="col">
          <motion.h1
            className="display-4 text-dark my-5 portfolio"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -250, opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              type: "spring",
              stiffness: 150,
            }}
          >
            Contact
          </motion.h1>
        </div>
      </div>
            <Row>
                <Col
                s={1}>
                    <motion.i
                        animate={{ x: 0, y: -10, opacity: 1 }}
                        initial={{ x: -1000, y: -10, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="medium material-icons right valign-wrapper">
                        email
                </motion.i>
                </Col>
                <Col
                s={11}>
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="left flow-text">
                        <a target="_blank" href="Ryan.Hadfield@gmail.com">Ryan.Hadfield@gmail.com</a>
                </motion.p>
                </Col>
            </Row>
            <Row>
                <Col
                s={1}>
        
                    <motion.p
                        animate={{ x: 0, y: -5, opacity: 1 }}
                        initial={{ x: -1000, y: -5, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className=" right valign-wrapper">
                            <FaGithub />
                        GitHub
                </motion.p>
            
                </Col>
                <Col
                s={11}>
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="left">
                        <a target="_blank" href="https://github.com/ryanhadfield">https://github.com/ryanhadfield</a>
                </motion.p>
                </Col>
            </Row>
            <Row>
                <Col
                s={1}>
        
                    <motion.p
                        animate={{ x: 0, y: -5, opacity: 1 }}
                        initial={{ x: -1000, y: -5, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className=" right valign-wrapper">
                        LinkedIn
                </motion.p>
            
                </Col>
                <Col
                s={11}>
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="left">
                        <a target="_blank" href="https://www.linkedin.com/in/ryan-hadfield/">https://www.linkedin.com/in/ryan-hadfield/</a>
                </motion.p>
                </Col>
            </Row>
        </Container>

    );
}

export default Contact;