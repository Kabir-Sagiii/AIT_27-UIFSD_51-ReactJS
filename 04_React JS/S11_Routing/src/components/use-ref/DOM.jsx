import { useRef } from "react";

function DOM() {
  var h1Ref = useRef(null); // h1Ref= {current: null}
  var inputRef = useRef(null);

  const modify = () => {
    var inputDomElement = inputRef.current;
    var h1DomElement = h1Ref.current;

    h1DomElement.style.color = "Red";
    h1DomElement.innerText = inputDomElement.value;
  };

  return (
    <div className="map">
      <h1 ref={h1Ref}>useRef concept</h1>
      <br />
      <input ref={inputRef} placeholder="enter some text" />
      <br />
      <br />
      <button onClick={modify}>Click Me</button>
    </div>
  );
}

export default DOM;
