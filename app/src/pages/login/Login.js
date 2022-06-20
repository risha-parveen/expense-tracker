import { useState, useRef, useEffect, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
const SIGN_IN_URL = "/login/sign_in";
const SIGN_UP_URL = "/login/sign_up";

const LoginPage = () => {
  const [form, setform] = useState(true);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleForm = () => {
    setform(!form);
  };

  const handleSubmit = async (e) => {
    try {
      console.log(user, pwd);
      const data = {
        username: user,
        password: pwd,
      };
      const response = await axios.post(SIGN_IN_URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        withCredentials: true,
      });
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="overview">
        <h1>Expense Tracker</h1>
        <h4>Track your expenses in an efficient way</h4>
      </div>
      <div className="ellipse"></div>
      <div className="login-board">
        <form className="login-form">
          <input
            className="username fields"
            placeholder="username"
            spellCheck="false"
            autoComplete="off"
            autoSave="off"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            className="password fields"
            type="password"
            placeholder="password"
            spellCheck="false"
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          {/*<Link to="/home">*/}
          <button
            className="login-button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Log In
          </button>

          <Link to="/sign_up">
            <button className="create-new-account">new here? Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
