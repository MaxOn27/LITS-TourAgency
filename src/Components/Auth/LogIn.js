import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from "./fakeAuth";

import { email as fakeEmail, pass as fakePass } from "./const";

export default function LogIn() {
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const updatePassword = event => {
    setPassword(event.target.value);
  };

  const validateData = () => {
    return email === fakeEmail && password === fakePass;
  };

  const { from } = location.state || { from: { pathname: "/" } };

  const login = e => {
    e.preventDefault();

    // if (!validateData()){
    //   alert("fail");
    // }

    if (!validateData()) return;

    fakeAuth.authenticated(() => {
      history.replace(from);
    });
  };

  return (
    <div className="log-in">
      <form className="forms" onSubmit={login}>
        <div className="textbox">
          <i className="fa fa-envelope"></i>
          <input
            onChange={event => setEmail(event.target.value)}
            type="text"
            name="email"
            placeholder="E-mail"
            className="email"
          />
        </div>
        <div className="textbox">
          <i className="fa fa-lock"></i>
          <input
            onChange={updatePassword}
            type="password"
            name="password"
            placeholder="Password"
            className="password"
          />
        </div>
        <button type="submit" className="btn">
          {" "}
          Log in{" "}
        </button>
      </form>
    </div>
  );
}
