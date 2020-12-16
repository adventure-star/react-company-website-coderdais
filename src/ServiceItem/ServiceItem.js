import React from "react";
import "./ServiceItem.css";
import "../../node_modules/animate.css";
import { useState,useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import WOW from "wow.js";

const ServiceItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(()=>{
    new WOW().init();
  })



  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <div className="col">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="card animate__animated wow animate__flipInY ">
          <div className="circle">
            <h2 className="text-center">{props.tittle}</h2>
            </div>
            <br/><br/>
            <button className="btn btn-success" onClick={handleClick}>More Info</button>
          </div>
          <div className="card">
            
            <p>{props.des}</p>
            <button onClick={handleClick}>Back</button>
          </div>
        </ReactCardFlip>
      </div>
      <br/> <br/>
    </div>
  );
};

export default ServiceItem;
