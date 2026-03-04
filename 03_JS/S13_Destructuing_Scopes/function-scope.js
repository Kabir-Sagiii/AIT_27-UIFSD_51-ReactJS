function f1() {
  var y = 999;

  function inner() {
    console.log("inner function is called");
  }
  //This is function scope
  inner();
}

console.log(y);
// inner()  : Invalid

function f2() {
  console.log(y);
  //This is Function scope

  // inner()  : Invalid
}

// inner()  : Invalid
