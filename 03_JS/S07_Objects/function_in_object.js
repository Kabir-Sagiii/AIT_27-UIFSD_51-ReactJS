var product = {
  productName: "Iphone 17",
  price: 98700,
  rating: 4.5,
  display: function () {
    console.log("function is called");
  },
  changePrice: function (newPrice) {
    return newPrice;
  },
};

product.display();

product.price = product.changePrice(90000);

console.log(product);
