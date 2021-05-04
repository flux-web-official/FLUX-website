import React from 'react'
import Header from "./Header"
import "../App.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {Image} from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import webPageImg from "./images/webPageImg.jpeg";

const WebDevelopment = () => {
    return (
        <div id="webd-body">
            <Fade top>
            <Header/>
            </Fade>
            <Slide top>
            <h1 id="webd-h1">Web Development</h1>
            </Slide>
            <div id="web-page-img-div">
            <Fade delay={800} bottom >
            <Image id="web-img" src={webPageImg} alt="this is image" fluid/>
           </Fade>
           <Slide delay={1100} right>
           <h1 id="web-page-img-h1">Show Your Work</h1>
           </Slide>
            </div>
            
        </div>
    )
}

export default WebDevelopment
