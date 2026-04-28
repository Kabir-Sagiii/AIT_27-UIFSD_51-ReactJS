import { lazy } from "react";
import LoginComponent from "../login/Login.jsx";
// import Home from "../home/Home.jsx"; : Eager loading
import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";

const Home = lazy(() => {
  return import("../home/Home.jsx");
}); //Lazy Loading

function Wrapper() {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <LoginComponent />}</div>;
}

export default Wrapper;
