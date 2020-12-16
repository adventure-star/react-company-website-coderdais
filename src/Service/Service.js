import React from "react";
import Sdata from "../Sdata/Sdata";
import ServiceItem from "../ServiceItem/ServiceItem";

const Service = () => {
  return (
    <div>
     <div className="my-5">
        <h1 className="text-center work"> Our Services </h1>
      </div>
      <div className="container-fluid work">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row row-cols-md-3 gy-4 mt-5">
                    {Sdata.map((value)=>{
                        return <ServiceItem
                           key={value.key}
                           img={value.imgSrc}
                           tittle={value.tittle}
                           des={value.description}
                          />  
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Service;
