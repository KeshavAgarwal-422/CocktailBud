import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Cocktail({ id, image, info, glass, name }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{ text: 5 }}>{name}</Card.Title>
        <Card.Text>{glass}</Card.Text>

        <Card.Text>{info}</Card.Text>
        <Button variant="success">
          <Link to={`/cocktail/${id}`} style={{ color: "white" }}>
            Details
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cocktail;
