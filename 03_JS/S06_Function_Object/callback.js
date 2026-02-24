function getUserData(getUserId) {
  getUserId();
}

getUserData(function () {
  console.log("-------");
});

getUserData(function f1() {});

function getAddress() {}

getUserData(getAddress);
