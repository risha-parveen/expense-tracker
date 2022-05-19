import React from "react";
import "./Sidebar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSignal } from "react-icons/ai";
import { BiHomeAlt, BiUser, BiTrendingUp } from "react-icons/bi";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <BiHomeAlt color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Expense",
    path: "#",
    icon: <BiTrendingUp color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Account",
    path: "#",
    icon: <BiUser color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
];

function Sidebar({ activity }) {
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
}

export default Sidebar;
