import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import './mainStyle.css';
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="background">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          stiffness: 150,
        }}
        className="container main "
      >
        <motion.img
          animate={{ y: 10, opacity: 1 }}
          initial={{ y: -250, opacity: 0 }}
          transition={{
            delay: 1.5,
            duration: 2,
            type: "spring",
            stiffness: 150,
          }}
          src="./../img/profile-pic-square.jpg"
          id="mainImg"
          className="float-left m-3 circle z-depth-3"
          alt="Headshot of Ryan Hadfield"
        />
        <motion.h1 className="display-3 title"
          animate={{ x: 10 , opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            delay: 2.1,
            duration: 2,
            type: "spring",
            stiffness: 150,
          }}
        >Ryan Hadfield</motion.h1>
        <p className="flow-text mainText">
          Hi! I'm <b>Ryan</b>, a native Marylander now living in the
        beautiful Wasatch Mtns of Utah. I'm a full-stack web developer whose passionate about
        technology, the outdoors, travel, and design. I feel most inspired when
        spending time with people or in nature, whether in the mountains, desert, or ocean.
        When not behind a screen you can find me rock climbing, mtn biking,
        hiking, SUPing, skiing, or out flying my drone.
      </p>
        <p className="flow-text mainText">
          I've spent the last 20 years working in the outdoor sport & toy / collectible industries in product development, sales, marketing, and supply chain.
          I've worked with brands such as Black Diamond, Marvel, Disney, Grivel, and REI. I love designing, developing, and working with people to bring ideas to reality. As a full-stack web developer, I'm able to utilize my years of experience in business to not only physical products but digital products as well.
      </p>
      </motion.div>
    </div>
  );
}

export default Main;
