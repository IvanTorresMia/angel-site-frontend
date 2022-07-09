import React from "react";
import comp2Data from "../../Utils/comp2-data";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const Comp3 = () => {
  return (
    <div className="comp3">
      <div className="comp3-copy">
        <h2>What We do</h2>
        <br/>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form.
        </p>
      </div>

      <div className="comp3-cards">
        {comp2Data.map((data, i) => (
          <Card
            style={{
              width: "30rem",
              textAlign: "center",
              margin: " 40px auto",
              boxShadow: "0 3px 3px rgba(0,0,0,0.2)",
            }}
          >
            <Card.Img
              style={{ height: "300px", width: "80%", margin: "20px auto" }}
              variant="top"
              src={data.img}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Comp3;
