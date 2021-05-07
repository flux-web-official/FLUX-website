import React from "react";
import Header from "./Header";
import "../App.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Image, Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import SEOPageImg from "./images/SEOPageImg.jpeg";
import SEOPageImg2 from "./images/SEOPageImg2.png";
import ContactButton from "./ContactButton";
import Footer from "./Footer";


const SEO = () => {
    return (
        <div id="webd-body">
       ̰
      <Fade top>
        <Header />
      </Fade>
      <Slide top>
        <h1 id="webd-h1">Search Engine Optimization</h1>
      </Slide>
      <div id="web-page-img-div">
        <Fade delay={800} bottom>
          <Image id="SEO-img" src={SEOPageImg} alt="this is image" fluid />
        </Fade>
        <Slide delay={1100} right>
          <h1 id="web-page-img-h1">Giving Voice To Your Brand</h1>
        </Slide>
      </div>
      <div id="webd-page-section2">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image id="SEOPageImg2" src={SEOPageImg2} />
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
    )
}

export default SEO
