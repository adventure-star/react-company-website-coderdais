import React from "react";
import countcss from "./ProjectCount.css";
import WOW from "wow.js";
import {useEffect} from "react";

const ProjectCount = () => {

    useEffect(()=>{
        new WOW().init();
      })

  return (
    <div>
      <div className="container con-count">
        <h3>Statistics</h3>
        <div className="row con-row animate__animated wow animate__lightSpeedInLeft" wow-data-delay="0.4s">
          <div className="col  con-col">
          <p>02</p>
          <p>Projects</p>
          </div>
          <div className="col  con-col">
          <p>05</p>
          <p>Case Studies</p>
          </div>
          <div className="col">
          <p>100</p>
          <p>Fan Created</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
