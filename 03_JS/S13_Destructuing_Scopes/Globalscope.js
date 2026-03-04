//This is Global scope
var x = 100;
function f1() {
  //This is not global scope
  console.log(x);

  function fn() {
    console.log("fn is called");
  }
}

//this is global scope

function f2() {
  //This is not global scope
  console.log(x);
}
//this is global scope
console.log(x);
f1();
f2();
