import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import "./contactStyle.css";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";


function Contact() {
        return (
        <Container className="container my-5 py-5">
            <div className="row center portfolioRow">
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
                        Let's Connect!
                    </motion.h1>
                </div>
            </div>
            <Row className="">
                <Col
                    className="right-align">
                    <motion.p
                        animate={{ x: 0, y: -5, opacity: 1 }}
                        initial={{ x: -1000, y: -5, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        >
                        <FaEnvelope size="3em" color="#E7C515"/>
                        {/* GitHub */}
                    </motion.p>
                </Col>
                <Col
                    className="">
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="contactFont flow-text">
                        <a target="_blank" href="ryan.hadfield@gmail.com">Email</a>
                    </motion.p>
                </Col>
            </Row>
            <Row>
                <Col
            
                    className="right-align">
                    <motion.p
                        animate={{ x: 0, y: -5, opacity: 1 }}
                        initial={{ x: -1000, y: -5, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}>
                        <FaGithub size="3em" color="#CE1C00"/>
                        {/* GitHub */}
                    </motion.p>

                </Col>
                <Col
                
                    className="">
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="contactFont flow-text">
                        <a target="_blank" href="https://github.com/ryanhadfield">Github</a>
                    </motion.p>
                </Col>
            </Row>
            <Row>
                <Col
                    s={1}
                    className="right-align">
                    <motion.p
                        animate={{ x: 0, y: -5, opacity: 1 }}
                        initial={{ x: -1000, y: -5, opacity: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}>
                        <FaLinkedin size="3em" color="081585"/>
                    </motion.p>
                </Col>
                <Col
                    s={11}
                    className="">
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 1000, opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                            stiffness: 75,
                        }}
                        className="contactFont flow-text">
                        <a target="_blank" href="https://www.linkedin.com/in/ryan-hadfield/">LinkedIn</a>
                    </motion.p>
                </Col>
            </Row>
        </Container>

    );
}

export default Contact;