import React from "react";
// import "materialize-css";
import {Container} from "react-bootstrap";
import './mainStyle.css';
// import { } from "framer-motion";

function Main() {
  return (
    <div
      className="container clearfix m4 y4 main"
    >

      <img
        src="./../img/IMG_1945.jpg"
        id="mainImg"
        className="float-left m4 img-fluid"
        alt="Headshot of Ryan Hadfield"
      />
      <h2 className="display-3 text-white">About Me</h2>
      <p className="lead">
        Hi! I'm <b>Ryan Hadfield</b>, a native Marylander now living in the
        beautiful Wasatch Mtns of Utah. I'm currently a full-stack web
        development student at the University of Utah, whose passionate about
        the outdoors, travel, technology, and design. I feel most inspired when
        spending time in nature, whether in the mountains, desert, or ocean.
        When not behind my computer you can find me rock climbing, mtn biking,
        hiking, SUPing, skiing, camping, or out flying my drone.
      </p>
      <p className="lead">
        I've spent the last 20 years working in the outdoor sport, toy &
        collectible industries in product development, sales, and supply chain.
        I've worked with brands such as Black Diamond, Beal, Grivel, REI,
        Marvel, and Disney. I love designing, developing, and working with
        people to bring ideas to reality. As a full-stack web developer, I am
        able to utilize my years of experience and build not only physical
        products but digital products as well.
      </p>
    </div>
  );
}

export default Main;
