var data = [10, 20, 30, 40, 50];

var element = data[3];
console.log(element);

var element = data[1];
console.log(element);

var [a, b, c, d, e] = data;

console.log(d, b);

function f1() {
  var x = 10;

  function inner() {
    console.log("inner function is called");
  }

  return [x, inner];
}

// var data = f1();
// var [info,fnInner] = data

var [info, fnInner] = f1();

// console.log(data,data[0]);

// data[1]();

fnInner();
console.log(info);
