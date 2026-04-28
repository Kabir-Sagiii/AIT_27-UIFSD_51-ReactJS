import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <div id="header">
      <div>
        <h1>Dude's Mart</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/contactus">ContactUs</Link>
      </div>
      <div>
        <i class="bi bi-heart-fill"></i>
        <Link to="/cart">
          <i class="bi bi-cart-check-fill"></i>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
