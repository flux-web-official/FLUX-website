import React from "react";
import Header from "./Header";
import "../App.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Image, Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import webPageImg from "./images/webPageImg.jpeg";
import webdPageImg2 from "./images/webdPageImg2.jpg";
import ContactButton from "./ContactButton";
import Footer from "./Footer";

const WebDevelopment = () => {
  return (
    <div id="webd-body">
       
      <Fade top>
        <Header />
      </Fade>
      <Slide top>
        <h1 id="webd-h1">Web Development</h1>
      </Slide>
      <div id="web-page-img-div">
        <Fade delay={800} bottom>
          <Image id="web-img" src={webPageImg} alt="this is image" fluid />
        </Fade>
        <Slide delay={1100} right>
          <h1 id="web-page-img-h1">Giving Voice To Your Brand</h1>
        </Slide>
      </div>
      <div id="webd-page-section2">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image id="webdPageImg2" src={webdPageImg2} />
            </Col>
          </Row>
        </Container>
        <Fade left cascade>
        <div id="para-div">
          <p className="para">
            Our web development team looks beyond the visual effect of the
            website and takes other factors into consideration such as the
            user-friendliness of the website, ease of maintenance and adhering
            to the best practices and website development standards.
          </p>
          <p className="para">
            We also take into account the search engine friendliness and
            optimization of the website – and of course, we make sure that the
            website serves and meets its main objectives.
          </p>
        </div>
        </Fade>
      </div>
      <ContactButton />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
