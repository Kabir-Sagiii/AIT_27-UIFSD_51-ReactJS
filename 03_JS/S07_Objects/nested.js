var user = {
  name: {
    title: "Mr",
    first: "Raju",
    last: "Kumar",
  },
  address: {
    city: "hyd",
    state: "TS",
  },
  gender: "male",
};

user.name.last = "patil";

console.log(user.name.last);

console.log(user.address.city);
