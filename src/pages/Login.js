import React from "react";
import LoginForm from "./../components/Forms/LoginForm/index";
import {styles} from "./../common/styles/styles.scss"


const Login = () => {
  return (
    <>
      <h1 className="title">login to your account</h1>
      <LoginForm />
    </>
  );
};

export default Login;
