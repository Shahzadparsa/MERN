import React from "react";
const handleClick = (e) => {
  console.log("Hello NINJA", e);
};

const handleClickAgain = (name, e) => {
  console.log("HEllo " + name, e.target);
};

const Home = () => {
  return (
    <div className="home">
      <h1>HomePage</h1>
      <button onClick={handleClick}>Click HOME</button>
      <button onClick={(e) => handleClickAgain("MAMA", e)}>
        Click HOME Again
      </button>
    </div>
  );
};

export default Home;
