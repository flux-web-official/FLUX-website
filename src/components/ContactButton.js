import React from "react";
import { Button } from "react-bootstrap";

const ContactButton = () => {
  return (
    <div id="btn">
      <div className="mb-2">
        <Button variant="outline-light" size="lg">
          Contact Us
        </Button>{" "}
      </div>
    </div>
  );
};

export default ContactButton;
