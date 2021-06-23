import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import './mainStyle.css';
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="background">
      <motion.div
        className="container main "
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          stiffness: 150,
        }}
      >
        <div className="row">
          <div className="col center">
            <motion.img
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -250, opacity: 0 }}
              transition={{
                delay: 1.5,
                duration: 2,
                type: "spring",
                stiffness: 150,
              }}
              src="./../img/profile-pic-square.jpg"
              id="mainImg"
              className="m-3 circle z-depth-3"
              alt="Headshot of Ryan Hadfield"
            />
          </div>
        </div>
        <h1>
          <motion.p className="display-3 myName center"
            animate={{ x: 10, opacity: 1, scale: 1, color: "#081585" }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              delay: 2.1,
              duration: 2,
              type: "spring",
              stiffness: 150,
            }}
          >Ryan Hadfield</motion.p>
          {/* <motion.span className="display-3 myName"
          animate={{ x: 10 , opacity: 1, scale: 1, color: "#081585" }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            delay: 2.1,
            duration: 2,
            type: "spring",
            stiffness: 150,
          }}
        >Ryan Hadfield</motion.span> */}
        </h1>
        <p className="flow-text mainText">
          Hi! I'm <b>Ryan</b>, a native Marylander now living in the
        beautiful Wasatch Mtns of Utah.  A Full Stack Web Developer with a background in sales, project management, marketing, and product development. Graduate of the University of Utah Coding Boot Camp with skills in HTML, CSS, JavaScript, and MERN stack. Excited about collaborating with others, learning new technologies, and building something innovative. I'm passionate about technology, the outdoors, travel, and design.
      </p>
        <p className="flow-text mainText">
          I've spent the last 20 years working in the outdoor sport & toy / collectible industries.
          I've worked with brands such as Black Diamond, Marvel, Disney, Grivel, and REI.  As a full-stack web developer, I'm excited to combine my years of experience in business with a career in tech.
      </p>
      </motion.div>
    </div>
  );
}

export default Main;
