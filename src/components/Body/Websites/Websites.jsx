import React from "react";
import "./Websites.css";

const Websites = () => {
  return (
    <div className="Websites full-height" id="websites">
      <div className="website-project">
        <h3>Let the local companies shine</h3>
        <p>
          This project is meant for mostly local, small companies which lack
          online websites. Every small company or a freelancer can sign for the
          project. It is about creating a fully responsive website. There are no
          limits. Every company or every person who is working actively can sign
          in.{" "}
        </p>
        <div className="benefit-list">
          <h4 className="stroke-text">What you'll get:</h4>
          <ul>
            <li className="benefit-item">amazing design of the page</li>
            <li className="benefit-item">fully responsive website </li>
            <li className="benefit-item">hosting is also included</li>
            <li className="benefit-item">satisfaction and more clients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Websites;
