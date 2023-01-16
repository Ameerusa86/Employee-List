import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Employees from "../Components/Employees";

const EmployeeCard = ({ name, cell, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Cell: {cell}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
