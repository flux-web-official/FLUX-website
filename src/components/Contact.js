import React from "react";
import { Form } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Roll from 'react-reveal/Roll';
import "../App.css";
import contact1 from "./images/contact1.png";
import contact2 from "./images/contact2.png";
import Header from "./Header";
const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c-body">
      <Fade top>
        <Header />
      </Fade>
      <Fade duration={2500}>
        <img
          id="contact-img1"
          src={contact1}
          alt="Contact Us"
          height={350}
          width={350}
          className="img-fluid"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      </Fade>
      
      <div className="contact-image">
      <Roll left><img id="rocket" src={contact2} alt="rocket_contact" /> </Roll>
        </div>
      <Fade bottom>
      <div className="container contact-form">
        <Form>
          <h3 id="contact-txt">Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  id="name"
                  className="form-control"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btn btn-dark"
                onSubmit={(e) => submitForm(e)}
              ></input>
            </div>
          </div>
        </Form>
      </div>
      </Fade>
    </div>
  );
};

export default Contact;
