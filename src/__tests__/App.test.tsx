import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import App from "../App";

it("test 1", () => {
  process.env.PUBLIC_URL = "dev";
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
