import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../store/feature/login/LoginSlice";

function LoginComponent() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login Component</h1>
      <button
        onClick={() => {
          dispatch(loginAction({ name: "guven", surname: "ayvazoğlu" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {dispatch(logoutAction())}}>Logout</button>
    </div>
  );
}

export default LoginComponent;
