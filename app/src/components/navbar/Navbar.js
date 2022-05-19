import React from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState, useContext } from "react";
import { HomeContext } from "../../contexts/Context.js";

function Navbar() {
  const [upDown, setUpdown] = useState(false);
  const { sidebar, setSidebar } = useContext(HomeContext);

  const toggleUpDown = () => {
    setUpdown(!upDown);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

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
            }}
          >
            <BiChevronUp color="white" fontSize="1.5rem" />
          </button>
          <p className="account-username">Adithya Raj</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
