import axios from "axios";
import { cartActionCreator } from "../../redux/actions/cartActionCreator";
export const getProductsService = (setProducts) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (res) {
      setProducts(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const cartService = (product, setBtnText, dispatch) => {
  dispatch(cartActionCreator(product));
  // setBtnText("Remove From Cart");
};
