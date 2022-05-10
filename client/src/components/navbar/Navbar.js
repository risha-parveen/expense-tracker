import React from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";

function Navbar() {
  return (
    <div className="main-nav">
      <div className="left-nav">
        <button className="expand-button">
          <FaAlignJustify color="white" fontSize="2rem" />
        </button>
      </div>
      <div className="right-nav"></div>
    </div>
  );
}

export default Navbar;
