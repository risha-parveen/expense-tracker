import React from "react";
import "./Sidebar.css";
import { FaUserAlt } from "react-icons/fa";
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
    path: "#",
    icon: <FaUserAlt color="white" fontSize="1.5rem" />,
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
