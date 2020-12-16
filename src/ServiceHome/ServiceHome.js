import React from "react";
import serviceCss from "./ServiceHome.css";
import webdd from "../img/web2.jpg";
import app from "../img/app2.png";
import seo from "../img/seo 2.png";
import WOW from "wow.js";
import {useEffect} from "react";

const ServiceHome = () => {

    useEffect(()=>{
        new WOW().init();
      })

  return (
    <div>
      <section className="container">
        <h3 className="service-header">Our Services</h3>
        <p className="sDetails">
          We provide high performance services and mind blowing experience for
          both customers and businesses through technology and innovation.
        </p>
        <div className="row">
          <div className="col animate__animated wow animate__fadeInTopLeft      text-center header" data-wow-delay="0.4s">
            <div className="service-card">
              <div className="service-holder">
                <img className="img1" src={webdd} alt="web" />
              </div>
              <h4>Web design & development</h4>
            </div>
          </div>

          <div className="col animate__animated wow animate__fadeInTopLeft      text-center header" data-wow-delay="0.6s">
            <div className="service-card">
              <div className="service-holder">
                <img className="img2" src={app} alt="web" />
              </div>
              <h4>Mobile App Development</h4>
            </div>
          </div>
          <div className="col animate__animated wow animate__fadeInTopLeft      text-center header" data-wow-delay="0.8s">
            <div className="service-card">
              <div className="service-holder">
                <img className="img3" src={seo} alt="web" />
              </div>
              <h4>Search engine optimization</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHome;
