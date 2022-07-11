import React from "react";

import SignUpForm from "./../components/Forms/SignUpForm/index";
import {styles} from "./../common/styles/styles.scss"

const SignUp = () => {
  return (
    <>
      <h1 className="title">CREATE AN ACCOUNT</h1>
      <p className="text">We always keep your name and email address private.</p>
      <SignUpForm />
    </>
  );
};

export default SignUp;
