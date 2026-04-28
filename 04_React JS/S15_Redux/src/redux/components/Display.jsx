import React from "react";
import { useSelector } from "react-redux";
function Display() {
  const data = useSelector((store) => {
    return store;
  });
  return (
    <div className="map">
      <h1>Display Component</h1>
      <br />
      <h3>Name : {data}</h3>
    </div>
  );
}

export default Display;
