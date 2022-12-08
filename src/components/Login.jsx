import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          user.status
            ? dispatch(logout())
            : dispatch(
                login({
                  name: "Rhandell",
                  age: 20,
                  email: "dell@gmail.com",
                  status: true,
                })
              );
        }}
      >
        {user.status ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
