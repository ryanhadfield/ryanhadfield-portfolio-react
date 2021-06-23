
import React from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import "materialize-css";
import { Card, Icon, MediaBox, Image } from "react-materialize";
import { motion } from "framer-motion";

function ProjectCard(props) {
      return (
  <img
    alt=""
    src={props.image}
    className="responsive-img"
  />
    );
}

export default ProjectCard;