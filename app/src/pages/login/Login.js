import { useState, useRef, useEffect, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
const SIGN_IN_URL = "/login/sign_in";
const SIGN_UP_URL = "/login/sign_up";

const LoginPage = () => {
  const [form, setform] = useState(true);

  const toggleForm = () => {
    setform(!form);
  };

  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an efficient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form className="login-form" id={form ? "open" : "close"}>
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
          <Link to="/home">
            <button className="login-button">Log In</button>
          </Link>
          <button
            className="create-new-account"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            new here? Sign Up
          </button>
        </form>

        <form className="signup-form" id={form ? "close" : "open"}>
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
          <button
            className="signup-button"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            Sign Up
          </button>
          <button
            className="back-to-login"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            Back to log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
