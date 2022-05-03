import React from "react";
import "materialize-css";
import { Parallax, MediaBox } from "react-materialize";
import "./mainStyle.css";
import { motion } from "framer-motion";
import { FaNode, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaGithubSquare } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function Main() {
  return (
    <div className="background">
      <motion.div className="container main">
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

        <div className="row center">
          <div className="col nameRow z-depth-3">
            <h1>
              <motion.p
                className="display-3 myName"
                animate={{ x: 0, opacity: 1, scale: 1, color: "#081585" }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  delay: 2.1,
                  duration: 2,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                Ryan Hadfield
              </motion.p>
            </h1>
          </div>
        </div>
        <div className="row">
          <motion.div
            className="col"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -250, opacity: 0 }}
            transition={{
              delay: 1,
              duration: 2,
              type: "spring",
              stiffness: 150,
            }}
          >
            <h2 className="about">About</h2>
            <motion.div class="line"></motion.div>
          </motion.div>
        </div>
        <div className="row">
          <motion.div
            className="col"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 500, opacity: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              type: "spring",
              stiffness: 150,
            }}
          >
            <p className="flow-text mainText">
              Hi! I'm <b className="ryan">Ryan</b>, a native Marylander now
              living in the beautiful Wasatch Mtns of Utah. A Full Stack Web
              Developer with a background in sales, ecommerce, product management,
              marketing, and product development. Graduate of the University of
              Utah Coding Boot Camp with skills in HTML, CSS, JavaScript, and
              MERN stack. Excited about collaborating with others, learning new
              technologies, and building something innovative. I'm passionate
              about technology, the outdoors, travel, and design.
            </p>
            <p className="flow-text mainText">
              I've spent the last 20 years working in the outdoor sport & toy /
              collectible industries. I've worked with brands such as Black
              Diamond, Marvel, Disney, Grivel, and REI. As a full-stack web
              developer, I'm excited to combine my years of experience in
              business with a career in tech.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div className="container">
        <Parallax
          image={
            <img
              alt="slot canyon"
              src="https://images.unsplash.com/photo-1590598016917-7a2bf7d1d5e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
            />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>
      <div className="container skillsSection my-4">
        <div className="row ">
          <motion.div
            className="col"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -250, opacity: 0 }}
            transition={{
              delay: 1,
              duration: 2,
              type: "spring",
              stiffness: 150,
            }}
          >
            <h2 className="about">Resume & Technical Skills</h2>
            <motion.div class="line"></motion.div>
          </motion.div>
        </div>
        <div className="container align-center">
          <div className="row center resumeRow">
            <MediaBox
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
              className="z-depth-3 resume1"
            >
              <motion.img
                src="./../img/resumeImg.png"
                id="resume"
                className="m-3 z-depth-3"
                alt="resume"
                height="450"
              />
            </MediaBox>
            <MediaBox
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
              className="z-depth-3 resume2"
            >
              <motion.img
                src="./../img/resumeImg2.png"
                id="resume"
                className="m-3 z-depth-3 resume"
                alt="resume"
                height="450"
              />
            </MediaBox>
          </div>
          <div className="row">
            <div className="col download">
              <a
                href="./../img/RyanHadfield-DevResume.pdf"
                className="waves-effect btn-large downloadBtn z-depth-3"
                download
              >
                <i class="material-icons left">file_download</i>Download CV
              </a>
            </div>
          </div>
          <div className="row nameRow z-depth-3">
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="HTML5"><ReactTooltip /><FaHtml5 size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="CSS3"><FaCss3Alt size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="Javascript"><FaJs size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="Node.JS"><FaNode size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="GitHub"><FaGithubSquare size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="React.JS"><FaReact size="3em" color="#CE1C00" /></a>
            </motion.div>
            <motion.div
              className="col m-3 center"
              whileHover={{ scale: 1.5 }}>
              <a data-tip="MongoDB"><FaDatabase size="3em" color="#CE1C00" /></a>
            </motion.div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Main;
