import React from "react";
import "./Commom.css";
import { NavLink } from "react-router-dom";
import "../../node_modules/animate.css";
import Typical from 'react-typical';

const Common = (props) => {
  return (
    <section id="header" className="d-flex content-justify-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
          
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex content-justify-center flex-column">
                <h6 className="first_name" >
                  We help to {''}
                  <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'create website for you',
                    1000,
                    'promote your business',
                    1000,
                    'secure your IT products',
                    1000,
                    'achieve your dream',
                    1000

                  ]}
                  ></Typical>
                </h6>
                <h1 className="animate__animated animate__backInRight last-name">{props.last_name}</h1>
                <br/>
                <h3 className="work">{props.work}</h3>
                <br/>
                <div>
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                {<img className="home-img" src={props.img} alt="home-img"/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
