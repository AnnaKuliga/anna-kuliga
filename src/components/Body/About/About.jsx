import React from "react";
import "./About.css";

import anna from "../../../assets/img/anna_kul.jpg";

const About = () => {
  return (
    <div className="About full-height" id="about">
      <div className="personal">
        <div className="p-left">
          <span className="bg-base">
            <h3>About me</h3>
            <p className="text">
              My name is Anna. I come from a small village in the south-east of
              Poland. Currently, I live in Oslo, Norway. In 2020, I graduated
              from Maria Curie- Skłodowska University in Lublin. I have BA and
              MA in Applied Linguistics. I speak English fluently and also
              French. My true passion is photography and learning new languages.
            </p>
          </span>
          <span className="bg-base">
            <h3>Career</h3>
            <p className="career">
              Right after graduating the university, I set up my own company.
              Youniverse Language Academy is a language school based in
              podkarpackie region. Recently, I have found myself really into
              coding. I have been successfully graduating SheCodes online
              workshops. In my professional life I follow perfection. I always
              do my best in everything. I am not afraid of challenges. I am a
              fast learner and personally, I believe that time management skills
              are essential while pursuing my professional dreams and goals. I
              value and respect the work and experience of other people. That is
              why team work is important in my life. It does not only give me an
              opportunity to work with experienced people, but also I can share
              my knowledge with others.
            </p>
          </span>
        </div>
        <div className="p-right">
          <img src={anna} alt="Anna Kuliga" className="rounded-circle" />
        </div>
      </div>
    </div>
  );
};

export default About;
