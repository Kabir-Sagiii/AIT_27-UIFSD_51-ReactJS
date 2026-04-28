import { useRef } from "react";
import myStore from "../store/Store";
function Name() {
  const inputRef = useRef();
  const sendData = () => {
    myStore.dispatch({ type: "name", payload: inputRef.current.value });
  };
  return (
    <div className="map">
      <h1>Name Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={sendData}>Submit</button>
    </div>
  );
}

export default Name;
