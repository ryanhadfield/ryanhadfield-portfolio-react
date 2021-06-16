
import React from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import "materialize-css";
import { Card, Icon, MediaBox } from "react-materialize";
import { motion } from "framer-motion";

function ProjectCard(props) {
      return (
        <MediaBox
  id="MediaBox_7"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={props.image}
    width="450"
    className="responsive-img"
  />
</MediaBox>

    );
}

export default ProjectCard;