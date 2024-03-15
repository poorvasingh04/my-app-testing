import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/component"}>
        <p>Bootstrap</p>
      </Link>
    </div>
  );
}

export default Home;
