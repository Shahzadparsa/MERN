import React from "react";

const Appheader = ({ title, course }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{course}</h2>
    </div>
  );
};

export default Appheader;
