import React from "react";
import Header from "./Header";
import "../App.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Image, Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import SEOPageImg from "./images/SEOPageImg.jpeg";
import webdPageImg2 from "./images/webdPageImg2.jpg";
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
              <Image id="webdPageImg2" src={webdPageImg2} />
            </Col>
          </Row>
        </Container>
        <div id="para-div">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            incidunt iure rerum laboriosam, ipsam adipisci officiis, culpa,
            dolore atque aut ullam odit est laborum dignissimos accusamus?
            Veritatis, accusamus. Ullam, maxime?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia
            doloremque cum rerum quia dolorem quasi, debitis nemo ipsam pariatur
            incidunt exercitationem voluptatum soluta optio officiis obcaecati
            unde iure maxime!
          </p>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default SEO
