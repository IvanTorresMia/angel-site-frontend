import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="layer">
        <div className="empty"></div>
        <div className="header-copy">
          <h5>This is where you life changes</h5>
          <h1>Personal Training with Angel Torres</h1>
          <h2>Let me help you reach your fitness goals</h2>
          <Link to="/programs">
            {" "}
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
