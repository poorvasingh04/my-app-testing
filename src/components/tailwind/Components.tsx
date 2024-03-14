import React from "react";
import "./Components.css";

function Components() {
  return (
    <div>
      <p>Hello World</p>
      <button
        className="bg-indigo-500"
        onClick={() => console.log("button clicked")}
      >
        Save changes
      </button>
    </div>
  );
}

export default Components;
