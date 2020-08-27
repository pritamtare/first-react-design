import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img className="cardImg" src={props.IMG} alt="imges" />
        <div className="cardBody">
          <h3>{props.TITLE}</h3>
          <p>{props.DESC}</p>
          <a href={props.LINK}>
            <button className="cardBtn">See More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
