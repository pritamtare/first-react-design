import React from "react";
import MyaData from "./CardData";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className=" container ">
        <h1 className="text-center my-5">Our Services</h1>
        <div
          className="d-flex flex-wrap justify-content-around"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {MyaData.map((value, index) => {
            return (
              <Card
                key={index}
                IMG={value.IMG}
                TITLE={value.TITLE}
                DESC={value.DESC}
                LINK={value.LINK}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Services;
