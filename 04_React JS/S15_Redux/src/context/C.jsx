import { useContext } from "react";
import D from "./D";
import MyContext from "./context";
function C() {
  var data = useContext(MyContext);
  return (
    <div className="map">
      <h1>C Component : {data}</h1>
      <br />
      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
