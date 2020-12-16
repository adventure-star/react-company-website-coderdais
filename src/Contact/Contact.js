import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import  "./Contact.css";
import "../../node_modules/animate.css";
import WOW from "wow.js";

const Contact = () => {
    const [data,setData] = useState({
        name : " ",
        phone: " ",
        email : " ",
        msg: " "

    })

    useEffect(()=>{
      new WOW().init();
    })
  

    // const inputData = (e) =>{
        
    //         return{
    //             ...data,
    //             [name] : value
    //         }
    // }

    const eventHandel = (e) =>{
        const {name,value} = e.target;
            setData((prev)=>{
                return{
                    ...prev,
                    [name] : value
                }    
            });
          
    }
  return (
    <div>
    <main className="form  animate__animated wow animate__fadeInRight">
      <div className="my-5">
        <h1 className="text-center"> Contact With US </h1>
      </div>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form>
            <div className="mb-3">
              <label  className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Phone
              </label>
              <input
                type="number"
                name = "phone"
                value = {data.phone}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.value}
                onChange= {eventHandel}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=" Email Address"
              />
            </div>

            <div class="mb-3">
              <label  className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                name = "msg"
                value = {data.value}
                onChange= {eventHandel}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">
              Submit 
            </button>
          </div>
        </div>
      </div>
      <br/> <br/> 
      <div className="container">
      <div className="row">
      <div className="col-12 col-md-3 col-lg-3 tag  animate__animated wow animate__bounceInUp" wow-data-delay="0.6s">
      <h6>Address</h6>
      <p>Khilkhet <br/>Dhaka-1229</p>
      </div>
      <div className="col-12 col-md-1 col-lg-1"></div>
      <br/>
      <div className="col-12 col-md-3 col-lg-3 tag  animate__animated wow animate__bounceInUp" wow-data-delay="0.8s">
      <h6>Phone</h6>
      <p>+8801736747981</p>
      </div>
      <div className="col-12 col-md-1 col-lg-1"></div>
      <br/>
      <div className="col-12 col-md-3 col-lg-3 tag  animate__animated wow animate__bounceInUp" wow-data-delay="0.10s">
      <h6>Email</h6>
      <p>info@coderdais.com</p>
      </div>
      
      </div>
      </div>
      </main>
      <br/> <br/> <br/>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
