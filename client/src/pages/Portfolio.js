import React from "react";
import "materialize-css";
import { Container, Col, Card, Row, Icon, CardTitle } from "react-materialize";
import "./portfolioStyle.css";
import { motion } from "framer-motion";
import projects from "./projects.json";
import ProjectCard from "./../components/ProjectCard/index.js";

function Portfolio() {
  return (
    <Container className="container my-5 py-5">
      <motion.h1 className="display-4 text-dark my-5 center portfolio"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -250, opacity: 0 }}
      transition={{
        delay: 1,
        duration: 2,
        type: "spring",
        stiffness: 150,
      }}
      >Portfolio</motion.h1>
      <Row className="row">
        <Col
         m={6}
         s={12}
        >
          <ProjectCard
          name={projects[0].name}
          image={projects[0].image}
          info={projects[0].info}
          website={projects[0].info}
          github={projects[0].info}
          />
        </Col>
        <Col
          m={6}
          s={12}
        >
          <ProjectCard
           name={projects[1].name}
           image={projects[1].image}
           info={projects[1].info}
           website={projects[1].info}
           github={projects[1].info}
          />
        </Col>
      </Row>
      <Row className="row my-4">
        <Col
          m={6}
          s={12}
        >
          <ProjectCard
           name={projects[2].name}
           image={projects[2].image}
           info={projects[2].info}
           website={projects[2].info}
           github={projects[2].info}
          />
        </Col>
        <Col
          m={6}
          s={12}
        >
          <ProjectCard
           name={projects[3].name}
           image={projects[3].image}
           info={projects[3].info}
           website={projects[3].info}
           github={projects[3].info}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
