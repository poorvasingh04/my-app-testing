import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Components.css";

function Components() {
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const buttonClicked = () => {
    setClickCount(clickCount + 1);
    setMessage("Bootstrap button is clicked " + (clickCount + 1) + " times!");
  };

  return (
    <div>
      <p>{message}</p>
      <Button onClick={buttonClicked}> Button </Button>
    </div>
  );
}

export default Components;
