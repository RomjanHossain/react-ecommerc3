import React from "react";

import "./signInandSignUp.components.scss";
import SignIn from "../../components/signIn/signIn.components";
import SignUp from "../../components/signUp/signup.components";
const SignInandSignUp = () => (
  <div className="sign-in-and-sing-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInandSignUp;
