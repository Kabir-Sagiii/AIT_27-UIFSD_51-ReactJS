import LoginComponent from "../login/Login.jsx";
import Home from "../home/Home.jsx";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";
function Wrapper() {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <LoginComponent />}</div>;
}

export default Wrapper;
