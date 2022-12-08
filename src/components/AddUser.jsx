import React, { useState } from "react";
import { addUser } from "../features/Users";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div className="addUser">
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addUser({
              id: userList[userList.length - 1].id + 1,
              name,
              username,
            })
          )
        }
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
