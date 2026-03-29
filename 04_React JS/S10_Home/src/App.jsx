import "./App.css";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Profile from "./components/profile/Profile.jsx";
import Home from "./components/home/Home.jsx";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Profile />
      <Products />
    </div>
  );
}

export default App;
