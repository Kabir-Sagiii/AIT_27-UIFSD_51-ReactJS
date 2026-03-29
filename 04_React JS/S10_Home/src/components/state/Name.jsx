import { useState } from "react";

function Name() {
  var [state, setState] = useState("Kabir");

  const changeName = (name) => {
    setState(name);
  };

  return (
    <div>
      <h1>Developer Name : {state}</h1>
      <button
        onClick={() => {
          changeName("Krishna");
        }}
      >
        Modifys
      </button>
    </div>
  );
}

export default Name;
