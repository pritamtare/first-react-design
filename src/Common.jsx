import React from "react";
// import prod1 from "../src/Image/mainImg.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="Home-main row d-flex align-items-center "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className=" main-text col-sm-12 col-lg-6  p-5 my-5 ">
            <h3 className="py-3" style={{ color: "grey" }}>
              Welcome...
            </h3>
            <h1>
              {props.NAME}
              <strong className="text-primary">Pritam Tare</strong>
            </h1>
            <p className="py-3" style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium harum voluptates modi animi sapiente unde quasi nam
              soluta odit aspernatur!
            </p>
            <NavLink
              className=" GetStartedBtn btn btn-outline-primary"
              // style={{ borderRadius: "0px" }}
              to={props.VISIT}
            >
              {props.BTN}
            </NavLink>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="center main-img col-sm-12 col-lg-6"
          >
            <img className="center" src={props.IMG} alt="HomeImage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;
