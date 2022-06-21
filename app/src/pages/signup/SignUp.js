import React from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
const SIGN_UP_URL = "/login/sign_up";

function SignUpPage() {
  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an efficient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form className="signup-form">
          <input
            className="username fields"
            placeholder="username"
            spellCheck="false"
            autoComplete="off"
            autoSave="off"
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
          <Link to="/">
            <button className="back-to-login">Back to log in</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
