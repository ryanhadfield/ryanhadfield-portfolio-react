import React from "react";
import "materialize-css";
import "./portfolioStyle.css";
import { motion } from "framer-motion";
import projects from "./projects.json";
import ProjectCard from "./../components/ProjectCard/index.js";

function Portfolio() {
  return (
    <div className="container my-5 py-5">
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
            Portfolio
          </motion.h1>
        </div>
      </div>

      {/* Swapify */}
      <div className="row swapifyRow valign-wrapper">
        <div className="col center s12">
          <motion.div
            initial={{ scale: 0, x: -1000 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1,
            }}
            className="z-depth-4 hoverable"
          >
            <ProjectCard
              className="projectCard projectImg"
              image={projects[0].image}
            ></ProjectCard>
          </motion.div>
        </div>
        <div className="col center s12">
        <motion.div
          initial={{ scale: 0, x: 1000 }}
          animate={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1,
          }}>
          <motion.img
            alt="swapify"
            src="./../img/swapifyLogoTopDark-vector2.png"
            width="150"
            className="responsive-img"
          />
          <motion.p className="flow-text">
            Swapify is a React App that allows users to list, connect, and swap
            items with other nearby users in an easy to use and intuitive web
            application.

          </motion.p>
          <a
            className="waves-effect wave-dark btn swapifyBtn"
            href="https://swapify-us.herokuapp.com/"
            target="_blank"
          >
            <i className="material-icons left">language</i>Swapify
          </a>
          <a
            className="waves-effect wave-dark btn githubBtn"
            href="https://github.com/ryanhadfield/SWAPIFY"
            target="_blank"
          >
            GitHub
          </a>
        </motion.div>
        </div>
      </div>

      {/* N-DEVR */}
      <div className="row ndevrRow">
        <motion.div
          className="col s12 m12 l6 center "
          initial={{ scale: 0, x: -1000 }}
          animate={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.75,
          }}
        >
          <img
            alt="ndevr"
            src="./../img/ndevr-black.png"
            width="125"
            className="responsive-img"
          />
          <p className="flow-text">
            N-DEVR aims to help adventure seekers plan out their outdoor
            activities & endeavors. Our team's mission is to easily allow our
            active outdoor community to plan, organize, and include friends in
            outdoor pursuits and goals.
          </p>
          <a
            className="waves-effect wave-dark btn ndevrBtn"
            href="https://ndevr.herokuapp.com/"
            target="_blank"
          >
            <i className="material-icons left">language</i>N-DEVR
          </a>
          <a
            className="waves-effect wave-dark btn githubBtn"
            href="https://github.com/ryanhadfield/N-DEVR"
            target="_blank"
          >
            GitHub
          </a>
        </motion.div>
        <div className="col s12 m12 l6 center valign-wrapper">
          <motion.div
            initial={{ scale: 0, x: 1000 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.75,
            }}
            className="z-depth-4"
          >
            <ProjectCard
              className="projectCard projectImg"
              image={projects[1].image}
            ></ProjectCard>
          </motion.div>
        </div>
      </div>

      {/* Best Snow */}
      <div className="row bestSnowRow valign-wrapper">
        <div className="col s12 m12 l6">
          <motion.div
            initial={{ scale: 0, x: -1000 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 2.5,
            }}
            className="z-depth-4"
          >
            <ProjectCard
              className="projectCard projectImg"
              image={projects[2].image}
            ></ProjectCard>
          </motion.div>
        </div>
        <motion.div
          className="col s12 m12 l6 center"
          initial={{ scale: 0, x: 1000 }}
          animate={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 2.5,
          }}
        >
          <img
            alt="bestsnow"
            src="./../img/BestSnowLogo.png"
            width="75"
            className="responsive-img"
          />
          <p className="flow-text">
            With Best Snow you have the ability to see, at a glance, the
            snowpack levels in the western United States. You’ll be able to decide
            if your want to hit your local mtns or venture out to other ranges
            in the US.
          </p>
          <a
            className="waves-effect wave-dark btn bestSnowBtn"
            href="https://ryanhadfield.github.io/Best-Snow/"
            target="_blank"
          >
            <i className="material-icons left">language</i>Best Snow
          </a>
          <a
            className="waves-effect wave-dark btn githubBtn"
            href="https://github.com/ryanhadfield/Best-Snow"
            target="_blank"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
