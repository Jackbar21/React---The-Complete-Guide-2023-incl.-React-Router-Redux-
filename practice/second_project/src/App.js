import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/Users/AddUser";
import Users from "./components/Users/Users";
import InvalidInputModal from "./components/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = ({ username, age }) => {
    setUsers((prevUsers) => [{ username, age }, ...prevUsers]);
  };

  const deleteUser = ({ username, age }) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.username !== username || user.age !== age)
    );
  };

  return (
    <div>
      <AddUser addUserHandler={addUser} />
      <InvalidInputModal />

      {users.length > 0 && (
        <Users users={users} deleteUserHandler={deleteUser} />
      )}
    </div>
  );
}

export default App;
