import React from "react";
import * as css from "./Whyus.css";
import anytime from "../img/mobile_apps.jpg";
import analysis from "../img/an.png";
import secure from "../img/secure.png";
import WOW from "wow.js";
import "../../node_modules/animate.css";
import {useEffect} from "react";

const Whyus = () => {

    useEffect(()=>{
        new WOW().init();
      })

  return (
    <div>
      <div className="container">
        <section className="whyus">
          <p className="text-center chose-header animate__animated wow animate__fadeInUp" data-wow-delay="0.3s">Why Choose Us </p>
          <div className="row">
            <div className="col animate__animated wow animate__fadeInUp text-center" data-wow-delay="0.4s">
              <div className="whyus-card card-body h-90 flex-fill">
                <div className="icon">
                  <div className="logoPlaceholder">
                    <img className="img-fluid" src={anytime} alt="anytime" />
                  </div>
                  <h3>Anytime anywhere</h3>
                  <div className="details">
                    <p className="text-center">
                      We are always ready to solve your tech needs with the help
                      of digital robust technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col animate__animated wow animate__fadeInUp text-center" data-wow-delay="0.6s">
              <div className="whyus-card card-body h-90 flex-fill">
                <div className="icon">
                  <div className="logoPlaceholder">
                    <img className="img-fluid" src={analysis} alt="anytime" />
                  </div>
                  <h3>Transparent</h3>
                  <div className="details">
                    <p className="text-center">
                      We clearly specify and communicate fees and charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col animate__animated wow animate__fadeInUp text-center" data-wow-delay="0.8s">
              <div className="whyus-card card-body h-90 flex-fill">
                <div className="icon">
                  <div className="logoPlaceholder">
                    <img className="img-fluid" src={secure} alt="anytime" />
                  </div>
                  <h3>Secure and reliable</h3>
                  <div className="details">
                    <p className="text-center">
                    Our all platforms are end to end encrypted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Whyus;
