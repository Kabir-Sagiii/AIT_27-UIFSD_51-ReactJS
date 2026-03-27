import axios from "axios";

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
