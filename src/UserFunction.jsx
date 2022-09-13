import React, { useState, useEffect } from "react";
import axios from "axios";

function UserFunction() {
  let myUsers = [];
  const [users, setUsers] = useState(myUsers);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Main Users We Need</h1>
      <hr />
      <div>
        {users.map((item, index) => (
          <div key={index}>
            <h3>{item.username}</h3>
            <h3>{item.website}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFunction;
