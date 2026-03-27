import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    "kunal",
    "rakesh",
    "Amit",
    "ajay",
    "vijay",
    "rahul",
    "rohan",
    "raj",
    "aditya",
    "shubham",
  ]);
  return (
    <div className="map">
      <h1>User Information</h1>
      <ul>
        {users.map(function (element) {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
