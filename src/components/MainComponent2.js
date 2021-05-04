import React from "react";
import { Card, Button, Image } from "react-bootstrap";
//import AnimateStyled from "animate-styled";
import webd1 from "./images/webd1.png";
import web from "./images/web.gif";
import portfolio from "./images/portfolio.gif";
import seo from "./images/seo.gif";
import "../App.css";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const MainComponent2 = () => {
  const changePage=()=>{
    console.log('hi')
  }
  return (
    <div className="maincomp-2">
      <Flip bottom>
      <h1 id="services">Our Services</h1>
        </Flip>
      <div id="card1">
      <Fade right>
        <Card style={{ width: "32rem", height: "34rem", borderRadius: "1rem" }} className="my-card">
          <Card.Img variant="top" src={web} />
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              A website means a lot to any business in this day and age. We can
              create a game-changing, optimized website. At FLUX, we offer the
              full range of services to our clients.
            </Card.Text>
            <Link to='/WebDevelopment'><Button variant="dark">Learn More!</Button></Link>
            
          </Card.Body>
        </Card>
        </Fade>
      </div>
      {/* <AnimateStyled name="fadeInLeft" iterationCount={1}> */}
      <Fade>
      <Image id="img2" src={webd1} alt="pic" fluid width={800} />
        </Fade>
      {/* </AnimateStyled> */}
      <div id="card2">
      <Fade left>
      <div className="card-hover">
          <Card style={{ width: "30rem", margin: "1rem", height: "37rem", borderRadius: "1rem", border: "0"}} >
            <Card.Img variant="top" src={portfolio} />
            <Card.Body>
              <Card.Title>Portfolio Design</Card.Title>
              <Card.Text>
                A portfolio website is an essential tool to getting more
                business and building your professional brand. In today’s
                digital world, a portfolio is arguably more important than a
                resume, no matter what industry you work in.
              </Card.Text>
              <Link to="/Portfolio"><Button variant="dark">Learn More!</Button></Link>
            </Card.Body>
          </Card>
        </div>
        </Fade>
        <Fade right>
        <div className="card-hover">
          <Card style={{ width: "30rem", margin: "1rem", height: "37rem", borderRadius: "1rem", border: "0"}}>
            <Card.Img variant="top" src={seo} height={355} />
            <Card.Body>
              <Card.Title>Search Engine Optimization</Card.Title>
              <Card.Text>
                The success of any online business relies on high and
                long-lasting ranking. Search engine optimization (SEO) is a set
                of methods and processes that help a website to attract visitors
                without paying any direct cost for using any media platform.
              </Card.Text>
              <Link to="/SEO"><Button variant="dark">Learn More!</Button></Link>
            </Card.Body>
          </Card>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainComponent2;
