import "./Header.css";
function Header() {
  return (
    <div id="header">
      <div>
        <h1>Dude's Mart</h1>
      </div>
      <div>
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">ContactUs</a>
      </div>
      <div>
        <i class="bi bi-heart-fill"></i>
        <i class="bi bi-cart-check-fill"></i>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header;
