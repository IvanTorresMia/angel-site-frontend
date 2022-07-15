import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom'

const Comp2 = () => {
  return (
    <div className="comp2">
      <h2>LET'S PLAN FOR THE FUTURE, BECOME THE BEST YOU</h2>

      <div className="comp2-text">
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
        <br/>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <br/>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <br/>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
        <Link to="/programs">Learn More About Our Programs</Link>
        <br/>
        <br/>
        <Link to="/about"><Button>About Me</Button></Link>
      </div>
    </div>
  );
};

export default Comp2;
