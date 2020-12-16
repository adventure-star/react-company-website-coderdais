import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer font">
      <div className="container-fluid" style={{backgroundColor:' #212529'}}>
        <div className="row">
           <div className="col-6">
           <p className="text-center" style={{color:'white'}}> <b>Copyright &copy; Coderdais Limited</b> </p>
           </div>
           <div className="col-6" >
           <p className="text-center"><b  style={{color:'white'}}>Connect with us</b> <br/><a href="/"><i class="fab fa-facebook-square"></i></a> <a href="/"><i class="fab fa-linkedin"></i></a> <a href="/"><i class="fab fa-twitter-square"></i></a></p>
           
           </div>
        
        </div>
     </div>
    </div>
  );
};

export default Footer;
