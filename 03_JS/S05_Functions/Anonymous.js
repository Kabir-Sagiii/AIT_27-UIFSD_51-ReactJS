var getUser = function (x, y) {
  console.log("I am Anonymous");

  return;
};

getUser();

function f1(getData) {
  console.log(getData);
  getData();
}

f1(function () {
  console.log("i am anonymous function, passed as a argument");
});
