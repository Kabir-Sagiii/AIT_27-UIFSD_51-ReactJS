import { useReducer } from "react";

function myReducer(state, action) {
  var newState;
  if (action.type === "inc") {
    newState = state + 1;
  } else if (action.type === "dec") {
    newState = state - 1;
  }

  return newState;
}

function Counter() {
  const [state, disptach] = useReducer(myReducer, 0);
  return (
    <div>
      <h1>Counter Value is : {state} </h1>
      <button
        onClick={() => {
          disptach({
            type: "inc",
          });
        }}
      >
        inc Count
      </button>
      <button
        onClick={() => {
          disptach({
            type: "dec",
          });
        }}
      >
        dec Count
      </button>
    </div>
  );
}

export default Counter;
