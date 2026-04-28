import { useState } from "react";

function Map() {
  //   const [state, setState] = useState([10, 20, 30]);
  const [state, setState] = useState([
    <h3>i am h3</h3>,
    <p>i am para</p>,
    <div>i am div</div>,
  ]);

  const [data, setData] = useState(["ram", "krishna"]);
  return (
    <div className="map">
      <h1>Rendering the Data : {state}</h1>

      <ol>
        {data.map((element) => {
          return <li> {element} </li>;
        })}
      </ol>

      {/* !-- [<li>ramya</li>,<li>Pooja</li>,<li>dikshita</li>]  --! */}
    </div>
  );
}

export default Map;
