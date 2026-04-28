import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import AuthContext from "./context/AuthContext.js";

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
        <Wrapper />
      </AuthContext>
    </div>
  );
}

export default App;
