import { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an effiecient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form>
          <input
            className="username fields"
            placeholder="username"
            spellcheck="false"
            autocomplete="off"
          />
          <input
            className="password fields"
            type="password"
            placeholder="password"
            spellcheck="false"
            autocomplete="off"
          />
          <button className="login-button">Log In</button>
          <button className="create-new-account">new here? Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
