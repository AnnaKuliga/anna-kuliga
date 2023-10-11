import React from "react";
import "./Contact.css";

//imported icons ---->
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="contact-info">
        <h2>Contact information</h2>
        <h6>
          If you like my projects and want to work together, you can call or
          send me an email.
        </h6>
        <h6 class="zone">CET Time Zone</h6>
        <div className="phone">
          <p>
            <a href="tel:+48 785 036 017" title="Poland">
              <BsTelephone />
              +48 785 036 017
            </a>
          </p>
          <p>
            <a href="tel:+47 925 35 197" title="Norway">
              <BsTelephone />
              +47 925 35 197
            </a>
          </p>
          <p>
            <a href="mailto:a.kuliga2@gmail.com" title="Email me">
              <HiOutlineMailOpen />
              <span className="email"> a.kuliga2@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
