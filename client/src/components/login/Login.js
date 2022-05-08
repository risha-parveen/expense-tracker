import { useState } from "react";
import "./Login.css";


const LoginPage = () => {
  const [form, setform] = useState(true);

  const toggleForm = () => {
    setform(!form);
  };

  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an effiecient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form className="login-form" id={form ? "open" : "close"}>
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
          <button className="back-to-login">Back to log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
