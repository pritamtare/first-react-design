import React from "react";
import prod1 from "../src/Image/mainImg.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = (props) => {
  return (
    <>
      <Common
        NAME="Develop with "
        IMG={prod1}
        VISIT="/services"
        BTN="Get Started"
      />
    </>
  );
};
export default Home;
