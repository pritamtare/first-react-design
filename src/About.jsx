import React from "react";
import contact from "../src/Image/about.png";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = (props) => {
  return (
    <>
      <Common NAME="About " IMG={contact} VISIT="/contact" BTN="Contact Now" />
    </>
  );
};
export default About;
