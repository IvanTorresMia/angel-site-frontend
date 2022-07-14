import React from "react";
import angeImage from "../../assets/angel-prime.jpg";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-content">
        <div className="aboutme-image">
          <img src={angeImage} alt="angel torres" />
        </div>
        <div className="aboutme-copy">
          <h2>ANGEL TORRES</h2>
          <br/>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words
          </p>
          <br/>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <br/>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
