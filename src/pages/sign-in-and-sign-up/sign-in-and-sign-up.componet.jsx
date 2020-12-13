import React from "react";
import SignIn from "../../components/sign-in/sign-in.componet";
import SingUp from "../../components/sign-up/sign-up.componet";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SingUp />
    </div>
  );
};

export default SignInAndSignUpPage;
