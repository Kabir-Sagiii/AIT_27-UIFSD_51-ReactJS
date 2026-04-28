import { useRef, useState } from "react";
import B from "./B";
import MyContext from "./context";
function A() {
  const [state, setState] = useState();
  const inputRef = useRef();

  const getInputData = () => {
    setState(inputRef.current.value);
  };

  return (
    <div className="map">
      <h1>A Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={getInputData}>Submit</button>
      <br />
      <br />
      <hr />
      <br />

      <MyContext value={state}>
        <B />
      </MyContext>
    </div>
  );
}

export default A;
