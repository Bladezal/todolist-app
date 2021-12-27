import React from "react";

import LogIn from "../../components/login/login.component";
import SignUp from "../../components/signup/signup.component";

import './login-signup.styles.scss';

const LogInSignUpPage = () => (
  <div className="login-signup">
    <LogIn />
    <SignUp />
  </div>
);

export default LogInSignUpPage;