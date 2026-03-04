function f1() {
  let password = 123;
  //This is function block scope

  if (true) {
    var name = "Kabir";
    let city = "hyd";
    const pin = 123;
    //if block scope
  }

  //   console.log(city)  : Invalid
  console.log(name); //valid
}

function f2() {
  //This is Function block scope

  switch (
    10

    //block scope
  ) {
  }
}
