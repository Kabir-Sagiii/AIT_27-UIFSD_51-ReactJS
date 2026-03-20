import axios from "axios";

export const getProductsService = (setProducts) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (res) {
      console.log(res.data);
      setProducts(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
