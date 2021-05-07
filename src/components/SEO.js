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
          <h1 id="web-page-img-h1">Rising Is What We Do</h1>
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
              There’s some SEO in everything you do online. But that doesn’t
              mean everyone needs the same SEO services. Build your search
              engine optimization foundation with the trusted experts. We offer
              the right plans and strategies match your exact needs.
            </p>
            <p className="para">
              You can get an edge on the competition with a strong, integrated
              strategy that combines content marketing, research, technical SEO,
              social media, paid strategies, and other elements of online
              marketing.
            </p>
          </div>
        </Fade>
      </div>
      <ContactButton />
      <Footer />
    </div>
  );
};

export default SEO;
