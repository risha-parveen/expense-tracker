import { useState } from "react";
import "./Login.css";

export const SignUp = () => {
  return (
    <form id="signup-form">
      <input
        className="username fields"
        placeholder="username"
        spellCheck="false"
        autoComplete="off"
      />
      <input
        className="password fields"
        type="password"
        placeholder="password"
        spellCheck="false"
        autoComplete="off"
      />
      <input
        className="confirm-password fields"
        type="password"
        placeholder="confirm password"
        spellCheck="false"
        autoComplete="off"
      />
      <button className="signup-button">Sign Up</button>
      <button className="back-to-login">Back to log in</button>
    </form>
  );
};

export const Login = () => {
  return (
    <form className="login-form">
      <input
        className="username fields"
        placeholder="username"
        spellCheck="false"
        autoComplete="off"
      />
      <input
        className="password fields"
        type="password"
        placeholder="password"
        spellCheck="false"
        autoComplete="off"
      />
      <button className="login-button">Log In</button>
      <button className="create-new-account">new here? Sign Up</button>
    </form>
  );
};

const LoginPage = () => {
  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an effiecient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
