import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState, useContext, useEffect } from "react";
import { SidebarContext } from "../../contexts/Context.js";

function Navbar() {
  const [upDown, setUpdown] = useState(false);
  const [logoutbar, setLogoutbar] = useState(false);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  const toggleUpDown = () => {
    setUpdown(!upDown);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleLogoutbar = () => {
    setLogoutbar(!logoutbar);
    console.log(logoutbar);
  };

  useEffect(() => {
    console.log(logoutbar);
  }, [logoutbar]);

  return (
    <div className="navbar">
      <div className="main-nav">
        <div className="left-nav">
          <button
            className="expand-button"
            onClick={(e) => {
              e.preventDefault();
              toggleSidebar();
            }}
          >
            <FaAlignJustify color="white" fontSize="1.5rem" />
          </button>
          <p>Expense Tracker</p>
        </div>
        <div className="right-nav">
          <button
            className="arrow-down-button arrow-button"
            id={upDown ? "close" : "open"}
            onClick={(e) => {
              e.preventDefault();
              toggleUpDown();
              toggleLogoutbar();
            }}
          >
            <BiChevronDown color="white" fontSize="1.5rem" />
          </button>
          <button
            className="arrow-up-button arrow-button"
            id={upDown ? "open" : "close"}
            onClick={(e) => {
              e.preventDefault();
              toggleUpDown();
              toggleLogoutbar();
            }}
          >
            <BiChevronUp color="white" fontSize="1.5rem" />
          </button>
          <p className="account-username">Adithya Raj</p>
        </div>
      </div>
      <div className="logout-bar" id={logoutbar ? "openLogout" : "closeLogout"}>
        <Link to="/">
          <button className="logout-button">Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
