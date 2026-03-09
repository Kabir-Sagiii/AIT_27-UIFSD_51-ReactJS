function outer() {
  var x = 100;
  function inner() {
    console.log(x);
  }

  return inner;
}

var innerFn = outer();
innerFn();
