var data = [10, 20, 30, 40, 50];

// [40,50] or [10,20] or [20,30,40]

var filteredData = data.filter(function (element, index) {
  var status = element > 30;

  return status;
});

console.log(filteredData);
