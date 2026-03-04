var user = {
  name: "s1",
  gender: "male",
  email: "s1@gmail.com",
};

function f1() {
  console.log(user.gender);
  console.log(user.email);
}
// f1();

console.log();

function f2() {
  var { gender, email } = user;

  console.log(gender);
  console.log(email);
}
// f2();

function getUser({ name, gender }) {
  //   console.log(user.name, user.gender);
  console.log(name, gender);
  return {
    name: "aish",
    gender: "female",
  };
}

var { name, gender } = getUser({ name: "sid", gender: "male" });

console.log(name, gender);
