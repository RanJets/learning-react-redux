import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUsername } from "../features/Users";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="displayUsers">
      {userList.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <input
            type="text"
            placeholder="New Username..."
            onChange={(e) => {
              setNewUsername(e.target.value);
            }}
          />
          <button
            onClick={() =>
              dispatch(updateUsername({ id: user.id, username: newUsername }))
            }
          >
            Update
          </button>
          <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
