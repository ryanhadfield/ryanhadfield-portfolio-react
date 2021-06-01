import React from "react";
// import "materialize-css";
import { Container } from "react-bootstrap";
import "./mainStyle.css";
// import { } from "framer-motion";

function Portfolio() {
  return (
    <Container className="container my-4">
      <h1 class="display-4 text-dark my-4">Portfolio</h1>
      <div class="row">
        <div class="col">
          <div class="content" style={{backgroundColor: "white"}}>
            <img
              src="Assets/coming.soon.jpg"
              class="content-img-center"
              alt="Coming Soon Logo"
              style={{width: "75%"}}
            />
            <div class="card-body">
              <h5 class="card-title">Coming Soon</h5>
              <p class="card-text">Small description of the project</p>
              <a href="#" class="btn btn-primary">
                Show Me
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content" style={{backgroundColor: "white"}}>
            <img
              src="Assets/coming.soon.jpg"
              class="content-img-top"
              alt="Coming Soon Logo"
              style={{width: "75%"}}
            />
            <div class="card-body">
              <h5 class="card-title">Coming Soon</h5>
              <p class="card-text">Small description of the project</p>
              <a href="#" class="btn btn-primary">
                Show Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col">
          <div class="content" style={{backgroundColor: "white"}}>
            <img
              src="Assets/coming.soon.jpg"
              class="content-img-top"
              alt="Coming Soon Logo"
              style={{width: "75%"}}
            />
            <div class="card-body">
              <h5 class="card-title">Coming Soon</h5>
              <p class="card-text">Small description of the project</p>
              <a href="#" class="btn btn-primary">
                Show Me
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content" style={{backgroundColor: "white"}}>
            <img
              src="Assets/coming.soon.jpg"
              class="content-img-top"
              alt="Coming Soon Logo"
              style={{width: "75%"}}
            />
            <div class="card-body">
              <h5 class="card-title">Coming Soon</h5>
              <p class="card-text">Small description of the project</p>
              <a href="#" class="btn btn-primary">
                Show Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
