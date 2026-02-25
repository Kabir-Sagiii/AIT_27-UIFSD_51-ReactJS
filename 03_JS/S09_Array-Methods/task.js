var data = [10, 20, 30, 40, 50];

var newArray = [];

data.forEach(function (element, index) {
  var result = element * 100;
  newArray.push(result);
});

console.log(newArray);

// [1000,2000,3000,4000,5000]
