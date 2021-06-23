import React from "react";
import "materialize-css";
import { } from "react-bootstrap";
import { } from "react-materialize";
import "./style.css";

const CustomFooter = (props) => {
  return (
    <div className="container footer">
      <footer
        className="valign-wrapper align-center"
      // copyrights="&copy; 2021 Ryan Hadfield"
      >
        <span className="center">&copy; 2021 Ryan Hadfield</span>
      </footer>
    </div>
  );
};

export default CustomFooter;
