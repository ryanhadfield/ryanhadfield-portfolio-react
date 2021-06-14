
import React from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import "materialize-css";
import { Card, Icon, CardTitle } from "react-materialize";

function ProjectCard(props) {
      return (
        <Card
            className="hoverable"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={props.image} reveal waves="light" />}
            reveal={<p>{props.info}</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={props.name}
        >
            <p>
        <a target="_blank" href={props.website} >
          Website
        </a>
      </p>  
      <p>
        <a target="_blank" href={props.github} >
          GitHub
        </a>
      </p>      
        </Card>

    );
}

export default ProjectCard;