import React from "react";

import Link from "../link/Link";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";

import "./Join.css";

const Join = () => {
  return (
    <div id="form-join">
      <div className="join-register">
        <h3>Have an account?</h3>
        <Link
          href="/sign-in"
          className="join a-form"
          style={{ textDecoration: "none" }}
        >
          Sign In
        </Link>
      </div>
      <Form text="Registration">
        <Input id="name" className="box name" value="Complete Name" />
        <Input id="adress" className="box adress" value="Adress" />
        <Input id="login" className="box" value="Login" />
        <Input id="email" className="box" value="E-mail" />
        <Input id="password" className="box" value="Password" />
        <Input id="phone" className="box" value="Phone Number" />
        <Input id="category" className="box category" value="Category" />
        <Input id="bio" className="box bio" value="Bio" />
      </Form>
      <h6>
        By creating a WORLDART account you agree to our <br />
        <Link className="a-form" href="/about">
          Terms of Service
        </Link>
        &nbsp;&nbsp;&nbsp;and
        <Link className="a-form" href="about">
          &nbsp;&nbsp;&nbsp;Privace Policy
        </Link>
        .
      </h6>
      <Button buttonText="Register"></Button>
    </div>
  );
};

export default Join;
