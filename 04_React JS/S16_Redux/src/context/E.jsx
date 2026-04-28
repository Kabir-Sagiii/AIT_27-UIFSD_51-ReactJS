import { useContext } from "react";
import MyContext from "./context";

function E() {
  const data = useContext(MyContext);
  return (
    <div className="map">
      <h1>E Component</h1>
      <h3>A Data : {data}</h3>
    </div>
  );
}

export default E;
