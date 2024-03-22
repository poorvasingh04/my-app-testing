import React from "react";
import "./Components.css";
import CarouselT from "../bootstrap/carousel/CarouselT";
import { Col, Container, Row } from "react-bootstrap";

function Components() {
  return (
    <div className="p-10 w-full bg-red-500 justify-center align-middle">
      {/* <div className="ring-offset-2 ring-4 bg-clip-content border-4 border-violet-300 border-dashed p-6 bg-violet-50">
        <p className="font-mono text-slate-500 hover:text-blue-600">
          Hello World
        </p>
      </div>
      <button
        className=" text-blue-900 hover:text-black font-sans p-1 bg-indigo-500  hover:bg-white "
        onClick={() => console.log("button clicked")}
      >
        Save changes
      </button> */}
      <CarouselT />
      {/* <Container fluid>
        <Row>
          <Col>Col 1</Col>
          <Col>Col 2</Col>
          <Col>Col 3</Col>
          <Col>Col 4</Col>
          <Col>Col 5</Col>
        </Row>
        <Row>
          <Col>Row 1 </Col>
          <Col>Row 1 </Col>
          <Col>Row 1 </Col>
          <Col>Row 1 </Col>
          <Col>Row 1 </Col>
        </Row>
        <Row>
          <Col>Row 2 </Col>
          <Col>Row 2 </Col>
          <Col>Row 2 </Col>
          <Col>Row 2 </Col>
          <Col>Row 2 </Col>
        </Row>
        <Row>
          <Col>Row 3 </Col>
          <Col>Row 3 </Col>
          <Col>Row 3 </Col>
          <Col>Row 3 </Col>
          <Col>Row 3 </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Components;
