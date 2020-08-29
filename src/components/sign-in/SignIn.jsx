import React from "react";

import Link from "../link/Link";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";

import "./SignIn.css";

const SignIn = () => {
  return (
    <div id="form-sign-in">
      <div className="signin-register">
        <h3>Do not have an account?</h3>
        <Link href="/join" className="join a-form">
          Register now
        </Link>
      </div>

      <Form text="Login">
        <Input id="email" className="box" value="E-mail" />
        <Input id="password" className="box" value="Password" />
        <a
          href="#"
          className="forgot-password a-form"
          onClick={() => alert("This functionality wasn't implemented yet.")}
        >
          Forgot your password?
        </a>
        <br />
        <Button buttonText="Log in"></Button>
      </Form>
    </div>
  );
};

export default SignIn;
