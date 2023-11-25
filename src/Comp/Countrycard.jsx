import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";

const Countrycard = ({ data }) => {
  let [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setShowInfo(false)

  },[data])
  return (
    <Card style={{ width: "18rem", marginBottom: "20px", border: "solid 2px black" }}>
      <Card.Img
        onClick={() => {
          setShowInfo(!showInfo);
        }}
        variant="top"
        src={data.flags.png}
      />
      {showInfo && (
        <Card.Body style={{borderTop: "solid 2px black"}}>
          <Card.Title>{data.name.common}</Card.Title>
          <Card.Text>Capital: {data.capital}</Card.Text>
          <Card.Text> Population: {data.population} humans</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default Countrycard;
