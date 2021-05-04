import React from "react";
import {Image} from 'react-bootstrap'
import qualwork from "./images/qualwork.png";
import rupee from "./images/rupee.png";
import payment from "./images/payment.png";
import Fade from 'react-reveal/Fade';
const MainComponent3 = () => {
  return (
    <div style={{height:'25rem'}}>
      <h2 id="main-comp3-h2" style={{textAlign:'center', fontWeight: "bold"}}>Our Value Proposition</h2>
      <p id="main-comp3-p" style={{textAlign:'center'}}>
        Building your business to match the modern world competition and to
        <br/>
        deliver high quality work to our clients.
      </p>
      <div className="icons">
      <Fade left>
      <div id="icon1" className="icon">
          <Image src={qualwork} alt="pic" fluid />
          <p className="titles">Quality Work</p>
        </div>
        </Fade>
        <Fade>
        <div id="icon2" className="icon">
          <Image src={rupee} alt="pic" fluid />
          <p className="titles">Fixed Price</p>
        </div>
        </Fade>
        <Fade right>
        <div id="icon3" className="icon">
          <Image src={payment} alt="pic" fluid />
          <p className="titles">Easy Payment</p>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainComponent3;
