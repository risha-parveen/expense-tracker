import React from "react";
import "./Navbar.css";
import { FaAlignJustify, FaUserAlt } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSignal } from "react-icons/ai";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Expense",
    path: "#",
    icon: <AiFillSignal color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Account",
    path: "/",
    icon: <FaUserAlt color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
];

const Sidebar = ({ activity }) => {
  return (
    <div className="main-sidebar" id={activity}>
      <ul className="side-menu-items">
        <li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="span-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

function Navbar() {
  const [upDown, setUpdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleUpDown = () => {
    setUpdown(!upDown);
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
      <Sidebar activity={sidebar ? "active" : "inactive"} />
    </div>
  );
}

export default Navbar;
