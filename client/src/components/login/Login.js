import { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h3>Track your expenses in an effiecient way</h3>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form>
          <input className="username" placeholder="username" />
          <input className="password" placeholder="password" />
          <button className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
