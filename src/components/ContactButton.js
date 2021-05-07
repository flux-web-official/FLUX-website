import React from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"; 

const ContactButton = () => {
  return (
    <div id="btn">
      <div className="mb-2">
      <Link to="/Contact" >
        <Button variant="outline-light" size="lg">
          Contact Us
        </Button>{" "}
      </Link >
      </div>
    </div>
  );
};

export default ContactButton;
