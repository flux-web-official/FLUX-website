import React from "react";
import Header from "./Header";
import "../App.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Image, Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import pfPageImg from "./images/pfPageImg.jpg";
import pfPageImg2 from "./images/pfPageImg2.png";
import ContactButton from "./ContactButton";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div id="pf-body">
       ̰
      <Fade top>
        <Header />
      </Fade>
      <Slide top>
        <h1 id="webd-h1">Portfolio Design</h1>
      </Slide>
      <div id="web-page-img-div">
        <Fade delay={800} bottom>
          <Image id="pf-img" src={pfPageImg} alt="this is image" fluid />
        </Fade>
        <Slide delay={1100} right>
          <h1 id="pf-page-img-h1">Show Your Expertise</h1>
        </Slide>
      </div>
      <div id="webd-page-section2">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image id="webdPageImg2" src={pfPageImg2} />
            </Col>
          </Row>
        </Container>
        <Fade left cascade>
        <div id="para-div">
          <p className="para">
            Online portfolios are all about appearances. That's why FLUX creates
            designer portfolios that make an impact. Plus easy slide shows, lots
            of storage, and a media library right at your fingertips.
          </p>
          <p className="para">
            If you're a photographer, artist, designer, model, or creative,
            putting your work online is the best way to reach a larger audience.
            And we are here to help you with that.
          </p>
        </div>
        </Fade>
      </div>
      <ContactButton />
      <Footer />
    </div>
  );
};

export default Portfolio;
