var data = [
  { brand: "Apple", model: "Iphone 17", price: 90000, rating: 4.5 },
  { brand: "Apple", model: "Iphone 16", price: 70000, rating: 4.2 },
  { brand: "Samasung", model: "galaxy ultra 24", price: 120000, rating: 4.7 },
  { brand: "Vivo", model: "V29 pro", price: 50000, rating: 4.1 },
];

var filteredData = data.filter(function (element) {
  var result = element.rating <= 4.5;

  return result;
});

console.log(filteredData);
