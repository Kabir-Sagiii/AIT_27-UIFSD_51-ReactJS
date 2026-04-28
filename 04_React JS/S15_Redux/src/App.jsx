import "./App.css";
import { useState, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
// import Profile from "./components/profile/Profile.jsx";
import Products from "./components/products/Products.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import AuthContext from "./context/AuthContext.js";
import Counter from "./components/use-reducer/Counter.jsx";
import Name from "./redux/components/Name.jsx";
import Display from "./redux/components/Display.jsx";

const Profile = lazy(() => {
  return import("./components/profile/Profile.jsx");
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <AuthContext value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Header /> : null}
        <Routes>
          <Route path={"/"} element={<Wrapper />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/products"} element={<Products />} />
          <Route
            path={"/contactus"}
            element={
              <div>
                <Name />
                <hr />
                <Display />
              </div>
            }
          />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
