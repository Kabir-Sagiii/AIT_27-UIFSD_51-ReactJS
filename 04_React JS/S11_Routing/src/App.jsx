import "./App.css";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Profile from "./components/profile/Profile.jsx";
import Home from "./components/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import DOM from "./components/use-ref/DOM.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/contactus"} element={<DOM />} />
      </Routes>
    </div>
  );
}

export default App;
