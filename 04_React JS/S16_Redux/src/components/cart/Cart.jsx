import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCartActionCreator } from "../../redux/actions/cartActionCreator";
function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => {
    return store.cart;
  });

  const cartRemove = (id) => {
    dispatch(removeCartActionCreator(id));
  };

  return (
    <div className="cart-container">
      <table width="100%" rules="all">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody valign="center" align="center">
          {cartData.map((cart) => {
            return (
              <tr>
                <td>
                  <img src={cart.image} width={50} height={50} alt="" />
                </td>
                <td>{cart.title}</td>
                <td>{cart.price}</td>
                <td>
                  <button
                    onClick={() => {
                      cartRemove(cart.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
