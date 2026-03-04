function f1() {
  var username = "raj";

  if (true) {
    let pin = 123;
    const city = "Mumbai";
    // city = "pune"; // Invalid
    pin = 789;
    console.log(city, pin);
  }
  //   console.log(city); Invalid
}

function f2() {
  //   console.log(city); Invalid
}

f1();
f2();
