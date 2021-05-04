import React from "react";
import { Badge } from "react-bootstrap";
import Flip from 'react-reveal/Flip';
// import AnimateStyled from "animate-styled"
// import styled from 'styled-components'
import '../App.js'
const Component2 = () => {
  return (
    <div >
      <h1 id='heading1'>
        Welcome To <Badge variant="secondary"></Badge>
      </h1>
      <Flip right cascade>
      <h1 id='heading2' >FLUX</h1>
        </Flip>
    
    </div>
  );
};

export default Component2;
