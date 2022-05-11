import React from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  return <div className="main-sidebar"></div>;
};

function Navbar() {
  const [upDown, setUpdown] = useState(false);

  const toggleUpDown = () => {
    setUpdown(!upDown);
  };

  return (
    <div className="navbar">
      <div className="main-nav">
        <div className="left-nav">
          <button className="expand-button">
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
      <Sidebar />
    </div>
  );
}

export default Navbar;
