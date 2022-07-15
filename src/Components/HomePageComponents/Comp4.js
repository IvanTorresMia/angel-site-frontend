import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom'

const Comp4 = () => {
  return (
    <div className="comp4">
      <h2>OUR MISSION</h2>
      <div className="comp4-copy">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <span>angeltorres@gmail.com</span><br/><br/>
        <Link to="/contact"><Button>Contact Me</Button></Link>
      </div>
    </div>
  );
};

export default Comp4;
