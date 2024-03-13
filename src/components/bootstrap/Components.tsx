import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Components.css";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

function Components() {
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [toast, setToast] = useState(false);

  const buttonClicked = () => {
    setClickCount(clickCount + 1);
    setMessage("Bootstrap button is clicked " + (clickCount + 1) + " times!");
  };

  const showToast = () => {
    setToast(!toast);
  };

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <p>{message}</p>
        <Button onClick={buttonClicked}> Button </Button>
        <Button onClick={showToast}> Toast </Button>
        {toast && (
          <Toast show={toast} onClose={showToast} autohide>
            <Toast.Header>
              <strong className="mr-auto">Its a Toast Header</strong>
            </Toast.Header>
            <Toast.Body>
              <span role="img" aria-label="tada">
                🎉 This is toast body
              </span>
            </Toast.Body>
          </Toast>
        )}
      </Container>
    </Container>
  );
}

export default Components;
