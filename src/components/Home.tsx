import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/bootstrap"}>
        <p>Bootstrap</p>
      </Link>
      <Link to={"/tailwind"}>
        <p>Tailwind</p>
      </Link>
    </div>
  );
}

export default Home;
